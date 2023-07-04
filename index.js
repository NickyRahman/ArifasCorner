let PROJECT_ID = "7xewdg3j";

let DATASET = "production";

//let QUERY = encodeURIComponent('*[_type == "blogs"]');

let QUERY = encodeURIComponent(`*[_type == "blogs"]{

    title,

    date,

    content,

    picture{

      asset->{

        _id,

        url

      }

    }

  }`);




// Compose the URL for your project's endpoint and add the query

export let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;


export let posts = [];  

// fetch the content

fetch(URL)

.then((res) => {
    return res.json();
})

.then(( {result} ) => {

    posts = result;
    console.log(posts);

    // const element = document.getElementById("posts");

    // element.innerHTML = all_posts_HTML(result);

   

})

.catch((err) => console.error(err));