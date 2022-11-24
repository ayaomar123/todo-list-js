const myInput = document.querySelector('.myInput')
const myButton = document.querySelector('.add')
const myList = document.querySelector('.todolist')

function clickButton(e) {
    e.preventDefault()
    addTodo()
}

// adding todoList
function addTodo() {
    const myItems = document.createElement('div')
    myItems.classList.add('myItems')

    const item = document.createElement('span')
    item.classList.add('item')
    item.innerText = myInput.value
    myItems.appendChild(item)

    if (myInput.value === '') return


    const trashbutton = document.createElement("button")
    trashbutton.innerHTML = '<i class="fa-solid fa-trash" style="color: red"></i>'
    trashbutton.classList.add("delete")
    myItems.appendChild(trashbutton)

    myList.appendChild(myItems)
    myInput.value = ''
}

// checking and delete todoList 
function okdel(e) {
    const item = e.target

    // delete
    if (item.classList[0] === 'delete') {
        const todolist = item.parentElement
        todolist.remove()
    }
}

myButton.addEventListener('click', clickButton)
myList.addEventListener('click', okdel)