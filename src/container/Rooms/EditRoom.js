import React from 'react'
import moment from 'moment'
import {Modal, Button, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'

export default class EditRoom extends React.Component {
    componentDidMount() { 
        console.log('====================================');
        console.log(this.props);
        console.log('====================================');
    }
    
    editRoom = room => {
        console.log('====================================');
        console.log(this.props.room);
        console.log('====================================');
    }
    render () {
        return (
            <div>
                <Modal show={this.props.showEdit} onHide={this.props.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>edit room</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormGroup>
                            <ControlLabel>name:</ControlLabel>
                            <FormControl type="text" defaultValue={this.props.room.name} inputRef={(ref) => this.name = ref}></FormControl>
                            <ControlLabel>genre:</ControlLabel>
                            <FormControl type="text" defaultValue={this.props.room.genre} inputRef={(ref) => this.genre = ref}></FormControl>
                            <ControlLabel>date:</ControlLabel>
                            <FormControl type="date" defaultValue={moment(this.props.room.date).format('YYYY-MM-DD')} inputRef={(ref) => this.date = ref}></FormControl>
                        </FormGroup>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="blue-btn" onClick={this.editRoom(this.props.room)}>edit</Button>
                        <Button className="gray-btn" onClick={this.props.close}>Close</Button>
                    </Modal.Footer>
                </Modal>
                
            </div>
        )
    }
}