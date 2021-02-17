import React from "react";

const About = (props) => {

  if (props.resumeBasicInfo) {
    var sectionName = props.resumeBasicInfo.section_name.about;
    var hello = props.resumeBasicInfo.description_header;
    var about = props.resumeBasicInfo.description;
  }

  return (
    <section id="about">
      <div className="col-md-12">
        <h1 style={{ color: "black" }}>
          <span>{sectionName}</span>
        </h1>
        <div className="row center mx-auto mb-5">


          <div className="col-md-10 center" id="about-me">
            <div className="col-md-10">
              <div className="card">
                <div className="card-header">
                </div>
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
