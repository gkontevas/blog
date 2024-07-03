const getPost = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

    if (!res.ok) {
        throw new Error('Something went wrong');
    }
    return res.json();
}

const BlogPost = async ({ params }) => {

    // console.log(params);

    const { id } = params;

    const post = await getPost(id);

    return (
        <section className="gap-10">
            <h1 className="text-white text-6xl mb-10">{post.title}</h1>
            <p className="text-white/40 text-2xl">{post.body}</p>
        </section>
    )
}

export default BlogPost
