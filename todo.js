let todolist=[
    {
        element:'Study',
        due:'2023-02-05'
    },
    {
        element:'Sleep',
        due:'2023-02-05'
    }
];


displayItems();
function addtodo()
{
    let inputElement=document.querySelector("#item");
    //console.log(inputElement)-->This will select whole html element input. thats why extract its value as shown below
    let dateElement=document.querySelector("#todo-date")
    let item=inputElement.value;
    let todoDate=dateElement.value;
    todolist.push({element: item, due: todoDate});
    inputElement.value='';
    dateElement.value='';
    
    displayItems();

}

//used to display items given by user. called everytime user adds an element
//delete button-->it gives delete button to user along with splice function deletes the item from array
function displayItems()
{
    let containerElement=document.querySelector(".todo-container");
    let newHtml='';
    
    for(let i=0;i<todolist.length;i++)
    {
        newHtml+=
        ` 
            <span>${todolist[i].element}</span>
            <span>${todolist[i].due}</span>
            <button class="btn-delete" onClick="todolist.splice(${i},1); displayItems();">Delete</button>
          
        `;
    }
    containerElement.innerHTML=newHtml;
}