
$(document).ready(function () {
  const phrases = ['Reiss Edler', 'personal portfolio'];
  const divs = ['mainText', 'secText']; 
  var isMac = navigator.platform.toUpperCase().indexOf('MAC')>=0;
  var mainText = document.getElementById('mainText');
  var secText = document.getElementById('secText');
  if (isMac) {
    mainText.className += ' Mac-main';
    secText.className += ' Mac-sec';  
  }

  $("#moreBtn").click(function() {
    if ($("#hiddenTable:first").is(":hidden")) {
      $("#hiddenTable").slideDown(3000);
      $(this).text('Show Less');
    } else {
      $("#hiddenTable").slideUp(1500);
      document.getElementById("scrollMarker").scrollIntoView({behavior: 'smooth'})
      $(this).text('Show More');
    }
  });
  $("#HeatDemoBtn").click(function() {
    window.location.href = '/heatDemo';
  });
  $("#christmasCardBtn").click(function() {
    window.location.href = '/christmas';
  });  

  // if screen < 905px wide then change fade in

  // modal start -----------------------------------------------------------------

  var modal = document.getElementById('heatModal');
  var btn = document.getElementById("heatMoreBtn");
  var span = document.getElementsByClassName("close")[0];

  btn.onclick = function() {
    modal.style.display = "block";
  }
  span.onclick = function() {
    modal.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  // modal end -----------------------------------------------------------------

  function slide(id) {
    if ($(id).is(":hidden")) {
      $(id).slideDown(2000);
    } else {
      $(id).slideUp(2000);
    }
  }

  for (var x = 0; x < phrases.length; x++) {  // split the array into characters and generate the html
    const createLetterArray = (string) => {
      return string.split('');
    }
    const createLetterLayers = (array) => {  
      return array.map((letter) => {
        let layer = '';
        for (let i = 1; i <= 2; i++) {
          if(letter == ' '){
            layer += '<span class="titleSpans space"></span>';
          }else{
            layer += '<span class="titleSpans letter-'+i+'">'+letter+'</span>';
          }
        }
        return layer;
      });
    }
    const createLetterContainers = (array) => {
      return array.map((item) => {
        let container = '';
        container += '<div class="wrapper">'+item+'</div>';
        return container;
      });
    }
    const outputLayers = new Promise(function(resolve, reject) {
      document.getElementById(divs[x]).innerHTML = createLetterContainers(createLetterLayers(createLetterArray(phrases[x]))).join('');
      resolve();
    });
    const spans = Array.prototype.slice.call(document.getElementsByClassName('titleSpans'));
    outputLayers.then(() => {
      return spans.map((span) => {
        setTimeout(() => {
          span.parentElement.style.width = span.offsetWidth+'px';
          span.parentElement.style.height = span.offsetHeight+'px';
        }, 250);
      });  
    }).then(() => {
      let time = 1200;  //250
      return spans.map((span) => {
        time += 75;
        setTimeout(() => {
          span.parentElement.style.top = '0px';
        }, time);
      });
    });
  }
});