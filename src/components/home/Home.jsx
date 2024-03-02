import { Helmet } from "react-helmet";
import Categories from "../categories/Categories";
import Hero from "../hero/Hero";
import Trends from "../trends/Trends";
import Partners from "../partners/Partners";

const Home = () => {
  return (
    <>
      <section className="hero-section h-lvh w-full">
        <Hero />
      </section>
      <hr className="border-none h-[1px] bg-gray-700" />
      <section
        id="trends"
        className={`trends-section bg-[url('/bg_blur.png');] bg-no-repeat bg-cover bg-top w-full flex justify-center`}
      >
        <Trends />
      </section>
      <hr className="border-none h-[1px] bg-gray-700" />
      <section
        id="categories"
        className={`categories-section bg-[url('/bg_blur.png');] bg-no-repeat bg-cover bg-top w-full flex justify-center`}
      >
        <Categories />
      </section>
      <section
        id="partners"
        className="partners-section w-full flex justify-center bg-red-800 overflow-hidden"
      >
        <Partners />
      </section>
      <Helmet>
        <title>GG | Home</title>
        <meta name="description" content="GG Game Store Home Page" />
      </Helmet>
    </>
  );
};

export default Home;
