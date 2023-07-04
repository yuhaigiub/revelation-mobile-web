import Swiper from "swiper";

export default function SulanAcademy() {
	const guideSwiper = new Swiper("#guide-container", {
		direction: "horizontal",
		slidesPerView: "auto",
		spaceBetween: 12,
	});

	const ngheSwiper = new Swiper("#nghe-swiper", {
		slidesPerView: 4.5,
	});

	const monSwiper = new Swiper("#mon-swiper", {
		slidesPerView: 4.5,
	});

	let guideActive = "none";
	const guideSlides = $("#guide-container .swiper-slide");
	guideSlides.find(".guide-hover-container").hide();

	guideSlides.each(function (index, element) {
		$(element).on("click", function (event) {
			if (guideActive !== index) {
				$(element).find(".guide-hover-container").slideDown();
				$(element).find("img").css({ opacity: 0.2 });
				if (guideActive !== "none") {
					guideSlides.eq(guideActive).find(".guide-hover-container").slideUp();
					guideSlides.eq(guideActive).find("img").css({ opacity: 1 });
				}
				guideActive = index;
				console.log(guideActive);
			}
		});
	});

	// window.addEventListener("click", (event) => {
	// 	if (guideActive !== "none") {
	// 		if (!event.target.matches("#guide-container *:not(a)")) {
	// 			console.log(event.target);
	// 			guideSlides.eq(guideActive).find(".guide-hover-container").slideUp();
	// 			guideActive !== "none";
	// 		} else if (event.target.matches("#guide-container a")) {
	// 		}
	// 	}
	// });
}
