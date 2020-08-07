var count =0;
function changeBackground(newColor){
    document.bgColor = newColor;
    count++;
    document.getElementById("demo").innerHTML = "we changed the color"+count+"times!";
}