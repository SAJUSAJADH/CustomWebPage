var e = document.getElementById('energetic');
var d = document.getElementById('dynamic');
var n = document.getElementById('nostalgic');
var f = document.getElementById('fashionable');
var c = document.getElementById('contemparory');
var v = document.getElementById('vivid');
var l = document.getElementById('laid');
var m = document.getElementById('natural');


var button = document.getElementById('cln');
var button2 = document.getElementById('lmr');
var toggle = document.getElementById('cst');
var close = document.getElementById('close');
var navbar = document.getElementById('hme');
var options = document.getElementById('option');
var title = document.getElementById('titles');
var para = document.getElementById("para");
var footer = document.getElementById("sub");
var foot = document.getElementById("foot");
var sidebar = document.getElementById("mySidebar");
var site = document.getElementById('site');





function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

if(window.innerWidth<=992){
toggle.addEventListener("click",()=>{
    $(toggle).hide();
})
close.addEventListener("click", ()=>{
    $(toggle).show();
})}








  e.addEventListener('click', ()=>{
        button.style.backgroundColor = "blue";
        button2.style.backgroundColor = "blue";
        toggle.style.backgroundColor = "blue";
        navbar.style.color = "blue";
        $(option).hover(function(){
            $(this).css("color","blue")},
            function(){
                $(this).css("color","black")}
        )
        title.style.fontFamily = "Times New Roman";
        para.style.fontFamily = "Times New Roman";
        footer.style.fontFamily = "Times New Roman";
        foot.style.backgroundColor = "blue";
        sidebar.style.backgroundColor = "blue";
        site.style.fontFamily = "Times New Roman";

  })

  d.addEventListener('click', ()=>{
    button.style.backgroundColor = "#F50B94";
    button2.style.backgroundColor = "#F50B94";
    toggle.style.backgroundColor = "#F50B94";
    navbar.style.color = "#F50B94";
    $(option).hover(function(){
        $(this).css("color","#F50B94")},
        function(){
            $(this).css("color","black")}
    )
    title.style.fontFamily = "Courier New";
    para.style.fontFamily = "Courier New";
    footer.style.fontFamily = "Courier New";
    foot.style.backgroundColor = "#F50B94";
    sidebar.style.backgroundColor = "#F50B94";
    site.style.fontFamily = "Courier New";

})

n.addEventListener('click', ()=>{
    button.style.backgroundColor = "rgb(159, 39, 71)";
    button2.style.backgroundColor = "rgb(159, 39, 71)";
    navbar.style.color = "rgb(159, 39, 71)";
    $(option).hover(function(){
        $(this).css("color","rgb(159, 39, 71)")},
        function(){
            $(this).css("color","black")}
    )
    title.style.fontFamily = "Madefor,Helvetica Neue,Helvetica";
    para.style.fontFamily = "Madefor,Helvetica Neue,Helvetica";
    footer.style.fontFamily = "Madefor,Helvetica Neue,Helvetica";
    foot.style.backgroundColor = "rgb(159, 39, 71)";
    sidebar.style.backgroundColor = "rgb(159, 39, 71)";
    site.style.fontFamily = "Lucida Console";
    toggle.style.backgroundColor = "rgb(159, 39, 71)";

})


f.addEventListener('click', ()=>{
    button.style.backgroundColor = "#D4181D";
    button2.style.backgroundColor = "#D4181D";
    navbar.style.color = "#D4181D";
    $(option).hover(function(){
        $(this).css("color","#D4181D")},
        function(){
            $(this).css("color","black")}
    )
    title.style.fontFamily = "Brush Script MT";
    para.style.fontFamily = "Brush Script MT";
    footer.style.fontFamily = "Brush Script MT";
    foot.style.backgroundColor = "#D4181D";
    sidebar.style.backgroundColor = "#D4181D";
    site.style.fontFamily = "Brush Script MT";
    toggle.style.backgroundColor = "#D4181D";

})

c.addEventListener('click', ()=>{
    button.style.backgroundColor = "#8b4513";
    button2.style.backgroundColor = "#8b4513";
    navbar.style.color = "#8b4513";
    $(option).hover(function(){
        $(this).css("color","#8b4513")},
        function(){
            $(this).css("color","black")}
    )
    title.style.fontFamily = "Verdana";
    para.style.fontFamily = "Verdana";
    footer.style.fontFamily = "Verdana";
    foot.style.backgroundColor = "#8b4513";
    sidebar.style.backgroundColor = "#8b4513";
    site.style.fontFamily = "Verdana";
    toggle.style.backgroundColor = "#8b4513";

})

v.addEventListener('click', ()=>{
    button.style.backgroundColor = "rgb(6, 63, 13)";
    button2.style.backgroundColor = "rgb(6, 63, 13)";
    navbar.style.color = "rgb(6, 63, 13)";
    $(option).hover(function(){
        $(this).css("color","rgb(6, 63, 13)")},
        function(){
            $(this).css("color","black")}
    )
    title.style.fontFamily = "Garamond";
    para.style.fontFamily = "Garamond";
    footer.style.fontFamily = "Garamond";
    foot.style.backgroundColor = "rgb(6, 63, 13)";
    sidebar.style.backgroundColor = "rgb(6, 63, 13)";
    site.style.fontFamily = "Garamond";
    toggle.style.backgroundColor = "rgb(6, 63, 13)";

})

l.addEventListener('click', ()=>{
    button.style.backgroundColor = "rgb(102, 218, 67)";
    button2.style.backgroundColor = "rgb(102, 218, 67)";
    navbar.style.color = "rgb(102, 218, 67)";
    $(option).hover(function(){
        $(this).css("color","rgb(102, 218, 67)")},
        function(){
            $(this).css("color","black")}
    )
    title.style.fontFamily = "Lucida Handwriting";
    para.style.fontFamily = "Lucida Handwriting";
    footer.style.fontFamily = "Lucida Handwriting";
    foot.style.backgroundColor = "rgb(102, 218, 67)";
    sidebar.style.backgroundColor = "rgb(102, 218, 67)";
    site.style.fontFamily = "Lucida Handwriting";
    toggle.style.backgroundColor = "rgb(102, 218, 67)";

})

m.addEventListener('click', ()=>{
    button.style.backgroundColor = "silver";
    button2.style.backgroundColor = "silver";
    navbar.style.color = "silver";
    $(option).hover(function(){
        $(this).css("color","silver")},
        function(){
            $(this).css("color","black")}
    )
    title.style.fontFamily = "Sofia";
    para.style.fontFamily = "Sofia";
    footer.style.fontFamily = "Sofia";
    foot.style.backgroundColor = "silver";
    sidebar.style.backgroundColor = "silver";
    site.style.fontFamily = "Sofia";
    toggle.style.backgroundColor = "silver";

})

var xValues = [100,200,300,400,500,600,700,800,900,1000];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{ 
      data: [860,3000,7000,1060,2500,1110,2800,6000,2478,7015],
      borderColor: "black",
      borderWidth: ".5px",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});

