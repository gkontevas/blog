import { connectToDatabase } from '../utils/utils';
import { Post, User } from './models';

// Get all posts
export const getPosts = async () => {
    try {
        await connectToDatabase();
        const posts = await Post.find();
        return posts;
    } catch (error) {
        console.log('Error in getPosts: ', error);
        throw new Error("Failed to fetch posts", error);
    }
}

// Get a single post
export const getPost = async (id) => {
    try {
        await connectToDatabase();
        const post = await Post.findOne({ id });
        return post;
    } catch (error) {
        console.log('Error in getPost: ', error);
        throw new Error("Failed to fetch post", error);
    }
}

// get all users
export const getUsers = async () => {
    try {
        await connectToDatabase();
        const users = await User.find();
        return users;
    } catch (error) {
        console.log('Error in users: ', error);
        throw new Error("Failed to fetch users", error);
    }
}


// get a user
export const getUser = async (id) => {
    try {
        await connectToDatabase();
        const user = await User.findById({ id });
        return user;
    } catch (error) {
        console.log('Error in user: ', error);
        throw new Error("Failed to fetch user", error);
    }
}