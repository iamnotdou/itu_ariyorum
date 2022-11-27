import { useState, useEffect } from "react";
import Copyright from "../components/Copyright";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/global.scss";
import { ThemeProvider } from "next-themes";
import Loading from "../components/Loading";
import { useRouter } from "next/router";
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setIsLoading(true);
    });
    router.events.on("routeChangeComplete", () => {
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      <div id="all">
        <ThemeProvider>
          <Header />
          <Component {...pageProps} />
          <Footer />
          <Copyright />
        </ThemeProvider>
      </div>
    </>
  );
}

export default MyApp;
