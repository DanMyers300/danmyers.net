import React from "react";
import Head from "next/head";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectsPage } from "@/components/ProjectsPage";

export default function Projects() {
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
      <ProjectsPage />
    </main>
    <footer>
      <Footer />
    </footer>
    </>
  </>
  );
}