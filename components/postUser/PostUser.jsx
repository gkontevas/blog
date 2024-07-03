import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const getUser = async ({ userId }) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {cache: "no-store"});

    if (!res.ok) {
        throw new Error("Something Went Wrong")
    }

    return res.json()
}

const PostUser = async ({ userId }) => {

    const user = await getUser({ userId });

    // console.log(user);

    return (
        <>
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                {/* <AvatarFallback>CN</AvatarFallback> */}
            </Avatar>
            <p className="text-white text-sm">{user.username}</p>
        </>
    )
}

export default PostUser
