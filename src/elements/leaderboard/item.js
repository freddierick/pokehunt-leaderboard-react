
import React from 'react';

class Item extends React.Component {
    render() {
        let col="";
        let CSSClass=" winningCol";
        if(this.props.pos===1){col="#FFD700"; CSSClass=+"-1"};if(this.props.pos===2){col="#C0C0C0"; CSSClass=+"-2"};if(this.props.pos===3){col="#cd7f32"; CSSClass=+"-3"};
        
        return (
            <div>
        <div class={"ladder-nav--results-players"+CSSClass} >
            <div class="results-col">
                <span class="results-rank" style={{background: col}}>
                    <span class="positions">{this.props.pos}</span></span>
            </div>
            <div class="results-col">
                <span class="results-team"><img src={this.props.avatar} alt="User Avatar" width="50" height="50"></img></span>
            </div>
            <div class="results-col">
                <span class="results-p1">{this.props.username}#{this.props.discriminator}</span>
            </div>
            <div class="results-col">
                <span class="results-p2">{this.props.count}</span>
            </div>
            </div>
        </div>
        )
    }
}

export default  Item;