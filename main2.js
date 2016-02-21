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
