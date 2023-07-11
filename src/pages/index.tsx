import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#f2f2f2] to-[#ccbfb3]">
        <div className="mt-36 flex w-4/5 max-w-[1500px] flex-col gap-12 p-3">
          <div className="relative">
            <div className="absolute left-0 top-0 h-[1vw] max-h-[12px] min-h-[4px] w-[1vw] min-w-[4px] max-w-[12px] border-b-0 border-l border-r-0 border-t border-solid border-neutral-800 bg-transparent sm:border-l-2 sm:border-t-2"></div>
            <div className="absolute right-0 top-0 h-[1vw] max-h-[12px] min-h-[4px] w-[1vw] min-w-[4px] max-w-[12px] border-b-0 border-l-0 border-r border-t border-solid border-neutral-800 bg-transparent sm:border-r-2 sm:border-t-2"></div>
            <div className="absolute bottom-0 right-0 h-[1vw] max-h-[12px] min-h-[4px] w-[1vw] min-w-[4px] max-w-[12px] border-b border-l-0 border-r border-t-0 border-solid border-neutral-800 bg-transparent sm:border-b-2 sm:border-r-2"></div>
            <div className="absolute bottom-0 left-0 h-[1vw] max-h-[12px] min-h-[4px] w-[1vw] min-w-[4px] max-w-[12px] border-b border-l border-r-0 border-t-0 border-solid border-neutral-800 bg-transparent sm:border-b-2 sm:border-l-2"></div>
            <h1 className="whitespace-nowrap px-[3vw] py-[2vw] font-halogen text-[8.5vw] font-bold leading-none text-neutral-800 tiny:text-[7vw] sm:px-[2vw] sm:py-[1vw] sm:text-[9vw] xl:text-9xl">
              Leo Morton
            </h1>
          </div>
        </div>
      </main>
    </>
  );
}
