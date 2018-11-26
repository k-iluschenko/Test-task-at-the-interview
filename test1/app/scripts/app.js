import svg4everybody from 'svg4everybody';
import $ from 'jquery';

$(() => {
	svg4everybody();
});

const thumb = document.getElementById('thumb');
const bg = document.getElementById('bg');
const level1 = document.getElementById('level1');
const level2 = document.getElementById('level2');
const level3 = document.getElementById('level3');
const level4 = document.getElementById('level4');
let dragStatus = false;
let x;

thumb.onmousedown = e => {
	dragStatus = true;
	x = e.pageX - thumb.offsetLeft;
};

thumb.style.left = '358px';

level1.onclick = e => {
	const xx = e.pageX - ((document.documentElement.clientWidth - 1000) / 2 + 112) - (thumb.offsetWidth / 2);
	if (xx < 52) { thumb.style.left = 2 - thumb.offsetWidth / 2 + 'px'; }
};

level2.onclick = e => {
	const xx = e.pageX - ((document.documentElement.clientWidth - 1000) / 2 + 112) - (thumb.offsetWidth / 2);
	if (xx < 310) { thumb.style.left = '134px'; }
};

level3.onclick = e => {
	const xx = e.pageX - ((document.documentElement.clientWidth - 1000) / 2 + 112) - (thumb.offsetWidth / 2);
	if (xx < 540) { thumb.style.left = '358px'; }
};

level4.onclick = e => {
	const xx = e.pageX - ((document.documentElement.clientWidth - 1000) / 2 + 112) - (thumb.offsetWidth / 2);
	if (xx < 770) { thumb.style.left = (bg.offsetWidth - thumb.offsetWidth / 2 - 1) + 'px'; }
};

document.onmousemove = e => {
	if (!dragStatus) { return false; }
	thumb.style.left = e.pageX - x + 'px';
	if (thumb.offsetLeft < 0) { thumb.style.left = 2 - thumb.offsetWidth / 2 + 'px'; }
	if (thumb.offsetLeft > 130 && thumb.offsetLeft < 150) { thumb.style.left = '132px'; }
	if (thumb.offsetLeft > 356 && thumb.offsetLeft < 376) { thumb.style.left = '358px'; }
	if (thumb.offsetLeft > 750) { thumb.style.left = (bg.offsetWidth - thumb.offsetWidth / 2 - 1) + 'px'; }
};

document.onmouseup = function () {
	dragStatus = false;
};
