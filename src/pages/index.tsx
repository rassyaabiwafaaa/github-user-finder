import Button from "@/components/Button";
import Form from "@/components/Form";
import Header from "@/components/Header";
import UserLists from "@/components/UserLists";
import { SearchRes } from "@/types/SearchRes";
import { User } from "@/types/User";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [result, setResult] = useState<SearchRes | null>(null);

  const onSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search) {
      setIsLoading(true);
      fetch(`https://api.github.com/search/users?q=${search}&per_page=10`)
        .then((res) => res.json())
        .then((data) => {
          const users: User[] = data.items;
          const searchRes: SearchRes = {
            search: search,
            users: users,
          };
          setResult(searchRes);
          console.log(result);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  return (
    <div className="space-y-3 py-5">
      <Head>
        <title>Github Search Users</title>
      </Head>
      <Header />
      <form className="flex place-self-center space-x-3" onSubmit={onSearchSubmit}>
        <Form value={search} onChange={(e) => setSearch(e.target.value)} />
        <Button type="submit" isLoading={isLoading} />
      </form>
      {result && <UserLists result={result} />}
    </div>
  );
}
