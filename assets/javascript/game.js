$(document).ready(function() {
    
    let numWins = 0;
    let numLosses = 0;
    let topazVal = "";
    let emeraldVal = "";
    let sapphireVal = "";
    let rubyVal = "";    
    let gemVals = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
    let gemGameVals = [];

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
        let gemGameVals = [];
        let aGemVal = function() {
            return gemVals[Math.floor(Math.random() * gemVals.length)];
        }
        let notHere = false;

        do {
            aGemVal();
            if (topazVal == "") {
            topazVal = aGemVal();
            console.log('topaz value this game is ' + topazVal);
            gemGameVals.push(topazVal);
            console.log(gemGameVals);
            }
            
            if (gemGameVals.indexOf(topazVal)) {
                emeraldVal = aGemVal();
                console.log('emerald value this game is ' + emeraldVal);
                gemGameVals.push(emeraldVal);
                console.log(gemGameVals);
            }        

            if (!gemGameVals.indexOf(topazVal) && !gemGameVals.indexOf(emeraldVal)) {
                sapphireVal = aGemVal = gemVals[Math.floor(Math.random() * gemVals.length)];
                console.log('sapphire value this game is ' + sapphireVal);
                gemGameVals.push(sapphireVal);
                console.log(gemGameVals);
            }
            
            if (!gemGameVals.indexOf(topazVal) && !gemGameVals.indexOf(emeraldVal) && !gemGameVals.indexOf(sapphireVal)) {
                rubyVal = gemVals[Math.floor(Math.random() * gemVals.length)]
                console.log('ruby value this game is ' + rubyVal);
                gemGameVals.push(rubyVal);
                console.log(gemGameVals);
            }
        } 
        while (topazVal == "" && emeraldVal == "" && sapphireVal == "" && rubyVal == "" );

       
     
    }


    ranGameNumber();
    console.log('Random game number is = ' + ranGameNumber());

   ranGemValues();
   // console.log(ranGemValues())
    
$(document).click(function() {

    if ($('#topaz').data('clicked')) {

    }







});









})