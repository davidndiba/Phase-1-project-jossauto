
document.addEventListener("DOMContentLoaded",initialize)


function initialize(){
fetchData()
fetchCars()
}

function fetchData(){
fetch('http://localhost:3000/garage')
.then(response => response.json())
.then(data=>data.forEach(element=>{fixCar(element)}))
}

function fixCar(car){
let container=document.querySelector("#garage-container")

let img = document.createElement("img");
 img.src=car.image;
container.appendChild(img);
img.style.display = "flex";
img.style.border = "2px solid purple";
img.style.flexWrap = "wrap";
img.style.gap = "2rem";
img.style.marginTop ="2rem";
img.style.position = "relative"

let test =document.createElement("h1")
test.innerText=car.model;
test.classList.add("car-model")
container.appendChild(test)

let year = document.createElement("p");
year.innerText=car.year;
year.classList.add("car-year")
container.appendChild(year)

let content =document.createElement("h2")
content.innerText=`service  ${car.service_description}`;
content.classList.add("service-description")
container.appendChild(content);
}

function fetchCars(){
    fetch('http://localhost:3000/cars')
    .then(response => response.json())
    .then((data)=>data.forEach(element=>hireCar(element)))
    
    }
    
    function hireCar(car){
    let container=document.querySelector("#car hire")
    
    let image = document.createElement("img");
     image.src=car.image
    container.appendChild(img)
    img.innerText =`${car.model}`
    
    let rental_price =document.createElement("h1")
    rental_price.innerText=car.year
    container.appendChild(rental_price)
    
    let year = document.createElement("p");
    year.innerText=car.model
    container.appendChild(year)
    
    let content =document.createElement("h1")
    content.innerText=`service  ${car.rental_price}`
    container.appendChild(content);
    }

    function autoshop(){
        fetch('http://localhost:3000/auto_shop')
        .then(response => response.json())
        .then((data)=>data.forEach(element=>auto(element)))
        
        }
        
        function auto(car){
        let container=document.querySelector("#cars-container")
        
        let image = document.createElement("img");
         image.src=car.model
        container.appendChild(img)
        img.innerText =`${car.model}`
        
        let rental_price =document.createElement("h1")
        rental_price.innerText=car.year
        container.appendChild(rental_price)
        
        let year = document.createElement("p");
        year.innerText=car.model
        container.appendChild(year)
        
        let content =document.createElement("h1")
        content.innerText=`service  ${car.rental_price}`
        container.appendChild(content);
        }
    


    


