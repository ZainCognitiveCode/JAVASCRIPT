document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red"
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "brown"
document.getElementsByTagName("nav")[0].lastElementChild.style.color = "brown"

Array.from(document.getElementsByTagName("li")).forEach(element => {
    element.style.background = "cyan";
});
