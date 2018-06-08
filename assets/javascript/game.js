$(document).ready(function() {
    
    let numWins = 0;
    let numLosses = 0;
    let topazVal = "";
    let emeraldVal = "";
    let sapphireVal = "";
    let rubyVal = "";   
    let playerScore = []; 
   

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
            while (ranGemVal = Math.floor(Math.random() * 12) + 1) {
                if (gemGameVals.indexOf(ranGemVal) == -1) {
                    gemGameVals.push(ranGemVal);
                    console.log(ranGemVal)
                    return ranGemVal;
                }
            } console.log

        }
    
        topazVal = aGemVal();
        console.log('topaz value this game is ' + topazVal);
        
        emeraldVal = aGemVal();
        console.log('emerald value this game is ' + emeraldVal);
        
        sapphireVal = aGemVal();
        console.log('sapphire value this game is ' + sapphireVal);
        
        rubyVal = aGemVal();
        console.log('ruby value this game is ' + rubyVal);
      
        console.log(gemGameVals);
    }


    ranGameNumber();
    console.log('Random game number is = ' + ranGameNumber());
    $("#gameRanNum").html(ranGameNumber());

    ranGemValues();
    
    function getSum(total, num) {
        return total + num;
    }

    
    $('#topaz').click(function() {
        playerScore.push(topazVal);
        $('#playerTotal').html(playerScore.reduce(getSum));
    });

    $('#emerald').click(function() {
        playerScore.push(emeraldVal);
        $('#playerTotal').html(playerScore.reduce(getSum));
    });

    $('#sapphire').click(function() {
        playerScore.push(sapphireVal);
        $('#playerTotal').html(playerScore.reduce(getSum));
    });

    $('#ruby').click(function() {
        playerScore.push(rubyVal);
        $('#playerTotal').html(playerScore.reduce(getSum));
    });
   
    //if ()






});









