import React, { Component } from "react";
import { Icon } from "@iconify/react";
import angularIcon from "@iconify/icons-logos/angular-icon";
import reactIcon from "@iconify/icons-logos/react";
import vueIcon from "@iconify/icons-logos/vue";
import phoneIcon from "@iconify/icons-logos/java";

const About = (props) => {

  if (props.sharedBasicInfo) {
    var profilepic = "images/" + props.sharedBasicInfo.image;
  }
  if (props.resumeBasicInfo) {
    var sectionName = props.resumeBasicInfo.section_name.about;
    var hello = props.resumeBasicInfo.description_header;
    var about = props.resumeBasicInfo.description;
    var proDesc = props.resumeBasicInfo.professional_desc
  }

  return (
    <section id="about">
      <div className="col-md-12">
        <h1 style={{ color: "whitesmoke" }}>
          <span>{sectionName}</span>
        </h1>
        <div className="row center mx-auto mb-5">


          <div className="col-md-6 center" id="about-me">
            <div className="col-md-10">
              <div className="card">
                <div className="card-header">
                </div>
                {/* span class="iconify" data-icon="emojione:man-light-skin-tone" data-inline="false"></span>{" "}
                    &nbsp;{" "}
                  {" "}<span
                    className="iconify"
                    data-icon="twemoji:blue-circle"
                    data-inline="false"
                  ></span>{" "}
                    &nbsp;{" "}
                  <span
                    className="iconify"
                    data-icon="twemoji:blue-circle"
                    data-inline="false"
                  ></span>{" "}
                    &nbsp;{" "}
                  <span
                    className="iconify"
                    data-icon="twemoji:blue-circle"
                    data-inline="false"
                  ></span>
                </div> */}
                <div
                  className="card-body font-trebuchet text-justify ml-3 mr-3"
                  style={{
                    height: "auto",
                    fontSize: "132%",
                    lineHeight: "200%",
                  }}
                >
                  <br />
                  <span className="wave">{hello} :) </span>
                  <br />
                  <br />
                  {about}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
