import React, { Component, useState } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";

const Work = (props) => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     deps: {},
  //     detailsModalShow: false,
  //   };
  // }

  const [deps, setDeps] = useState({})
  const [detailsModalShow, setDetailsModalShow] = useState(false)

  // render() {
    let detailsModalShowfn = (data) => {
      // this.setState({ detailsModalShow: true, deps: data });
      setDetailsModalShow(true)
      setDeps(data)
    };

    let detailsModalClose = () => setDetailsModalShow(false)//this.setState({ detailsModalShow: false });
    if (props.resumeProjects && props.resumeBasicInfo) {
      var sectionName = props.resumeBasicInfo.section_name.projects;
      var projects = props.resumeProjects.map(function (projects) {
        return (
          <div
            className="col-sm-12 col-md-6 col-lg-4"
            key={projects.title}
            style={{ cursor: "pointer" }}
          >
            <span className="portfolio-item d-block center">
              <div className="foto" onClick={() => detailsModalShowfn(projects)}>
                <div>
                  <img
                    src={projects.images[0]}
                    alt="projectImages"
                    height="300"
                    style={{marginBottom: 0, paddingBottom: 0, position: 'relative'}}
                  />
                  {/* <span className="project-date">{projects.startDate}</span>
                  <br /> */}
                  <p className="project-title-settings mt-3">
                    {projects.title}
                  </p>
                </div>
              </div>
            </span>
          </div>
        );
      });
    }

    return (
      <section id="portfolio">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="col-md-12 mx-auto">
            <div className="row mx-auto">{projects}</div>
          </div>
          <ProjectDetailsModal
            show={detailsModalShow}
            onHide={detailsModalClose}
            data={deps}
          />
        </div>
      </section>
    );
  }
// }

export default Work;
