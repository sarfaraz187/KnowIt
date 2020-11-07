import React from 'react';

const NewsCard = ({ details }) => {
  // console.log({ details });
  let title = details.title;
  if(title.length > 60) {
    title = title.slice(0,60)
    title += "..."
  }
  return (
    <div className="cardLayout row mt-2 ml-3">
      <div className="col-3 p-0">
        <img className="headImg" src={details.urlToImage}></img>
      </div>
      <div className="col-8 p-0">
        <div className="cardDetails">{title}</div>
        <div className="source">{details.source.name}</div>
      </div>
    </div>
  )
}

export default NewsCard