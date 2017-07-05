console.log("Up and running!");
var score = 0;
var cards = [
	{
		rank: "queen",
		suit: "hearts", 
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds", 
		cardImage: "images/queen-of-diamonds.png"
	},	
	{
		rank: "king",
		suit: "hearts", 
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds", 
		cardImage: "images/king-of-diamonds.png"
	}
];
var cardsInPlay = [];

var checkForMatch = function(){
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You have found a match");
		score++;
		scoreBoard();
	}
	else{
		alert("Sorry, try again.");
		score--;
		scoreBoard();
	}
}

var flipCard = function(){
	var cardId = this.getAttribute('data-id');
	console.log ("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2){
		checkForMatch();
	}
}

var createBoard = function(){
	scoreBoard();
	for (var i = 0; i < cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

createBoard();

function scoreBoard(){
	document.getElementById('score').innerHTML = "Score: " + score;
}

function reset(){
	document.getElementById('game-board').innerHTML = "";
	createBoard();
	cardsInPlay = [];
}
