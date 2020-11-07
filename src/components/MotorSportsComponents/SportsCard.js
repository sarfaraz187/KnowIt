import React from 'react';
import { Card } from 'react-bootstrap';

const SportsCard = ({ details }) => {
  let bgImg = { backgroundImage: `url(${details.urlToImage})` }
  let title = details.title;
  if (title.length > 60) {
    title = title.slice(0, 60)
    title += "..."
  }
  let formatDate = details.publishedAt.split('T');
  const date = new Date(formatDate[0])
  const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' })
  const [{ value: month }, , { value: day }, , { value: year }] = dateTimeFormat.formatToParts(date)
  return (
    <div className="col-3 p-0">
      <Card className="sports_card" style={bgImg}>
        <Card.Body>
          <Card.Title className="sports_title">{title}</Card.Title>
          <Card.Text className="sports_published"><a>Formula 1</a> / {day}-{month}-{year} </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default SportsCard