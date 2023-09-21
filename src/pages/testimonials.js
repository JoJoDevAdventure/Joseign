import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
const Testimonial = ({ type, title, summary, link }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark dark:border-light bg-light dark:bg-dark p-6 relative lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 rounded-bl-none">
      <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:hover:bg-light sm:-right-2 sm:h-[102%] sm:w-ful sm:rounded-[1,5rem] rounded-bl-none" />
      <div className="w-full flex flex-col items-start justify-between mt-4 rounded-bl-none">
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
        <Layout>
          <AnimatedText
            text="What is said about me!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm::gap-y-0">
            <div className="col-span-6 sm:col-span-12 rounded-bl-none">
              <Testimonial
                title="Vlad Dremov"
                summary="Joseph did exactly what I've asked for in no time and even added some small tweaks to the images so the work process was flexible, the communication was fast and comfortable, great experience overall!"
                link="/home"
                type="16/02/2023"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Testimonial
                title="Amanda Spon"
                summary="Not only did he take and receive feedback well, he also was incredibly timely and efficient. Highly recommend."
                link="/home"
                type="14/06/2022"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Testimonial
                title="Robert Foley"
                summary="Joseph is really easy to work with and cooperative. highly recommend!"
                link="/home"
                type="05/06/2022"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Testimonial
                title="Marc Nakken"
                summary="I am very satisfied with Joseph, he thinks along well, very nice to work with"
                link="/home"
                type="16/02/2023"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Testimonial
                title="Jules Van Hoef"
                summary="Good work! Quick response on my messages. Going to work again wih Joseph."
                link="/home"
                type="07/08/2022"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Testimonial
                title="Timothy S."
                summary="Joseph did great work and he did it fast! Would recommend!"
                link="/home"
                type="05/06/2021"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default testimonials;
