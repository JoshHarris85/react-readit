import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { editComment } from '../actions/actions';

const customStyles = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.75)'
  },
  content : {
    position                   : 'absolute',
    top                        : '150px',
    left                       : '70px',
    right                      : '70px',
    bottom                     : '150px',
    border                     : '1px solid #ccc',
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '20px'

  }
};

class EditComment extends Component {
  state = {
    modalIsOpen: false,
    form: {
      id: this.props.comment.id,
      timestamp: Date.now(),
      body: this.props.comment.body
    }
  };

  openModal = () => {
    this.setState({modalIsOpen: true});
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  update = e => {
    this.setState({ ...this.state, form: {
      ...this.state.form,
      [e.target.name]: e.target.value
    }});
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.editComment(this.state.form)
    this.closeModal()
  };

  // React-Modal requirement for screen readers
  componentWillMount() {
      Modal.setAppElement('body');
  }

  render() {
    const { comment } = this.props
    return (
      <div>
        <button className="Edit-Comment" onClick={this.openModal}>
          Edit Comment
        </button>

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Modal"
        >

          <form>
            <div className="Modal-Input-Container">
              <label>Author:</label>
              {comment.author}
            </div>

            <div className="Modal-Input-Container">
              <label htmlFor="modal-body">Body:</label>
              <textarea rows={5} cols={40}
                id="modal-body"
                name="body"
                defaultValue={comment.body}
                ref={(input) => this.input = input}
                onChange={this.update}
              />
            </div>

            <button className="Modal-Button" onClick={this.handleSubmit}>Submit</button>
          </form>
          <button className="Modal-Button" onClick={this.closeModal}>Close</button>
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  editComment: (comment) => dispatch(editComment(comment))
});

export default connect(
  null,
  mapDispatchToProps
)(EditComment)
