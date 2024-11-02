import { FaYoutube, FaTwitter ,FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
import { motion } from "framer-motion"

const Footer = () => {
  return (
    <footer className="py-28 bg-#f7f7f7]">
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
         className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
                {/* First section */}
                <div className="space-y-4 max-w-[300px]">
                    <h1 className="text-2xl font-bold">University of Oxford</h1>
                    <p className="text-dark2">
                        The University of Oxford, founded in the 12th century, is one of the oldest and most prestigious institutions in the world.
                        Located in England, it offers high-quality education and has trained prominent leaders across various disciplines.
                        With over 26,000 students and 39 independent colleges, it provides a diverse and collaborative academic environment.
                        Its rich history and focus on innovative research make it a global reference in higher education.
                    </p>
                </div>
                {/* Second section */}
                <div className="grid grid-cols-2 gap-10">
                    <div className="space-y-4">
                        <h1 className="text-2xl font-bold">
                            Learn more about
                        </h1>
                        <div className="text-dark2">
                            <ul className="space-y-2 text-lg">
                                <li className="cursor-pointer hover:text-secondary duration-200">
                                    PPE
                                </li>
                                <li className="cursor-pointer hover:text-secondary duration-200">
                                    Law
                                </li>
                                <li className="cursor-pointer hover:text-secondary duration-200">
                                    Medicine
                                </li>
                                <li className="cursor-pointer hover:text-secondary duration-200">
                                    Engineering
                                </li>
                                <li className="cursor-pointer hover:text-secondary duration-200">
                                    Computer Science
                                </li>
                                <li className="cursor-pointer hover:text-secondary duration-200">
                                    History of Art
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-2xl font-bold">
                            Links
                        </h1>
                        <div className="text-dark2">
                            <ul className="space-y-2 text-lg">
                                <li className="cursor-pointer hover:text-secondary duration-200">
                                    Home
                                </li>
                                <li className="cursor-pointer hover:text-secondary duration-200">
                                    Admissions
                                </li>
                                <li className="cursor-pointer hover:text-secondary duration-200">
                                    Research
                                </li>
                                <li className="cursor-pointer hover:text-secondary duration-200">
                                    News & Events
                                </li>
                                <li className="cursor-pointer hover:text-secondary duration-200">
                                    About
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
                {/* Third section */}
                <div className="space-y-4 max-w-[300px]">
                    <h1 className="text-2xl font-bold">
                        Doubts and questions
                    </h1>
                    <div className="flex items-center">
                        <input type="text" placeholder="Enter your email" className="p-3 rounded-s-xl bg-white w-full py-4 focus:ring-0 focus:outline-none placeholder:text-dark2"/>
                        <button className="bg-primary text-white font-semibold py-4 px-6 rounded-e-xl">
                            Send
                        </button>
                    </div>
                    {/* Social Icons */}
                    <div className="flex space-x-6 py-3">
                        <a href="https://www.youtube.com/oxford">
                            <FaYoutube className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
                        </a>
                        <a href="https://x.com/uniofoxford">
                            <FaTwitter className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
                        </a>
                        <a href="https://www.facebook.com/the.university.of.oxford">
                            <FaFacebook className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
                        </a>
                        <a href="https://www.instagram.com/oxford_uni">
                            <FaInstagram className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
                        </a>
                        <a href="https://www.linkedin.com/company/4477?trk=prof-exp-company-name">
                            <FaLinkedin className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    </footer>
  )
}

export default Footer