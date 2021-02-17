import React, { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Work from "./components/Work";
import Skills from "./components/Skills";

const App = () => {

  const [resumeData, setResumeData] = useState({})
  const [sharedData, setSharedData] = useState({})

  useEffect(() => {
    loadResumeFromPath(`res_primaryLanguage.json`);
    loadSharedData();
  }, [])

  const loadResumeFromPath = (path) => {
    fetch(path)
      .then((response) => {
        return response.json();
      })
      .then((myData) => {
        setResumeData(myData)
      })

  }

  const loadSharedData = () => {
    fetch(`portfolio_shared_data.json`)
      .then((response) => {
        return response.json();
      })
      .then((myData) => {
        setSharedData(myData)
      })

  }


  return (
    <div>
      <Header sharedData={sharedData.basic_info} />
      <About
        resumeBasicInfo={resumeData.basic_info}
        sharedBasicInfo={sharedData.basic_info}
      />
      <Work
        resumeProjects={resumeData.work}
        resumeBasicInfo={resumeData.basic_info}
      />
      <Skills
        sharedSkills={sharedData.skills}
        resumeBasicInfo={resumeData.basic_info}
      />
      <Timeline
        resumeExperience={resumeData.experience}
        resumeBasicInfo={resumeData.basic_info}
      />
      <Footer sharedBasicInfo={sharedData.basic_info} />
    </div>
  );
}

export default App;
