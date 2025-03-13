const linkApi = 'https://flynn.boolean.careers/exercises/api/random/mail';
let ulElement = document.querySelector('.list-group');

for (let i = 0; i < 10; i++) {

    axios.get(linkApi)
        .then(response => {
            const result = response.data;
            createLi(result.response);

            console.log(result.response);
        })
        .catch(error => {
            error = 'ERRORE!!!!!'
            createLi(error);
        });
}




/*
    Funzione creare i li nell'html
 <li class="list-group-item"></li>

*/

function createLi(email) {
    let liElement = document.createElement('li');
    liElement.classList.add('list-group-item');
    liElement.append(email);
    ulElement.append(liElement);


    console.log(liElement);

    return ulElement;

}