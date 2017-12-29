import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { addComment } from '../actions/actions';

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

class NewComment extends Component {
  state = {
    modalIsOpen: false,
    form: {
      body: '',
      author: '',
      parentId: this.props.parentId
    }
  };

  openModal = () => {
    this.setState({modalIsOpen: true});
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
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
    this.props.addComment(this.state.form)
    this.closeModalAndClear()
  };

  // React-Modal requirement for screen readers
  componentWillMount(){
      Modal.setAppElement('body');
  }

  render() {
    const { categories } = this.props
    return (
      <div>
        <button className="New-Comment" onClick={this.openModal}>
          Create Comment
        </button>

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Modal"
        >

          <form>
            <div className="Modal-Input-Container">
              <label htmlFor="modal-author">Author:</label>
              <input
                id="modal-author"
                name="author"
                type="text"
                defaultValue={this.state.form.author}
                ref={(input) => this.input = input}
                onChange={this.update}
              />
            </div>

            <div className="Modal-Input-Container">
              <label htmlFor="modal-body">Body:</label>
              <textarea rows={5} cols={40}
                id="modal-body"
                name="body"
                defaultValue={this.state.form.body}
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

const mapStateToProps = (state, props) => ({
  categories: state.categories
});

const mapDispatchToProps = (dispatch) => ({
  addComment: (title, body, author, category) => dispatch(addComment(title, body, author, category))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewComment)
