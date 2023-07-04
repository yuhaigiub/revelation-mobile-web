import "./general.css";

import Header from "./components/Header";
import SulanAcademy from "./components/SulanAcademy";
import Beginner from "./components/Beginner";
import Advance from "./components/Advance";

$(function () {
	Header();
	SulanAcademy();
	Beginner();
	Advance();
});

// custom
const vertical = $("#vertical-overlay");

// scale root
const outerRoot = document.getElementById("outer-root");
const root = document.getElementById("root");

let mode, width, height, ratio;

function scaleRoot() {
	// custom
	const w = $(window).width();
	const h = $(window).height();
	if (w < h) {
		vertical.show();
	} else {
		vertical.hide();
	}

	// check on every trigger
	mode = window.innerWidth <= 768 ? "mobile" : "pc";
	width = root.offsetWidth;
	height = root.offsetHeight;
	ratio = width / height;

	const desiredWidth = window.innerWidth;
	const desiredHeight = desiredWidth / ratio;

	const ratioW = desiredWidth / width;
	const ratioH = desiredHeight / height;

	outerRoot.style.width = `${desiredWidth}px`;
	outerRoot.style.height = `${desiredHeight}px`;

	root.style.transform = `scale(${ratioW}, ${ratioH})`;
}

window.addEventListener("load", scaleRoot);
window.addEventListener("resize", scaleRoot);
