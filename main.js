document.addEventListener('DOMContentLoaded', function(){
    const colorbox= document.getElementById("color-box")
    const changecolor= document.getElementById("change-color-btn")
function getRandomColor(){
    function getRandomColor() {
        var r = Math.floor(Math.random() * 256); // Random number between 0 and 255
        var g = Math.floor(Math.random() * 256); // Random number between 0 and 255
        var b = Math.floor(Math.random() * 256); // Random number between 0 and 255
        return (`rgb(${r}, ${g}, ${b})`); 

}
changecolor.addEventListener('click',function(){
    const newColor=getRandomColor()
    colorbox.style.backgroundColor = newColor;
})


})