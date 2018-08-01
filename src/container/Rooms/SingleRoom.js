import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, Button } from 'react-bootstrap'

class SingleRoom extends Component {
    state = {
        songs: [
            {
                name: 'song1',
                room: 'happy songs',
                genre: 'happy',
                id: 1
            },
            {
                name: 'song1',
                room: 'happy songs',
                genre: 'happy',
                id: 1
            },
            {
                name: 'song1',
                room: 'happy songs',
                genre: 'happy',
                id: 1
            }
        ],
        song: [],
        showSong: false,
        showEdit: false
    }
    editSong = item => {}
    deleteSong = item => {}
    render() {
        const {songs, song, showSong, showEdit} = this.state
        return (
            <div className="single-room">
                <div className="back-btn-wrap">
                    <Button className="cyan-btn" href="/home/rooms">back to rooms</Button>
                </div>
                room info
                <Table striped>
					<thead>
						<tr className="tr-lg">
							<th width="25%">name</th>
							<th width="25%">room</th>
							<th width="25%">genre</th>
							<th width="25%">actions</th>
						</tr>
						{
							songs.map((item, i) => {
								return (
									<tr key={i} className="tr-md">
										<th width="25%">name</th>
										<th width="25%">room</th>
										<th width="25%">genre</th>
										<th width="25%">actions</th>
									</tr>
								)
							})
						}
					</thead>
					<tbody>
						{
							songs.map((item, i) => {
								return (
									<tr key={i}>
										<td width="25%">{item.name}</td>
										<td width="25%">{item.room}</td>
										<td width="25%">{item.genre}</td>
										<td width="25%">
											<Button className="blue-btn">view</Button>
											<Button className="blue-btn" onClick={() => this.editSong(item)}>edit</Button>
											<Button className="gray-btn" onClick={() => this.deleteSong(item)}>delete</Button>
										</td>
									</tr>
								)
							})
						}
					</tbody>
				</Table>
                votes
            </div>
        )
    }
}

const mapStateToProps = state => ({
    session: state.session
});

export default connect(mapStateToProps)(SingleRoom)