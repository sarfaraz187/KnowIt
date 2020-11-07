import React from 'react';
import { connect } from 'react-redux';
import { fetchTechCrunch } from '../../../redux';
import Accordian from './Accordian';
import { Spinner } from 'react-bootstrap';

class RelatedNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeClasses: [true, false, false] };
    this.addActiveClass = this.addActiveClass.bind(this);
  }

  componentDidMount() {
    this.props.fetchTechCrunch("domains=techcrunch.com&sortBy=publishedAt&language=en&q=startups");
  }

  getCards() {
    let posts = this.props.techCrunchPosts.map(item => {
      return <Accordian details={item} />
    });
    return posts
  }

  addActiveClass(arr) {
    const activeClasses = arr.flat();
    if (activeClasses[1]) {
      this.props.fetchTechCrunch("domains=techcrunch.com&sortBy=publishedAt&language=en&q=bitcoin");
    } else if (activeClasses[2]) {
      this.props.fetchTechCrunch("domains=techcrunch.com&sortBy=publishedAt&language=en&q=cars");
    } else {
      this.props.fetchTechCrunch("domains=techcrunch.com&sortBy=publishedAt&language=en&q=startups");
    }
    this.setState({ activeClasses });
  }
  render() {
    const activeClasses = this.state.activeClasses.slice();
    let cards = this.getCards();
    // console.log({ cards });
    if (cards.length > 0) {
      return (
        <div className="page col-4 p-0">
          <div className="d-flex ml-2 justify-content-between">
            <a href="#" className={activeClasses[0] ? "active relBtn ml-2" : "inactive relBtn ml-2"} onClick={() => this.addActiveClass([true, false, false])}>Startups</a>
            <a href="#" className={activeClasses[1] ? "active relBtn ml-2" : "inactive relBtn ml-2"} onClick={() => this.addActiveClass([false, true, false])}>Bitcoin</a>
            <a href="#" className={activeClasses[2] ? "active relBtn ml-2" : "inactive relBtn ml-2"} onClick={() => this.addActiveClass([false, false, true])}>Cars</a>
          </div>
          <div className="mt-3">
            {cards[0]}
            <hr className="ml-3 mt-3"></hr>
            {cards[1]}
            <hr className="ml-3 mt-3"></hr>
            {cards[2]}
            <hr className="ml-3 mt-3"></hr>
            {cards[3]}
            <hr className="ml-3 mt-3"></hr>
            {cards[4]}
          </div>
        </div>
      )
    } else {
      return (
        <div className="col-4 spinner">
          <Spinner animation="border" variant="primary" />
        </div>
      )
    }
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchTechCrunch: query => dispatch(fetchTechCrunch(query))
});

const mapStateToProps = state => ({
  techCrunchPosts: state.techCrunch.posts
});

export default connect(mapStateToProps, mapDispatchToProps)(RelatedNews)