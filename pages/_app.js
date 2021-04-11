import "../styles/globals.css";
import Head from "next/head";
import { GoogleFonts } from "next-google-fonts";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" />
      <Head>
        <title>Super Bowl HF timeline</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;