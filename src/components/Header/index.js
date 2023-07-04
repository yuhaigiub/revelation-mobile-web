export default function Header() {
	let isOpenNews = false;
	let sections = [
		{ left: $("#sulan-academy-left-blue"), right: $("#hoc-vien-sulan") },
		{ left: "", right: "" },
		{ left: $("#beginner-left-blue"), right: $("#nha-tham-hiem-so-cap") },
		{ left: $("#advance-left-blue"), right: $("#nha-tham-hiem-cao-cap") },
	];
	let active = 0;
	const menuItems = $("#menu-container .menu-option");
	menuItems.eq(active).attr("active", true);
	sections[0].left.show();
	sections[0].right.show();
	menuItems.each(function (i, element) {
		if (i === 1) return;
		$(element).on("click", function (event) {
			menuItems.eq(active).attr("active", false);
			$(element).attr("active", true);
			sections[active].left.hide();
			sections[active].right.hide();
			sections[i].left.show();
			sections[i].right.show();
			if (isOpenNews && active !== i) {
				isOpenNews === false;
				newsDetail.hide();
			}
			active = i;
		});
	});

	// news
	const newsDetail = $("#news-detail");
	const news = $(".news");
	news.each(function (index, element) {
		$(element).on("click", function (event) {
			sections[active].right.hide();
			newsDetail.show();
			isOpenNews = true;
		});
	});

	const monButtons = $("#mon-swiper a");
	const ngheButtons = $("#nghe-swiper a");
	const guideLinks = $(".guide-link-container a");
	monButtons.each(function (index, element) {
		$(element).on("click", function () {
			sections[active].right.hide();
			newsDetail.show();
			isOpenNews = true;
		});
	});

	ngheButtons.each(function (index, element) {
		$(element).on("click", function () {
			sections[active].right.hide();
			newsDetail.show();
			isOpenNews = true;
		});
	});

	guideLinks.each(function (index, element) {
		$(element).on("click", function () {
			sections[active].right.hide();
			newsDetail.show();
			isOpenNews = true;
		});
	});

	// news back
	const newsBackButton = $("#news-detail-first-block button");
	newsBackButton.on("click", function (event) {
		newsDetail.hide();
		sections[active].right.show();
		isOpenNews = false;
	});

	// language
	let isOpenMenu = false;
	const selectLanguageButton = $("#select-language-button");
	const languageDropdown = $("#language-dropdown");
	const languageOptions = $("#language-dropdown li");
	languageDropdown.hide();

	selectLanguageButton.on("click", function (event) {
		isOpenMenu = !isOpenMenu;
		if (isOpenMenu) {
			languageDropdown.slideDown();
		} else {
			languageDropdown.slideUp();
		}
	});

	let currentLanguage = 1;
	const texts = [
		{ lang: "en", texts: $(`html [lang="en"]`) },
		{ lang: "vi", texts: $(`html [lang="vi"]`) },
		{ lang: "cn", texts: $(`html [lang="cn"]`) },
	];

	console.log(texts[0].texts.length);

	texts.map((obj, index) => {
		if (index === currentLanguage) {
			obj.texts.show();
		} else {
			obj.texts.hide();
		}
	});

	languageOptions.each(function (index, element) {
		$(element).on("click", function (event) {
			console.log(index);
			languageOptions.eq(currentLanguage).removeAttr("selected");
			texts[currentLanguage].texts.hide();

			currentLanguage = index;
			languageOptions.eq(currentLanguage).attr("selected", "");
			isOpenMenu = false;
			languageDropdown.slideUp();

			// change all text language here
			texts[currentLanguage].texts.show();
		});
	});

	window.addEventListener("click", function (event) {
		if (event.target.matches("#language-select-container *")) return;

		if (isOpenMenu) {
			isOpenMenu = !isOpenMenu;
			languageDropdown.slideUp();
		}
	});
}
