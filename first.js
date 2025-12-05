let toDoList=[];

function toDoFun(){
    let to_do=document.querySelector("#to-do-input");
    let to_date=document.querySelector("#to-do-date");
    let value=to_do.value;
    let date_value=to_date.value;
    console.log(value);
    toDoList.push({item:value,dueDate:date_value});
    to_do.value="";
    to_date.value="";
    display();
}


function display(){
    let listDisplay=document.querySelector("#toDoDisplay");
    //listDisplay.innerText="";
    let newHtml="";
    for(let i=0;i<toDoList.length;i++){
        let item=toDoList[i].item;
        let dueDate=toDoList[i].dueDate;
        newHtml=newHtml+`
                <span>${item}</span>
                <span>${dueDate}</span>
                <button id="del-but" onclick="toDoList.splice(${i},1);display()">Delete</button>
        `;
    }
    listDisplay.innerHTML=newHtml;  
}
