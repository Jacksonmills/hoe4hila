import { SignIn, SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";
import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { CornerUpRight, Heart, type Icon } from "react-feather";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const { user } = useUser();

  const { data } = api.posts.getAll.useQuery();

  const styles = {
    backgroundColor: "#002fff",
    backgroundImage: "radial-gradient(at 17% 30%, #be1879 0, transparent 73%), radial-gradient(at 14% 95%, #2563eb 0, transparent 26%), radial-gradient(at 60% 26%, #3721b6 0, transparent 37%), radial-gradient(at 33% 87%, #cc66ff 0, transparent 54%), radial-gradient(at 32% 65%, #6fabff 0, transparent 44%), radial-gradient(at 53% 68%, #a0c0ff 0, transparent 26%)",
  };

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center" style={styles}>
        <SignedOut>
          <SignIn />
        </SignedOut>
        <SignedIn>
          <div className="fixed top-0 w-screen flex items-center px-4 py-2">
            <h1 className="text-4xl font-bold text-white pointer-events-none select-none">HOE<span className="text-[#cc66ff]">4</span>HILA</h1>
            <div className="ml-auto">
              <UserButton />
            </div>
          </div>
          <div className="bg-white text-black rounded-md">
            {data?.map(({ id, content }) => {
              return (
                <div key={id} className="flex flex-col items-center justify-evenly gap-6 p-4">
                  <Image src={`https://i.redd.it/t6whec2wt6qa1.jpg`} width={446} height={594} alt="" className="rounded-t-md" />
                  <p className="text-current font-bold text-lg">{content}</p>
                  <div className="flex items-center justify-evenly gap-12">
                    <ActionButton Icon={Heart} className="text-red-500" />
                    <ActionButton Icon={CornerUpRight} className="text-blue-500" />
                  </div>
                </div>
              );
            })}
          </div>
        </SignedIn>
      </main >
    </>
  );
};

const ActionButton: React.FC<{ Icon: Icon; className: string; }> = ({ Icon, className }) => {
  return (
    <button
      className={`
        p-4 bg-white text-5xl rounded-full shadow-lg border ${className}
        hover:scale-110 transform transition-all duration-200
        active:scale-95
      `}
    >
      <Icon className="w-[1em] h-[1em]" />
    </button>
  );
};

export default Home;
