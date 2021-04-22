const addButton = document.querySelector(".addTodo");
const removeButton = document.querySelector(".removeTodo");
addButton.addEventListener("click",aboutAddLi)
const addEnter = document.querySelector(".textarea")
addEnter.addEventListener("keydown",aboutPressEnter)


function aboutPressEnter(e){
  
  if (e.key == "Enter") {
    return aboutAddLi()
  }
}
function aboutAddLi(){
  let getAboutText = document.querySelector(".textarea").value
  if(getAboutText.length > 1){
    let li = document.createElement("li")
    li.innerText = getAboutText
    let ul = document.querySelector(".ulAddLi")
    return ul.appendChild(li)
  }else{
    return alert("to add a todo type more then 1 character")
  }
  
}

