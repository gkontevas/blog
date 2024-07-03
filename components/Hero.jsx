import Image from "next/image";
import Link from "next/link";
import meeting from "../public/meeting-1.webp";

// components
import PostCard from "./PostCard";

const Hero = () => {

    return (
        <section className="flex w-full h-full mb-20">
            <div className="flex justify-between items-start w-full">
                <div className="w-[660px] h-[480px] relative mb-20">
                    {/* Image */}
                    <Image
                        src={meeting}
                        alt="meeting"
                        fill
                        placeholder="blur"
                        className="object-contain"
                        priority
                        quality={100}
                    />
                </div>
                <div className="flex flex-col w-[600px] h-[100px] gap-6 justify-start">
                    {/* Post List */}
                    <h1 className="text-white text-3xl">New Posts</h1>
                    <PostCard />
                </div>
            </div>
        </section>
    )
}

export default Hero
