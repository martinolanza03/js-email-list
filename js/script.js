const linkApi = 'https://flynn.boolean.careers/exercises/api/random/mail';
let ulElement = document.querySelector('.list-group');

const elementForm = document.getElementById('form');

// Funzione per creare l'email

function createEmail() {

    ulElement.innerHTML = " ";

    for (let i = 0; i < 10; i++) {
        ulElement.innerHTML = " ";

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

// Richiamo la funzione premendo il bottone
elementForm.addEventListener('submit', function (event) {
    event.preventDefault();

    createEmail();
});

//Invoco la funzione
createEmail();
