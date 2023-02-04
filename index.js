function distanceFromHqInBlocks(numberOfBlocks) {
    if(numberOfBlocks > 42) {
      return (numberOfBlocks - 42);
}   else(numberOfBlocks < 42) 
      return (42 - numberOfBlocks);
}

function distanceFromHqInFeet(distance) {
   return distanceFromHqInBlocks(distance) * 264;
}

function distanceTravelledInFeet(start, destination){
      if(destination > start) {
        return (destination - start) * 264;
} else {
      return (start - destination) * 264;
 } 
}


function calculatesFarePrice(start, destination){
      let numberOfFeet = distanceTravelledInFeet(start, destination)
      if(numberOfFeet <= 400){
        return 0; 
} else if(numberOfFeet > 400 & numberOfFeet <= 2000)
    return (numberOfFeet - 400) * .02;
else if(numberOfFeet > 2000 && numberOfFeet < 2500){
    return 25;
}  else
      return 'cannot travel that far';

}
