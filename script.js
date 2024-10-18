const  tableDiv = document.getElementById("tableDiv"); 
const tableBtn = document.getElementById("tableBtn");  

tableBtn.addEventListener("click", function(){
    tableDiv.innerHTML= '' ;  // initially empty right 
    const row = prompt("Enter the number of rows:"); 
    const col = prompt("Enter the number of columns:");  

    const table = document.createElement("table"); 
    table.className = "table"; 

    for(let i = 0 ; i < row; i++){
        const tr = document.createElement("tr") ; 
        tr.className = "tr"; 
        for(let j = 0 ; j < col; j++){
            const td = document.createElement("td");
            td.className = "td" ; 
            td.textContent = " Explorin " ;
            tr.appendChild(td); 
        }
        table.appendChild(tr); 
    }
    tableDiv.appendChild(table); 
})