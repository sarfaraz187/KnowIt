import React from 'react';
import { connect } from 'react-redux';
import TechCard from './TechCard'
import TechFrames from './TechFrames';
import { fetchTechnology } from '../../../redux'

class TechLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentIndex: 0 }
  }

  componentDidMount() {
    const { fetchTechnology } = this.props
    fetchTechnology("category=technology&language=en");
  }

  next(event) {
    event.preventDefault();
    this.setState({ currentIndex: this.state.currentIndex + 1 });
  }

  prev(event) {
    event.preventDefault();
    this.setState({ currentIndex: this.state.currentIndex - 1 });
  }

  getNewsCard() {
    const items = this.props.techPosts.map(item => {
      return <TechCard details={item} />
    });
    return items
  }

  getTechFrames() {
    const items = this.props.techPosts.map(item => {
      return <TechFrames details={item} />
    });
    return items
  }

  render() {
    let cards = this.getNewsCard();
    let frames = this.getTechFrames();
    if (this.state.currentIndex < 0) {
      this.setState({ currentIndex: 0 });
    }
    return (
      <div className="techLayout col-8">
        <div className='row preview'>
          {cards[this.state.currentIndex]}
        </div>
        <div className='row'>
          <div className='col-1 p-0 my-1 prevIcon' onClick={event => this.prev(event)}>
            <i className="fa fa-arrow-left pt-4" aria-hidden="true"></i>
          </div>
          <div className='col-10 p-0 d-flex'>
            {frames[this.state.currentIndex]}
            {frames[this.state.currentIndex + 1]}
            {frames[this.state.currentIndex + 2]}
            {frames[this.state.currentIndex + 3]}
            {frames[this.state.currentIndex + 4]}
            {frames[this.state.currentIndex + 5]}
          </div>
          <div className='col-1 p-0 my-1 nextIcon' onClick={event => this.next(event)}>
            <i className="fa fa-arrow-right pt-4" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchTechnology: query => dispatch(fetchTechnology(query))
});

const mapStateToProps = state => ({
  techPosts: state.technology.posts
});

export default connect(mapStateToProps, mapDispatchToProps)(TechLayout)