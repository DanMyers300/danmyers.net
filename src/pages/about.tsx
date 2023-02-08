import React from "react";
import Head from "next/head";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AboutPage } from "@/components/AboutPage";
import { Clock } from "@/components/Clock";

export default function About() {
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
      <AboutPage />
    </main>
    <footer>
      <Footer />
    </footer>
    </>
  </>
  );
}