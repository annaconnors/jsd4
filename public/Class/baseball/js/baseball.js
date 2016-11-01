// Elements
// ------------------------------------------
var date      = document.querySelector('.date');
var games     = document.querySelector('.games');


var dateTemplete = document.querySelector("#date-template");

// Templates
// ------------------------------------------


var templateFn = Handlebars.compile(dateTemplate.innerHTML);

var html = templateFN(json);
