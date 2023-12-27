import { Products, Users } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q, page) => {
    const regex = new RegExp(q, "i");
    const ITEM_PER_PAGE = process.env.ITEM_PER_PAGE

    try {
        connectToDB();
        const count = await Users.find({ username: { $regex: regex } }).count();
        const users = await Users.find({ username: { $regex: regex } }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));
        return { count, users };
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch users!");
    }
};

export const fetchUser = async (id) => {
    try {
        connectToDB();
        const user = await Users.findById(id);
        return user;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch user!");
    }
};

export const fetchProducts = async (q, page) => {
    const regex = new RegExp(q, "i");
    const ITEM_PER_PAGE = process.env.ITEM_PER_PAGE

    try {
        connectToDB();
        const count = await Products.find({ title: { $regex: regex } }).count();
        const products = await Products.find({ title: { $regex: regex } }).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));
        return { count, products };
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch products!");
    }
};

export const fetchProduct = async (id) => {
    try {
        connectToDB();
        const product = await Products.findById(id);
        return product;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch product!");
    }
};