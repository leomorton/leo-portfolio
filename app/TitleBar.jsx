import React from 'react';
import Link from 'next/link';

function TitleBar() {
    return (
        <Link href="/">
            <h1 className="my-6 text-[5vw] whitespace-nowrap lg:text-[4rem]">LEO MORTON</h1>
        </Link>
    );
}

export default TitleBar;
