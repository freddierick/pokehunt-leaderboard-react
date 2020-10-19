import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.data = { };
        this.data = {
            allRound:"",
            pokemon:"",
            credits:"",
            donations:"",
            votes:"",
            hunts:"",
            streak:""
        };
        this.data[this.props.page] = "active";
        
    }
    render() {
        
        return (
          <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand" href="https:pokehunt.xyz">
                <img  src="https://images-ext-2.discordapp.net/external/_gNpqRTPmoJrbr4NDZAKoudLlB82y172jEJv5KrcR_I/%3Fsize%3D256/https/cdn.discordapp.com/avatars/716533909818572850/f34735e660341b5a88dc005902dfd9ce.png" width="30" height="30" alt="PokeHunt Icon" class="d-inline-block align-top"></img> PokeHunt </a>
        
            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item"><a class="nav-link disabled" href="/">Leaderboards<span class="sr-only">(current)</span></a></li>
                <li class="nav-item"><a class={"nav-link "+ this.data.allRound} href="/all-round">All Round</a></li>
                
                
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Main Catagories
                </a>
                <div class="dropdown-menu bg-dark" aria-labelledby="navbarDropdownMenuLink">
                <li class="nav-item"><a class={"nav-link "+this.data.pokemon} href="/pokemon">Pokemon</a></li>
                <li class="nav-item"><a class={"nav-link "+this.data.credits} href="/credits">Credits</a></li>
                <li class="nav-item"><a class={"nav-link "+this.data.donations} href="/donations">Donations</a></li>          
                </div>
                </li>


                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Duels
                </a>
                <div class="dropdown-menu bg-dark" aria-labelledby="navbarDropdownMenuLink">
                        <li class="nav-item"><a href="/" class="nav-link">Coming soon!</a></li>         
                </div>
                </li>


                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Sub Categories
                </a>
                <div class="dropdown-menu bg-dark" aria-labelledby="navbarDropdownMenuLink">
                        <li class="nav-item"><a class={"nav-link "+this.data.votes} href="/votes">Votes</a></li>
                        <li class="nav-item"><a class={"nav-link "+this.data.hunts} href="/hunts">Hunts</a></li>
                        <li class="nav-item"><a class={"nav-link "+this.data.streak} href="/streak">Streak</a></li>         
                </div>
            </li>

            </ul>
            {/* <form class="form-inline my-2 my-lg-0">
                    <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">Search for users by ID</span>
                    </div>
                    <input type="text" class="form-control" placeholder="User ID" aria-label="User ID" aria-describedby="basic-addon1"></input>
                    <div class="input-group-prepend">
                        <button class="input-group-text" id="basic-addon2">Search</button>
                    </div>
                    </div>
                </form> */}
            </div>
        </nav>
          </div>
        );
      }
    }


export default Header;