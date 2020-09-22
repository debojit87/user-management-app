import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import '../css/index.css';
import '../css/bootstraptable.css';


class ManageUser extends React.Component {

	state = {
		users:[],
		user:{
		
		},
		id: '',
		first_name: '',
		last_name: '',
		email: '',
		address: ''
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
changeUserIdHandler = event =>{
this.setState({
id: event.target.value
			});
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
	sendDataToEditUserModal = user =>{
	console.log('req items:' + user.first_name);
	 this.setState({
		 id: user.id,
		 first_name: user.first_name,
		 last_name: user.last_name,
		 email: user.email,
		 address: user.address
		
	 });
 }
 clearState = () =>{
	
	 this.setState({
		 id: '',
		 first_name: '',
		 last_name: '',
		 email: '',
		 address: ''
		
	 });
 }
			  
 handleAddUserSubmit = event =>{
	event.preventDefault();
	console.log(this.state.id,this.state.first_name,  this.state.last_name, this.state.email);
	const addUserRequest = {
		id: this.state.id,
		first_name: this.state.first_name,
		last_name: this.state.last_name,
		email: this.state.email,
		address: this.state.address
	};
	Axios.post("https://reqres.in/api/users",addUserRequest)
	.then(response =>{
		console.log(response);
		let dataToAdd = this.state.users;
        dataToAdd.push(addUserRequest);
        this.setState({
			users: dataToAdd
		})
	})
	this.setState({
		id: '',
		first_name: '',
		last_name: '',
		email: '',
		address: ''
	});
	 }

	 handleEditUserSubmit = event =>{
		event.preventDefault();
		console.log(this.state.id,this.state.first_name,  this.state.last_name, this.state.email);
		const editUserRequest = {
			id: this.state.id,
			first_name: this.state.first_name,
			last_name: this.state.last_name,
			email: this.state.email,
			address: this.state.address
		};
		Axios.put("https://reqres.in/api/users/"+this.state.id,editUserRequest)
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

	
renderTableRecords = () =>{
			return this.state.users.map((user,index)=>{
				const {id, first_name,last_name,email } = user;
				console.log(id);
				console.log(first_name);
				console.log(last_name);
				console.log(email);
				return(
					<tr key={index}>
							<td>
								<span className="custom-checkbox">
									<input type="checkbox" id="checkbox1" name="options[]" value="1"></input>
									<label for="checkbox1"></label>
								</span>
							</td>
							<td>{id}</td>
						<td>{first_name}</td>
						<td>{last_name}</td>
						<td>{email}</td>
						<td>
						
							<a href="#editUserModal" class="edit" data-toggle="modal" data-backdrop="static" onClick={()=>this.sendDataToEditUserModal(user)}><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
							<a href="#deleteUserModal" class="delete" data-toggle="modal" ><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
							</td>
</tr>
				)
			});
			   } 
	

			  
    render(){
		const {id,first_name,last_name,email,address} = this.state
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
						
							<a href="#addUserModal" className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New User</span></a>
							<a href="#deleteUserModal" className="btn btn-danger" data-toggle="modal"><i className="material-icons">&#xE15C;</i> <span>Delete</span></a>						
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
							<th>User Id</th>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Email</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						
						{this.state.users.map((user,index)=>{
				const {id, first_name,last_name,email } = user;
					return (<tr key={index}>
							<td>
								<span className="custom-checkbox">
									<input type="checkbox" id="checkbox1" name="options[]" value="1"></input>
									<label for="checkbox1"></label>
								</span>
							</td>
							<td>{id}</td>
						<td>{first_name}</td>
						<td>{last_name}</td>
						<td>{email}</td>
						<td>
						
							<a href="#editUserModal" class="edit" data-toggle="modal" data-backdrop="static" onClick={()=>this.sendDataToEditUserModal(user)}><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
							<a href="#deleteUserModal" class="delete" data-toggle="modal" ><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
							</td>
</tr>)
			})}
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
	
	<div id="addUserModal" className="modal fade">
		<div className="modal-dialog">
			<div className="modal-content">
				<form>
					<div className="modal-header">						
						<h4 className="modal-title">Add User</h4>
						<button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
					</div>
					<div className="modal-body">	
					<div className="form-group">
							<label>User Id</label>
							<input type="text" value={id} onChange={this.changeUserIdHandler} className="form-control" required></input>
						</div>				
						<div className="form-group">
							<label>First Name</label>
							<input type="text" value={first_name} onChange={this.changeFirstNameHandler} className="form-control" required></input>
						</div>
						<div className="form-group">
							<label>Last Name</label>
							<input type="text" value={last_name} onChange={this.changeLastNameHandler} className="form-control" required></input>
						</div>
						<div className="form-group">
							<label>Email</label>
							<input type="email" value={email} onChange={this.changeEmailHandler} className="form-control" required></input>
						</div>
						<div className="form-group">
							<label>Address</label>
							<textarea className="form-control" value={address} onChange={this.changeAddressHandler} required></textarea>
						</div>
										
					</div>
					<div className="modal-footer">
						<input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel"></input>
						<input type="submit" className="btn btn-success" value="Add" onClick={this.handleAddUserSubmit}></input>
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
						<button type="button" className="close" onClick={()=>this.clearState()} data-dismiss="modal" aria-hidden="true">&times;</button>
					</div>
					<div className="modal-body">	
					<div className="form-group">
							<label>User Id</label>
							<input type="text" value={id} onChange={this.changeFirstNameHandler} className="form-control" readOnly></input>
						</div>				
						<div className="form-group">
							<label>First Name</label>
							<input type="text" value={first_name} onChange={this.changeFirstNameHandler} className="form-control" required></input>
						</div>
						<div className="form-group">
							<label>Last Name</label>
							<input type="text" value={last_name}  onChange={this.changeLastNameHandler} className="form-control" required></input>
						</div>
						<div className="form-group">
							<label>Email</label>
							<input type="email" value={email} onChange={this.changeEmailHandler} className="form-control" required></input>
						</div>
						<div className="form-group">
							<label>Address</label>
							<textarea className="form-control"  onChange={this.changeAddressHandler} value={address} required></textarea>
						</div>
					</div>
					<div className="modal-footer">
						<input type="button" className="btn btn-default" onClick={()=>this.clearState()} data-dismiss="modal" value="Cancel"></input>
						<input type="submit" className="btn btn-info" value="Save" onClick={this.handleEditUserSubmit}></input>
					</div>
				</form>
			</div>
		</div>
	</div>
	{/*<!-- Delete Modal HTML -->*/}
	<div id="deleteUserModal" class="modal fade">
		<div className="modal-dialog">
			<div className="modal-content">
				<form>
					<div className="modal-header">						
						<h4 className="modal-title">Delete Employee</h4>
						<button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
					</div>
					<div className="modal-body">					
						<p>Are you sure you want to delete these Records?</p>
						<p className="text-warning"><small>This action cannot be undone.</small></p>
					</div>
					<div className="modal-footer">
						<input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel"></input>
						<input type="submit" className="btn btn-danger" value="Delete"></input>
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