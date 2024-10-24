"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaGit,
  FaNodeJs,
  FaJava,
  FaAndroid,
  FaSwift,
  FaAws,
  FaPython,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiPostgresql,
  SiSpringboot,
  SiDocker,
  SiFlutter,
  SiMicrosoftsqlserver,
  SiFirebase,
  SiCplusplus,
  SiC,
  SiPrisma,
  SiOpenai,
  SiJson,
  SiVisualstudiocode,
  SiAndroidstudio,
  SiOracle,
  SiHostinger,
  SiBrevo,
} from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { fadeIn } from "@/components/animations/fadeIn";
import { Bitcoin, Cloud, Shell } from "lucide-react";

// Informations personnelles
const aboutInfo = {
  title: "À propos de moi",
  description:
    "<p>My name is Fayssal Ben Hammou, a passionate web developer based in Belgium with expertise in mobile application development. I have a deep-seated enthusiasm for technology and an unwavering commitment to continuous learning. My journey in the world of web development has been driven by a desire to create seamless user experiences, and I thrive on the challenges that come with transforming ideas into reality.</p> <p>With a background in both front-end and back-end development. My skill set includes designing intuitive user interfaces and creating efficient server-side solutions that power dynamic applications. I take pride in my ability to integrate various technologies to deliver high-quality products that meet user needs and expectations.</p> <p>In addition to my technical skills, I believe in the importance of collaboration and communication within development teams. I enjoy working in environments where ideas can flow freely, fostering innovation and creativity. As I continue to expand my knowledge and experience, I am excited to contribute to projects that challenge my abilities and push the boundaries of what is possible in both web and mobile development.</p>",
  info: [
    {
      fieldName: "Full name",
      fieldValue: "Fayssal Ben Hammou",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Belge",
    },
    {
      fieldName: "Email",
      fieldValue: "fayssal.benhammou@gmail.com",
    },
    {
      fieldName: "Languages spoken",
      fieldValue:
        "French (natif), English (professionnel), Dutch (scolaire), Amazigh (professionnel)",
    },
    {
      fieldName: "Hobbies",
      fieldValue: "Fishing, Football, Video Games, Books",
    },
    {
      fieldName: "Best Movies",
      fieldValue:
        "Shawshank Redemption, Training Day, Lord of the Rings, Inception, The Good the Bad and the Ugly",
    },
    {
      fieldName: "Reference Books",
      fieldValue:
        "Harry Potter (J.K. Rowling), Lord of the Rings (J.R.R. Tolkien)",
    },
  ],
};

// Compétences
const skillsInfo = {
  title: "Skills",
  description: "Here are some of my knowledge areas in development.",
  skillList: [
    {
      icon: <FaJava style={{ color: "white" }} />,
      name: "Java",
    },
    {
      icon: <SiNextdotjs style={{ color: "white" }} />,
      name: "Next.js",
    },
    {
      icon: <FaReact style={{ color: "white" }} />,
      name: "React.js",
    },
    {
      icon: <FaNodeJs style={{ color: "white" }} />,
      name: "Node.js",
    },
    {
      icon: <SiTypescript style={{ color: "white" }} />,
      name: "Typescript",
    },

    {
      icon: <SiSpringboot style={{ color: "white" }} />,
      name: "SpringBoot",
    },
    {
      icon: <FaJs style={{ color: "white" }} />,
      name: "JavaScript",
    },
    {
      icon: <FaHtml5 style={{ color: "white" }} />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 style={{ color: "white" }} />,
      name: "CSS3",
    },
    {
      icon: <FaPython style={{ color: "white" }} />,
      name: "Python",
    },
    {
      icon: <SiCplusplus style={{ color: "white" }} />,
      name: "C++",
    },
    {
      icon: <SiC style={{ color: "white" }} />,
      name: "C",
    },
    {
      icon: <SiJson style={{ color: "white" }} />,
      name: "JSON",
    },
    {
      icon: <Shell style={{ color: "white" }} />,
      name: "Shell",
    },
    {
      icon: <SiOpenai style={{ color: "white" }} />,
      name: "Open AI",
    },
    {
      icon: <FaAndroid style={{ color: "white" }} />,
      name: "Android",
    },
    {
      icon: <FaSwift style={{ color: "white" }} />,
      name: "Android",
    },
    {
      icon: <SiFlutter style={{ color: "white" }} />,
      name: "Flutter",
    },
    {
      icon: <SiFirebase style={{ color: "white" }} />,
      name: "Firebase",
    },
    {
      icon: <Cloud style={{ color: "white" }} />,
      name: "Cloud",
    },
    {
      icon: <FaAws style={{ color: "white" }} />,
      name: "AWS",
    },
    {
      icon: <SiMicrosoftsqlserver style={{ color: "white" }} />,
      name: "Microsoft SQL Server",
    },
    {
      icon: <SiPostgresql style={{ color: "white" }} />,
      name: "PostgreSQL",
    },
    {
      icon: <SiPrisma style={{ color: "white" }} />,
      name: "Prisma",
    },
    {
      icon: <FaGit style={{ color: "white" }} />,
      name: "Git",
    },
    {
      icon: <SiOpenai style={{ color: "white" }} />,
      name: "Open AI",
    },

    {
      icon: <SiVisualstudiocode style={{ color: "white" }} />,
      name: "VS Code",
    },
    {
      icon: <SiAndroidstudio style={{ color: "white" }} />,
      name: "Android Studio",
    },
    {
      icon: <SiHostinger style={{ color: "white" }} />,
      name: "Hostinger",
    },
    {
      icon: <SiBrevo style={{ color: "white" }} />,
      name: "Brevo",
    },
    {
      icon: <SiDocker style={{ color: "white" }} />,
      name: "Docker",
    },
    {
      icon: <Bitcoin style={{ color: "white" }} />,
      name: "Bitcoin",
    },
  ],
};

export default function Page() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="flex flex-col items-center min-h-screen p-4 space-y-10">
      <Tabs
        defaultValue="about"
        className="flex flex-col items-center w-full"
        value={activeTab}
        onValueChange={(value) => {
          setActiveTab(value);
        }}
      >
        <TabsList className="flex flex-row w-full max-w-[380px] mx-auto xl:mx-0 gap-6 mb-10">
          <TabsTrigger
            value="about"
            className={`font-mono font-bold border-none px-4 py-2 transition-colors duration-200 ${
              activeTab === "about"
                ? "bg-emerald-600 text-white"
                : "bg-white text-black"
            } hover:bg-emerald-600 hover:text-white`}
          >
            À propos de moi
          </TabsTrigger>
          <TabsTrigger
            value="skills"
            className={`font-mono font-bold border-none px-4 py-2 transition-colors duration-200 ${
              activeTab === "skills"
                ? "bg-emerald-600 text-white"
                : "bg-white text-black"
            } hover:bg-emerald-600 hover:text-white`}
          >
            Skills
          </TabsTrigger>
        </TabsList>

        <div className="w-full max-w-4xl mx-auto text-center">
          {/* Section À propos de moi */}
          <TabsContent
            value="about"
            className="w-full text-center xl:text-left pb-10"
          >
            <motion.div
              variants={fadeIn("left", 0.4)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              {/* <h3 className="text-4xl font-bold">{aboutInfo.title}</h3> */}
              <div
                className="max-w-4xl text-gray-300 mx-auto xl:mx-0 text-left"
                dangerouslySetInnerHTML={{ __html: aboutInfo.description }}
              />

              <div className="grid grid-cols-1 md:grid-cols-1 gap-y-6 max-w-4xl mx-auto xl:mx-0 mt-6">
                {aboutInfo.info.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn("left", 0.4)} // Animation pour chaque élément
                    initial="hidden"
                    whileInView="show"
                    exit="hidden"
                    className="flex justify-between py-20" // Espacement vertical
                  >
                    <span className="text-white/60 font-semibold">
                      {item.fieldName}
                    </span>
                    <span className="text-xl text-white">
                      {item.fieldValue}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </TabsContent>

          {/* Section Compétences */}
          <TabsContent value="skills" className="w-full">
            <motion.div
              variants={fadeIn("left", 0.4)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
            >
              <p className="max-w-4xl text-white/60 mx-auto xl:mx-0 mb-6">
                {skillsInfo.description}
              </p>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                {skillsInfo.skillList.map((skill, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -50 }} // Initial state: invisible and off to the left
                    whileInView={{ opacity: 1, x: 0 }} // Final state: visible and in place
                    exit={{ opacity: 0, x: 50 }} // Exit state: invisible and off to the right
                    transition={{ duration: 0.5, delay: index * 0.05 }} // Delay for staggered animation
                  >
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-full h-[100px] border border-emerald-600 rounded-xl flex justify-center items-center group">
                          <div className="text-6xl group-hover:text-accent transition-all duration-300">
                            {skill.icon}
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="capitalize">{skill.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
