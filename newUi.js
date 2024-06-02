

var allLinks = ["https://app.haikei.app/","https://colorhunt.co/","https://www.realtimecolors.com/?colors=050315-fbfbfe-2f27ce-dedcff-433bff&fonts=Inter-Inter","https://neumorphism.io/#e0e0e0","https://9elements.github.io/fancy-border-radius/","https://cssgrid-generator.netlify.app/","https://jonsuh.com/hamburgers/","https://cssbuttons.app/","https://cssbud.com/css-generator/css-glow-generator/","https://omatsuri.app/"];

var iFrame = document.querySelector("iframe");

var changer1 = document.querySelector(".b1");
var changer2 = document.querySelector(".b2");
var changer3 = document.querySelector(".b3");
var changer4 = document.querySelector(".b4");
var changer5 = document.querySelector(".b5");
var changer6 = document.querySelector(".b6");
var changer7 = document.querySelector(".b7");
var changer8 = document.querySelector(".b8");
var changer9 = document.querySelector(".b9");
var changer10 = document.querySelector(".b10");

changer1.addEventListener("click",()=> {
    iFrame.src = allLinks[0];
});
changer2.addEventListener("click",()=> {
    iFrame.src = allLinks[1];
});
changer3.addEventListener("click",()=> {
    iFrame.src = allLinks[2];
});
changer4.addEventListener("click",()=> {
    iFrame.src = allLinks[3];
});
changer5.addEventListener("click",()=> {
    iFrame.src = allLinks[4];
});
changer6.addEventListener("click",()=> {
    iFrame.src = allLinks[5];
});
changer7.addEventListener("click",()=> {
    iFrame.src = allLinks[6];
});
changer8.addEventListener("click",()=> {
    iFrame.src = allLinks[7];
});
changer9.addEventListener("click",()=> {
    iFrame.src = allLinks[8];
});
changer10.addEventListener("click",()=> {
    iFrame.src = allLinks[9];
});
