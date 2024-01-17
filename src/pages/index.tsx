import Head from "next/head";
import Main from "~/components/main";
import Content from "~/components/content";
import Title from "~/components/title";
import CornerBorders from "~/components/cornerBorders";
import QuarterSpinner from "~/components/quarterSpinner";

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
          <p className="text-center font-halogenRegular text-sm sm:text-base">
            Full WebZone Under construction...
          </p>
          <a
            className="relative cursor-pointer"
            href="/Leo_PDF_Portfolio.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CornerBorders />
            <h3 className="dashed whitespace-nowrap px-[3vw] py-[2vw] text-center font-halogenRegular text-lg font-medium leading-none text-neutral-700 sm:py-[1vw] sm:text-xl md:text-3xl">
              PDF Portfolio
            </h3>
          </a>
          <p className="text-center font-halogenRegular text-sm sm:text-base">
            Thanks for stopping by, have a productive day
          </p>
        </Content>
      </Main>
    </>
  );
}
