import React from 'react';

class AddTodo extends React.Component {

  state = {
    title: '',
    content: '',
    errors: {}
  };

  onSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      title: this.state.title,
      content: this.state.content
    }

    this.props.onSubmit(newTodo);


    this.setState({
      title: '',
      content: ''
    })
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render(){
    return(
      <div className="search-bar ui segment">
        <form onSubmit={this.onSubmit} className="ui form">

          <div className="field">
            <label>Title</label>
            <input
              name="title"
              type="text"
              value={this.state.title}
              onChange={this.onChange}

            />
          </div>

          <div className="field">
            <label>Details</label>
            <input
              name="content"
              type="textfield"
              value={this.state.content}
              onChange={this.onChange}

            />
          </div>

          <button type="submit">Add Todo</button>

        </form>
      </div>
    );
  }

}

export default AddTodo
