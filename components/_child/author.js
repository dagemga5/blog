import Image from "next/image";
import Link from "next/link";
export default function author() {
    return (
        <div className="author flex py-0">
            <Image src={"/images/profile.png"}
            width={60}
            height={60}
            className="rounded-full"
            ></Image>
            <div className="flex flex-col justify-center px-4">
             <Link href={"/"} legacyBehavior> 
                <a className="text-md font-bold text-gray-800 hover:text-gray-400">
                  Author Name
                </a>
             </Link>
            </div>
        </div>
    );
}
