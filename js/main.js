
// set static section when scrolling to 2000
window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
        if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
            document.getElementById("static-section").style.position = "fixed";
        } else {
            document.getElementById("static-section").style.position = "relative";
        }
    }



// reviews
const hiddenBox = document.getElementById("hiddenBox")
const showMoreBtn = document.getElementById("show-more")

hiddenBox.style.display = "none";

console.log(showMoreBtn);
showMoreBtn.addEventListener("click", () =>{
  hiddenBox.style.display = "inline";
  if(hiddenBox.style.display = "inline"){
    showMoreBtn.innerHTML = "  لا توجد مراجعات أخري متبقة "
  }
})

