import React, { Component } from 'react';
import firebase from '../firebase';
import StyledList from './styles/StyledList';
import ListItem from './ListItem';
import styled from 'styled-components';
import Delete from './images/delete.png';
// import Navbar from './navbar/navbar'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './listApp.css'
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
const StyledDelete = styled.img`
  color: #f2385a;
  padding-bottom: 0.5rem;

  :hover {
    cursor: pointer;
  }
`;

class ListApp extends Component {
  constructor() {
    super();
    this.state = {
      currentItem: '',
      username: '',
      items: [],
      strikethrough: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // documentation here: https://firebase.google.com/docs/database/admin/retrieve-data


    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });


        const itemsRef = firebase.database().ref('items').orderByChild('user').equalTo(user.email);
        itemsRef.on('value', snapshot => {
          let items = snapshot.val();
          let newState = [];
          for (let item in items) {
            newState.push({
              id: item,
              title: items[item].title,
              user: items[item].user,
              tags: items[item].tags
            });
          }
          this.setState({
            items: newState
          });
        });
      }
      else {
        this.props.history.push("/")
      }
    })
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref('items');
    const item = {
      title: this.state.currentItem,
      user: this.state.user.email,
      tags: this.state.tags
    };
    itemsRef.push(item);
    this.setState({
      currentItem: '',
      username: this.state.user.email,
      tags: ''
    });
  }

  removeItem(itemId) {
    const itemRef = firebase.database().ref(`/items/${itemId}`);
    itemRef.remove();
  }

  render() {
    return (
      <div>
        {/* <Navbar /> */}
        <StyledList>
          <center>
            <h3>List Item</h3>
            <section className="add-item">
              <form onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  name="tags"
                  placeholder="Tags"
                  onChange={this.handleChange}
                  value={this.state.tags}
                  style={{ border: '1px solid red', width: '100%', borderRadius: '50px', border: 'none', outline: "none" }}
                />
                <br />
                <input
                  type="text"
                  name="currentItem"
                  placeholder="List Item"
                  onChange={this.handleChange}
                  value={this.state.currentItem}
                  required={true}
                  style={{ border: '1px solid red', width: '100%', borderRadius: '50px', border: 'none', outline: "none" }}

                />
                <p />



                <br />
                <button style={{ width: '100%' }}>Add Item</button>
              </form>
            </section>
          </center>





          {/* <center> */}
          {/* <p style={{border:'1px solid green'}}></p> */}
          <section className="display-item" style={{ marginTop: '30px', width: '100%', margin: "0 auot", height: 'auto', }}>
            <div className="wrapper">
              <ul>
                {this.state.items.map(item => {
                  return (
                    // <div id="listStyle" style={{marginTop:'30px',border:'1px solid black',}}>
                    <li key={item.id}>
                      {/* <div className="items-div" >
                          <ListItem  message={item.title}  />
                          <p className="display-item-p" id="item" >Added by: {item.user}</p>
                        
                          <p className="display-item-p" id="tag" >Tags: {item.tags}</p>
                        </div>

                        <br/>









                        <StyledDelete
                          src={Delete}
                          onClick={() => this.removeItem(item.id)}
                          alt="delete item"
                         id="dlet"
                        /> */}
                      <Paper style={{ padding: "10px" ,borderRadius:'20px'}}>
                        <StyledDelete
                          src={Delete}
                          onClick={() => this.removeItem(item.id)}
                          alt="delete item"
                          id="dlet"
                          style={{ float: "right",marginTop:'50px'}}
                        />
                        <h1>

                          <ListItem message={item.title} style={{ fontWeight: "bold" }} />
                        </h1>
                        <p  >Added by: {item.user}</p>

                        <p  >Tags: {item.tags}</p>


                      </Paper>
                    </li>
                    // </div>
                  );
                })}
              </ul>
            </div>
          </section>
          {/* </center> */}
        </StyledList>
      </div>
    );
  }
}

export default ListApp;
