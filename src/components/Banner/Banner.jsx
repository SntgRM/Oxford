import BannerSvg from "../../assets/banner.svg";
import { GiGraduateCap } from "react-icons/gi";
import { IoTime } from "react-icons/io5";
import { PiCertificateFill } from "react-icons/pi";
import { FadeUp } from "../Hero/Hero";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section>
        <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8-space-y-6 md:space-y-0">
            {/* Banner Image */}
            <div className="flex justify-center items-center">
                <motion.img 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeInOut" }}
                src={BannerSvg} alt="" className="w-[350px] md:mac-w-[450px] object-cover drop-shadow" />
            </div>

            {/* Banner Text */}
            <div className="flex flex-col justify-center">
                <div className="text-center md:text-left space-y-12">
                    <motion.h1 
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold !leading-snug">Named by the Times Higher Education (THE) ranking, the best university in the world in 2024, for the eighth consecutive year.</motion.h1>
                    <div className="flex flex-col gap-6">
                        <motion.div
                        variants={FadeUp(0.2)}
                        initial="initial"
                        whileInView={"animate"}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl">
                            <GiGraduateCap className="text-3xl"/>
                            <p className="text-lg">Get certified with the best prestige in the world</p>
                        </motion.div>

                        <motion.div
                        variants={FadeUp(0.4)}
                        initial="initial"
                        whileInView={"animate"}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl">
                            <IoTime className="text-3xl"/>
                            <p className="text-lg">Beneficial study time for students</p>
                        </motion.div>

                        <motion.div
                        variants={FadeUp(0.6)}
                        initial="initial"
                        whileInView={"animate"}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl">
                            <PiCertificateFill className="text-3xl"/>
                            <p className="text-lg">50+ undergraduate programs and 350+ master&apos;s degree programs</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
  
}

export default Banner;