import React, { Component } from 'react';

class InputTodo extends Component {
    state = {
      title: '',
    };

    onChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }

      handleSubmit = (e) => {
        e.preventDefault();
        const { title } = this.state;
        if (title.trim()) {
          this.props.addTodoProps(title);
          this.setState({
            title: '',
          });
        }
      };

      render() {
        const { title } = this.state;
        return (
          <form onSubmit={this.handleSubmit} className="form-container">
            <input
              type="text"
              className="input-text"
              placeholder="Add todo..."
              value={title}
              name="title"
              onChange={this.onChange}
            />
            <button className="input-submit">Submit</button>
          </form>
        );
      }
}

export default InputTodo;
