let PROJECT_ID = "7xewdg3j";
let DATASET = "production";
//let QUERY = encodeURIComponent('*[_type == "blogs"]');

// fetch the content
export function fetchData(element_name, HTMLfunction) {

  let QUERY = encodeURIComponent(`*[_type == "blogs"]{
    _id,
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

let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;
    fetch(URL)
    .then((res) => {
        return res.json();
    })
    .then(( {result} ) => {

        const element = document.getElementById(element_name);
        element.innerHTML = HTMLfunction(result);
    })

    .catch((err) => console.error(err));
}


// /////////////////////////// fetch individual blogpost
export function fetchPost(id, element_name, HTMLfunction) {
  // && _id == ${id}
  console.log("__"+id+"__");
  let QUERY = encodeURIComponent(`*[_type == "blogs" && _id == "${id}"]{
    _id,
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

let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;
    fetch(URL)
    .then((res) => {
        return res.json();
    })
    .then(( {result} ) => {
        console.log(result[0]);
        const element = document.getElementById(element_name);
        element.innerHTML = HTMLfunction(result[0]);
    })

    .catch((err) => console.error(err));
}








// Compose the URL for your project's endpoint and add the query

// export let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

// export let URL = `https://<your-project-id>.api.sanity.io/v1/data/query/<your-dataset>?query=*[_type=="blogPost" && _id=="<your-blog-post-id>"]



// // fetch the content
// export function fetchData(element_name, HTMLfunction) {
//   fetch(URL)
//   .then((res) => {
//       return res.json();
//   })
//   .then(( {result} ) => {

//       const element = document.getElementById(element_name);
//       element.innerHTML = HTMLfunction(result);
//   })

//   .catch((err) => console.error(err));
// }