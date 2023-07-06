
document.addEventListener("DOMContentLoaded",initialize)


function initialize(){
fetchData()

}

function fetchData(){
fetch('http://localhost:3000/garage')
.then(response => response.json())
.then(data=>data.forEach(element=>{hireCar(element)}))

}

function hireCar(car){
let container=document.querySelector("#garage-container")

let img = document.createElement("img");
 img.src=car.image
 img.id="small"
container.appendChild(img)

let test =document.createElement("h1")
test.innerText=car.model
container.appendChild(test)

let year = document.createElement("p");
year.innerText=car.year
container.appendChild(year)

let content =document.createElement("h1")
content.innerText=`service  ${car.service_description}`
container.appendChild(content);

}


