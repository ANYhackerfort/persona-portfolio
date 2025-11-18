import React, { useState } from "react";
import TopComponent from "./components/TopComponent";
import ProjectComponent from "./components/ProjectComponent";
import NavBar from "./components/NavBar";

const HomePage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<"home" | "projects">("home");

  return (
    <>
      <NavBar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
      />

      <div className="homepage-container">
        {activeSection === "home" && <TopComponent />}

        {activeSection === "projects" && (
          <ProjectComponent
            title="Illusion Classroom"
            description="A 3D web platform that allows students to control real physics experiments remotely in real time. Built with React, Three.js, Django Channels, and Docker Compose."
            images={["./project1.png", "./project2.png", "./project3.png"]}
            link="https://yourprojectlink.com"
          />
        )}
      </div>
    </>
  );
};

export default HomePage;
