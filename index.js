function scuberGreetingForFeet(someValue){
  if (someValue <= 400){
    return"This one is on me!";
  }else if (someValue > 400 && someValue <= 2000){
    return"That will be twenty bucks.";
  }else if (someValue > 2000 && someValue <= 2500){
    return "I will gladly take your thirty bucks.";
  }else {
    return "No can do.";
  }
}

scuberGreetingForFeet(400);

 
function ternaryCheckCity(cityName){
  if (cityName === "NYC"){
    return("Ok, sounds good.");
  }else {
    return("No go.");
  }
}

ternaryCheckCity("NYC");


function switchOnCharmFromTip(tipAmount){
  switch (tipAmount){
    case "generous":
      return "Thank you so much.";
      break;
    case "not as generous":
      return "Thank you."
      break;

    default:
      return "Bye.";
      break;
  }
}

