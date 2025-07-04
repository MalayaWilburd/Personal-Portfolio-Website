"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";

const HeroSection = () => {
    return (
        <section className="lg:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 0.5 }}
                    className="col-span-8 place-self-center text-center sm:text-left"
                    >

                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold justify-self-start">
                        <span className="bg-clip-text text-white">
                            Hello, I'm{" "}
                            </span>
                            <br></br>
                             <TypeAnimation //type
                                sequence={[
                                    "Malaya Wiburd",
                                    1000,
                                    "an Aspiring Software Engineer",
                                    1000,
                                    "a Web Developer",
                                    1000,
                                    "a Student",
                                    1000
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                />
                    </h1>
                        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                            Hello! Welcome to my personal portfolio website!
                        </p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        <a href="mailto:malayawilburd@gmail.com">
                            <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-white-500 via-gray-500 to-black-500 hover:bg-slate-200 text-white cursor-pointer">
                                Hire Me
                            </button>
                        </a>

                        <a
                            href="/malayawilburd-resume2025.pdf"
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-white-500 via-gray-500 to-black-500 hover:bg-slate-200 text-white">
                                <span className="block bg-[#121212] hover:bg-white-800 rounded-full px-5 py-2 cursor-pointer">
                                    Download Resume
                                </span>
                            </button>
                        </a>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 0.5 }}
                    className="col-span-4 place-self-center mt-4 lg:mt-0"
                    >
                    
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative">
                        <Image
                        src="/images/portfolio-self-photo-cropped-circle.png"
                        alt="self-portrait"
                        //className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        width={300}
                        height={300}
                        ></Image>
                    </div>
                </motion.div>
            </div>
        </section>
     );
};

export default HeroSection;