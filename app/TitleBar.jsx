import Link from "next/link";

function TitleBar() {
    return (
        <Link href="/">
            <h1 className="my-6 mx-auto pl-[2vw] max-w-screen-xl text-[5vw] whitespace-nowrap lg:text-[4rem] border border-white">LEO MORTON</h1>
        </Link>
    );
}

export default TitleBar;
