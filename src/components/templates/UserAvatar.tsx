import Link from "next/link";
import useAuth from "../../data/hook/useAuth";

export default function UserAvatar() {
    const { user } = useAuth()

    return (
        <Link href={"/profile"}>
            <img src={user?.imageUrl ?? '/avatar.svg'}
                alt="User avatar"
                className="h-10 w-10 rounded-full cursor-pointer bg-white ml-3"
            />
        </Link>
    )
}