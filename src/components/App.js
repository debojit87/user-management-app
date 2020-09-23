import React from 'react';
import Footer from './Footer.js';
import Header from './Header.js';
import { BrowserRouter, Route} from 'react-router-dom';
import Home from './Home';
import ContactUs from './ContactUs';
import ManageEmployees from './ManageEmployees';
//import ViewEmployees from './ViewEmployees';
import ManageUsers from './ManageUsers';
import '../css/index.css';


class App extends React.Component {
  render(){
   
  return (
    <BrowserRouter>
   <div>
    <Header />
    <Route exact path = "/" component = {Home} />
    <Route path = "/ManageUsers" component = {ManageUsers} />
    <Route path = "/ManageEmployees" component = {ManageEmployees} />
    {/*<Route path = "/ViewEmployeeModal" component = {ViewEmployeeModal} />*/}
    <Route path = "/ContactUs" component = {ContactUs} />
    
  <Footer />
  </div>
  </BrowserRouter>
  );
}
}

export default App;
