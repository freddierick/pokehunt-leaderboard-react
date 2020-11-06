import React from 'react';

class Footer extends React.Component {
    render() {
        return(
<footer class="page-footer bottom font-small black pt-4" style={{background:"#3a3a3a", color:"white"}}>

<div class="container text-center text-md-left">

  <div class="row">
    
  <div class="col-md-6 mt-md-0 mt-3">

<h5 class="text-uppercase">Found any problems?</h5>
<p>Please report them to us using the #bug-reports channel on our  <a href="https://pokehunt.xyz/support">discord server</a></p>

</div>

<hr class="clearfix w-100 d-md-none pb-3" />

    <div class="col-md-3 mx-auto">

      <h5 class="font-weight-bold text-uppercase mt-3 mb-4">leaderboard</h5>

      <ul class="list-unstyled">
        <li>
          <a href="https://pokehunt.xyz/leaderboard/">Home</a>
        </li>
        <li>
          <a href="https://pokehunt.xyz/leaderboard/pokemon">Pokemon</a>
        </li>
        <li>
          <a href="https://pokehunt.xyz/leaderboard/credits">Credits</a>
        </li>
        <li>
          <a href="https://pokehunt.xyz/leaderboard/donations">Donations</a>
        </li>
      </ul>

    </div>

    <hr class="clearfix w-100 d-md-none" />

    <div class="col-md-3 mx-auto">

      <h5 class="font-weight-bold text-uppercase mt-3 mb-4">pokehunt</h5>

      <ul class="list-unstyled">
        <li>
          <a href="https://pokehunt.xyz">Home</a>
        </li>
        <li>
          <a href="https://pokehunt.xyz/Login">Login</a>
        </li>
        <li>
          <a href="https://pokehunt.xyz/Dashboard">Dashboard</a>
        </li>
        <li>
          <a href="https://pokehunt.xyz/Pokemon">Pokemon</a>
        </li>
      </ul>

    </div>

    

  </div>

</div>

<div class="footer-copyright text-center py-3">© 2020 Copyright:
            <a href="https://pokehunt.xyz"> PokeHunt </a>
            made with ❤️ ➕ 💻 ➕ ⚛️ by <a href="https://freddie.pw/"> freddie.pw </a>
            in the UK
            </div> 


</footer>

        )
    }
};



export default Footer;