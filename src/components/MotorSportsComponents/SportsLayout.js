import React from 'react';
import { connect } from 'react-redux';
import SportsCard from './SportsCard';
import { fetchSportsNews, nextPost, previousPost } from '../../redux';

class SportsLayout extends React.Component {

  componentDidMount() {
    // console.log("Props in sports page : ",this.props);
    const { fetchSportsNews } = this.props
    fetchSportsNews("sortBy=publishedAt&language=en&q=F1");
  }

  prev() {
    const { previousPost } = this.props;
    // (this.props.currentIndex >=0 ) ? previousPost(this.props.currentIndex) : ""
  }

  next() {
    const { nextPost } = this.props
    nextPost(this.props.currentIndex);
  }

  getSportsCards() {
    let cards = this.props.sportsPosts.map(index => {
      return <SportsCard details={index}/>
    });
    return cards;
  }

  // getPostIndex() {
  //   console.log("Length :",this.props.sportsPosts.length);
  //   let idx = this.props.currentIndex;
  //   let noOfPosts = this.props.sportsPosts.length;
  //   if(idx > noOfPosts) {
  //     return 0
  //   } else {
  //     return idx
  //   }
  // }

  render() {
    let sportsCards = this.getSportsCards();
    // console.log(this.props.currentIndex)
    // let firstPost = this.getPostIndex(); 
    // let secondPost = this.getPostIndex(); 
    // let thirdPost = this.getPostIndex(); 
    // let fourthPost = this.getPostIndex(); 
    // console.log({firstPost});
    return (
      <React.Fragment>
        <div className="sports_layout mt-5 d-flex justify-content-between">
          <h3 className="sports_font">Sports News</h3>
          <div className="sports_font d-flex">
            <div className="sports_btn mr-2" onClick={event => this.prev(event)}><i className="fa fa-arrow-left mt-2" aria-hidden="true" ></i></div>
            <div className="sports_btn" onClick={event => this.next(event)}><i className="fa fa-arrow-right mt-2" aria-hidden="true"></i></div>
          </div>
        </div>
        <div className="row p-0 sports_layout">
          {sportsCards[this.props.currentIndex]}
          {sportsCards[this.props.currentIndex + 1]}
          {sportsCards[this.props.currentIndex + 2]}
          {sportsCards[this.props.currentIndex + 3]}
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  sportsPosts :  state.sports.posts,
  currentIndex : state.sports.index
});

const mapDispatchToProps = dispatch => ({
  fetchSportsNews : query => (dispatch(fetchSportsNews(query))),
  previousPost: (query) => dispatch(previousPost(query)),
  nextPost: (query) => dispatch(nextPost(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(SportsLayout);