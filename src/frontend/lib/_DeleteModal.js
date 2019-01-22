import React from 'react';
import Modal from 'react-responsive-modal';
import PropTypes from 'prop-types';

export default class DeleteModal extends React.Component {
    render() {
        return <Modal open={this.props.open} onClose={this.props.onClose} center >
            <div className="modal-wrapper">
                <h2>{this.props.heading}</h2>
                <div className="content">
                    {this.props.content}
                </div>
                <div className="footer">
                    <a className="btn btn-light margin-right-20"
                        onClick={this.props.onClose}>Cancel</a>
                    <a className="btn btn-danger text-light"
                        onClick={this.props.onConfirmDelete}>Delete</a>
                </div>
            </div>
        </Modal>
    }
}

DeleteModal.propTypes = {
    open: PropTypes.bool,
    heading: PropTypes.string,
    content: PropTypes.string,
    onClose: PropTypes.func,
    onConfirmDelete: PropTypes.func
};