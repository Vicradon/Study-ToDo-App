document.addEventListener('DOMContentLoaded', () => {
  //nav menu
  const menus = document.querySelectorAll('.side-menu');
  M.Sidenav.init(menus, { edge: 'left' });

  //todo
  let todo_input = document.querySelector('#to-study');
  let todos = document.querySelector('.todos');
  let enter_btn = document.querySelector('.enter-btn');
  let delete_btn = document.querySelectorAll('.delete');
  let check = document.querySelector('.check');
  let completed = document.querySelector('.completed');

  function add() {
    if (todo_input.value) {
      var todoText = todo_input.value;
      todo_input.value = "";
      todos.innerHTML += `
      <div class="card-panel todo white row">
      <span class="todo-detail"> ${todoText} </span> <i class="delete material-icons right">delete_outline</i><span class="material-icons right check">check</span>
    </div>
    `;
    }
  }

  enter_btn.addEventListener('click', add);
  todo_input.onkeypress = function (event) {
    if (event.which === 13) {
      add();
    }
  };

  document.addEventListener('click', function(event){
    if(event.target.classList.contains('delete')){
      event.target.parentNode.remove();
    }
  }, false);

  document.addEventListener('click', function(event){
    if(event.target.classList.contains('check')){
      completed.append(event.target.parentNode);
      event.target.parentNode.classList.add('strike_through');
      
      event.target.parentNode.innerHTML += `<i class = 'material-icons right revert'>ballon</i>`;
      event.target.remove();
    }
  }, false);
  

});
