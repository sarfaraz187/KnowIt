import React from 'react'
import { Accordion, Card, } from 'react-bootstrap';

const Accordian = ({ details }) => {
  console.log(details)
  let title = details.title;
  if(title.length > 60) {
    title = title.slice(0,60)
    title += "..."
  }
  console.log(title)
  let formatDate = details.publishedAt.split('T');
  const date = new Date(formatDate[0])
  const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' }) 
  const [{ value: month },,{ value: day },,{ value: year }] = dateTimeFormat .formatToParts(date ) 
  return (
    <div className="d-flex ml-3 mt-1">
      <div className="">
        <img className="accordianImg" src={details.urlToImage}></img>
      </div>
      <div className="ml-2">
        <p className="single_post_head mt-0 mb-1"><a href="#">TechCrunch</a> / {day}-{month}-{year}</p>
        <h4 className="single_post_text mb-0">{title}</h4>
      </div>
    </div>
  )
}

export default Accordian