import { FaPencilAlt } from "react-icons/fa";
import AdmissionBg from "../../assets/admission-bg.png";
import { motion } from "framer-motion";

const bgStyle = {
    backgroundImage: `url(${AdmissionBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
}

const Admissions = () => {
  return (
        <section className="bg-[#f7f7f7]">
            <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            style={bgStyle} className="container py-24 md:py-28">
                
                <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="flex flex-col justify-center">
                    <div className="text-center space-y-4 lg:max-w-[430px] mx-auto">
                        <h1 className="text-4xl font-bold !leading-snug">
                            Since our founding, approximately 1,200,000+ students have joined us to build their future
                        </h1>
                        <p>
                            Don&apos;t hesitate to join us and be part of the Oxford family around the world
                        </p>
                        <a href="" className="primary-btn !mt-8 inline-flex items-center gap-4 group">
                            Apply for admission
                            <FaPencilAlt className="group-hover:animate-bounce group-hover:text-lg duration-200" />
                        </a>
                    </div>
               </motion.div>
            </motion.div>
            

        </section>
    );
};

export default Admissions;