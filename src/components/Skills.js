import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark dark:bg-light text-light dark:text-dark py-3 px-6 shadow-dark dark:shadow-light cursor-pointer absolute "
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
      <h2 className="font-bold text-8xl mt-64 w-full text-center dark:text-light">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark">
        <Skill name="Graphic Design" x="0vw" y="0vw" />
        <Skill name="UI/UX Design" x="-5vw" y="-10vw" />
        <Skill name="Typography" x="-2vw" y="-20vw" />
        <Skill name="Color theory" x="-18vw" y="1vw" />
        <Skill name="Layout design" x="20vw" y="-2vw" />
        <Skill name="Branding" x="16vw" y="7vw" />
        <Skill name="Illustration" x="5vw" y="16vw"/>
        <Skill name="Figma" x="-20vw" y="-15vw" />
        <Skill name="Web design" x="-30vw" y="-7vw" />
        <Skill name="Image editing" x="11vw" y="-10vw" />
        <Skill name="Logo Design" x="25vw" y="-14vw" />
        <Skill name="Digital painting" x="-8vw" y="10vw" />
        <Skill name="Motion graphics" x="-25vw" y="13vw" />
        <Skill name="Responsive design" x="30vw" y="5vw" />
      </div>
    </>
  );
};

export default Skills;
