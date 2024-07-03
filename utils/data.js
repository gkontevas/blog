// Temporary Data

const users = [
    {id: 1, name: "Shad", username: "shadcn"},
    {id: 2, name: "John", username: "john_doe"},
    {id: 3, name: "Jane", username: "jane_doe"},
    {id: 4, name: "Doe", username: "doe_jane"}
]

const posts = [
    {id: 1, userId: 1, title: "Post 1", body: "This is the body of post 1"},
    {id: 2, userId: 2, title: "Post 2", body: "This is the body of post 2"},
    {id: 3, userId: 1, title: "Post 3", body: "This is the body of post 3"},
    {id: 4, userId: 3, title: "Post 4", body: "This is the body of post 4"},
]

export const getPosts = async () => {
    return posts;
}

export const getUser = async ({ userId }) => {
    const user = users.find(user => user.id === userId);
    return user;
}

export const getPost = async ({ postId }) => {
    const post = posts.find(post => post.id === postId);
    return post;
}