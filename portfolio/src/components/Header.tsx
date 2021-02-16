import React, { Component } from "react";
import { useEffect, useState } from "react";
import Typical from "react-typical";
import Switch from "react-switch";

import { SharedData } from "../data/sharedData";

const setTheme = (() => {
  var dataThemeAttribute = "data-theme";
  var body = document.body;
  var newTheme =
    body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
  body.setAttribute(dataThemeAttribute, newTheme);
})

// const onThemeSwitchChange = ((checked) => {
//   setChecked(checked);
//   var dataThemeAttribute = "data-theme";
//   var body = document.body;
//   var newTheme =
//     body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
//   body.setAttribute(dataThemeAttribute, newTheme);
// })
type Props = {
  props:SharedData;
}
const Header: React.FC<Props> = ({props}) => {
  console.log("inside")
  console.log(props)
  let titles: Array<string>
  let [checked, setChecked] = useState(true)
  useEffect(() => {
    setChecked(checked);
    // setTheme();
  }, [checked])

  // onThemeSwitchChange(checked) {
  //   this.setState({ checked });
  //   var dataThemeAttribute = "data-theme";
  //   var body = document.body;
  //   var newTheme =
  //     body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
  //   body.setAttribute(dataThemeAttribute, newTheme);
  // }

  // setTheme = (() => {
  //   var dataThemeAttribute = "data-theme";
  //   var body = document.body;
  //   var newTheme =
  //     body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
  //   body.setAttribute(dataThemeAttribute, newTheme);
  // })

  // render() {
  let name;
  if (props.basicInfo) {
    name = props.basicInfo.name;
    props.basicInfo.titles.map(x => [titles.push(x.toUpperCase())]);
  }

  const HeaderTitleTypeAnimation = React.memo(() => {
    return <Typical className="title-styles" steps={titles} loop={Infinity} />
  }, (props, prevProp) => true);

  return (
    <header id="home" style={{ height: window.innerHeight - 140, display: 'block' }}>
      <div className="row aligner" style={{ height: '100%' }}>
        <div className="col-md-12">
          <div>
            <span className="iconify header-icon" data-icon="la:laptop-code" data-inline="false"></span>
            <br />
            <h1 className="mb-0">
              <Typical steps={[name]} wrapper="p" />
            </h1>
            <div className="title-container">
              <HeaderTitleTypeAnimation />
            </div>
            <Switch
              checked={checked}
              onChange={
                () => {
                  setChecked(checked)
                }
              }
              offColor="#baaa80"
              onColor="#353535"
              className="react-switch mx-auto"
              width={90}
              height={40}
              uncheckedIcon={
                <span
                  className="iconify"
                  data-icon="twemoji:owl"
                  data-inline="false"
                  style={{
                    display: "block",
                    height: "100%",
                    fontSize: 25,
                    textAlign: "end",
                    marginLeft: "20px",
                    color: "#353239",
                  }}
                ></span>
              }
              checkedIcon={
                <span
                  className="iconify"
                  data-icon="noto-v1:sun-with-face"
                  data-inline="false"
                  style={{
                    display: "block",
                    height: "100%",
                    fontSize: 25,
                    textAlign: "end",
                    marginLeft: "10px",
                    color: "#353239",
                  }}
                ></span>
              }
              id="icon-switch"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
// }

export default Header;
