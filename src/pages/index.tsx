import Head from "next/head";
import Main from "~/components/main";
import Content from "~/components/content";
import Title from "~/components/title";
import CornerBorders from "~/components/cornerBorders";
import QuarterSpinner from "~/components/quarterSpinner";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Leo Morton</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Content>
          <QuarterSpinner />
          <Title title="Leo Morton"></Title>
          <Link className="relative cursor-pointer" href="/project1">
            <CornerBorders />
            <h3 className="dashed whitespace-nowrap px-[3vw] py-[2vw] font-halogenRegular text-lg font-medium leading-none text-neutral-700 sm:py-[1vw] sm:text-xl md:text-3xl">
              Project 1
            </h3>
          </Link>
          <p className="text-center font-halogenRegular text-sm sm:text-base">
            Thanks for stopping by, have a productive day
          </p>
        </Content>
      </Main>
    </>
  );
}
