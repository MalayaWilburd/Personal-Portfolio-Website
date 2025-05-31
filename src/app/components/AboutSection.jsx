"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

//array that displays data for each selected tab 
const TAB_DATA = [
    {
        title: "Skills", //object
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>Next.js</li>
                <li>React.js</li>
                <li>C++</li>
                <li>C#</li>
                <li>Java</li>
                <li>HTML</li>
                <li>Javascript</li>
                <li>SQL</li>
                <li>Scripting</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Arkansas Tech University (2022-2026)</li>
                <li>Associate of Applied Science Information Technology</li>
                <li>Associate of Arts General Education</li>
            </ul>
        ),
    },
    {
        Title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-2">
                <li>Certificate of Computer Proficiency</li>
                <li>Certificate of Proficiency Mathematics</li>
            </ul>
        ),
    },
];

//functional react component
const AboutSection = () => {
    const [tab, setTab] = useState("skills"); //uses the useState hook to declare a state called tab. initialized with "skills";
    //tab holds the currently selected tab and setTab is the function that updates that value
    const [isPending, startTransition] = useTransition();
    //isPending is a boolean that tells you if a transition is currently ongoing and startTransition marks updates

    //funcion that takes an id and uses startTransition to delay updating the tab state to keep the app responsive while the new content loads/renders
    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    }

    return (
        <section id="about" className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image src="/images/AboutSection-resized.jpg" width={500} height={500} alt="About Section Image" />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base lg:text-lg">
                        Hi! I’m a Computer Science student with a passion for building meaningful software that makes life better. 
                        Currently pursuing my bachelor’s at Arkansas Tech University, along with an associate's degree in IT and a minor in Mathematics, 
                        I’m deeply driven by curiosity, creativity, and the desire to make a lasting impact.
                        My goal is to launch a flight software company that blends technical excellence with real-world purpose. 
                        Along the way, I’m gaining experience through hands-on projects, internships, and constant learning. 
                        Whether it's crafting backend systems, developing apps, or designing user-focused tools, I enjoy turning ideas into working solutions.
                    </p>
                    <div className="flex flex-row mt-8">
                        <TabButton selectTab={() => handleTabChange("skills")} 
                        active={tab === "skills"}
                        > 
                        Skills 
                        </TabButton>

                        <TabButton selectTab={() => handleTabChange("education")} 
                        active={tab === "education"}
                        > 
                        Education 
                        </TabButton>

                        <TabButton selectTab={() => handleTabChange("certifications")} 
                        active={tab === "certifications"}
                        > 
                        Certifications 
                        </TabButton>
                    </div>
                        <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>
            </div>
        </section>
    );
};
////finds the tab with the id, matches the id with a tab state that is in the about section function and displays the appropriate information
export default AboutSection;