import { gql } from "@apollo/client";
import Head from "next/head";
import Link from "next/link";
import Slider from "react-slick";
import CastCard from "../components/CastCard";
import EpisodCard from "../components/EpisodCard";
import client from "../utils/apollo";

export default function Home({ characters, episodes, locations }) {
  console.log({ characters, episodes, locations });
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Head>
        <title>Rick & Morty</title>
        <link rel="icon" href="/portal.png" />
      </Head>
      <div>
        <section
          className="hero pb-[80px] xs:pt-[80px] lg:pt-[182px]"
          style={{
            background: `rgba(25, 29, 41, 1) url('/images/home-page/background/background.png') no-repeat`,
          }}
        >
          <div className="container mx-auto px-4 md:px-0 relative">
            <h1 className=" xs:text-[35px] sm:text-[71px] md:text-[102px] lg:text-[128px] font-bold uppercase xs:text-left md:text-center text-white">
              <span className="relative">
                <img
                  src="/images/home-page/hero-elements/bubble.png"
                  className="absolute inline transform translate-x-[-46%] trsalte-y-[-31%]  xs:max-w-[50px] sm:max-w-[80px]"
                />
                the
              </span>
              <span>
                <img
                  src="/portal.png"
                  alt="rick"
                  className="inline xs:max-w-[60px] sm:max-w-[120px] md:max-w-[120px] lg:max-w-[225px]"
                />
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14D9E5] to-[#9DFE00]">
                rick
              </span>{" "}
              &nbsp;
              <span className="relative text-[#14D9E5]">
                <img
                  src="/images/home-page/hero-elements/pill.png"
                  className="absolute top-0 left-[23px]"
                />
                &
              </span>{" "}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9DFE00] to-[#14D9E5]">
                morty
              </span>
              &nbsp;
              <span>wiki</span>
            </h1>

            <div className="flex items-center justify-center xs:flex-col xs:items-start md:flex-row relative">
              <a
                className="inline-flex items-center text-white bg-gradient-to-r from-[#9DFE00] to-[#14D9E5] xs:px-[18px] sm:px-[20px] md:px-[22px] lg:px-[25px] xs:py-[12px] sm:py-[14px] md:py-[16px] lg:py-[17px] rounded-full xs:order-2 md:order-1"
                href=""
                target="_blank"
              >
                <img
                  src="/images/play.svg"
                  className="xs:max-w-[16px] sm:max-w-[18px] md:max-w-[20px] lg:max-w-[22px] xl:max-w-[24px] "
                />
                <span className="ml-[10px] xs:text-[12px] sm:text-[14px] md:text-[16] lg:text-[18px] xl:text-[20px] font-bold">
                  Watch Now
                </span>
              </a>

              <p className="xs:text-[10px] sm:text-[12] md:text-[14px] text-[#14D9E6] font-bold md:max-w-[364px] md:ml-[63px] xs:order-1 md:order-2 xs:my-[30px] md:my-0">
                Brilliant but boozy scientist Rick hijacks his fretful teenage
                grandson, Morty, for wild escapades in other worlds and
                alternate dimensions.
              </p>
              <img
                src="/images/home-page/hero-elements/Gun.png"
                className="absolute  xs:max-w-[130px] sm:max-w-[200px] md:max-w-[250px] lg:max-w-[318px] transform translate-x-[169%] translate-y-[-95%]"
              />
            </div>

            <div className="cast mt-[80px]">
              <div className="cast-header flex justify-between items-center">
                <h4 className=" font-[500] xs:text-[16px] sm:text-[18px] md:text-[20] lg:text-[22px] xl:text-[24px] text-white">
                  Meet The Cast
                </h4>
                <div className="xs:py-[7px] md:py-[8px] lg:py-[9px] xl:py-[10px] xs:px-[16px] sm:px-[18px] md:px-[20px] lg:px-[22px] xl:px-[24px] text-white border border-[#9DFE00] xs:text-[13px] sm:text-[15px] md:text-[17px] lg:text-[18px] rounded-full">
                  <Link href="/">View All</Link>
                </div>
              </div>

              <div>
                <Slider {...settings}>
                  {characters?.results?.map((cast) => (
                    <Link href={"/"} key={cast.name}>
                      <CastCard cast={cast} />
                    </Link>
                    // <div>hi</div>
                  ))}
                </Slider>
              </div>
            </div>

            <div className="episods mt-[80px]">
              <div className="mb-5">
                <h4 className=" font-[500] xs:text-[16px] sm:text-[18px] md:text-[20] lg:text-[22px] xl:text-[24px] text-white">
                  Episods
                </h4>
              </div>

              <div className="">
                <Slider {...settings}>
                  {episodes?.results?.map((episode) => (
                    <div key={episode?.episode}>
                      <EpisodCard episode={episode} />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>

            <div className="locations">
              <div className="mb-5">
                <h4 className=" font-[500] xs:text-[16px] sm:text-[18px] md:text-[20] lg:text-[22px] xl:text-[24px] text-white">
                  Locatons
                </h4>
              </div>

              <div className="">
                <Slider {...settings}>
                  {locations?.results?.map((location) => (
                    <div key={location?.episode}>
                      <EpisodCard episode={location} />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </section>
        <section className="cast"></section>
        <section className="location"></section>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const res = await client.query({
    query: gql`
      query {
        characters(page: 1, filter: {}) {
          results {
            id
            name
            image
          }
        }
        episodes(page: 1, filter: {}) {
          results {
            name
            episode
          }
        }
        locations(page: 1, filter: {}) {
          results {
            id
            name
          }
        }
      }
    `,
  });

  const { characters, episodes, locations } = await res.data;
  return {
    props: { characters, episodes, locations },
  };
}
