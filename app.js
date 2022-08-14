const cardArray = [
    {
        name: 'fries',
        img:'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img:'images/cheeseburger.png',
    },

    {
        name: 'hotdog',
        img:'images/hotdog.png',
    },
    {
        name: 'icecream',
        img:'images/icecream.png',
    },
    {
        name: 'milshake',
        img:'images/milkshake.png',
    },
    {
        name: 'pizza',
        img:'images/pizza.png',
    },
    {
        name: 'fries',
        img:'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img:'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img:'images/hotdog.png',
    },
    {
        name: 'icecream',
        img:'images/icecream.png',
    },
    {
        name: 'milshake',
        img:'images/milkshake.png',
    },
    {
        name: 'pizza',
        img:'images/pizza.png',
    },
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector( '#grid' )
const cardsChosen = []

function createBoard () {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i )
        gridDisplay.appendChild(card)
        card.addEventListener('click', flipCard)
    }
}
createBoard()

function flipCard(){
    console.log('card');
    const cardId = this.getAttribute('data-id')
    console.log(cardArray[cardId].name);
    console.log('clicked', cardId);
}
