import React from "react";
import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";
const projects = [
  {
    id: "1",
    title: "Autonomous Navigation of Drone through a Narrow Path",
    description:
      "Design and implementation of an autonomous drone capable of navigating efficiently through a provided narrow path, ensuring collision-free movement using advanced sensing and control techniques.",
    instructions: [
      "A completely narrow gap of about 1.5m will be provided.",
      "The drone must reach the end of the path and return to its initial position without colliding with the walls.",
      "The drone must return to the initial position within a specified amount of time.",
      "Students are permitted to use a GPS module and other essential sensors that meet the requirements.",
      "Points will be deducted for every collision with the wall."
    ]
  },
  {
    id: "2",
    title: "Autonomous Legged Robot for Climbing Stairs",
    description:
      "This project focuses on designing and developing an autonomous legged robot capable of climbing up to 20 steps under remote control. The robot will combine manual operation through a remote control and automated movement for precise step climbing.",
    instructions: [
      "The robot should be able to climb up to 20 stairs continuously without human intervention.",
      "Students can use sensors to identify step height and distance.",
      "The robot must have the ability to descend the stairs as well.",
      "Points will be awarded based on speed, accuracy, and stability during the climb."
    ]
  },
  {
    id: "3",
    title: "Movement of Mobile Robot in Foggy Environments Without Collision",
    description:
      "Design a mobile robot that could navigate safely through foggy environments, ensuring collision-free movement using advanced sensing and control techniques. This is a simulation of real-world low-visibility conditions to evaluate the robot’s ability to navigate through such harsh conditions.",
    instructions: [
      "The robot must use sensors to detect obstacles in low-visibility conditions.",
      "A foggy environment will be simulated using smoke or artificial fog.",
      "The robot must complete the designated path without collisions.",
      "Points will be deducted for each collision or deviation from the path."
    ]
  },
  {
    id: "4",
    title: "Crop Surveillance Using Mobile Robot",
    description:
      "Design and realize a mobile robot to perform crop surveillance in agricultural fields. The robot must autonomously navigate in a crop field to gather data, and identify key parameters such as plant health, pest information, soil conditions, and crop maturity.",
    instructions: [
      "The robot must cover the entire crop field without missing any sections.",
      "Use sensors or cameras to collect data on plant health and soil conditions.",
      "Data should be processed and displayed in a user-friendly format.",
      "Points will be awarded for accuracy, efficiency, and data visualization."
    ]
  },
  {
    id: "5",
    title: "Wildlife-Friendly Animal Avoidance System",
    description:
      "Design and implementation of a system equipped to prevent domestic animals (specifically monkeys) from entering designated areas (agricultural land, residential areas, schools, etc.).",
    instructions: [
      "The system must identify animals using sensors or cameras.",
      "It should use non-harmful deterrence methods (like sound or light) to prevent animals from entering.",
      "The system should be energy-efficient and operable in various weather conditions.",
      "Points will be awarded based on effectiveness and innovation in deterrence methods."
    ]
  },
  {
    id: "6",
    title: "Identification of Crop and Crop Health Using Drone",
    description:
      "Design and execution of an autonomous drone capable of providing real-time insights to farmers, helping them optimize resources and improve crop yields.",
    instructions: [
      "The drone must fly over a designated crop area and collect data.",
      "It should identify different types of crops and assess their health.",
      "The data should be presented in an actionable format for farmers.",
      "Points will be awarded for accuracy, efficiency, and innovation in data collection."
    ]
  },
  {
    id: "7",
    title: "Innovative Power Generation Techniques",
    description:
      "This project focuses on exploring and developing new methods for generating power using innovative and sustainable technologies. Students will research, design, and prototype systems that utilize unconventional energy sources like piezoelectric materials, thermoelectric devices, or wind and solar hybrid systems.",
    instructions: [
      "Identify an unconventional energy source and design a prototype to harness it.",
      "The system should be scalable for real-world applications.",
      "Demonstrate the efficiency and reliability of the power generation method.",
      "Points will be awarded for innovation and practical application."
    ]
  },
  {
    id: "8",
    title: "AI Security Surveillance",
    description:
      "This project focuses on creating an AI-powered video surveillance system capable of detecting gestures and abnormal behaviors for enhanced domestic security.",
    instructions: [
      "Use AI algorithms to analyze real-time video footage.",
      "The system should detect predefined gestures and alert authorities upon detection.",
      "Abnormal behavior detection should include theft or vandalism scenarios.",
      "Points will be awarded for detection accuracy and system efficiency."
    ]
  },
  {
    id: "9",
    title: "Identification of Contents Made by Deepfake Technology",
    description:
      "Design and execution of an algorithm that can identify content generated or manipulated using deepfake technology. Deepfake technology uses AI and other machine learning algorithms to create hyper-realistic content that is perceived as real.",
    instructions: [
      "Develop an algorithm to analyze video and image content for signs of deepfake.",
      "The system should provide a confidence score for authenticity.",
      "Test the algorithm on a dataset containing both real and deepfake content.",
      "Points will be awarded for detection accuracy and real-time analysis capability."
    ]
  }
];

const ProblemStatementDetails = () => {
  const { id } = useParams();
  const project = projects.find((proj) => proj.id === id);
  return (
    <div>
       <div
        className="w-full flex-col p-4 mb-3 md:mt-0 min-h-screen flex justify-center items-center gap-[20px]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/assets/expo.jpg')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
      <Header />
      <div className="flex justify-center items-center h-full mt-[100px] md:mt-[30px] lg:mt-0 md:h-[100vh]">
        {project ? (
          <div className="w-11/12 max-w-4xl p-6 rounded-lg gap-[20px] backdrop-blur-lg flex flex-col bg-white/10 border border-white/20 shadow-lg text-white mb-8">
            <h2 className="text-cyan-500 text-[30px]">{project.title}</h2>
            <p className={`text-[16px]`}>{project.description}</p>
            {project.instructions && (
              <>
                <h3 className="text-[20px] mt-4">Instructions</h3>
                <ul className="list-disc list-inside">
                  {project.instructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        ) : (
          <div className="text-white">Project not found</div>
        )}
      </div>
    </div>
    </div>
  );
};

export default ProblemStatementDetails;
