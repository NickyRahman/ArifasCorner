
import { fetchData } from "./fetch-data.js"

function displayPosts(posts) {
    let html = "";
    posts.forEach( p => {
        console.log(p._id);
        html += `<div class="blogpost">
            <img src=${p.picture.asset.url} alt="Blog Name">
            <h2>${p.title}</h2>
            <p class="b-date">${p.date}</p>
            <p class="b-content">${cutContent(p.content)}</p>
            <a href="./post.html?id=${p._id}">Read more...</a>
        </div>`;
    });

    // html+= '<div>Navigation</div>';

    return html;

    function cutContent(content) {
        return content.substring(0, 200) + "..."
    }
}

fetchData("blog", displayPosts);