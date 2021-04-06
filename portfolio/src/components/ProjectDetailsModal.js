import React from "react";
import { Modal } from "react-bootstrap";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";
const ProjectDetailsModal = (props) => {
  if (props.data) {
    const technologies = props.data.technologies;
    var title = props.data.title;
    var description = props.data.description;
    var url = props.data.url;
    var works = props.data.works;
    console.log(works)
    if (props.data.works) {
      var work = works.map((item, i) => {
        return (<li key={i} style={{ padding: "5px 5px 0 5px" }}>
          {item.title}
          {item.url ? (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-href"
            >
              <i
                className="fas fa-external-link-alt"
                style={{ marginLeft: "10px" }}
              ></i>
            </a>
          ) : null}
        </li>)
      })
    }
    if (props.data.technologies) {
      var tech = technologies.map((icons, i) => {
        return (
          <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center">
                <i className={icons.class} style={{ fontSize: "300%" }}>
                  <p className="text-center" style={{ fontSize: "30%" }}>
                    {icons.name}
                  </p>
                </i>
              </div>
            </span>
          </li>
        );
      });
    }
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-inside"
    >
      <span onClick={props.onHide} className="modal-close">
        <i className="fas fa-times fa-3x close-icon"></i>
      </span>
      <div className="col-md-12">
        <div className="col-md-10 mx-auto" style={{ paddingBottom: "50px" }}>
          <div className="slider-tab">
            <span
              className="iconify slider-iconfiy"
              data-icon="twemoji:green-circle"
              data-inline="false"
              style={{ marginLeft: "5px" }}
            ></span>{" "}
              &nbsp;{" "}
            <span
              className="iconify slider-iconfiy"
              data-icon="twemoji:green-circle"
              data-inline="false"
            ></span>{" "}
              &nbsp;{" "}
            <span
              className="iconify slider-iconfiy"
              data-icon="twemoji:green-circle"
              data-inline="false"
            ></span>
          </div>
        </div>
        <div className="col-md-10 mx-auto">
          <h3 style={{ padding: "5px 5px 0 5px" }}>
            {title}
            {url ? (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-href"
              >
                <i
                  className="fas fa-external-link-alt"
                  style={{ marginLeft: "10px" }}
                ></i>
              </a>
            ) : null}
          </h3>
          <div className="col-md-12">
            <ul>
              {work}
            </ul>
          </div>
          <p className="modal-description">{description}</p>
          <div className="col-md-12 text-center">
            <ul className="list-inline mx-auto">{tech}</ul>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ProjectDetailsModal;
