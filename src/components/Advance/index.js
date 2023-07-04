import Swiper, { Pagination } from "swiper";

export default function Advance() {
	const advanceSwiper = new Swiper("#advance-news-container", {
		modules: [Pagination],
		direction: "vertical",
		slidesPerView: 3,
		slidesPerGroup: 3,
		pagination: {
			el: "#advance-news-pagination",
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '">' + (index + 1) + "</span>";
			},
		},
	});

	let selected = 0;
	const advanceButtons = $(".advance-button");
	advanceButtons.eq(selected).attr("selected", "");
	advanceButtons.each(function (index, element) {
		$(element).on("click", function (event) {
			advanceButtons.eq(selected).removeAttr("selected");
			selected = index;
			advanceButtons.eq(selected).attr("selected", "");
		});
	});
}
