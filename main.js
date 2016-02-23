/* jshint ignore:start */
var albumTemplate = _.template($("#albumTemp").html());
var albumDisplay =""
_.each(img, function (item) {
  albumDisplay += albumTemplate(item);
});
$('.mainView').append(albumDisplay);

// ************************** NAV BAR

var navTemplate = _.template($("#navTemp").html());
 var navDisplay ="";
 _.each(img, function (item) {
  navDisplay += navTemplate(item);
 });
 $(".navBar").html(navDisplay);

 var selectedPhotoAlbums = "";
 $('.navBar').on('click','.navItems', function (event) {
   event.preventDefault();
   selectedPhotoAlbums = $(this).attr('rel');
   console.log ("Navigation is being clicked",$(this).attr('rel'));
   setPhotoDisplay(selectedPhotoAlbums);
 });

 var photoTemplate = _.template($("#photoTemp").html());
 // photoTemplate var set outsideof function so it will be global and can be called below with identical template

 var setPhotoDisplay = function (albumselected) {
  var photoDisplay = "";
 _.each(getAlbumPhotos(selectedPhotoAlbums), function (item) {
  photoDisplay += photoTemplate(item)
 });
 $(".albumContent").html(photoDisplay)
 };
// *************************** SELECTED ALBUM VIEW
$(".albumDiv").on("click", function(el) {
  el.preventDefault();
  $("section").removeClass("active");
  $(".albumView").addClass("active");
  var selectedAlbum = $(this).attr("rel");
  setPhotoDisplay(selectedAlbum)
})

var getAlbumPhotos = function (albumclicked) {
  console.log("HI",albumclicked);
  var photoArray = img.filter(function (el) {
    return el.albumRel === albumclicked;
  });
  return photoArray[0].photos;
}

var setPhotoDisplay = function (albumselected) {
  var photoDisplay = "";
  var items = getAlbumPhotos(albumselected);

  _.each(items, function (item) {
    photoDisplay += photoTemplate(item)
  });
$(".albumContent").html(photoDisplay)
};
// ************************ SELECTED PHOTO VIEW
// nathan told me how to do the below code. see main2.js for what I was trying
var selectedPhoto ="";


$('.albumContent').on("click",'img', function(el) {
  el.preventDefault();
  console.log("CLICK");
  $("section").removeClass("active");
  $(".photoView").addClass("active");
  var selectedPhoto = $(this).attr("src");
  var selectedFull = selectedPhoto.replace(/thumb\.png/gi,"full.jpeg");
  console.log(selectedFull);
  setPhotoFull(selectedFull);
})
// ************************ ON CLICK FOR PIC CHANGE
$(".photoView").on("click", ".photoFullDiv", function (el) {
  var selectedPhoto = $(this).next().attr("src");
  window.glob = $(this);
  console.log(selectedPhoto);
  setPhotoFull(selectedPhoto)
});
// ********************************************
var setPhotoFull = function (item) {
  var photoFull = "";
    photoFull += "<div class='photoFullDiv'><img src='" + item + "' /></div>";
  $(".photoFullView").html(photoFull);
}

// end of nathans code

$(".backToAlbum").on("click", function(el) {
  el.preventDefault();
  $("section").removeClass("active");
  $(".albumView").addClass("active");
});
