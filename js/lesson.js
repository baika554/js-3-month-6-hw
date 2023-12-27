const card = document.querySelector('.card');
const btnNext = document.querySelector('#btn-next');
const btnPrev = document.querySelector('#btn-prev');

let countCard = 1;

const fetchCardData = (cardNumber) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${cardNumber}`)
        .then(response => response.json())
        .then((data)=>{
            card.innerHTML = `
                <p>${data.title}</p>
                <p style="color: ${data.completed ? 'green' : 'red'}">${data.completed}</p>
                <span>${data.id}</span>
            `;
            console.log(data);
        });
};

const handleNextClick = () => {
    countCard = (countCard % 200) + 1;
    fetchCardData(countCard);
};

const handlePrevClick = () => {
    countCard = (countCard === 1) ? 200 : countCard - 1;
    fetchCardData(countCard);
};

fetchCardData(countCard);

btnNext.addEventListener('click', handleNextClick);
btnPrev.addEventListener('click', handlePrevClick);


const fetchAndDisplayPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then((data) => {
            console.log(data);
        });
};

fetchAndDisplayPosts();