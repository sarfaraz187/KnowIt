import React from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { travelPosts, travelPostPrevious, travelPostNext } from '../../redux';
class TravelLayout extends React.Component {

  componentDidMount() {
    const { travelPosts } = this.props
    travelPosts();
  }

  prev() {
    const { travelPostPrevious } = this.props
    let nextBtn = this.props.rightIndex; 
    let prevBtn = this.props.leftIndex;
    travelPostPrevious({ prevBtn, nextBtn });
  }

  next() {
    const { travelPostNext } = this.props
    let nextBtn = this.props.rightIndex; 
    let prevBtn = this.props.leftIndex;
    travelPostNext({ prevBtn, nextBtn });
  }

  render() {
    let bgImg = { backgroundImage: `url(${this.props.travelBlogs[this.props.leftIndex].imgUrl})` }
    let bgImg1 = { backgroundImage: `url(${this.props.travelBlogs[this.props.rightIndex].imgUrl})` }
    return (
      <div className="row p-0 feature_layout">
        <div className="travel_box" style={bgImg}>
          <div className="travel_prev" onClick={event => this.prev(event)}>
            <i className="fa fa-arrow-left fa-2x mt-4" aria-hidden="true"></i>
          </div>
          <div className="single_post_travel">
            <div className="meta" className="mb-1">
              <a href="#" className="mr-2 single_post_gerne single_post">{this.props.travelBlogs[this.props.leftIndex].gerne}</a>
              <span>/</span>
              <a href="#" className="ml-2 single_post_date single_post">{this.props.travelBlogs[this.props.leftIndex].published_at}</a>
            </div>
            <h4>
              <a className="single_post_description single_post" href="#">{this.props.travelBlogs[this.props.leftIndex].description}</a>
            </h4>
          </div>
        </div>
        <div className="mr-4"></div>
        <div className="travel_box" style={bgImg1}>
          <div className="travel_next mt-1" onClick={event => this.next(event)}>
            <i className="fa fa-arrow-right fa-2x mt-4" aria-hidden="true"></i>
          </div>
          <div className="single_post_travel">
            <div className="meta" className="mb-1">
              <a href="#" className="mr-2 single_post_gerne single_post">{this.props.travelBlogs[this.props.rightIndex].gerne}</a>
              <span>/</span>
              <a href="#" className="ml-2 single_post_date single_post">{this.props.travelBlogs[this.props.rightIndex].published_at}</a>
            </div>
            <h4>
              <a className="single_post_description single_post" href="#">{this.props.travelBlogs[this.props.rightIndex].description}</a>
            </h4>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  travelBlogs: state.travel.posts,
  leftIndex: state.travel.leftIndex,
  rightIndex: state.travel.rightIndex
});

const mapDispatchToProps = dispatch => ({
  travelPosts: () => dispatch(travelPosts()),
  travelPostPrevious: (query) => dispatch(travelPostPrevious(query)),
  travelPostNext: (query) => dispatch(travelPostNext(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(TravelLayout);