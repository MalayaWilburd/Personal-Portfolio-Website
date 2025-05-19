"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
        id: 1,
        title: "Personal Portfolio Website",
        description: "Hey, you're on here right now! Built with React and Next.js, this responsive portfolio features server-side rendering, dynamic routing, and optimized performance.",
        image: "/images/project-test-image.jpg",
        tag: ["All", "Software & Web Development"], //array that contains all tags that a certain project can be categorized as
        gitUrl: "https://github.com/MalayaWilburd",
        previewUrl: "/"
    },
     {
        id: 2,
        title: "Rental Management Database",
        description: "Designed and implemented a fully normalized MySQL database to manage properties, tenants, leases, rent payments, and expenses across multiple companies. ",
        image: "/images/project-test-image.jpg",
        tag: ["All", "Software & Web Development"],
        gitUrl: "https://github.com/MalayaWilburd",
        previewUrl: "/"
    },
     {
        id: 3,
        title: "Jungle Text Adventure",
        description: "A C++ game where players explore a jungle, collect items, and solve puzzles using typed commands.",
        image: "/images/project-test-image.jpg",
        tag: ["All", "Game Development"],
        gitUrl: "https://github.com/MalayaWilburd",
        previewUrl: "/"
    },
     {
        id: 4,
        title: "Flappy Bird Clone",
        description: "Developed a playable Flappy Bird clone in Unity using C#, featuring smooth physics-based controls, obstacle generation, and score tracking.",
        image: "/images/project-test-image.jpg",
        tag: ["All", "Game Development"],
        gitUrl: "https://github.com/MalayaWilburd",
        previewUrl: "/"
    },
];

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    //takes in value of new tag
    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section>
            <h2 className="text-center text-4xl font-bold text-white mt-4">
                My Projects
            </h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                <ProjectTag 
                    onClick={handleTagChange} 
                    name="All" 
                    isSelected={tag === "All"} 
                />

                <ProjectTag 
                    onClick={handleTagChange} 
                    name="Software & Web Development" 
                    isSelected={tag === "Software & Web Development"} 
                />

                <ProjectTag 
                    onClick={handleTagChange} 
                    name="Game Development" 
                    isSelected={tag === "Game Development"} 
                />

            </div>
            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project, index) => (
                    <motion.li 
                        key={index}
                        variants={cardVariants} 
                        initial="initial" 
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.3, delay: index * 0.4 }}
                    >
                        <ProjectCard 
                            key={project.id} 
                            title={project.title} 
                            description={project.description} 
                            imgUrl={project.image} 
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                            
                        />
                    </motion.li>
                ))}
            </ul>
        </section>
    )
}
export default ProjectsSection;