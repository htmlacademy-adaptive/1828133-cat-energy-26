let navMain=document.querySelector(".main-nav"),navToggle=document.querySelector(".main-nav__toggle"),mainNavWpapper=document.querySelector(".main-nav__wrapper");navToggle.addEventListener("click",(function(){navMain.classList.contains("main-nav--closed")?(navMain.classList.remove("main-nav--closed"),navMain.classList.add("main-nav--opened"),mainNavWpapper.classList.remove("main-nav__wrapper--closed")):(navMain.classList.add("main-nav--closed"),navMain.classList.remove("main-nav--opened"),mainNavWpapper.classList.add("main-nav__wrapper--closed"))}));