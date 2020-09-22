import React ,{Component} from 'react';
import '../css/index.css';
import { Link } from 'react-router-dom';
import '../css/navbar.css';

class Header extends Component{

    render(){
        return(
<nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <Link className="navbar-brand" to="/">Employee Management System</Link>
    </div>
    <ul className="nav navbar-nav">
      <li><Link to="/">Home</Link></li>
      <li className="dropdown">
        <Link className="dropdown-toggle" data-toggle="dropdown" to="/Home">Manage
        <span className="caret"></span></Link>
        <ul className="dropdown-menu">
        <li><Link to="/ManageUsers">Manage Users</Link></li>
        <li><Link to="/ManageEmployees">Manage Employees</Link></li>
          {/*<li><Link to="/UserM">View Users</Link></li>
          <li><Link to="/AddEmployees">Add Employees</Link></li>*/}
        </ul>
      </li>
      <li><Link to="/ContactUs">Contact Us</Link></li>
    </ul>
   {/* <ul className="nav navbar-nav navbar-right">
      <li><Link to="/Register"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
      <li><Link to="Login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
    </ul>*/}
  </div>
</nav>
        );
        
 }
}
export default Header;