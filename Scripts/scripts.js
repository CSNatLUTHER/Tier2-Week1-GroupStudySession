$( document ).ready( onReady );

function onReady(){
    $("#bandaidButton").on( 'click', newSection )
    $("#mainDiv").on ('click', ".changeText", whiteText )
    $("#mainDiv").on ('click', ".fadeOut", fadeButton )
} // end onReady

let counter = 1

function newSection(){
 let el = $ ('#addSectionIn');
 //el.empty();
 el.append(
     `<div class="blue">
         <h3>${counter}</h3>
         <input class="changeText" type="button" value="change text color">
         <input class="fadeOut" type="button" value="Fade Out Section">
     </div>`
 )
 // $(".blue").css("color", 'white');
 counter++
} // end changeColor

function whiteText(){
    console.log("Clicked White Text Button");
    $(this).parent().css('color', 'white');
}

function fadeButton(){
    console.log('fading out now')
    $(this).parent().fadeOut(1000);
}