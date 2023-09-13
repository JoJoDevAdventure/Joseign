import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
const Testimonial = ({ type, title, summary, link }) => {
    return (
        <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark dark:border-light bg-light dark:bg-dark p-6 relative">
        <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:hover:bg-light" />
        <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl">{type}</span>
          <btn
            href={link}
            target="_blank"
          >
            <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light">{title}</h2>
          </btn>
          <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
        </div>
      </article>
    );
  };


const testimonials = () => {
  return (
    <>
      <Head>
        <title> JoDesign | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout>
          <AnimatedText
            text="What is said about me!"
            className="mb-16"
          />

<div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-6">
              <Testimonial
                title="Vlad Dremov"
                summary="Joseph did exactly what I've asked for in no time and even added some small tweaks to the images so the work process was flexible, the communication was fast and comfortable, great experience overall!"
                link="/home"
                type="16/02/2023"
              />
            </div>
            <div className="col-span-6">
              <Testimonial
                title="Amanda Spon"
                summary="Not only did he take and receive feedback well, he also was incredibly timely and efficient. Highly recommend."
                link="/home"
                type="14/06/2022"
              />
            </div>
            <div className="col-span-6">
              <Testimonial
                title="Robert Foley"
                summary="Joseph is really easy to work with and cooperative. highly recommend!"
                link="/home"
                type="05/06/2022"
              />
            </div>
            <div className="col-span-6">
              <Testimonial
                title="Marc Nakken"
                summary="I am very satisfied with Joseph, he thinks along well, very nice to work with"
                link="/home"
                type="16/02/2023"
              />
              </div>
              <div className="col-span-6">
              <Testimonial
                title="Jules Van Hoef"
                summary="Good work! Quick response on my messages. Going to work again wih Joseph."
                link="/home"
                type="07/08/2022"
              />
              </div>
              <div className="col-span-6">
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
