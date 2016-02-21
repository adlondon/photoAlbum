/* jshint ignore:start */

var albumDisplay ="";
_.each(img, function (item) {
  albumDisplay += "<div class='albumDiv'id='" + item.albumRel + "'>"
  + "<img  src='" + item.albumCover + "'>"
  + "<p>" + item.albumTitle + "</p>"
  + "</div>"
});
$('.mainView').append(albumDisplay);



var selectedAlbum ="";
$(".albumDiv").on("click", function(el) {
  el.preventDefault();
  $("section").removeClass("active");
  $(".albumView").addClass("active");
  selectedAlbum = $(this).attr("id");
  setPhotoDisplay(selectedAlbum)
})

var getAlbumPhotos = function (albumclicked) {
  var photoArray = img.filter(function (el) {
    return el.albumRel === albumclicked;
  });
  return photoArray[0].photos;
}

var setPhotoDisplay = function (albumselected) {
var photoDisplay = "";
_.each(getAlbumPhotos(selectedAlbum), function (item) {
  photoDisplay += "<div class='photoDiv' id='" + item.photoRel+ "'>"
  + "<img src='" + item.photoThumb + "'>"
  + "<p>" + item.photoName + "</p>"
  + "</div>"
});
$(".albumContent").append(photoDisplay)
};


var selectedPhoto ="";
$('.photoDiv').on("click", function(el) {
  el.preventDefault();
  $(".albumView").removeClass("active");
  $(".photoView").addClass("active");
  selectedPhoto = $(this).attr("id");
  setPhotoFull(selectedPhoto)
})

var getPhotoFull = function(photothumbclicked) {
  var photoFullArray = img.filter(function (el) {
    return el.photos.photoRel === photothumbclicked;
  });
  return photoFullArray[0].photos;
};

var setPhotoFull = function (photofullget) {
  var photoFull = "";
  _.each(getPhotoFull(selectedPhoto), function (item) {
    photoFull += "<div class 'photoFullDiv'>" + item.photoFull + "</div>";
  });
  $(".photoFullView").append(photoFull);
}
