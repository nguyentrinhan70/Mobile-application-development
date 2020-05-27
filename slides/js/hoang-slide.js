 
// Full list of configuration options available at:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
        controls: true,
        progress: true,
        history: true,
        center: true,

        transition: 'slide', // none/fade/slide/convex/concave/zoom

        // Optional reveal.js plugins
        dependencies: [
          { src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } },
          { src: 'plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
          { src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
          { src: 'plugin/highlight/highlight.js', async: true, condition: function() { return !!document.querySelector( 'pre code' ); }, callback: function() { hljs.initHighlightingOnLoad(); } },
          { src: 'plugin/zoom-js/zoom.js', async: true },
          { src: 'plugin/notes/notes.js', async: true }
        ]
});

Reveal.addEventListener( 'slidechanged', function( event ) {
        // load iframes on page enter to speed up initial load time
        console.log(event)
        var iframe = event.currentSlide.querySelector('iframe')
        if(iframe){
          iframe.setAttribute('src',iframe.getAttribute('isrc'));
        }

        var prevIframe = event.previousSlide.querySelector('iframe');
        if(prevIframe){
          prevIframe.setAttribute('src','');
        }

    // event.previousSlide, event.currentSlide, event.indexh, event.indexv
} );

var classHeadingColors1 = [
  ["bgTitle-Orient", "bgIntroduction-Orient", "bgTopicKeyword-Orient", "bgTopicDetail-Orient"],
  ["bgTitle-Ch01", "bgIntroduction-Ch01", "bgTopicKeyword-Ch01", "bgTopicDetail-Ch01"],
  ["bgTitle-Ch02", "bgIntroduction-Ch02", "bgTopicKeyword-Ch02", "bgTopicDetail-Ch02"],
  ["bgTitle-Ch03", "bgIntroduction-Ch03", "bgTopicKeyword-Ch03", "bgTopicDetail-Ch03"],
  ["bgTitle-Ch04", "bgIntroduction-Ch04", "bgTopicKeyword-Ch04", "bgTopicDetail-Ch04"],
  ["bgTitle-Ch05", "bgIntroduction-Ch05", "bgTopicKeyword-Ch05", "bgTopicDetail-Ch05"],
  ["bgTitle-Ch06", "bgIntroduction-Ch06", "bgTopicKeyword-Ch06", "bgTopicDetail-Ch06"],
  ["bgTitle-Ch07", "bgIntroduction-Ch07", "bgTopicKeyword-Ch07", "bgTopicDetail-Ch07"],
  ["bgTitle-Ch08", "bgIntroduction-Ch08", "bgTopicKeyword-Ch08", "bgTopicDetail-Ch08"],
  ["bgTitle-Ch09", "bgIntroduction-Ch09", "bgTopicKeyword-Ch09", "bgTopicDetail-Ch09"],
  ["bgTitle-Ch10", "bgIntroduction-Ch10", "bgTopicKeyword-Ch10", "bgTopicDetail-Ch10"],

];

var classColors1 = [

["color-primary-0-orient", "color-primary-1-orient", "color-primary-2-orient", "color-primary-3-orient",
    "color-primary-4-orient" ],
["color-primary-0-ch01", "color-primary-1-ch01", "color-primary-2-ch01", "color-primary-3-ch01",
    "color-primary-4-ch01" ],
["color-primary-0-ch02", "color-primary-1-ch02", "color-primary-2-ch02", "color-primary-3-ch02",
    "color-primary-4-ch02" ],
["color-primary-0-ch03", "color-primary-1-ch03", "color-primary-2-ch03", "color-primary-3-ch03",
    "color-primary-4-ch03" ],
["color-primary-0-ch04", "color-primary-1-ch04", "color-primary-2-ch04", "color-primary-3-ch04",
    "color-primary-4-ch04" ],
["color-primary-0-ch05", "color-primary-1-ch05", "color-primary-2-ch05", "color-primary-3-ch05",
    "color-primary-4-ch05" ],
["color-primary-0-ch06", "color-primary-1-ch06", "color-primary-2-ch06", "color-primary-3-ch06",
    "color-primary-4-ch06" ],
["color-primary-0-ch07", "color-primary-1-ch07", "color-primary-2-ch07", "color-primary-3-ch07",
    "color-primary-4-ch07" ],
["color-primary-0-ch08", "color-primary-1-ch08", "color-primary-2-ch08", "color-primary-3-ch08",
    "color-primary-4-ch08" ],
["color-primary-0-ch09", "color-primary-1-ch09", "color-primary-2-ch09", "color-primary-3-ch09",
    "color-primary-4-ch09" ],
["color-primary-0-ch10", "color-primary-1-ch10", "color-primary-2-ch10", "color-primary-3-ch10",
    "color-primary-4-ch10" ],

];

var headingColors1 = [[]];
for (i = 0; i < classColors1.length; i++) {
  var cColor = classColors1[i];
  var bColors = [];
  for (j = 0; j < cColor.length; j++) {
    // console.log('cColor = ' + cColor[j]);
    var elem = document.querySelector('.' + cColor[j]);
    bColors[j] = 'white';
    // if (elem != null)
      bColors[j] = getComputedStyle(elem).getPropertyValue('color');
    // console.log('color = ' + bColors[j]);
  }
  headingColors1[i] = [bColors[4], bColors[3], bColors[0], bColors[1]];
}

for (ih = 0; ih < classHeadingColors1.length; ih++) {
  var chColor = classHeadingColors1[ih];
  var hColor = headingColors1[ih];
  for (ic = 0; ic < chColor.length; ic++) {
    var x = document.getElementsByClassName(chColor[ic]);
    var bgColor = hColor[ic];
    console.log('bgColor = ' + bgColor);
    for (i = 0; i < x.length; i++)
      x[i].setAttribute('data-background-color', bgColor);
  }
}

// get all colors from paletton in hoang-slide.css
// var classColors = [
//   "color-primary-0", 
//   "color-primary-1",
//   "color-primary-2",
//   "color-primary-3",
//   "color-primary-4" ];

// var bgColors = [];
// for (i = 0; i < classColors.length; i++) {
//   var elem = document.querySelector('.' + classColors[i]);
//   bgColors[i] = getComputedStyle(elem).getPropertyValue('color');
//   console.log('color = ' + bgColors[i]);
// }

// // set data-background-color for default slides

// var headingColors = [
//   bgColors[4], 
//   bgColors[3],
//   bgColors[0],
//   bgColors[1]
// ];
// bgColorDefault = bgColors[1];

// var classHeadingColors = [
//   "bgTitle", 
//   "bgIntroduction", 
//   "bgTopicKeyword",
//   "bgTopicDetail"
// ];

// // var slides = Array.prototype.slice.call(document.querySelectorAll('.slides section'));
// // slides.forEach(function(slide) {
// //   slide.setAttribute('data-background-color', bgColorDefault);
// //   // slide.style.color = "white";
// //   // slide.style.setAttribute('color', 'white');
// // })

// // set default data-background-color for all slides
// var x = document.querySelectorAll('.slides section');
// for (i = 0; i < x.length; i++) {
//   x[i].setAttribute('data-background-color', bgColorDefault);
//   // x[i].style.color = "white";
// }

// // set data-background-color for heading slides

// for (ic = 0; ic < classHeadingColors.length; ic++) {
//   var x = document.getElementsByClassName(classHeadingColors[ic]);
//   var bgColor = headingColors[ic];
//   for (i = 0; i < x.length; i++)
//     x[i].setAttribute('data-background-color', bgColor);
// }

Reveal.sync();
 