const baseurl = 'https://blog.apiki.com';
const postsEndpoint = '/wp-json/wp/v2/';
const categoriesEndpoint = '/wp-json/wp/v2/categories';

const getPosts = (idCategoria) =>
  new Promise((resolve, reject) => {
    
    const endpoint = baseurl + postsEndpoint + 'posts?categories=' + idCategoria;   
     
    fetch(endpoint)
      .then(response => response.json()
        .then(json => ({
          totalPages: response.headers.get("x-wp-totalpages"),
          totalPosts: response.headers.get("x-wp-total"),
          allHeaders: response.headers,
          json
        })))
      .then(result => {
        console.log(endpoint); 
        console.log(result);
        resolve(result);
      }).catch((err) => {
        reject(err);
      });
  });

  const getPost = (slug) =>
  new Promise((resolve, reject) => {
    
    const endpoint = baseurl + postsEndpoint + 'posts?_embed&slug=' + slug;   
     
    fetch(endpoint)
      .then(response => response.json()
        .then(json => ({          
          json
        })))
      .then(result => {
        console.log(endpoint); 
        console.log(result);
        resolve(result);
      }).catch((err) => {
        reject(err);
      });
  });

  const getCategorias = () =>
  new Promise((resolve, reject) => {

    const endpoint = baseurl + categoriesEndpoint;

    fetch(endpoint)
      .then(response => response.json()
        .then(json => ({
          json
        })))
      .then(result => {
        console.log(result);
        resolve(result);
      }).catch((err) => {
        reject(err);
      });
  });


export  { getPosts, getPost, getCategorias };