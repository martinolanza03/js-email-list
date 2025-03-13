const linkApi = 'https://flynn.boolean.careers/exercises/api/random/mail';
const ulElement = document.querySelector('.list-group');


axios.get(linkApi)
    .then(response => {
        const result = response.data;

        console.log(result.response);
    })



/*
    Creare nell'html
 <li class="list-group-item"></li>

*/