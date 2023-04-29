import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Nav from "co-mission/components/Nav";
import Header from "co-mission/components/Header";

export default function Home() {
    return (
        <>
            <Head>
                <title>Co-Mission</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Nav />
                <Header />
            </main>
        </>
    );
}
