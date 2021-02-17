import React, { Component, useEffect, useState } from "react";
import Typical from "react-typical";
import Switch from "react-switch";

const Header = (props) => {
  let titles = [];
  const [checked, setChecked] = useState(false);

  // constructor() {
  //   super();
  //   state = { checked: false };
  //   onThemeSwitchChange = onThemeSwitchChange.bind(this);
  // }
  useEffect(() => {
    setChecked({ checked });
  }, [])
  const onThemeSwitchChange = () => {
    // setChecked({ checked });
    // setTheme();
  }

  // setTheme() {
  //   var dataThemeAttribute = "data-theme";
  //   var body = document.body;
  //   var newTheme =
  //     body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
  //   body.setAttribute(dataThemeAttribute, newTheme);
  // }


  if (props.sharedData) {
    var name = props.sharedData.name;
    titles = props.sharedData.titles.map(x => [x.toUpperCase(), 2000]).flat();
    var profilepic = "images/" + props.sharedData.image;
  }

  const HeaderTitleTypeAnimation = React.memo(() => {
    return <Typical className="title-styles" steps={titles} loop={titles.length} />
  }, (props, prevProp) => true);

  return (
    <header id="home" style={{ height: window.innerHeight - 100, display: 'contents' }}>
      <div className="row aligner" style={{ height: '100%' }}>
      <div className="col-md-4 mb-5 center">
            <div className="polaroid propic">
              <span style={{ cursor: "auto" }}>
                <img style={{ verticalAlign: "middle" }}
                  height="300px" width="500px"
                  src={profilepic}
                  alt="Avatar placeholder"
                />
                {/* <Icon
                  icon={phoneIcon}
                  style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                />
                <Icon
                  icon={reactIcon}
                  style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                />
                <Icon
                  icon={vueIcon}
                  style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                /> */}
              </span>
            </div>
          </div>
        <div className="col-md-8">
          <div>
            {/* <span className="iconify header-icon" data-icon="la:laptop-code" data-inline="false"></span> */}
            <br />
            <h1 className="mb-0">
              <Typical steps={[name]} wrapper="p" />
            </h1>
            <div className="title-container">
              <HeaderTitleTypeAnimation />
            </div>
            {/* <span>This is a switch</span> */}
            {/* <Switch
              checked={checked}
              onChange={onThemeSwitchChange}
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
            /> */}
          </div>
        </div>
      </div>
    </header>
  );
}


export default Header;
