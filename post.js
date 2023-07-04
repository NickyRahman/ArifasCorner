import { fetchPost } from "./fetch-data.js";

const currentUrl = window.location.search;
// console.log(currentUrl);

const urlParams = new URLSearchParams(currentUrl);
// console.log(urlParams);

const id = urlParams.get('id');
// console.log(id);

//2. Create a new fetchPost(id, section, HTMLfunction)
// p

fetchPost(id, "i-post", displayPost);




// 3. Modify to display one post

function displayPost(p) {
    let html = "";
        html += `<div class="i-post-content">
            <img src=${p.picture.asset.url} alt="Blog Name">
            <h2>${p.title}</h2>
            <h3>By Arifa Afzal</h3>
            <p class="i-post-date">${p.date}</p>
            <pre>${p.content}</pre>
        </div>`;


    // html+= '<div>Navigation</div>';

    return html;

    function cutContent(content) {
        return content.substring(0, 200) + "..."
    }
}

// fetchPost("post", displayPost);