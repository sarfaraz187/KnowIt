import React from 'react';

const GlobalCard = props => {
  if (props.globalData) {
    return (
      <div className="row global_layout">
        <div className="col-3 p-2 border-right">
          <h6 className="d-flex justify-content-center">Global Cases</h6>
          <h4 className="count d-flex justify-content-center">{props.globalData.TotalConfirmed.toLocaleString()}</h4>
        </div>
        <div className="col-3 p-2 border-right">
          <h6 className="d-flex justify-content-center">Total Recovered</h6>
          <h4 className="count d-flex justify-content-center">{props.globalData.TotalRecovered.toLocaleString()}</h4>
        </div>
        <div className="col-3 p-2 border-right">
          <h6 className="d-flex justify-content-center">Total Deaths</h6>
          <h4 className="count d-flex justify-content-center">{props.globalData.TotalDeaths.toLocaleString()}</h4>
        </div>
        <div className="col-3 p-2">
          <h6 className="d-flex justify-content-center">New Cases</h6>
          <h4 className="count d-flex justify-content-center">{props.globalData.NewConfirmed.toLocaleString()}</h4>
        </div>
      </div>
    )
  } else {
    return ""
  }
}

export default GlobalCard