import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, Button } from 'react-bootstrap'
import EditUser from './EditUser'

class Users extends Component {
	state = {
		users: [
			{
				name: 'john',
				status: 'active',
				lastLogin: '14-02-2018',
				id: 1
			},
			{
				name: 'james',
				status: 'active',
				lastLogin: '14-02-2018',
				id: 2
			},
			{
				name: 'joe',
				status: 'active',
				lastLogin: '14-02-2018',
				id: 3
			}
		],
		user: [],
		showEdit: false
	}

	editUser = item => {
		this.setState({showEdit: true, user: item})
	}

	close = () => {
		this.setState({showEdit: false})
	}

	deleteUser = item => {}

	render() {
		const { users, user, showEdit } = this.state
		return (
			<div className="Users">
				<Table striped>
					<thead>
						<tr className="tr-lg">
							<th width="25%">name</th>
							<th width="25%">status</th>
							<th width="25%">last login</th>
							<th width="25%">actions</th>
						</tr>
						{
							users.map((item, i) => {
								return (
									<tr key={i} className="tr-md">
										<th width="25%">name</th>
										<th width="25%">status</th>
										<th width="25%">last login</th>
										<th width="25%">actions</th>
									</tr>
								)
							})
						}
					</thead>
					<tbody>
						{
							users.map((item, i) => {
								return (
									<tr key={i}>
										<td width="25%">{item.name}</td>
										<td width="25%">{item.status}</td>
										<td width="25%">{item.lastLogin}</td>
										<td width="25%">
											<Button className="blue-btn" href={`/home/users/${item.id}`}>view</Button>
											<Button className="blue-btn" onClick={() => this.editUser(item)}>edit</Button>
											<Button className="gray-btn" onClick={() => this.deleteUser(item)}>delete</Button>
										</td>
									</tr>
								)
							})
						}
					</tbody>
				</Table>
				<EditUser showEdit={showEdit} close={this.close} user={user} />
            </div>
		)
	}
}

const mapStateToProps = state => ({
	session: state.session
});

export default connect(mapStateToProps)(Users)