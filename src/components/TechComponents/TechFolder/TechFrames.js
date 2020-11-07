import React from 'react'

const TechFrames = ({details}) => {
  let frameStyle = {
    backgroundImage: `url(${details.urlToImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "125px",
    height: "75px"
  }
  return (
    <div className="col-2 frameStyle mt-1 p-0" style={frameStyle}></div>
  )
}

export default TechFrames