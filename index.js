document.addEventListener("DOMContentLoaded",initialize)


function initialize(){
fetchData()
fetchCars()
autoshop()
}

function fetchData(){
fetch('http://localhost:3000/garage')
.then(response => response.json())
.then(data=>data.forEach(element=>{fixCar(element)}))
}

function fixCar(car){
let container=document.querySelector("#garage-container")
let childDiv=document.createElement("div")
childDiv.id="garage_child"
container.appendChild(childDiv);


let img = document.createElement("img");
img.id="img_Garage"
childDiv.appendChild(img)
img.src=car.image;
childDiv.appendChild(img);
// img.style.display = "flex";
// img.style.border = "2px solid purple";
// img.style.flexWrap = "wrap";
// img.style.gap = "2rem";
// img.style.marginTop ="2rem";
// img.style.position = "relative"

let test =document.createElement("h1")
test.innerText=car.model;
test.classList.add("car-model")
childDiv.appendChild(test)

let year = document.createElement("p");
year.innerText=car.year;
year.classList.add("car-year")
childDiv.appendChild(year)

let content =document.createElement("h2")
content.innerText=`service ${car.service_description}`;
content.classList.add("service-description")
childDiv.appendChild(content);
}

function fetchCars(){
fetch('http://localhost:3000/cars')
.then(response => response.json())
.then(data=>data.forEach(element=>{hireCar(element)}))
}

function hireCar(car) {
let container = document.querySelector("#car-hire");
 

let image = document.createElement("img");
image.src = car.image;
 

container.appendChild(image);
 

let model = document.createElement("h1");
model.innerText = car.model;
container.appendChild(model);
 

let year = document.createElement("p");
year.innerText = car.year;
container.appendChild(year);
 

let rentalPrice = document.createElement("h1");
rentalPrice.innerText = `Rental Price: ${car.rental_price}`;
container.appendChild(rentalPrice);
}
 
let search = document.querySelector(".searchbox");

document.querySelector("#search-icon") .onclick = () => {
    search.classList.toggle('active');
}