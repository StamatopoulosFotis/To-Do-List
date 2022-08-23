"use strict";






function addToList(){

let taskName = document.getElementById("taskname").value;      // access in html element input field

let  todoDiv = document.getElementById("mytodo");        // access in html element list with todo actions

let newtodoItem = document.createElement('div');

let todoName = document.createElement("li");    // in li element, we need to store value of the input field 
          
todoName.innerHTML = taskName;    //add the texture in this empty li element (=fill the value in the li element)

let deleteBtn = document.createElement("i");

deleteBtn.classList.add("fa");

deleteBtn.classList.add("fa-trash");

newtodoItem.appendChild(todoName);

newtodoItem.appendChild(deleteBtn);

todoDiv.appendChild(newtodoItem);

}



let todoDiv = document.getElementById("mytodo");

todoDiv.addEventListener("click", deleteItem);


function deleteItem(e){

// alert("Deleted function executed!")

const element = e.target;

if(element.classList[0]=="fa")

element.parentElement.remove();

}



