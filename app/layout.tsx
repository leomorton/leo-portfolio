import "../styles/globals.css";
import TitleBar from "./TitleBar";
import localFont from "@next/font/local";

const jetbrainsMono = localFont({
    src: "../public/font/JetBrainsMono[wght].ttf",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <title>Leo Morton</title>
                <meta name="description" content="Leo Morton's Portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body className={"px-10 text-white bg-black " + jetbrainsMono.className}>
                <TitleBar></TitleBar>
                {children}
            </body>
        </html>
    );
}
