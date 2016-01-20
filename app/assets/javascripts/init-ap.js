$(function(){

  function removeIframe(){
    $iframe.remove()
  }  

  function hideWrapper(){
    $wrapper.fadeOut()
  }

  function removeTopPadding(){
    $("#your-site").removeClass('padd-da-top')
  }

  var $iframe      = $("#your-site"),
      $wrapper     = $("#trump-warning-wrapper"),
      $placeholder = $(".append-youtube"),
      $hiddenUIs   = $(".my-hidden"),
      $hideAfter   = $(".hide-after-load"),
      youtubeURL   = "https://www.youtube.com/watch?v=CyIEfG-WbRk",
      funnyCode    = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/CyIEfG-WbRk?autoplay=1" frameborder="0" allowfullscreen  onload="this.width=screen.width;this.height=screen.height;"></iframe>'

  

  $iframe.on("load", function () {
    $(".hide-after-load").fadeOut()
     $hiddenUIs.removeClass("my-hidden")
  });//load

  $( "#trump-warning-wrapper .yes" ).click(function() {
    $placeholder.append(funnyCode)
    removeIframe()
    hideWrapper()
  });

  $( "#trump-warning-wrapper .no" ).click(function() {
    hideWrapper()
    removeTopPadding()
    $(".tump-non-muslim-badge").addClass("onscreen")
  });

  $(".your-input-url").focus()
});//ready