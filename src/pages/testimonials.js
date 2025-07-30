import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import LightRays from "@/components/LightRays";
import TransitionEffect from "@/components/TransitionEffect";
import { testimonialsData } from "@/data/testimonials";
import Head from "next/head";

const Testimonial = ({ type, title, summary, link, imageLink }) => {
  return (
    <article className="w-full flex flex-row gap-12 md:gap-2 items-center justify-center rounded-2xl border border-solid border-dark dark:border-light bg-light dark:bg-dark p-6 relative lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 rounded-bl-none group">
      <div className="absolute top-0 -right-3 -z-10 w-[100.9%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:hover:bg-light sm:-right-2 sm:h-[102%] sm:w-ful sm:rounded-[1,5rem] rounded-bl-none md:rounded-bl-2xl" />
      <div className="relative">
        <img
          className="absolute inset-0 h-full w-full rounded-lg rounded-bl-none  md:rounded-bl-lg opacity-0 group-hover:opacity-100 bg-primary transition-all duration-500"
          src={`${imageLink}.gif`}
        />
        <img
          className="h-full w-full rounded-lg rounded-bl-none  md:rounded-bl-lg"
          src={`${imageLink}.jpg`}
        />
      </div>
      <div className="w-full flex flex-col items-start justify-between mt-2 rounded-bl-none mb-12">
        <div>
          <span className="text-primary font-medium text-xl sm:text-sm">
            {type}
          </span>
          <btn href={link} target="_blank">
            <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light">
              {title}
            </h2>
          </btn>
          <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
            {summary}
          </p>
        </div>
          <a href={link} className="absolute bottom-12 right-12 md:left-4 md:bottom-4">
            <button
              className="animated-gradient text-white text-l font-medium px-5 py-2 rounded-md hover:scale-110"
            >
              Visit Project
            </button>
          </a>
      </div>
    </article>
  );
};

const testimonials = () => {
  return (
    <>
      <Head>
        <title> Joseign | Testimonials </title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <LightRays lightSpread={10} className="opacity-80"/>
        <Layout className="relative z-10 bg-none bg-transparent">
          <AnimatedText
            text="Unmatched Client Experience!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="flex flex-col gap-y-24 md:gap-12 sm::gap-y-0">
            {testimonialsData.map((testimonial, index) => (
              <div key={index} className="col-span-6 sm:col-span-12">
                <Testimonial
                  imageLink={testimonial.img}
                  title={testimonial.title}
                  summary={testimonial.summary}
                  link={testimonial.link}
                  type={testimonial.type}
                />
              </div>
            ))}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default testimonials;
