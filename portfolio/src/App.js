import React, { Component, useEffect, useState } from "react";
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

  // constructor(props) {
  //   super();
  //   this.state = {
  //     foo: "bar",
  //     resumeData: {},
  //     sharedData: {},
  //   };
  // }

  // applyPickedLanguage(pickedLanguage, oppositeLangIconId) {
  //   this.swapCurrentlyActiveLanguage(oppositeLangIconId);
  //   document.documentElement.lang = pickedLanguage;
  //   var resumePath =
  //     document.documentElement.lang === window.$primaryLanguage
  //       ? `res_primaryLanguage.json`
  //       : `res_secondaryLanguage.json`;

  // }

  // swapCurrentlyActiveLanguage(oppositeLangIconId) {
  //   var pickedLangIconId =
  //     oppositeLangIconId === window.$primaryLanguageIconId
  //       ? window.$secondaryLanguageIconId
  //       : window.$primaryLanguageIconId;
  //   document
  //     .getElementById(oppositeLangIconId)
  //     .removeAttribute("filter", "brightness(40%)");
  //   document
  //     .getElementById(pickedLangIconId)
  //     .setAttribute("filter", "brightness(40%)");
  // }

  // componentDidMount() {
  //   this.loadSharedData();
  //   // this.applyPickedLanguage(
  //   //   window.$primaryLanguage,
  //   //   window.$secondaryLanguageIconId
  //   // );
  //   this.loadResumeFromPath(`res_primaryLanguage.json`);
  // }
  const loadResumeFromPath = (path) => {
    fetch(path)
      .then((response) => {
        return response.json();
      })
      .then((myData) => {
        setResumeData(myData)
      })

  }
  // loadResumeFromPath(path) {
  //   $.ajax({
  //     url: path,
  //     dataType: "json",
  //     cache: false,
  //     success: function (data) {
  //       this.setState({ resumeData: data });
  //     }.bind(this),
  //     error: function (xhr, status, err) {
  //       alert(err);
  //     },
  //   });
  // }

  const loadSharedData = () => {
    fetch(`portfolio_shared_data.json`)
      .then((response) => {
        return response.json();
      })
      .then((myData) => {
        setSharedData(myData)
      })

  }

  // const loadSharedData = () => {
  //   $.ajax({
  //     url: `portfolio_shared_data.json`,
  //     dataType: "json",
  //     cache: false,
  //     success: function (data) {
  //       this.setState({ sharedData: data });
  //       document.title = `${sharedData.basic_info.name}`;
  //     }.bind(this),
  //     error: function (xhr, status, err) {
  //       alert(err);
  //     },
  //   });
  // }


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
