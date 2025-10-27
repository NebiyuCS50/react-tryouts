import { Component } from "react";
import ClassInputCounter from "./ClassInputCounter";

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      inputVal: "",
      editId: null,
      editText: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.startEdit = this.startEdit.bind(this);
    this.handleInputChangeEdit = this.handleInputChangeEdit.bind(this);
    this.saveEdit = this.saveEdit.bind(this);
  }

  handleInputChange(e) {
    this.setState({ inputVal: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const id = crypto.randomUUID();
    const text = this.state.inputVal.trim();
    if (!text) {
      alert("Input cannot be empty or whitespace only");
      return;
    }
    this.setState((state) => ({
      todos: state.todos.concat({ id, text: state.inputVal }),
      inputVal: "",
    }));
  }
  deleteTodo(todoToDelete) {
    this.setState((state) => ({
      todos: state.todos.filter((todo) => todo.id !== todoToDelete.id),
    }));
  }
  startEdit(todo) {
    this.setState((state) => ({
      ...state,
      editId: todo.id,
      editText: todo.text,
    }));
  }
  handleInputChangeEdit(e) {
    this.setState((state) => ({
      ...state,
      editText: e.target.value,
    }));
  }
  saveEdit(e) {
    e.preventDefault();
    this.setState((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === state.editId ? { ...todo, text: state.editText } : todo
      ),
      editId: null,
      editText: "",
    }));
  }

  render() {
    return (
      <section>
        <h3>{this.props.name}</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            id="task-entry"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        <ul>
          {this.state.todos.map((todo) => (
            <li key={todo.id}>
              {todo.text}{" "}
              {this.state.editId === todo.id ? (
                <>
                  <input
                    type="text"
                    value={this.state.editText}
                    onChange={this.handleInputChangeEdit}
                  />
                  <button onClick={this.saveEdit}>Resubmit</button>
                </>
              ) : (
                <button onClick={() => this.startEdit(todo)}>Edit</button>
              )}
              <button onClick={() => this.deleteTodo(todo)}>Delete</button>
            </li>
          ))}
        </ul>
        <ClassInputCounter count={this.state.todos.length} />
      </section>
    );
  }
}

export default ClassInput;
