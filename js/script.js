
const menu = document.querySelector("#menu")
const asideDesktop = document.querySelector("#aside")
const asideShowDesktop = document.querySelector("#aside__show")
const menuMobile = document.querySelector('#menu__mobile')
const asideMobile = document.querySelector('#aside__show-mobile')


// menu desktop

function menuShow(){
  asideShowDesktop.classList.toggle("hide")
  asideDesktop.classList.toggle("hide")
}



menu.addEventListener("click", menuShow)




// menu mobile

function menuMobileHide(){
  asideMobile.classList.remove('show__menu-mobile')
  asideMobile.classList.add('hide__menu-mobile')

}

function menuMobileShow(){
  asideMobile.classList.add('show__menu-mobile')


}


menuMobile.addEventListener('click', menuMobileHide)

menu.addEventListener('click', menuMobileShow)

