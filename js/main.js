
// Смена главного изображения в карточке товара на выбранное из галереи
// Первый вариант
document.addEventListener('DOMContentLoaded', (event) => {
	document.getElementById('imageAlbum').addEventListener('click', function(e) {
		let targetImageAlbum = e.target;
		document.getElementById('imageMain').src = targetImageAlbum.src;
	});
});

// Второй вариант
// let gallery = document.getElementById('imageAlbum');
// gallery.addEventListener('click', function(e) {
//     let targetImgageAlbum = e.target;
//     document.getElementById('imageMain').src = targetImgageAlbum.src;
// });