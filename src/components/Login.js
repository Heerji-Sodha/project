import React, { Component } from 'react';
import styled from 'styled-components';
import firebase from '../firebase';
import InnerNav from './InnerNav';
import Fb from './images/facebook-logo.png'
import Google from './images/google-plus-social-logotype.png'
import Twiter from './images/twitter-social-logotype.png'
import Logo from './images/logo.png'
import Paper from '@material-ui/core/Paper';
import Header from './../containers/Header'
import Chat from './Chat'


// import Navbar from './navbar/navbar'
const StyledLogin = styled.div`
  .App-header-login button {
    display: flex;
  }

  .App-header-login button {
    background: #e9f1df;
    width: 100px;
    font-size: 12px;
    font-weight: 600;
    color: #333;
    cursor: pointer;
    height: 20px;
    text-align: center;
    border: none;
    background-size: 300% 100%;
    border-radius: 50px;
    moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }
  .App-header-login button:hover {
    opacity: 0.75;
    background-position: 100% 0;
    moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }

  .add-item button:focus {
    outline: none;
  }

  .Pre-login {
    text-align: center;
  }
`;

const StyledLoginPage = styled.div`
  text-align: center;
`;

class Login extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      }
    });
  }

  handleChange(e) {
    /* ... */
  }

  logout() {
    firebase.auth().signOut().then(() => {
      this.setState({
        user: null
      });
    });
  }

  login() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(result => {
      const user = result.user;
      this.setState({
        user
      });
      /* for reference, here is what you can get from a user
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      */
    });
  }

  render() {
    return (

      <Paper style={{
        width: '100%',
        margin: "10px",
        padding: '10px',
        marginTop: 0,
        marginRight: 'auto',
        marginBottom: 0,
        marginLeft: 'auto',
        backgroundColor: "#f7f7f7"
      }}>
        <div>
          {/* <Chat /> */}
          <StyledLogin>
            {this.state.user ? (

              <InnerNav user={this.state.user} />
            ) : (
                <StyledLoginPage>
                  <img src={Logo} width="80px" style={{ marginTop: "50px" }} />
                  <p style={{ fontSize: '25px' }}>Welcome,Let's Shop</p>

                  <input style={{ 'borderRadius': '40px', border: "none", padding: "10px", width: '70%', outline: "none" }} type="text" placeholder="EMAIL" required="email" />
                  <br />
                  <input style={{ marginTop: "20px", 'borderRadius': '40px', border: "none", padding: "10px", width: '70%', outline: "none" }} type="password" placeholder="PASSWORD" required="Password" />
                  <br />
                  <button style={{ cursor: "pointer", marginTop: "30px", 'borderRadius': '40px', border: "none", padding: "10px", width: '70%', color: "white", backgroundColor: 'gray', outline: "none" }} >LOGIN</button>
                  <br />
                  <p style={{ fontSize: 15, }}>Don't have account? Sign up! </p>
                  <p>or</p>
                  <div>
                    <span style={{ cursor: "pointer" }}><img width="40px" src={Fb} /></span>
                    <span style={{ marginLeft: 10, cursor: "pointer" }}><img width="40px" src={Twiter} /></span>
                    <span style={{ marginLeft: 10, cursor: "pointer" }} onClick={this.login}><img width="40px" src={Google} /></span>
                  </div>
                </StyledLoginPage>
              )}
          </StyledLogin>

        </div>
      </Paper>
    );
  }
}

export default Login;
