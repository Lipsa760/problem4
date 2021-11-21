var num =5;
for(var  i =1; i <= num ; i++){
  var timeStar = (i * 2) -1;
  var line = "";
  var space = (num - i) ;
  var spaceLine ="";
  for(var s= 1; s <= space ; s++){
    spaceLine = spaceLine + " ";
  }
  for (var j =1; j <= timeStar ; j++){
     line= line + "*";
  }
  console.log(spaceLine + line);
}


num =5;
for(var  i =1; i <= num ; i++){
  var timeStar = (num - i) *2 +1;
  var line = "";
  var space = (i - 1) ;
  var spaceLine ="";
  if(i == 1){
continue;
  }else{
  for(var s= 1; s <= space ; s++){
    spaceLine = spaceLine + " ";
  }
  for (var j =1; j <= timeStar ; j++){
     line= line + "*";
  }
  }
  console.log(spaceLine + line);
}
