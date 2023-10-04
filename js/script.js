const review = [
    {
        id: 1,
        nome: 'Camila Souza',
        profissao: 'Empresária',
        img: './images/img-1.png',
        texto: 'Donec tristique mauris sed dignissim. Nulla facilisi. In facilisis eget neque sed rutrum. Nulla ut orci pretium, tempor mauris ac, ultrices massa. Curabitur non interdum lacus.' 
    },
    {
        id: 2,
        nome: 'João Paulo',
        profissao: 'Diretor',
        img: './images/img-2.png',
        texto: 'Nulla imperdiet ex at mi ullamcorper imperdiet. Ut vitae malesuada eros. Donec eu ex ornare dictum non quis turpis. Maecenas ac massa et mi facilisis ornare ultrices enim.' 
    },
    {
        id: 3,
        nome: 'Nayara Dantas',
        profissao: 'Consultora Imobiliaria',
        img: './images/img-3.png',
        texto: 'Vestibulum vitae aliquam mi, vitae tempor mauris. Aliquam in nulla porttitor, efficitur diam at, aliquet justo. Sed tempor porttitor quam volutpat lacinia. Etiam non mattis erat dui.' 
    },
    {
        id: 4,
        nome: 'Simone Silva',
        profissao: 'Bancária',
        img: './images/img-4.jpg',
        texto: 'Suspendisse in ex quam. Sed mattis interdum est, sit amet vulputate felis laoreet quis. Aenean convallis porttitor maximus. Curabitur convallis, elit finibus vulputate consectetur.' 
    },
    {
        id: 5,
        nome: 'Ana Paula',
        profissao: 'Marketing',
        img: './images/img-5.jpeg',
        texto: 'Aenean libero nulla, pulvinar vitae imperdiet non. Curabitur consectetur consequat gravida. Proin eu Pellentesque habitant morbi tristique senectus et  malesuada.' 
    },
    {
        id: 6,
        nome: 'Marcos Paulo',
        profissao: 'Customer',
        img: './images/img-6.jpg',
        texto: 'Curabitur consectetur consequat gravida. Aenean libero nulla, pulvinar vitae imperdiet non. Proin eu Pellentesque habitant morbi tristique senectus et  malesuada.' 
    }
];

const img = document.querySelector('#img');
const nome = document.querySelector('#nome');
const profissão = document.querySelector('#profissao');
const texto = document.querySelector('#texto');
const btnPrev = document.querySelector('#btn-prev');
const btnNext = document.querySelector('#btn-next');
const btnRandom = document.querySelector('#btn-random');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', () => {
    const item = review[currentItem];
    img.src = item.img;
    nome.textContent = item.nome;
    profissao.textContent = item.profissao;
    texto.textContent = item.texto;
});

function showReviews(comments){
    const item = review[comments];
    img.src = item.img;
    nome.textContent = item.nome;
    profissao.textContent = item.profissao;
    texto.textContent = item.texto;
}

btnPrev.addEventListener('click', () => {
    currentItem --;
    if( currentItem < 0 ){
        currentItem = review.length -1;
    }
    showReviews(currentItem)
})

btnNext.addEventListener('click', (e) => {
    currentItem++;
    if( currentItem > review.length - 1){
        currentItem = 0;
    }
    showReviews(currentItem);
});

btnRandom.addEventListener('click', () => {
    currentItem = Math.floor(Math.random() * review.length);
    showReviews(currentItem);
})


