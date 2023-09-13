import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-bold text-lg  bg-dark dark:bg-light text-light dark:text-dark py-4 px-8 shadow-dark dark:shadow-light cursor-pointer absolute lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold lg:p-6 md:p-4 xs:text-xs xs:p-2"
      whileHover={{ scale: 1.15 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{once:true}}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center dark:text-light md:text-6xl xs:text-4xl md:mt-32">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm" >
        <Skill name="Graphic Design" x="0vw" y="0vw" />
        <Skill name="UI/UX Design" x="-5vw" y="-7vw" />
        <Skill name="Typography" x="-2vw" y="-20vw" />
        <Skill name="Color theory" x="-18vw" y="3vw" />
        <Skill name="Layout design" x="22vw" y="-3vw" />
        <Skill name="Branding" x="16vw" y="10vw" />
        <Skill name="Illustration" x="5vw" y="20vw"/>
        <Skill name="Figma" x="-20vw" y="-15vw" />
        <Skill name="Web design" x="-30vw" y="-7vw" />
        <Skill name="Image editing" x="11vw" y="-12vw" />
        <Skill name="Logo Design" x="25vw" y="-18vw" />
        <Skill name="Digital painting" x="-8vw" y="10vw" />
        <Skill name="Motion graphics" x="-28vw" y="15vw" />
        <Skill name="Responsive design" x="30vw" y="5vw" />
      </div>
    </>
  );
};

export default Skills;
