import { Button } from "@/components/ui/button";
import { getData } from "@/utils/fetchData";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";

// Post User Component
import PostUser from "@/components/postUser/PostUser";
import { Suspense } from "react";

const AllBlogs = async () => {

    const posts = await getData();

    return (
        <section className="flex flex-col justify-start gap-20">
            <h1 className="text-white text-7xl">All Blog Posts</h1>
            <div className="grid grid-cols-3 gap-10">
                <Suspense fallback={<Skeleton className="h-[125px] w-[250px] rounded-xl" />}>
                    {posts.map((post) => (
                        <div key={post.id} className="flex flex-col border border-white rounded-lg p-4">
                            <div className="flex gap-10">
                                <div className="flex flex-col gap-2 items-center">
                                    {post && (
                                        <Suspense fallback={<Skeleton className="h-12 w-12 rounded-full" />}>
                                            <PostUser userId={post.userId} />
                                        </Suspense>
                                    )}
                                </div>
                                <h1 className="text-white text-2xl mb-4">{post.title}</h1>
                            </div>
                            <p className="text-white mt-20 mb-10">{post.body}</p>
                            <Button>
                                <Link href={`/blog/${post.id}`} className="text-blue-300">Read More...</Link>
                            </Button>
                        </div>
                    ))}
                </Suspense>
            </div>
        </section>
    )
}

export default AllBlogs
