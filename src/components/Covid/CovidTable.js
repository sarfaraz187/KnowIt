import React from 'react';
import { connect } from 'react-redux';
import { covidData } from '../../redux/index';
import GlobalCard from './GlobalCard';

class CovidTable extends React.Component {

  componentDidMount() {
    const { covidData } = this.props
    covidData();
  }

  // Reorder array based on Total number of cases
  orderData(arr) {
    return arr.sort((a, b) => parseFloat(b.TotalConfirmed) - parseFloat(a.TotalConfirmed));
  }

  getHtmlObject(arr) {
    let totalCasesHtml = '', totalDeathsHtml = '', newCasesHtml = '', newDeathsHtml = ''
    arr.map(element => {
      totalCasesHtml += `<tr><td><span class="count">${element.TotalConfirmed.toLocaleString()}</span><span>${' ' + element.Country}</span></td></tr>`;
      totalDeathsHtml += `<tr><td><span class="count">${element.TotalDeaths.toLocaleString()}</span><span>${' ' + element.Country}</span></td></tr>`;
      newCasesHtml += `<tr><td><span class="count">${element.NewConfirmed.toLocaleString()}</span><span>${' ' + element.Country}</span></td></tr>`;
      newDeathsHtml += `<tr><td><span class="count">${element.NewDeaths.toLocaleString()}</span><span>${' ' + element.Country}</span></td></tr>`;
    });
    let tempObj = {
      "totalCasesHtml" : totalCasesHtml,
      "totalDeathsHtml" : totalDeathsHtml,
      "newCasesHtml" : newCasesHtml,
      "newDeathsHtml" : newDeathsHtml,
    };
    return tempObj
  }

  render() {
    // console.log(this.props.globalData);
    // console.log(this.props.countryData);
    let reorderedArr = this.orderData(this.props.countryData);
    let htmlObj = this.getHtmlObject(reorderedArr);
    return (
      <React.Fragment>
        <h3 className='covid_heading'>COVID-19 Dashboard</h3>
        <div className="row">
          <div className="col-12">
            <GlobalCard globalData={this.props.globalData} />
          </div>
        </div>
        <div className="countries_div row">
          <div className="col-3 pl-0">
            <div className="country_layout tableFixHead px-3">
              <table className="table">
                <thead>
                  <tr>
                    <th>
                      <h6 className="d-flex justify-content-center">Total Cases by Country</h6>
                    </th>
                  </tr>
                </thead>
                <tbody dangerouslySetInnerHTML={{ __html: htmlObj.totalCasesHtml }}>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-3 px-2">
            <div className="country_layout tableFixHead px-3">
              <table className="table">
                <thead>
                  <tr>
                    <th>
                      <h6 className="d-flex justify-content-center">Total Deaths by Country</h6>
                    </th>
                  </tr>
                </thead>
                <tbody dangerouslySetInnerHTML={{ __html: htmlObj.totalDeathsHtml }}>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-3 pr-0">
            <div className="country_layout tableFixHead px-3">
              <table className="table">
                <thead>
                  <tr>
                    <th>
                      <h6 className="d-flex justify-content-center">New Cases by Country</h6>
                    </th>
                  </tr>
                </thead>
                <tbody dangerouslySetInnerHTML={{ __html: htmlObj.newCasesHtml }}>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-3 pr-0">
            <div className="country_layout tableFixHead px-3">
              <table className="table">
                <thead>
                  <tr>
                    <th>
                      <h6 className="d-flex justify-content-center">New Deaths by Country</h6>
                    </th>
                  </tr>
                </thead>
                <tbody dangerouslySetInnerHTML={{ __html: htmlObj.newDeathsHtml }}>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  globalData: state.covidStats.global,
  countryData: state.covidStats.posts
});

const mapDispatchToProps = dispatch => ({
  covidData: () => (dispatch(covidData()))
});

export default connect(mapStateToProps, mapDispatchToProps)(CovidTable)