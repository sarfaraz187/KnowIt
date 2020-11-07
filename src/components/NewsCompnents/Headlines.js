import React from 'react';
import { connect } from 'react-redux';
import NewsCard from './NewsCard';
import { fetchHeadlines } from '../../redux'
 
class Headlines extends React.Component {

  constructor(props) {
    super(props);
    this.state = { currentIndex : 0 }
  }

  componentDidMount() {
    localStorage.setItem('document',JSON.stringify("apiKey=7a593890565d4c628ca447a77d2d01eb"));
    const { fetchHeadlines } = this.props
    fetchHeadlines("country=us");
  }

  next(event) {
    event.preventDefault();
    this.setState({ currentIndex : this.state.currentIndex + 1 });
  }

  prev(event) {
    event.preventDefault();
    this.setState({ currentIndex : this.state.currentIndex - 1 });
  }

  getNewsCard = () => {
    // console.log(this.props.headlines)
    let items = this.props.headlines.map(item => { 
      return <NewsCard details={item} /> 
    });
    return items
  }

  render() {
    let cards = this.getNewsCard();
    if(this.state.currentIndex < 0) {
      this.setState({ currentIndex : 0 });
    }
    return (
      <div className="row headlines">
        <div className="col-1 p-0 icon" onClick={event => this.prev(event)}>
          <i className="fa fa-arrow-left mt-4 pt-2" aria-hidden="true"></i>
        </div>
        <div className="col-10 p-0 d-flex">
          {cards[this.state.currentIndex]}
          {cards[this.state.currentIndex + 1]}  
        </div>
        <div className="col-1 p-0 icon" onClick={event => this.next(event)}>
          <i className="fa fa-arrow-right mt-4 pt-2" aria-hidden="true"></i>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchHeadlines: headlines => dispatch(fetchHeadlines(headlines))
});

const mapStateToProps = state => ({
  headlines : state.headlines.posts
});

export default connect(mapStateToProps, mapDispatchToProps)(Headlines)