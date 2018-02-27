import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import {Modal, Button, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'

class EditPlaylist extends React.Component {
    editPlaylist = () => {
        console.log('====================================');
        console.log(this.props.playlist);
        console.log('====================================');
    }
    render () {
        return (
            <div>
                <Modal show={this.props.showEdit} onHide={this.props.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>edit playlist</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormGroup>
                            <ControlLabel>name:</ControlLabel>
                            <FormControl type="text" defaultValue={this.props.playlist.name} inputRef={(ref) => this.name = ref}></FormControl>
                            <ControlLabel>status:</ControlLabel>
                            <FormControl type="text" defaultValue={this.props.playlist.status} inputRef={(ref) => this.status = ref}></FormControl>
                            <ControlLabel>date:</ControlLabel>
                            <FormControl type="date" defaultValue={moment(this.props.playlist.lastLogin).format('YYYY-MM-DD')} inputRef={(ref) => this.lastLogin = ref}></FormControl>
                        </FormGroup>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="blue-btn" onClick={this.editPlaylist()}>edit</Button>
                        <Button className="gray-btn" onClick={this.props.close}>Close</Button>
                    </Modal.Footer>
                </Modal>
                
            </div>
        )
    }
}

const mapStateToProps = state => ({
    session: state.session
});

export default connect(mapStateToProps)(EditPlaylist)