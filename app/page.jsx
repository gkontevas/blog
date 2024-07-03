// import { getData } from "@/utils/fetchData";
import { getPosts } from "@/utils/mongodata";

import Link from "next/link";

// components
import Hero from "@/components/Hero";

const Home = async () => {

  // const posts = await getData();
  // console.log(posts);

  // Using MongoDB
  const posts = await getPosts();
  console.log(posts);

  // // Use slice to get only the featured 5 posts
  // const featuredPosts = posts.slice(0, 3);

  return (
      <section className="flex flex-col mb-40">
        <Hero />
        <h1 className="text-white text-5xl mb-10">Featured Posts</h1>
        <div className="grid grid-cols-3 gap-10">
          {posts.map((post) => (
            <div key={post.id} className="flex flex-col justify-between border border-white rounded-lg p-8 w-[500px] h-[700px]">
              <h1 className="text-white text-4xl">{post.title}</h1>
              <p className="text-white mt-20 mb-10">{post.body}</p>
              <Link href={`/blog/${post.id}`} className="text-blue-300">Read More...</Link>
            </div>
          ))}
        </div>
      </section>
  );
}

export default Home



