import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <nav className="flex items-center justify-center bg-transparent absolute w-full xs:pt-[30px] pt-[58px]">
        <img
          src="/images/Logo.png"
          className="xs:max-w-[130px] sm:max-w-[170px] md:max-w-[210px] lg:max-w-[227px]"
        />
      </nav>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
