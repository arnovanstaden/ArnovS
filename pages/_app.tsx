// Components
import Header from './../components/Header/Header';

// Global Styles
import '../styles/global.scss';
import "../assets/icons/style.css";

// Fonts
import "@fontsource/source-code-pro";
import "@fontsource/source-sans-pro";

// Fonts

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
