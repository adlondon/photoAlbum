$(".sideNav li").on("click", function(){
  var albumName = $(this).attr("rel");
  var result = images.filter(function(el){
    return el.album === albumName;
  });
  $(".images").html("<h2>Images</h2>");
  $(".images").append(buildImageRows(result));
  $(this).siblings().removeClass("activeAlbum");
  $(this).addClass("activeAlbum");
});
