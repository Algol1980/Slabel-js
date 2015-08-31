
// // var objLi = document.createElement("li");

// // var objSpan = document.createElement("span");

// // objUl.appendChild(objLi);
// // objLi.appendChild(objSpan);

// function Book (bookName, author, pages) {
// 	this.name = bookName;
// 	this.author = author;
// 	this.pages = pages;

// }
// var books = [];
// books.push(new Book("Eloquent Javascript", "Harverbeke", 350))
// books.push(new Book("Javascript", "Flannagan", 900))
// books.push(new Book("Javascript Good PArts", "Crockord", 550))
// books.push(new Book("Javascript by Example", "Bla bla bla", 890))

// // var appEnd = document.body.appendChild;
// // var crEate = document.body.createElement;
// var objUl = document.createElement("ul");



// // function createSpan () {
// // 	var objSpan = crEate("span");
// // }


// function renderBook (element, index, array) {
// 	var objLi = document.createElement("li"), 
// 			spanName = document.createElement("span"), 			
// 			spanAuthor = document.createElement("span"), 			
// 			spanPage = document.createElement("span"); 

// 	spanName.innerHTML = element.name;
// 	spanAuthor.innerHTML = element.author;
// 	spanPage.innerHTML = element.pages;

// 	objLi.appendChild(spanName);
// 	objLi.appendChild(spanAuthor);
// 	objLi.appendChild(spanPage);
// 	objUl.appendChild(objLi);

			
// }
// books.forEach(renderBook);
// document.body.appendChild(objUl);

// var clickHandler = function clickHandler (key) {
// 	console.log('clickHandler 1', books, key);
// 	books.sort(function (a, b) {
// 		if (a[key] > b[key]) {
// 			return 1;
// 		};
// 		if (a[key] < b[key]) {
// 			return -1;
// 		};
// 		return 0;
// 	});
// };

// function createButton (text, key, callback) {
// 	var button = document.createElement("button")
// 	button.innerHTML = text;
// 	button.addEventListener("click", callback.bind(null, key));
// 	document.body.appendChild(button);

// 	callback();
// }
// createButton("Sort by Author", "author", clickHandler);
// createButton("Sort by Name", "name", clickHandler);
// createButton("Sort by Page", "page", clickHandler);

// 	var clickHandler = function clickHandler () {
		
// 	}

function Book (bookName, author, pages) {
	this.name = bookName;
	this.author = author;
	this.pages = pages;
}
var books = [];
books.push(new Book('Javascript Good Parts', 
	'Crokfold', '300'));
books.push(new Book('PHP Bad Parts', 
	'Fold', '500'));
books.push(new Book('Java Many Parts', 
	'Crok', '1000'));
books.push(new Book('HTML Good Parts', 
	'Rokfold', '300'));

function createSpan () {
	var spanObj = document.createElement('span');
}
// 0
// var appEnd = document.body.appendChild;
// var crEate = document.createElement;
//appEnd( nodeDiv )

//1
var ulObj = document.createElement('ul');

//2
function renderBook (element, index, array) {
	var liObj = document.createElement('li'),
		spanName = document.createElement('span'),
		spanAuthor = document.createElement('span'),
		spanPage = document.createElement('span');
	spanName.innerHTML = element.name;
	spanAuthor.innerHTML = element.author;
	spanPage.innerHTML = element.pages;
	liObj.appendChild( spanName );
	liObj.appendChild( spanAuthor );
	liObj.appendChild( spanPage );
	ulObj.appendChild( liObj );
}
books.forEach(renderBook);

//3
document.body.appendChild( ulObj );

//4
var clickHandler = function clickHandler ( key ) {
	console.log('clickHandler 1', books, key);
	books.sort(function (a, b) {
 	  if (a[ key ] > b[ key ]) { //b[ 'name' ]
	    return 1;
	  }
	  if (a[ key ] < b[ key ]) {
	    return -1;
	  }
	  return 0;
	});
	console.log('clickHandler 2', books, key);
	ulObj.innerHTML = "";
books.forEach(renderBook);

};


function createButton (text, key, callback) {
	var button = document.createElement('button');
	button.innerHTML = text;
	var newCallback = callback.bind(null, key);
	button.addEventListener('click', newCallback); 
	document.body.appendChild(button);
}

createButton('Sort By Author', 'author', clickHandler);
createButton('Sort By Name', 'name', clickHandler);
createButton('Sort By Page', 'pages', clickHandler);
