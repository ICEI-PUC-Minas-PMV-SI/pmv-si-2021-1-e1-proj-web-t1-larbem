window.addEventListener("scroll", function () {
    var navbar = document.getElementById("navbar");
    navbar.classList.toggle("sticky", window.scrollY > 0);
})

function onClickMenu(){
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("list").classList.toggle("change");
}
