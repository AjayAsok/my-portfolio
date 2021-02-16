import React, { Component, useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { PrimaryType } from "./data/primaryLanguage";
import { SharedData } from "./data/sharedData";
import { resolve } from "path";

// import { PrimaryType  from "./data/primaryLanguage";

async function loadData(): Promise<any> {
  let resumePath =
    `res_primaryLanguage.json`;
  return await new Promise(resolve => {
    fetch(resumePath, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
    })
      .then(res => res.json())
      .then((data: PrimaryType) => {
        resolve({ data })
      })
      .catch(err => {
        resolve({ data: String })
      })
  })
}


// async function loadSharedData(): Promise<any> {
//   let path = `portfolio_shared_data.json`
//   return await new Promise(resolve => {
//     fetch(path, {
//       method: 'GET',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json'
//       },
//     })
//       .then(res => res.json())
//       .then((data: SharedData) => {
//         resolve({ data })
//       })
//       .catch(err => {
//         resolve({ data: String })
//       })
//   })
// }

const App = () => {
  // let data: PrimaryType
  
  const [resumeData, setResumeData] = useState();
  const [sharedData, setSharedData] = useState();

  useEffect(() => {
    // setResumeData(loadData());
  //  setSharedData(loadSharedData())
  }, [])
  // loadData();

  async function loadSharedData(): Promise<any> {
    let path = `portfolio_shared_data.json`
    return await new Promise(resolve => {
      fetch(path, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
      })
        .then(res => res.json())
        .then((data: SharedData) => {
          resolve({ data })
        })
        .catch(err => {
          resolve({ data: String })
        })
    })
  }

  // constructor(props) {
  //   super();
  //   this.state = {
  //     resumeData: {},
  //     sharedData: {},
  //   };
  // }



  // componentDidMount() {
  //   loadSharedData();
  //   loadData();
  // }



  // render() {
  return (
    <div>
      {/* <Header sharedData={sharedDataObj} /> */}
      
      {/* <About
          resumeBasicInfo={this.state.resumeData.basic_info}
          sharedBasicInfo={this.state.sharedData.basic_info}
        />
        <Projects
          resumeProjects={this.state.resumeData.projects}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Skills
          sharedSkills={this.state.sharedData.skills}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Experience
          resumeExperience={this.state.resumeData.experience}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Footer sharedBasicInfo={this.state.sharedData.basic_info} /> */}
    </div>
  );
}
// }

export default App;
