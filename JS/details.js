console.log('Inside the details js file');
const id = new URLSearchParams(window.location.search).get('id');           // location btaya search bar and waha se search krke uski value le lia
console.log(id);


window.addEventListener('DOMContentLoaded', () => renderPost())
const renderPost = async () => {
    const res = await fetch('http://localhost:3000/Post/' + id);
    const post = await res.json();
    console.log(post)
    let str = `<div id="subcontent">
    <h2 class="head">${post.title}</h2>
    <p class="body">${post.body}</p>
    <p class="likes">${post.likes}<i class="fas fa-heart"></i></p>
    
    
    </div>`;
    const details = document.getElementById('details');
    details.innerHTML = str;
}
/*
const DEl = async (e) => {

    const res = await fetch('http://localhost:3000/Post/' + id, {
        method: 'DELETE'
    })
    window.location.replace('../blogging/home.html');
}*/

const deleteBtn = document.getElementById('btn');
deleteBtn.addEventListener('click', async (e) => {
    const res = await fetch('http://localhost:3000/Post/' + id, {
        method: 'DELETE'
    })
    window.location.replace('../blogging/home.html');

})
