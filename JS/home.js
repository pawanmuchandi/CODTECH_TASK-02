console.log('inside the home js file');

const renderPost = async (term) => {
    let url = 'http://localhost:3000/Post';

    if (term!=null) {
        url += `&q=${term}`;
    }

    const res = await fetch(url);               // fetch data and transfer to res
    const posts = await res.json();             // jeson will convert into array form
    console.log(posts);
    const blog = document.getElementById('blog');

    let str = '';
    posts.forEach(item => {

        str += `<div class="blog-item">
        <h2 class="head">${item.title}</h2>
        <p class="body">${item.body.slice(0, 150)} </p>
        <p class="likes">${item.likes} <i class="fas fa-heart"></i></p>
        <a class="a" href="../blogging/details.html?id=${item.id}">Read more...</a>
        </div>`;
    });
    blog.innerHTML = str;
}
const searchForm = document.querySelector('form');
// searchBa.getElementById('searchBar');
searchForm.addEventListener('Submit', (e) => {
    e.preventDefault();
    renderPost(searchForm.term.value.trim())
    // we want to get data so searchbar.term here the term is provided in name section
})
window.addEventListener('DOMContentLoaded', () => renderPost());            // will not execute automatically now
/*  If we want to sort data in any parameter base we can do this by ading some extra text on http link
1: http://localhost:3000/Post?_sort // doing this the data will sorted in ascending order
2: we can add some other values as well like want to sort the data according to no of likes then "http://localhost:3000/Post?_sort=likes&order=desc"
* the &: further condition . */

