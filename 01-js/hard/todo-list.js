/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
    this.todos = [];
  }
  add(todo){
    if(!todo){
      console.log("Todo cannot be empty");
    }
    this.todos.push(todo);
  }
  remove(indexOfTodo){
    if(indexOfTodo >= 0 || indexOfTodo < this.todos.length){
      this.todos.splice(indexOfTodo,1);
    }
    else{
      console.log("Invalid index");
    }
    
  }
  update(index, updatedTodo){
    if(index >= 0 && index < this.todos.length){
      this.todos[index] = updatedTodo;
    }
    else{
      console.log("Invalid index");
    }
  }
  getAll(){
    return this.todos;
  }
  get(indexOfTodo){
    if(indexOfTodo < 0 || indexOfTodo >= this.todos.length){
      console.log("Invalid index");
      return null;
    }
    return this.todos[indexOfTodo];
  }
  clear(){
    this.todos = [];
  }


}

module.exports = Todo;
