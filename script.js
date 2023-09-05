console.log(window.innerHeight)
console.log(`innerWidth: ${window.innerWidth}`)
let totalLeftScroll=200
window.onscroll = function(e) {
    // window.scrollX=(window.scrollY/window.innerHeight)*totalLeftScroll
    console.log(window.scrollX)
    window.scrollTo(((window.scrollY/window.innerHeight)*totalLeftScroll),window.scrollY)
}