import axios from 'axios';


const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NmVlOTYwOWM0MWRmYWQyMzNkNGY5NTE2ZmMzNjI5OCIsIm5iZiI6MTczOTc4NzExMy44MTMsInN1YiI6IjY3YjMwYjY5OWJjZjQ1NzUyY2UwZDI5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KqVBQYgOVgY3akkS3bjvnFdApAWku7vH2WFdt0e-iQ0'
      }
});


export default instance;


/*'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NmVlOTYwOWM0MWRmYWQyMzNkNGY5NTE2ZmMzNjI5OCIsIm5iZiI6MTczOTc4NzExMy44MTMsInN1YiI6IjY3YjMwYjY5OWJjZjQ1NzUyY2UwZDI5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KqVBQYgOVgY3akkS3bjvnFdApAWku7vH2WFdt0e-iQ0'*/


