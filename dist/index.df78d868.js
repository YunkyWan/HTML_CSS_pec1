let e;const t=document.getElementById("slides-container"),n=document.querySelectorAll(".slide"),l=document.getElementById("slide-arrow-prev"),c=document.getElementById("slide-arrow-next");let d=0;function i(){++d>=n.length&&(d=0),o(),s()}function o(){let e=n[0].clientWidth;t.scrollLeft=d*e}function r(){e=setInterval(i,5e3)}function s(){clearInterval(e),r()}c.addEventListener("click",i),l.addEventListener("click",function(){--d<0&&(d=n.length-1),o(),s()}),r();
//# sourceMappingURL=index.df78d868.js.map
