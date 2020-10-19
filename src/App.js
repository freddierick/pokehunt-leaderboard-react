import React from 'react';
import { Header, Footer, Board as Leaderboard } from "./elements/";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div>
    
    <link rel="stylesheet" href="/style.css"></link>
    <link rel="icon" href="/favicon_ouf_icon.ico" />
    <title>Leaderboards | Pokehunt</title>
    <Router>
      <Route path="/pokemon" component={pokemon} />
      <Route path="/all-round" component={allRound} />
      <Route path="/donations" component={donations} />
      <Route path="/credits" component={credits} />
      <Route path="/votes" component={votes} />
      <Route path="/hunts" component={hunts} />
      <Route path="/streak" component={streak} />
      <Route exact path="/" component={home} />
  </Router>
  </div>
  );
}

const home = () => (
  <div>
    <Redirect to="/all-round" />
  </div>
);

class votes extends React.Component {
  render() {
    return (
        <div>
          <Header page="votes"/> 
          <Leaderboard description="" page="votes" worth="x 1"/>
          <Footer />
        </div>
      )
    }
};
class hunts extends React.Component {
  render() {
    return (
        <div>
          <Header page="hunts"/> 
          <Leaderboard description="" page="hunts" worth="0.5"/>
          <Footer />

        </div>
      )
    }
};
class streak extends React.Component {
  render() {
    return (
        <div>
          <Header page="streak"/> 
          <Leaderboard description="" page="streak" worth="x 1"/>
          <Footer />

        </div>
      )
    }
};


class allRound extends React.Component {
  render() {
    return (
        <div>
          <Header page="allRound"/> 
          <Leaderboard description="This is calculated using your position in each leaderboard (i.e. 1st is worth 20 points * that pages multiplier) " page="allRound" worth="no"/>
          <Footer />

        </div>
      )
    }
};


class pokemon extends React.Component {
  render() {
    return (
        <div>
          <Header page="pokemon"/> 
          <Leaderboard description="" page="pokemon" worth="x 2"/>
          <Footer />
                  </div>
      )
    }
};

class credits extends React.Component {
  render() {
    return (
        <div>
          <Header page="credits" worth="x 1"/> 
          <Leaderboard description="" page="balance"/>
          <Footer />

        </div>
      )
    }
};

class donations extends React.Component {
  render() {
    return (
        <div>
          <Header page="donations"/> 
          <Leaderboard description="" page="donations" worth="no"/>
          <Footer />

        </div>
      )
    }
};


export default App;
