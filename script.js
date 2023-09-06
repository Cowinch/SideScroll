let style = getComputedStyle(document.body)
console.log(window.innerHeight)
window.onscroll = function(e) {
    let totalLeftScroll= style.getPropertyValue('--box-offset')
    let viewHeight=window.innerHeight+500
    console.log(window.scrollY)
    let offsetValue = (window.scrollY/viewHeight)*totalLeftScroll
    document.documentElement.style.setProperty('--scroll-offset', `-${offsetValue}px`);
}