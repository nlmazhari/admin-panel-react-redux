import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, Button } from 'react-bootstrap'
import EditPlaylist from './EditPlaylist'

class Playlists extends Component {
    state = {
		playlists: [
			{
				name: 'playlist #1',
				status: 'active',
				lastLogin: '14-02-2018',
				id: 1
			},
			{
				name: 'playlist #2',
				status: 'active',
				lastLogin: '14-02-2018',
				id: 2
			},
			{
				name: 'playlist #3',
				status: 'active',
				lastLogin: '14-02-2018',
				id: 3
			}
		],
		playlist: [],
		showEdit: false
    }
    editPlaylist = item => {
		this.setState({showEdit: true, playlist: item})
	}

	close = () => {
		this.setState({showEdit: false})
	}

    deletePlaylist = item => {}
    
    render() {
        const {playlists, playlist, showEdit} = this.state
        return (
            <div className="Playlists">
                <Table striped>
					<thead>
						<tr className="tr-lg">
							<th width="25%">name</th>
							<th width="25%">status</th>
							<th width="25%">last login</th>
							<th width="25%">actions</th>
						</tr>
						{
							playlists.map((item, i) => {
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
							playlists.map((item, i) => {
								return (
									<tr key={i}>
										<td width="25%">{item.name}</td>
										<td width="25%">{item.status}</td>
										<td width="25%">{item.lastLogin}</td>
										<td width="25%">
											<Button className="blue-btn" href={`/home/playlist/${item.id}`}>view</Button>
											<Button className="blue-btn" onClick={() => this.editPlaylist(item)}>edit</Button>
											<Button className="gray-btn" onClick={() => this.deletePlaylist(item)}>delete</Button>
										</td>
									</tr>
								)
							})
						}
					</tbody>
				</Table>
                <EditPlaylist showEdit={showEdit} close={this.close} playlist={playlist}/>                
            </div>
        )
    }
}

const mapStateToProps = state => ({
    session: state.session
});

export default connect(mapStateToProps)(Playlists)