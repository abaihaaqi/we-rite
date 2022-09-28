import Layout from "../layouts";
import "@fontsource/merriweather";
import "@fontsource/poppins";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
