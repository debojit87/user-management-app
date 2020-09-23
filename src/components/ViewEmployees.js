import React from 'react';
import Axios from 'axios';
import '../css/index.css';
import ViewEmployeeModal from './ManageUsers';


class ViewEmployees extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            employees:[],
            show: false
        }
    }
 handleClose = () =>{
 this.setState(
  {
    show: false
  }
);
}
handleShow = () =>{
this.setState(
    {
      show: true
    }
  );
  }
   componentDidMount=()=>{
Axios.get("http://dummy.restapiexample.com/api/v1/employees").then(
   empResponse=>{
       this.setState({
          employees:  empResponse.data.data
       });
       console.log(this.state.employees);
   } 
)
   }
   handleClick = (e)  =>{
    e.preventDefault();
    console.log(e);
    console.log('The link was clicked.');
    this.setState(
      {
        showEmpDetails: true
      }
    );
    //alert('The link was clicked.');
  }
   renderTableRecords(){
    return this.state.employees.map((employee,index)=>{
        const { id,employee_name,employee_age,employee_salary } = employee;
        console.log(id);
        console.log(employee_name);
        console.log(employee_age);
        console.log(employee_salary);
        return(
            <tr key={id}>
                <td>{id}</td>
                <td>{employee_name}</td>
                <td>{employee_age}</td>
                <td>{employee_salary}</td>
                <td><button onClick={this.handleClick}>View</button></td>
            </tr>
            
        )
    })
       } 
    
    render(){

if(this.state.showEmpDetails === true){
return(<ViewEmployeeModal/>);
      }else{
        return(
            <div className="container">
            <h2 id="title" > User List</h2>
            <table id="employees" className="table table-striped">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Employee Name</th>
                  <th>Age</th>
                  <th>Salary</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
              {this.renderTableRecords()}
              </tbody>
            </table>
          
          </div>
        );
}
}
}

export default ViewEmployees;