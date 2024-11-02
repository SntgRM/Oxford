import { FaDollarSign } from "react-icons/fa";
import { GoLaw } from "react-icons/go";
import { AiFillMedicineBox } from "react-icons/ai";
import { MdEngineering } from "react-icons/md";
import { FaComputer } from "react-icons/fa6";
import { FaPaintBrush } from "react-icons/fa";
import { motion } from "framer-motion";



const ProgramsData = [
  {
    id: 1,
    title: "Business and Management",
    link: "#",
    icon: <FaDollarSign />,
    delay: 0.2,
  },
  {
    id: 2,
    title: "Law",
    link: "#",
    icon: <GoLaw />,
    delay: 0.3,
  },
  {
    id: 3,
    title: "Medicine",
    link: "#",
    icon: <AiFillMedicineBox />,
    delay: 0.4,
  },
  {
    id: 4,
    title: "Engineering",
    link: "#",
    icon: <MdEngineering />,
    delay: 0.5,
  },
  {
    id: 5,
    title: "Computer Science",
    link: "#",
    icon: <FaComputer />,
    delay: 0.6,
  },
  {
    id: 6,
    title: "History of Art",
    link: "#",
    icon: <FaPaintBrush />,
    delay: 0.7,
  },

]

const SlideLeft = (delay) => {
  return {
    initial: {
      opacity: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration:0.3,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const Programs = () => {
  return (
  <section className="bg-white">
    <div className="container pb-14 pt-16">
        <h1 className="text-4xl font-bold text-left pb-10">Our principal programs
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
        { 
          ProgramsData.map((program) => (
            <motion.div 
              key={program.id}
              variants={SlideLeft(program.delay)}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl">
              <div className="text-4xl mb-4 flex-grow flex items-center justify-center">{program.icon}</div>
              <h1 className="text-lg font-semibold text-center px-3 flex-grow">{program.title}</h1>
            </motion.div>
          ))
        }
        </div>



    </div>
  </section>
  );
  
}

export default Programs;