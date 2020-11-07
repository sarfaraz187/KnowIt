import React from 'react'
import TechLayout from './TechFolder/TechLayout'
import RelatedNews from './RelatedFolder/RelatedNews';

const Layout = () => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="widget-title col-8 pl-0">
          Technology
        </div>
        <div className="widget-title col-4 pl-3">
          TechCrunch
        </div>
      </div>
      <div className="row">
        <TechLayout />
        <RelatedNews />
      </div>
    </React.Fragment>
  )
}

export default Layout