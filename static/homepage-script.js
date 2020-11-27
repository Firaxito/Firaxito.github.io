  var zabyvamSe = ["Moje oficiální stránka existuje někde jinde", "Rád programuji", "Rád prokrastinuju tvorbou github stránky"]; //TODO -> add more things l8r :)

  var hobbyId = 0;
  function animateHobby() {
    $('.letter-text .letter').each(function (){
      $(this).remove();

    });
    if(hobbyId >= zabyvamSe.length){
      hobbyId = 0;
    }

    $('.letter-text').text(zabyvamSe[hobbyId]);

    hobbyId++;

    $('.letter-text').each(function(){
      $(this).html($(this).text().replace(/(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])|([^\s]|\w)/g, "<span class='letter'>$&</span>"));
    });

  anime.timeline()
    .add({
    targets: '.letter-text .letter',
      translateX: [40,0],
      translateZ: 0,
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 1750,
      delay: function(el, i) {
        return 500 + 30 * i;
      }
  }).add({
    targets: '.letter-text .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1350,
    complete: animateHobby,
    delay: function(el, i) {
      return 100 + 30 * i;
    }
  });;

}

$(document).ready(function($) {
  setTimeout(function() {
    animateHobby();
  }, 5500);
});




anime({
    targets: '.path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function(el, i) { return 1000 + i * 80},
  });

  const staggersAnimation = anime.timeline({
    targets: '.path',
    loopComplete: (a) => console.log('end'),
  })
  .add({
    duration: 3000,
  })
  .add({
    easing: 'linear',
    fill: "rgb(255, 255, 255)",
    duration: 850,
    delay: anime.stagger(70, {easing: 'easeInSine'}),
  });

  staggersAnimation.play();

  function detectIE() {
    var ua = window.navigator.userAgent;
    var isIE = /MSIE|Trident/.test(ua);
    return isIE;
}

if(detectIE()){
  $(".homepage-content").empty();
  $(".homepage-content").html("<h3 style='margin-top: 200px'>Tato stránka nepodporuje Internet Explorer. Prosím, nebuďte 100 let za opicemi a stáhněte si Google Chrome.</h3>" +
  "<a style='margin-top: 24px' href='https://www.google.com/intl/cs/chrome/'><button>Stáhnout Google Chrome</button></a>")
}

$("#homepage-name").css("visibility", "visible");