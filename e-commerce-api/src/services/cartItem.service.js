const CartItem = require("../models/cartItem.model.js");
const userService = require("../services/user.service.js");

async function updateCartItem(userId, cartItemId, cartItemData) {
    try {
        const item = await findCartItemById(cartItemId);

        const user = await userService.findUserById(item.userId);
        if (!user) {
            throw new Error("user not found :", userId);
        }
        if (user._id.toString() === userId.toString()) {
            item.quality = parseInt(cartItemData.quantity);
            item.price = parseFloat(item.quantity * parseInt(item.product));
            console.log(item.product)// Ensure price is a float
            item.discountedPrice = parseFloat(item.quantity * (item.product.discountedPrice || 0)); 
            const updateCartItem = await item.save();
            return updateCartItem;
        } else {
            throw new Error("you cant update this cart item");
        }
    } catch (error) {
        throw new Error(error.message);
    }
}
async function removeCartItem(userId, cartItemId) {
    const cartItem = await findCartItemById(cartItemId);
    const user = await userService.findUserById(userId);

    if (user._id.toString() === cartItem.userId.toString()) {
        return await CartItem.findByIdAndDelete(cartItemId);
    }
    throw new Error("you cant remove another user's item");
}
async function findCartItemById(cartItemId) {
    const cartItem = await CartItem.findById(cartItemId);

    if (cartItem) {
        return cartItem;
    } else {
        throw new Error("cartitem not found with id " + cartItemId)
    }
}
module.exports = {
    updateCartItem,
    removeCartItem,
    findCartItemById,
};
