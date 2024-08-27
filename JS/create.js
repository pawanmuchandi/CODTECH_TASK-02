console.log('inside the create json');
const btn = document.getElementById("btn");
const form = document.querySelector('form');

const createPost = async (e) => {
    e.preventDefault();
    //  yaha aapn ko post request dalna hai
    const doc = {
        title: form.title.value,                    // these title an dvalues are just the values provided in value section
        body: form.body.value,
        likes: 0
    }
    // post method 
    await fetch('http://localhost:3000/Post', {
        method: "POST",
        body: JSON.stringify(doc),
        // need to define the header file as well
        headers: { 'content-type': 'application/json' }
    })
    window.location.replace('../blogging/home.html');
}

form.addEventListener('submit', createPost);
