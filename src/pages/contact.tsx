import React from "react";
import Head from "next/head";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Contact() {
  return (
    <>
    <Head>
      <title>Danmyers.net</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <>
    <header>
    <Header />
    </header>
    <main>
      <h1>Contact</h1>
    </main>
    <footer>
      <Footer />
    </footer>
    </>
  </>
  );
}