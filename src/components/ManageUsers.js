import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import '../css/index.css';
import '../css/bootstraptable.css';

class ManageUser extends React.Component {

	state = {
		users:[],
		user:{},
		first_name: '',
		last_name: '',
		email: '',
		address: ''
	}
 changeFirstNameHandler = event =>{
this.setState({
	first_name: event.target.value
});
 }

 changeLastNameHandler = event =>{
	this.setState({
		last_name: event.target.value
	});
	 }

changeEmailHandler = event =>{
		this.setState({
			email: event.target.value
		});
		 }
changeAddressHandler = event =>{
			this.setState({
				address: event.target.value
			});
			 }

			  
 handleAddUserSubmit = event =>{
	event.preventDefault();
	alert(`${this.state.first_name}  ${this.state.last_name}  ${this.state.email}`);
	const addUserRequest = {
		first_name: this.state.first_name,
		last_name: this.state.last_name,
		email: this.state.email,
		address: this.state.address
	};
	Axios.post("https://reqres.in/api/users",addUserRequest)
	.then(response =>{
		console.log(response);
	})
	this.setState({
		first_name: '',
		last_name: '',
		email: '',
		address: ''
	});
	 }

	componentDidMount=()=>{
		Axios.get("https://reqres.in/api/users").then(
		   empResponse=>{
			   this.setState({
				  users:  empResponse.data.data
			   });
			   console.log(this.state.users);
		   } 
		)
		   }
renderTableRecords = () =>{
			return this.state.users.map((user,index)=>{
				const {first_name,last_name,email } = user;
				
				console.log(first_name);
				console.log(last_name);
				console.log(email);
				return(
					
					<tr>
							<td>
								<span className="custom-checkbox">
									<input type="checkbox" id="checkbox1" name="options[]" value="1"></input>
									<label for="checkbox1"></label>
								</span>
							</td>
						<td>{first_name}</td>
						<td>{last_name}</td>
						<td>{email}</td>
						<td>
							<a href="#editUserModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
							<a href="#deleteUserModal" class="delete" data-toggle="modal" ng-click=""><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
							</td>
</tr>
					
				)
			})
			   } 
	

			  
    render(){
		const {first_name,last_name,email,address} = this.state
    return(
<div >
<div className="container">
		<div className="table-responsive">
			<div className="table-wrapper">
				<div className="table-title">
					<div className="row">
						<div className="col-xs-6">
							<h2>Manage <b>Users</b></h2>
						</div>
						<div className="col-xs-6">
						
							<a href="#addUserModal" class="btn btn-success" data-toggle="modal"><i class="material-icons">&#xE147;</i> <span>Add New User</span></a>
							<a href="#deleteUserModal" class="btn btn-danger" data-toggle="modal"><i class="material-icons">&#xE15C;</i> <span>Delete</span></a>						
						</div>
					</div>
				</div>
				<table className="table table-striped table-hover">
					<thead>
						<tr>
							<th>
								<span className="custom-checkbox">
									<input type="checkbox" id="selectAll"></input>
									<label htmlFor="selectAll"></label>
								</span>
							</th>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Email</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{this.renderTableRecords()}
						
					</tbody>
				</table>
				{/*<div className="clearfix">
					<div className="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
					<ul className="pagination">
						<li className="page-item disabled"><a to="/">Previous</a></li>
						<li className="page-item active"><a to="/" className="page-link">1</a></li>
						<li className="page-item"><Link to="/" className="page-link">2</Link></li>
						<li className="page-item"><Link to="/" className="page-link">3</Link></li>
						<li className="page-item"><Link to="/" className="page-link">4</Link></li>
						<li className="page-item"><Link to="/" className="page-link">5</Link></li>
						<li className="page-item"><Link to="/" className="page-link">Next</Link></li>
					</ul>
				</div>*/}
			</div>
		</div>  
    </div>
	{/*<!-- Add User Modal HTML -->*/}
	<div id="addUserModal" class="modal fade">
		<div class="modal-dialog">
			<div class="modal-content">
				<form>
					<div class="modal-header">						
						<h4 class="modal-title">Add Employee</h4>
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
					</div>
					<div class="modal-body">					
						<div class="form-group">
							<label>First Name</label>
							<input type="text" value={first_name} onChange={this.changeFirstNameHandler} class="form-control" required></input>
						</div>
						<div class="form-group">
							<label>Last Name</label>
							<input type="text" value={last_name} onChange={this.changeLastNameHandler} class="form-control" required></input>
						</div>
						<div class="form-group">
							<label>Email</label>
							<input type="email" value={email} onChange={this.changeEmailHandler} class="form-control" required></input>
						</div>
						<div class="form-group">
							<label>Address</label>
							<textarea class="form-control" value={address} onChange={this.changeAddressHandler} required></textarea>
						</div>
										
					</div>
					<div class="modal-footer">
						<input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel"></input>
						<input type="submit" class="btn btn-success" value="Add" onClick={this.handleAddUserSubmit}></input>
					</div>
				</form>
			</div>
		</div>
	</div>  

	{/*<!-- Delete Modal HTML -->*/}
	<div id="deleteUserModal" class="modal fade">
		<div class="modal-dialog">
			<div class="modal-content">
				<form>
					<div class="modal-header">						
						<h4 class="modal-title">Delete Employee</h4>
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
					</div>
					<div class="modal-body">					
						<p>Are you sure you want to delete these Records?</p>
						<p class="text-warning"><small>This action cannot be undone.</small></p>
					</div>
					<div class="modal-footer">
						<input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel"></input>
						<input type="submit" class="btn btn-danger" value="Delete"></input>
					</div>
				</form>
			</div>
		</div>
	</div>

	{/*<!-- Edit Modal HTML -->*/}
	<div id="editUserModal" className="modal fade">
		<div className="modal-dialog">
			<div className="modal-content">
				<form>
					<div className="modal-header">						
						<h4 className="modal-title">Edit User</h4>
						<button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
					</div>
					<div className="modal-body">					
						<div className="form-group">
							<label>First Name</label>
							<input type="text" value={this.state.first_name} className="form-control" required></input>
						</div>
						<div className="form-group">
							<label>Last Name</label>
							<input type="text" value={this.state.user.last_name} className="form-control" required></input>
						</div>
						<div className="form-group">
							<label>Email</label>
							<input type="email" className="form-control" required></input>
						</div>
						<div className="form-group">
							<label>Address</label>
							<textarea className="form-control" required></textarea>
						</div>
						<div className="form-group">
							<label>Phone</label>
							<input type="text" className="form-control" required></input>
						</div>					
					</div>
					<div className="modal-footer">
						<input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel"></input>
						<input type="submit" className="btn btn-info" value="Save"></input>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
    );
  }
  }
export default ManageUser;