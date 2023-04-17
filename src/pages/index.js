import HomePage from "@/components/HomePage";
import Head from "next/head";
import { useState } from "react";

export default function Home({ darkMode }) {
  return (
    <div className={darkMode ? "dark w-full" : "w-full"}>
      <Head>
        <title>Manage Your Team's Projects</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/icon.png' />
      </Head>
      <main className=' dark:bg-black/90'>
        <HomePage darkMode={darkMode}/>
      </main>
    </div>
  );
}
