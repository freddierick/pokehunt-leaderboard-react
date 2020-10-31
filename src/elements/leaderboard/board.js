import React from 'react';
import Item from "./item";

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
          };
      }
      componentDidMount() {
        fetch("https://fre.rest/v2/leaderboard/"+this.props.page)
          .then(res => res.json())
          .then(
            (result) => {

                this.setState({
                isLoaded: true,
                items: result
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                console.log(error,"error :(")
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
        // return console.log(dataLoaded);
        
      };

    render() {

    const { error, isLoaded, items } = this.state;
    if (error) {
      return (<div class="alert alert-danger" role="alert" > 
      <p>There was a Error while loading the leaderboard! Don't worry this is probably a problem on our end, ping the developer Freddie in the <a href="https://pokehunt.xyz/support" class="alert-link">PokeHunt Discord server!</a> </p>
      <hr />
    <p class="mb-0">ERROR: {error.message}</p>
      
      </div>);
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
        console.log(items)
        const toDisplay = items.data.map((element) =>
        <Item pos={element.pos} avatar={element.avatar} username={element.username} discriminator={element.discriminator} count={element.count} />
    );
        // this.loadPage()
        return (
        <div class="leaderBoard">

<div class="top-of-board">
          <h4 ><strong>Leaderboards for {this.props.page}</strong></h4>
          <h5>{this.props.description}</h5>
        </div>

        <section id="scrims-ladder--container" class="scrims-ladder"> 
        <div class="ladder-nav--results">
        <div class="ladder-nav--results-col">
            <label>Rank</label>
        </div>
        <div class="ladder-nav--results-col">
            <label>Avatar</label>
        </div>
        <div class="ladder-nav--results-col">
            <label>Username</label>
        </div>
        <div class="ladder-nav--results-col">
            <label>{this.props.page}</label>
        </div>
        </div>
        {toDisplay}
        </section>
        <div class="top-of-board">
        <h5 >*This category is worth {this.props.worth} points in the All Round board.</h5>
          <h6 >**leaderboards are updated every 10 minutes.</h6>
        </div>
        </div>
            )
        }
        
    }
}

export default Board;

