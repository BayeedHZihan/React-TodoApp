import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      todoList : [],
      inputText : ""
    }
    this.handleUserInput = this.handleUserInput.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleButtonClick(){
    this.setState({
      todoList: this.state.todoList.concat({id:Math.random(), title:this.state.inputText}),
      inputText : ""
    })
  }

  handleUserInput(e){
    this.setState({
      inputText : e.target.value
    })
  }

  componentDidMount(){
    console.log(this.state)
  }

  componentDidUpdate(){
    console.log(this.state)
  }
  handleDelete(id){
    console.log(id)
    const delList = this.state.todoList.filter(todo =>{
      return todo.id != id
    })
    this.setState({
      todoList : delList
    })
  }

  render(){
    const displayList = this.state.todoList.map(todo => {
      return (
        <div onClick={()=>{this.handleDelete(todo.id)}} key={todo.id} style={{background:"lightgreen", color:"maroon"}}>
          <span>{todo.title}</span>
        </div>
      )
    })
    return (
      <div className="App">
        <h1 style={{background:'lightblue', color:'darkred'}}>Todo List</h1>
        <div>
          {/* display the notes here*/}
          {displayList}
        </div>
        <input type='text' onChange={this.handleUserInput} value={this.state.inputText}/>
        <button onClick={this.handleButtonClick}>Add</button>
      </div>
    );
  }
} 

export default App;
