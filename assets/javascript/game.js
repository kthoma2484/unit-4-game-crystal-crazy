$(document).ready(function() {
    
    let numWins = 0;
    let numLosses = 0;
    let topazVal = "";
    let emeraldVal = "";
    let sapphireVal = "";
    let rubyVal = "";    
    let gemVals = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]

    // function to generate random number
    let ranGameNumber = function() {
        return Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    }

    // function to generate random gem values
    let ranGemValues = function() {
        topazVal = "";
        emeraldVal = "";
        sapphireVal = "";
        rubyVal = "";
        let aGemVal = gemVals[Math.floor(Math.random() * gemVals.length)];
        
    }



    ranGameNumber();
    console.log('Random game number is = ' + ranGameNumber());

$(document).click(function() {

    if ($('#topaz').data('clicked')) {

    }







});









})