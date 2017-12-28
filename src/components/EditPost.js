import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { editPost } from '../actions/actions';

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

class EditPost extends Component {
  state = {
    modalIsOpen: false,
    form: {
      id: this.props.post.id,
      title: this.props.post.title,
      body: this.props.post.body
    }
  };

  openModal = () => {
    this.setState({modalIsOpen: true});
  }

  closeModalAndClear = () => {
    this.setState({modalIsOpen: false, form: {}});
  }

  update = e => {
    this.setState({ ...this.state, form: {
      ...this.state.form,
      [e.target.name]: e.target.value
    }});
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.editPost(this.state.form)
    this.closeModalAndClear()
  };

  // React-Modal requirement for screen readers
  componentWillMount() {
      Modal.setAppElement('body');
  }

  render() {
    const { post } = this.props
    return (
      <div>
        <button className="Edit-Post" onClick={this.openModal}>
          Edit Post
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
              {post.author}
            </div>

            <div className="Modal-Input-Container">
              <label>Category:</label>
              {post.category}
            </div>

            <div className="Modal-Input-Container">
              <label htmlFor="modal-title">Title:</label>
              <input
                id="modal-title"
                name="title"
                type="text"
                defaultValue={post.title}
                ref={(input) => this.input = input}
                onChange={this.update}
              />
            </div>

            <div className="Modal-Input-Container">
              <label htmlFor="modal-body">Body:</label>
              <textarea rows={5} cols={40}
                id="modal-body"
                name="body"
                defaultValue={post.body}
                ref={(input) => this.input = input}
                onChange={this.update}
              />
            </div>

            <button className="Modal-Button" onClick={this.handleSubmit}>Submit</button>
          </form>
          <button className="Modal-Button" onClick={this.closeModalAndClear}>Close</button>
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  editPost: (title, body) => dispatch(editPost(title, body))
});

export default connect(
  null,
  mapDispatchToProps
)(EditPost)
