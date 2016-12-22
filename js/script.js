window.onload = function() {
	const colors = [];
	colors.push('bg-blue');
	colors.push('bg-l-blue');
	colors.push('bg-red');
	colors.push('bg-purple');
	colors.push('bg-l-purple');
	colors.push('bg-yellow');
	colors.push('bg-teal');
	colors.push('bg-green');

	// shuffle
	const shuffle = function() {return Math.random()-.5};
	colors.sort(shuffle);
	
	// change background-color
	document.getElementsByTagName('body')[0].className = colors[0];
};

// image size
const width = 259;
const height = 224;

let x = 0;
let y = 0;
let x_start = 0;
let y_start = 0;
let x_end = 0;
let y_end = 0;

function Animation() {
	let obj = document.getElementById('back').style;
	x_start = document.body.scrollLeft;
	y_start = document.body.scrollTop;
	x_end = x_start +document.body.clientWidth - width;
	y_end = x_start + document.body.clientHeight - height;

	if (x <= x_start) add_x = Math.floor(Math.random()*20+0.1);
	if (y <= y_start) add_y = Math.floor(Math.random()*20+0.1);
	if (x >= x_end) add_x = (Math.floor(Math.random()*20+0.1))*(-1);
	if (y >= y_end) add_y = (Math.floor(Math.random()*20+0.1))*(-1);

	x = x + add_x;
	if (x < x_start) x = x_start;
	else if (x > x_end) x = x_end;

	y = y + add_y;
	if (y < y_start) y = y_start;
	else if (y > y_end) y = y_end;
	
	obj.left = x;	
	obj.top = y;
}

setInterval( 'Animation()', 5);
