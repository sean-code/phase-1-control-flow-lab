//First Two Tests
const ride = 199;
function scuberGreetingForFeet(ride){
  if (ride <= 400){
    return 'This one is on me!';
  }else if (ride > 2000 && ride < 2500){        //AND
    return 'I will gladly take your thirty bucks.'
  }
else {
  return 'No can do.'
}

}


// Ternary Part
function ternaryCheckCity(city){
  return city === 'NYC'? "Ok, sounds good." : "No go."
}


// Switch Case Statement
function switchOnCharmFromTip(tip){
  if(tip === 'generous'){
    return "Thank you so much.";
  }
  else if (tip === 'not as generous'){
    return "Thank you.";
  }else{
    return "Bye."
  }
}