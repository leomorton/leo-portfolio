import next from "next";
import React from "react";
import "../styles/globals.css";
import localFont from "@next/font/local";

const jetbrainsMono = localFont({
    src: "../public/font/JetBrainsMono[wght].ttf",
});

function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={"bg-black " + jetbrainsMono.className}>{children}</body>
        </html>
    );
}

export default RootLayout;
