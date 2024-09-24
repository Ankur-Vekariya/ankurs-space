"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <table style={{ width: "100%" }}>
        <tr>
          <th>
            <li>HTML</li>
          </th>
          <th>
            <li>CSS</li>
          </th>
        </tr>
        <tr>
          <td>
            <li>JavaScript</li>
          </td>
          <td>
            <li>React Js</li>
          </td>
        </tr>
        <tr>
          <td>
            <li>Node.js</li>
          </td>
          <td>
            <li>Express Js</li>
          </td>
        </tr>
        <tr>
          <td>
            <li>Mongo DB</li>
          </td>
          <td>
            <li>Next Js</li>
          </td>
        </tr>
        <tr>
          <td>
            <li>React Native</li>
          </td>
          <td>
            <li>Expo</li>
          </td>
        </tr>
        <tr>
          <td>
            <li>Expo-router</li>
          </td>
          <td>
            <li>Docker</li>
          </td>
        </tr>
        <tr>
          <td>
            <li>Antd</li>
          </td>
          <td>
            <li>Mui</li>
          </td>
        </tr>
      </table>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      
      <table style={{ width: "100%" }}>
        <tr>
          <th>Government Engineering College</th>
          <th>Ultra higher secondary school</th>

        </tr>
        <tr>
          <th>
            <li>Rajkot</li>
          </th>
          <th>
            <li>Rajkot</li>
          </th>
        </tr>
        <tr>
          <th>
            <li>Electronics & Communication</li>
          </th>
          <th>
            <li>12th(Science)</li>
          </th>
        </tr>
        <tr>
          <th>
            <li>7.6</li>
          </th>
          <th>
            <li>59.59%</li>
          </th>
        </tr>
        <tr>
          <th>
            <li>2018-2022</li>
          </th>
          <th>
            <li>2017-2018</li>
          </th>
        </tr>
      </table>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Experienced React JS Developer with a strong grasp of a wide range
            of technologies. Developed expertise in HTML, CSS, and JavaScript
            and honed skills in Node.js, MongoDB, Express, and React.js.
            Successfully applied knowledge in a 4-month MERN stack internship,
            creating a project management system for Arth Infosoft PVT. LTD.
            Currently leveraging skills at Spyhunter It Solutions, gaining
            hands-on experience in backend services using Node.js and mobile app
            development with React Native and Expo. Eager to contribute
            innovative solutions and drive success in a dynamic development
            environment.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
