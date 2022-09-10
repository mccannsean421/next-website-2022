import Head from "next/head";
import Navigation from "../Navigation/Navigation";
import styles from "../styles/Home.module.css";

const Layout = ({ children }: any) => {
  return (
    <>
      <Head>
        <title>Cormac McCann</title>
        <meta
          name="description"
          content="Developer - Photographer - Horror Movie addict"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navigation />
        {children}
      </main>
    </>
  );
};

export default Layout;
