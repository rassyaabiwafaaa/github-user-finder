import { SearchRes } from "@/types/SearchRes";
import React from "react";
import UserItem from "./UserItem";

export default function UserLists({ result }: Props) {
  return (
    <div className="border rounded-[8px] w-full space-y-3 py-3">
      <p className="text-center p-[20px]">
        Hasil Pencarian : <span className="font-bold">{result?.search}</span> total({result?.users.length})
      </p>
      {result?.users.map((user, index) => (
        <UserItem user={user} key={index} />
      ))}
    </div>
  );
}

interface Props {
  result?: SearchRes;
}
