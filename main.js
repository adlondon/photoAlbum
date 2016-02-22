/* jshint ignore:start */

var albumDisplay ="";
_.each(img, function (item) {
  albumDisplay += "<div class='albumDiv'rel='" + item.albumRel + "'>"
  + "<img  src='" + item.albumCover + "'>"
  + "<p>" + item.albumTitle + "</p>"
  + "</div>"
});
$('.mainView').append(albumDisplay);

// ************************** NAV BAR

 var navDisplay ="";
 _.each(img, function (item) {
   navDisplay += "<div class ='navItems' rel='" + item.albumRel + "'>" + item.albumTitle + "</div>"

 });

 $(".navBar").html(navDisplay)

 var selectedPhotoAlbums = "";
 $('.navBar').on('click', function (event) {
   console.log ("Navigation is being clicked");
   event.preventDefault();
   selectedPhotoAlbums = ($(this).attr('rel'));
   $('.albumDiv').not(this).find('.albumDiv').hide();
   setPhotoDisplay(selectedPhotoAlbums);
 });

// *************************** SELECTED ALBUM VIEW
var selectedAlbum ="";
$(".albumDiv").on("click", function(el) {
  el.preventDefault();
  $("section").removeClass("active");
  $(".albumView").addClass("active");
  selectedAlbum = $(this).attr("rel");
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
  photoDisplay += "<div class='photoDiv' rel ='" + item.photoRel+ "'>"
  + "<img src='" + item.photoThumb + "'>"
  + "<p>" + item.photoName + "</p>"
  + "</div>"
});
$(".albumContent").html(photoDisplay)
};
// ************************ SELECTED PHOTO VIEW
// nathan told me how to do the below code. see main2.js for what I was trying

$('.albumContent').on("click",'img', function(el) {
  el.preventDefault();
  console.log("CLICK");
  $("section").removeClass("active");
  $(".photoView").addClass("active");
  var selectedPhoto = $(this).attr("src");
  var selectedFull = selectedPhoto.replace(/thumb\.png/gi,"full.jpeg");
  console.log(selectedFull);
  setPhotoFull(selectedFull)
})

var setPhotoFull = function (photofullget) {
  var photoFull = "";
    photoFull += "<div class='photoFullDiv'><img src='" + photofullget + "' /></div>";
    console.log(photoFull);
  $(".photoFullView").html(photoFull);
}

// end of nathans code

$(".backToAlbum").on("click", function(el) {
  el.preventDefault();
  $("section").removeClass("active");
  $(".albumView").addClass("active");
});
