import React from 'react';
import Header from './Header';
import Logo from './Logo'
import Headlines from './NewsCompnents/Headlines';
import Layout from './TechComponents/Layout';
import TravelLayout from './TravelComponents/TravelLayout';
import SportsLayout from './MotorSportsComponents/SportsLayout';
import CovidLayout from './Covid/CovidTable'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="news_layout">
          {/* <Logo />
          <Header className="" />
          <Headlines/>
          <Layout /> */}
        </section>
        <section className="feature_body mt-5">
          <TravelLayout/>
          <SportsLayout/>
        </section>
        <section className="covid_layout pt-5">
          <CovidLayout/>
        </section>
        <footer>
          
        </footer>
      </React.Fragment>
    )
  }
}

export default App