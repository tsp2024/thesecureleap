"use client";
import React from "react";

import Image from "next/image";
import { StickyScroll } from "./StickyScroll";

const content = [
  {
    title: "IVY League",
    description:
      "Getting in the prestigious IVY League colleges is a dream for any student. But the path of getting into these universities is arduous. With the acceptance rates like 4-7 %, there is a need to invest time in preparation of college applications. The first step in this direction is to identify the program which you are passionate about. It is just not just about looking good on your application. It is critical to take the right subjects in current studies to approach for a particular program in IVY. The co-scholastic, co-curricular and extra-curricular activities need to be planned accordingly. These activities not only broaden one’s perspectives but also help develop sensitivity about the issues which reflect sincerity in one’s application. The common mistake students can make is to sell themselves too hard in this process. Also, looking like a candidate with quitting attitude can be an issue.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/Article1.jpg"
          width={500}
          height={500}
          className="h-full w-full object-cover"
          alt="Photo"
        />
      </div>
    ),
  },
  {
    title: "Exciting world of Geo-Sciences and Earth Sciences",
    description:
      "Also referred to as prominent discourse of 21st century, Geo Sciences is one of the exciting sectors being studied extensively in current times. It is further classified in Earth and Atmospheric Sciences, Geophysical Sciences, Geochemical Sciences and more. Various undergrad, grad and master’s in engineering programs are available to the students who have keen interest in shaping the future of this planet. On one hand there is a physical aspect of earth like its water bodies, soil structures, rocks and on the other hand it can also cover the chemical composition part of earth and its resources in details. Earth Sciences is fascinating for students who want to understand how various spheres of earth interact. Earth Science students are great assets to the energy companies, engineering firms, researchers, government agencies, universities, and global developmental agencies.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/Article2.jpg"
          width={500}
          height={500}
          className="h-full w-full object-cover"
          alt="Photo"
        />
      </div>
    ),
  },
  {
    title: "Use Case",
    description:
      "Soman a son of a government student in India brightened our day with his smile. But soon a layer of confusion peeped at us through those cracks. He had taken a break after his senior high school year which was completed during the pandemic. He used to see himself as Geo-scientist in one meeting and a Data Scientist in another one. However, as he embarked on the journey to pursue an undergrad program in US with us, he could see things clearly. The whole one-year long process was fun and an experience that he could cherish through out his life. He not only got an admission but got a decent financial aid to meet his program fees. He also became the part of our life after taking admission in one of the leading universities in the US. He is about to complete his about to enter his second year in Computer Science and deciding on his major-minor road map.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/Article3.jpg"
          width={500}
          height={500}
          className="h-full w-full object-cover"
          alt="Photo"
        />
      </div>
    ),
  },
  {
    title: "Healthcare Engineering",
    description:
      "The costs of healthcare are going north and so is the ageing population of the world. The advances in miniaturization of the designs of medical devices along with the usage of new materials to produce them open new opportunities in this sector. Additionally, the usage of technology from surgical operations to maintaining sanitization is advancing. This technological advancement is resulting in the innovation of new machines which are installed and maintained to save the precious lives of the patients. A Bio-medical engineer can not only contribute to these fields but also help design next generation of artificial joints, organ augmentation and replacements in a market that is steadily growing as our need increases. Students with a flair of Biology and Technology can make meaningful careers through this education. Do you see yourself contributing to this field?",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/Article4.jpg"
          width={500}
          height={500}
          className="h-full w-full object-cover"
          alt="Photo"
        />
      </div>
    ),
  },
  {
    title: "The role of writing skills",
    description:
      "Students from various countries bring in their own skills to the universities they get admissions into. They learn many new subjects according to their major-minor combinations they pursue in various universities. However, writing skill is predominantly required across the disciplines if one aims to make a mark in the universities. It is important to practice and refine these skills before joining the university. Logically structured writing help students in improving their learning efficiency and consequently save the precious time in the universities to take up projects or additional subjects as the need be. It also reduces the stress and fatigue of the students by helping them get out the fear which the quantum of studies induces. Many students often undermine this skill as they feel that they can access anything from web. But web can just support you with information the analysis, synthesis and representation of your original thoughts is for you to work-upon.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/Article5.jpg"
          width={500}
          height={500}
          className="h-full w-full object-cover"
          alt="Photo"
        />
      </div>
    ),
  },
  {
    title: "New age MBA",
    description:
      "The challenges and expectations of a 21st century MBA grad are different from his predecessors. Statistics based decision making and critical thinking based on business analytics are critical to learn during an MBA program. Such a professional is sought across most of the sectors. The rampant usage of technologies in operations management, decision support system along with business intelligence have necessitated this demand. Owing to these specialized skills, the new age MBA grad also commands higher salaries over the traditional MBA grad. After all engineering can be better utilized with new age MBA than a traditional MBA program.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/Article1.jpg"
          width={500}
          height={500}
          className="h-full w-full object-cover"
          alt="Photo"
        />
      </div>
    ),
  },
];
export function StickyScrollReveal() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
