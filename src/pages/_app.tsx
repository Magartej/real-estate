import Footer from "@/layouts/components/Footer";
import TopBar from "@/layouts/components/Topbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <TopBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
