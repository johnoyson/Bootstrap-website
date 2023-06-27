// let firstSec = document.getElementById(home)
// let secondSec = document.getElementById(about)
// let thirdSec = document.getElementById(services)
// let fourthSec = document.getElementById(why)
// let fifSec = document.getElementById(testimonials)
// let sixthSec = document.getElementById(pricing)
// let seventhSec = document.getElementById(contact)
// let footer = document.querySelector(footer)
// let lastScrollTop = 0 



// window.onscroll = function() {
// let st = window.scrollY || document.documentElement.scrollTop;
// if (st > lastScrollTop) {
//     footer.scrollIntoView({behavior: "smooth"});
// }else {
//     seventhSec.scrollIntoView({behavior: "smooth"});
// }else {
//     sixthSec.scrollIntoView({behavior: "smooth"})
// }
// lastScrollTop = st <= 0 ? 0 : st; 
// }


document.getElementsByTagName('html')[0].scrollIntoView({ behavior: "smooth" });