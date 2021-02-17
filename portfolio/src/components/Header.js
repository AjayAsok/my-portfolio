import React from "react";
import Typical from "react-typical";

const Header = (props) => {
  let titles = [];
  
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
            </span>
          </div>
        </div>
        <div className="col-md-8">
          <div>
            <br />
            <h1 className="mb-0">
              <Typical steps={[name]} wrapper="p" />
            </h1>
            <div className="title-container">
              <HeaderTitleTypeAnimation />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}


export default Header;
