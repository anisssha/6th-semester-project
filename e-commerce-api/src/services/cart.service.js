const Cart = require('../models/cart.model.js');
const CartItem = require('../models/cartItem.model');
const Product = require('../models/product.model');
const cartService= require("../services/cartItem.service.js")

async function createCart(user) {
    try {
        const cart = new Cart({ user });
        const createdCart = await cart.save();
        return createdCart;

    } catch (error) {
        throw new Error(error.message);

    }
}
async function findUserCart(userId) {
    try {
        // Find the cart for the given user
        let cart = await Cart.findOne({ user: userId });

        // If cart is not found, return an empty object or handle it accordingly
        if (!cart) {
            return { message: "Cart not found" };
        }

        // Find all cart items for the cart and populate product details
        let cartItems = await CartItem.find({ cart: cart._id }).populate("product");

       
        let totalPrice = 0;
        let totalDiscountedPrice = 0;
        let totalItem = 0;

        for (let cartItem of cartItems) {
            totalPrice += cartItem.price * cartItem.quantity; // Multiply price by quantity
            totalDiscountedPrice += cartItem.discountedPrice * cartItem.quantity; // Multiply discounted price by quantity
            totalItem += cartItem.quantity;
        }
        // Update cart totals
        cart.cartItems = cartItems;
        cart.totalPrice = totalPrice;
        cart.totalItem = totalItem;
        cart.totalDiscountedPrice = totalDiscountedPrice;
        cart.discounte = totalPrice - totalDiscountedPrice; // Calculate discount

        return cart;
    } catch (error) {
        throw new Error(error.message);
    }
}


async function addCartItem(userId, req) {
    try {
         const cart = await Cart.findOne({ user: userId });
       // const cart = await cartService.findUserCart(user._id);
        const product = await Product.findById(req.productId);

        if (!cart.cartItems) {
            throw new Error("Cart not found for this user.");
        }

        if (!product) {
            throw new Error("Product not found.");
        }

        const isPresent = await CartItem.findOne({
            cart: cart._id,
            product: product._id,
            userId
        });

        if (!isPresent) {
            const cartItem = new CartItem({
                product: product._id,
                cart: cart._id,
                quantity: 1,
                userId,
                price: product.price,
                size: req.size || 'Default Size',
                discountedPrice: product.discountedPrice || product.price,
            });

            const createdCartItem = await cartItem.save();
            cart.cartItems.push(createdCartItem._id); // Push the ID of the cart item
            await cart.save();

            return "Item added to cart";
        } else {
            return "Item is already in the cart";
        }
    } catch (error) {
        throw new Error(error.message);
    }
}



module.exports = { createCart, findUserCart, addCartItem };