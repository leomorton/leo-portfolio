import React from "react";
import Head from "next/head";
import Main from "~/components/main";
import Content from "~/components/content";
import Title from "~/components/title";
import Link from "next/link";

function Project1() {
  return (
    <>
      <Head>
        <title>Leo Morton</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Content>
          <div className="flex">
            <Link
              className="h-6 w-6 cursor-pointer pl-1.5 font-halogenRegular text-xl text-neutral-700 outline outline-2 outline-neutral-700 hover:bg-neutral-700 hover:text-[#e0e0e0] sm:h-10 sm:w-10 sm:pl-2.5 sm:pt-1 sm:text-3xl"
              href={"/"}
            >
              &lt;
            </Link>
            <div className="grow"></div>
          </div>
          <Title title="Project 1"></Title>
        </Content>
      </Main>
    </>
  );
}

export default Project1;
