const userService = require("../services/user.service.js");
async function updateCartItem(userId, cartItemId, cartItemData) {
    try {
        const item = await findCartItemById(cartItemId,);
        if (!item) {
            throw new Error("cart item not found :",cartItemId);
        }
        const user = await userService.findUserById(item.userId);
        if (!user) {
            throw new Error("user not found :", userId);
        }
    } catch (error) {
        
    }
}