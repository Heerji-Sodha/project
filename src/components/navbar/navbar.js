// import React, { Component } from "react";
// import {
//   MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
//   MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBContainer, MDBIcon
// } from "mdbreact";
// import {
//   NavLink, Link
// } from 'react-router-dom';
// import Logo from './../Logo/index';
// class NavbarPage extends Component {
//   state = {
//     collapseID: ""
//   };

//   toggleCollapse = collapseID => () =>
//     this.setState(prevState => ({
//       collapseID: prevState.collapseID !== collapseID ? collapseID : ""
//     }));

//   render() {
//     return (
//       <MDBNavbar color="red" dark expand="md" style={{}}>
//         <MDBNavbarBrand>
//           {/* <strong className="white-text">MDBNavbar</strong> */}
//           <Logo />
//         </MDBNavbarBrand>
//         <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />
//         <MDBCollapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
//           <MDBNavbarNav right>


//             <MDBNavItem>
//               <Link style={{ color: 'white', padding: '5px', paddingTop: '8px', }} className="waves-effect waves-light" to="/Chat">
//                 <MDBIcon icon="Chat" className="mr-1" />Chat</Link>
//             </MDBNavItem>

//             <MDBNavItem>
//               <Link style={{ color: 'white', padding: '5px', paddingTop: '8px' }} className="waves-effect waves-light" to="/lists">
//                 <MDBIcon icon="List" className="mr-1" />Lists</Link>
//             </MDBNavItem>

//             <MDBNavItem>
//               <Link style={{ color: 'white', padding: '5px', paddingTop: '8px' }} className="waves-effect waves-light" to="/wallet">
//                 <MDBIcon icon="Walle" className="mr-1" />Wallet</Link>
//             </MDBNavItem>

//             <MDBNavItem>
//               <Link style={{ color: 'white', padding: '5px', paddingTop: '8px' }} className="waves-effect waves-light" to="/settings">
//                 <MDBIcon icon="Seeting" className="mr-1" />Profile</Link>
//             </MDBNavItem>






//             {/* 
//             <HorizontalMenuItem>
//                 <Link to="/settings">Settings</Link>
//             </HorizontalMenuItem>
//             <HorizontalMenuItem>
//                 <Link to="/wallet">Wallet</Link>
//             </HorizontalMenuItem>
//             <HorizontalMenuItem>
//                 <Link to="/lists">Lists</Link>
//             </HorizontalMenuItem>
//             <HorizontalMenuItem>
//                 <Link to="/chat">Chat</Link>              
//             </HorizontalMenuItem> */}

//             {/* <MDBNavItem>
//               <MDBDropdown>
//                 {/* <MDBDropdownToggle nav caret>
//                   <MDBIcon icon="" className="mr-1" />Profile
//                 </MDBDropdownToggle>
//                 <MDBDropdownMenu className="dropdown-default" right>
//                   <MDBDropdownItem href="#!">My account</MDBDropdownItem> */}
//             {/* <MDBDropdownItem href="#!">Log out</MDBDropdownItem> */}
//             {/* </MDBDropdownMenu> */}
//             {/* </MDBDropdown> */}
//             {/* </MDBNavItem> */}
//           </MDBNavbarNav>
//         </MDBCollapse>
//       </MDBNavbar>
//     );
//   }
// }

// export default NavbarPage;