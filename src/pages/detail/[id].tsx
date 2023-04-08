import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const Detail = ({ post }: any) => {
  const router = useRouter();
  const date = String(post?.created_at);
  console.log(post);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const handleDirectToProfilePage = (e: any) => {
    e.preventDefault();

    router.push(`${post.html_url}`);
  };

  return (
    <div>
      <div className="flex justify-center">
        <Image src={post.avatar_url} alt="AvatarUrl" width={150} height={150} className="shadow-xl rounded-full p-3" priority />
      </div>
      <p className="font-medium text-center text-2xl my-5">{post.name ? post.name : <span className="text-zinc-500">&quot;There is no name in this user&quot;</span>}</p>
      <p className="text-center">Number of followers : {post.followers}</p>
      <p className="text-center">Member since {date.slice(0, 10)}</p>
      <div className="flex justify-center">
        <button onClick={handleDirectToProfilePage} type={"submit"} className="bg-black text-white hover:bg-zinc-800 py-3 px-5 my-5 rounded-[8px]">
          Goto Profile
        </button>
      </div>
    </div>
  );
};

export default Detail;

export async function getStaticPaths() {
  return {
    // Only `/posts/1` and `/posts/2` are generated at build time
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    // Enable statically generating additional pages
    // For example: `/posts/3`
    fallback: true,
  };
}

export async function getStaticProps({ params }: any) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`https://api.github.com/users/${params.id}`);
  const post = await res.json();

  // Pass post data to the page via props
  return {
    props: { post },
    // Re-generate the post at most once per second
    // if a request comes in
    revalidate: 1,
  };
}
