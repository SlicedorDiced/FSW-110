var todoList = document.getElementsByTagName("LI");
var i;
for (i = 0; i < todoList.length; i++) {
  var xremove = document.createElement("SPAN");
  var string1 = document.createTextNode(" X");
  xremove.className = "remove";
  xremove.appendChild(string1);
  todoList[i].appendChild(xremove);
}
function clearList(){
  var clearList = document.getElementsByTagName("ul");
    clearList[0].innerHTML = "";
}


function addTodo() {
  var list = document.createElement("li");
  var newItem = document.getElementById("toDo").value;
  var newDo = document.createTextNode(newItem);
  list.appendChild(newDo);
  if (newItem === '') {
  alert("No input!");
  } else {
    document.getElementById("todoList").appendChild(list);
  }
  document.getElementById("toDo").value = "";
  var xremoveAdded = document.createElement("SPAN"); 
var xremove2 = document.getElementsByClassName("remove");
var i;
for (i = 0; i < xremove2.length; i++) {
  xremove2[i].onclick = function() {
  var listContainer = this.parentElement;
  listContainer.style.display = "none";
  }
}


  var txt = document.createTextNode(" X");
  xremoveAdded.className = "remove";
  xremoveAdded.appendChild(txt);
  list.appendChild(xremoveAdded);
  for (i = 0; i < xremove2.length; i++) {
    xremove2[i].onclick = function() {
        var listContainer = this.parentElement;
        listContainer.style.display = "none";
    }
  }
}
