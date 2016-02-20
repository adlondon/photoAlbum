/* jshint ignore:start */

var albumMap = function (array) {
  return array.map( function (el ) {
    return {
      albumRel: el.albumRel,
      albumTitle: el.albumTitle,
      albumCover: el.albumCover,
    }
  });
};

var albumDisplay = "";
_.each(albumMap(img), function (item) {
  albumDisplay += "<div class='albumDiv'id='" + item.albumRel + "'>"
  + "<img  src='" + item.albumCover + "'>"
  + "<p>" + item.albumTitle + "</p>"
  + "</div>"
});

$('.mainView').append(albumDisplay);

var selectedAlbum = ""
$('.albumDiv').on("click", function(event) {
  event.preventDefault();
  $("section").removeClass("active");
  $('.albumView').addClass("active");
  selectedAlbum = $(this).attr("id");
  setPhotoDisplay(selectedAlbum);
});

var getAlbumPhotos = function (albumclicked) {
  var photoArray = img.filter (function (item) {
    return item.albumRel === albumclicked;
  });
  return photoArray[0].photos;
}
var setPhotoDisplay = function(chosenAlbum) {
var photoDisplay = "";

_.each(getAlbumPhotos(chosenAlbum), function (item) {
  photoDisplay += "<div class='photoDiv' id='" + item.photoRel+ "'>"
  + "<img src='" + item.photoThumb + "'>'"
  + "<p>" + item.photoName + "</p>"
  + "</div>"
});
console.log(photoDisplay)

$('.albumContent').append(photoDisplay);
}


var selectedPhoto = "";
$('body').on("click", ".photoDiv", function (event) {
  event.preventDefault();
  $("section").removeClass("active");
  $('.photoView').addClass("active");
  selectedPhoto = $(this);
  $('.photoFullView').append(selectedPhoto);
  })

var getPhoto = function (photoRel) {
  var currentAlbum = $('.albumDiv').attr("id");
  var currentPhotos = getAlbumPhotos(currentAlbum);
  var getPhotoFull = currentPhotos.filter(function (el) {
    return el.photoRel === futurephotoRel;
  });
  return getPhotoFull[0]
}
