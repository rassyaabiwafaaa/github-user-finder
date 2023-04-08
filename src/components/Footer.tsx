import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="text-center p-4 border-t">
      Created with love{" "}
      <span className="hover:underline transition-transform ease-in-out">
        <Link href={"https://rassyaabiwafa.netlify.app"}>rassyaabiwafa</Link>
      </span>
    </div>
  );
}
