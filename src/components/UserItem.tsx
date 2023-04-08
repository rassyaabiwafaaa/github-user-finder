import { User } from "@/types/User";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function UserItem({ user }: Props) {
  return (
    <div className="flex justify-between items-center w-full hover:bg-zinc-100 px-[20px] py-4">
      <div className="flex items-center gap-10 flex-wrap">
        <Image alt="profile" width={40} height={40} src={user?.avatar_url} className="rounded-full" />
        <p className="text-left">{user.login}</p>
      </div>
      <span className="hover:bg-black hover:text-white p-3">
        <Link href={`/detail/${user.login}`}>
          <ChevronRightIcon className="w-4 h-4" />
        </Link>
      </span>
    </div>
  );
}

interface Props {
  user: User;
}
