import React from 'react';
// import { connect } from 'react-redux';

const TechCard = ({ details }) => {
  // console.log({ details });
  let sectionStyle = {
    backgroundImage: `url(${details.urlToImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    boxShadow: "0 10px 40px rgba(0,0,0,.15)"
  }

  return (
    <div className="col-12" style={sectionStyle}>
      <div className="techPostion px-4 mb-5">
        <p className="techContent"><b>{details.source.name.toUpperCase()}</b></p>
        <h4 className="techTitle mb-3 mt-1">{details.title}</h4>
        <h6 className="techContent">{details.description}</h6>
        {/* <h5 className="techContent">{details.content}</h5> */}
      </div>
    </div>
  )
}

export default TechCard