const search = document.querySelector('.searchbox');

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('#search-tag').onclick = () => {
        search.classList.toggle('active')
    }
}) 

