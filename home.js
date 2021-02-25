// searchbar-collapse---------------------------

const searchIcon = document.getElementById("search-icon");
const searchCollapseArea = document.getElementById("searchbar-collapse");
const searchBarClose = document.getElementById("searchBarClose");
const searchSubmitBtn = document.getElementById("search-submit");


searchIcon.addEventListener("click", ()=>{
  setTimeout(show, 500); 
 
})
const show = ()=>{
  searchCollapseArea.style.display="block";
  searchIcon.style.color = "#F92A63"
}
// searchbar-hide
searchBarClose.addEventListener("click", ()=>{
  searchCollapseArea.style.display="none";
})

const subShow = ()=>{
  searchSubmitBtn.style.display="block";
}


// Add active class to the current button (highlight it)
var header = document.querySelector(".color-plate");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("actv");
  current[0].className = current[0].className.replace(" actv", "");
  this.className += " actv";
  });
}


// snapshot-functionality---------------------------
const snapBox = document.querySelector('.snap-shot-box');
const closeButton = document.querySelector('.close-snap-box');
const takeSnap = document.querySelector('.takeSnap');
const capturebtn = document.getElementById('capturebtn');

closeButton.addEventListener("click", ()=>{
  snapBox.style.opacity ="0";
  snapBox.style.visibility="hidden";
})
capturebtn.addEventListener("click", ()=>{
  snapBox.style.opacity ="1";
  snapBox.style.visibility="visible";
  // webcam-load------------------
  Webcam.set({
    width: 350,
    height: 300,
    image_format:'jpeg',
    jpeg_quality: 90,
  });
  Webcam.attach( '#my_camera' );

})

// taking-picture----------------
takeSnap.addEventListener("click", ()=>{

  Webcam.snap(function(data_uri) {
		document.getElementById('img-preview').src = data_uri;
    alert("working");
    loadFile();
	} );
  
})
// image-preview--------------------------------
 const loadFile = function(event) {
  const fileup =  document.getElementById("fileUp");
  if(fileup.value != ""){
      const customCard =  document.querySelector('.custom-card');
      const imagePrevBox =  document.querySelector('.image-preview-box');
      const loader =  document.querySelector('#loader');
      const cardPara =  document.querySelector('#card-para');
      loader.style.display="block";
      cardPara.style.display="none";
      setTimeout(function(){
        customCard.style.display="none";
        imagePrevBox.style.display="block";
      },3000)
      var output = document.getElementById('img-preview');
      output.src = URL.createObjectURL(event.target.files[0]);
      output.onload = function() {
      URL.revokeObjectURL(output.src) // free memory
    }
  }
  
}

// filter-image-----------------------------
const bgColorChange = (color)=>{
  console.log(color);
  const overlay =  document.getElementById("img-overlay");
  overlay.style.backgroundColor = color;
}

// // header-search-bar
// const searchBtn = document.querySelector('.fa-search');
// const closeBtn = document.querySelector('.fa-close');
// const searchBar = document.querySelector('.search-bar');
// searchBtn.addEventListener('click', () => {
//     searchBar.style = "display:block";
//     searchBtn.style = "display:none";
//     closeBtn.style = "display:block";
// });
// closeBtn.addEventListener('click', () => {
//     searchBar.style = "display:none";
//     searchBtn.style = "display:block";
//     closeBtn.style = "display:none";
// });

// sidebar-collapse
const controlerButton = document.querySelector('.three-bar');
const sidebar = document.getElementById('navbarNav');
const closeBtn = document.getElementById('closeBtn');
// const closebtnLeft  = document.getElementById('left-sidenav-close-btn');
// const registerBtn   = document.getElementById('register-btn');
// const sidenavLeft   = document.getElementById('side-menu-left');
// const sidenavRight  = document.getElementById('sidemenu-right');
// const threebarLeft  = document.getElementById('threebar-left');
//--------------------------------------------
// const threeBar = document.querySelector('.three-bars');
// const sidebarModal = document.querySelector('.sidebar-modal-section');
// const sidebarcloseBtn = document.querySelector('.close-btn-sidebar');
// const sidebarInner = document.querySelector('.sidebar-inner-content');

// ---left-sidebar-collpase--------------------
controlerButton.addEventListener('click', () => {
    sidbarDisplay();
});
closeBtn.addEventListener('click', () => {
   sidbarClose();
});

function sidbarDisplay() {
  setTimeout(function () {
    sidebar.style = "left:0px";
    controlerButton.style = "opacity:0";
    controlerButton.style = "visibility:hidden";
  }, 100);
}
function sidbarClose() {
  setTimeout(function () { sidenavLeft.style = "left:-320px"; }, 100);
  sidebar.style = "left:-275px";
  controlerButton.style = "opacity:1";
  controlerButton.style = "visibility:visible";
}
// ----right-sidebar-collpase---------------------
registerBtn.addEventListener('click', () => {
    sidbarDisplayRight();
});
closebtnRight.addEventListener('click', () => {
   sidbarCloseRight();
});

function sidbarDisplayRight() {
  setTimeout(function () {
    sidenavRight.style = "right:0px";
   
  }, 100);
}
function sidbarCloseRight() {
  setTimeout(function () { sidenavRight.style = "right:-360px"; }, 100);
  
}
  // cart-dropdown-------------------------------
        /* When the user clicks on the button, 
          toggle between hiding and showing the dropdown content */
          function myFunction() {
            document.getElementById("cart-box-home").classList.toggle("show");
          }
          // Close the dropdown if the user clicks outside of it
          window.onclick = function(event) {
            if (!event.target.matches('.dropbtn')) {
              var dropdowns = document.getElementsByClassName("dropdown-content");
              var i;
              for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                  openDropdown.classList.remove('show');
                }
              }
            }
          }

//--------------searchbar -collpase-----------------
// //--------------active-class activation-------------------
// // Get the container element
// var btnContainer = document.getElementById("tab-nav");

// // Get all buttons with class="btn" inside the container
// var btns = btnContainer.getElementsByClassName("nav-link");

// // Loop through the buttons and add the active class to the current/clicked button
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("btn-active-bg");
//     current[0].className = current[0].className.replace(" btn-active-bg", "");
//     this.className += " btn-active-bg";
//   });
// }