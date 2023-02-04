import React from "react";
import Head from "next/head";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactPage } from "@/components/ContactPage";

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
      <ContactPage />
    </main>
    <footer>
      <Footer />
    </footer>
    </>
  </>
  );
}