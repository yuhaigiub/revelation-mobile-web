import Swiper, { Pagination } from "swiper";

export default function Beginner() {
	const beginnerSwiper = new Swiper("#beginner-news-container", {
		modules: [Pagination],
		direction: "vertical",
		slidesPerView: 3,
		slidesPerGroup: 3,
		pagination: {
			el: "#beginner-news-pagination",
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '">' + (index + 1) + "</span>";
			},
		},
	});

	let selected = 0;
	const beginnerButtons = $(".beginner-button");
	beginnerButtons.eq(selected).attr("selected", "");
	beginnerButtons.each(function (index, element) {
		$(element).on("click", function (event) {
			beginnerButtons.eq(selected).removeAttr("selected");
			selected = index;
			beginnerButtons.eq(selected).attr("selected", "");
		});
	});
}
