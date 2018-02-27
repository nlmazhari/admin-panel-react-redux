import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table,Button } from 'react-bootstrap'

import EditRoom from './EditRoom'

class Rooms extends Component {
    state = {
        rooms: [
            {
                name: 'happy songs',
                genre: 'happy',
                date: '02-14-2018',
                id: 1
            },
            {
                name: 'sad songs',
                genre: 'sad',
                date: '02-14-2018',
                id: 2
            },
            {
                name: 'focus',
                genre: 'non vocal',
                date: '02-14-2018',
                id: 3
            }
        ],
        room: [],
        showEdit: false
    }

    editRoom = item => {
        this.setState({showEdit: true, room: item})
    }

    close = () => {
        this.setState({showEdit: false})
    }

    deleteRoom = item => {}

    render() {
        const {rooms, showEdit, room} = this.state
        return (
            <div className="Rooms">
                <Table striped>
                    <thead>
                        <tr className="tr-lg">
                            <th width="25%">name</th>
                            <th width="25%">genre</th>
                            <th width="25%">date</th>
                            <th width="25%">actions</th>
                        </tr>
                        {
							rooms.map((item, i) => {
								return (
									<tr key={i} className="tr-md">
										<th width="25%">name</th>
                                        <th width="25%">genre</th>
                                        <th width="25%">date</th>
                                        <th width="25%">actions</th>
                                    </tr>
								)
							})
						}
                    </thead>
                    <tbody>
                        {
                            rooms.map((item, i) => {
                                return (
                                    <tr key={i}>
                                        <td width="25%">{item.name}</td>
                                        <td width="25%">{item.genre}</td>
                                        <td width="25%">{item.date}</td>
                                        <td width="25%">
                                            <Button className="blue-btn" href={`/home/room/${item.id}`}>view</Button>
                                            <Button className="blue-btn" onClick={() => this.editRoom(item)}>edit</Button>
                                            <Button className="gray-btn" onClick={() => this.deleteRoom(item)}>delete</Button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
                <EditRoom showEdit={showEdit} close={this.close} room={room}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    session: state.session
});

export default connect(mapStateToProps)(Rooms)