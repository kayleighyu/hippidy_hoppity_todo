var todoApp = {
  todos: [], //our data source/Store
  init: function(){
    todoApp.cacheDOM();
    todoApp.addEventListeners();
    todoApp.render();
  },
  cacheDOM: function(){
    todoApp.createButton = document.querySelector('#create');
    todoApp.taskInput = document.querySelector('#task');
    todoApp.list = document.querySelector('#list');
    todoApp.categoryInput = document.querySelector('#category');
    todoApp.dateInput = document.querySelector('#date');
    //queryselector selects anything based on its css selector. Typically finds ID bc it's unique.
  },
  render: function(){ //puts things on the page
    console.log(todoApp.todos);
    var listItemsFromTodos = todoApp.todos
                                 .map(function(todo){ //mapping is transforming, making a new array after the transformation
                                   return `<li>${todo.task}:  (${todo.date})  [${todo.category}]</li>`;
                                 })
                                 .join('');//the map creates an array with the above string in each position in array, then the join joins all of those strings together
    todoApp.list.innerHTML = listItemsFromTodos;
  },
  addEventListeners: function(){
    todoApp.createButton.addEventListener('click', todoApp.addTodo);
  },
  addTodo: function(){
    var task = todoApp.taskInput.value; //specific to input fields
    var date = todoApp.dateInput.value;
    var category = todoApp.categoryInput.value;
    var newTodo = createTodo(task, date, category);
    todoApp.todos.push(newTodo);
    todoApp.taskInput.value = "";
    todoApp.dateInput.value = "";
    todoApp.categoryInput.value = "";
    todoApp.render();
  }
};
todoApp.init();
