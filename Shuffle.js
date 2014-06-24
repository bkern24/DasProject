var $ = function (id)
{
	return document.getElementById(id);
}

//
//***********************************************************************
// Function: Shuffle(cards)
//
// Parameters: cards - The number of cards in the deck
//
// Description: Creates an array containing the #'s 0-(cards - 1) in
// random order
//
// Return: Returns an array for deck indexing 
//
//***********************************************************************
//

function shuffle(cards)
{
	var rVariable = 0;
	var firstArray = [];
	var chosenArray = [];
	
	for (var i = 0; i <= cards - 1; i++) 
	{
		do
		{
			rVariable = Math.floor(Math.random() * cards);
		}
		while(IfChosen(rVariable,chosenArray) == 1);
		
	
		firstArray.unshift(rVariable);
		chosenArray.unshift(rVariable);
	}

	return firstArray;
	
}

//
//***********************************************************************
// Function: DrawTopCard(deck)
//
// Parameters: deck - array of the deck indexes
//
// Description: Removes top card form deck using shift()
//
// Return: Top Card of deck or 0 for error
//
//***********************************************************************
//

function DrawTopCard(deck)
{
	if(deck.length > 0)
	{
		return deck.shift();
	}

	else
	{
		return 0; //0 = fail :)
	}
}

//
//***********************************************************************
// Function: SearchDeck(deck,index)
//
// Parameters: deck - array of the deck indexes
//			   index - index of deck to remove (0 represents top card)
//
// Description: Removes specified index from deck
//
// Return: Card index removed, or 0 if error
//
//***********************************************************************
//

function SearchDeck(deck,index)
{
	if(deck.length > 0 && index >= 0 && index < deck.length)
	{
		return deck.splice(index,1);
	}
	else
	{
		return 0; //0 = fail :)
	}
}

//
//***********************************************************************
// Function: IfChosen(var1,obj)
//
// Parameters: var1 - variable to check, something contained in obj
//			   obj - Array of indexes
//
// Description: Used in shuffle function to check if var1 is present
// in the obj array
//
// Return: 1 - If var1 is contained in obj
//		   0 - If var1 is not in obj
//
//***********************************************************************
//

function IfChosen(var1,obj)
{
	for (var i = 0; i <=  obj.length - 1; i++) 
	{
		if(obj[i] == var1)
		{
			return 1;
		}
	}

	return 0;
}

//
//***********************************************************************
// Function: window.onload = function()
//
// Parameters: NA
//
// Description: Not important to project used for testing/demo
//
// Return: 
//
//***********************************************************************
//

window.onload = function () 
{

	var parts = window.location.search.substr(1).split("&");
var $_GET = {};
for (var i = 0; i < parts.length; i++) {
    var temp = parts[i].split("=");
    $_GET[decodeURIComponent(temp[0])] = decodeURIComponent(temp[1]);
}
	if($_GET['param1'] != null && $_GET['param2'] != null)
	{
		var length = parseInt($_GET['param1'],10);
		var splice = parseInt($_GET['param2'],10);
		var Deck = shuffle(length);
		$('text').innerHTML = Deck.toString();
		$('shifted').innerHTML = DrawTopCard(Deck).toString() + " ---- " + Deck.toString();
		$('splice').innerHTML = SearchDeck(Deck,splice).toString() + " ---- " + Deck.toString();
	}
	
}