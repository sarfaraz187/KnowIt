import React from 'react';
import { connect } from 'react-redux';
import { covidData } from '../../redux/index';

class CovidTable extends React.Component {

  componentDidMount() {
    const { covidData } = this.props
    covidData()
  }

  render() {
    console.log(this.props.globalData);
    console.log(this.props.countryData);
    return (
      <div className="table-responsive">
        Test
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  globalData : state.covidStats.global,
  countryData : state.covidStats.posts
});

const mapDispatchToProps = dispatch => ({
  covidData : () => (dispatch(covidData()))
}); 

export default connect(mapStateToProps, mapDispatchToProps)(CovidTable)