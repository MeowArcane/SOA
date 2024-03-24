//NIbrAtOOJ-2ucwqI-goftjGx1j4LTrcBvfo3b6tT_cM
//Returns The Time
function gettime() {
  dateCheck = new Date();
  hours = dateCheck.getHours();
  minutes = dateCheck.getMinutes();
  if(minutes < 10){
    minutes = "0" + minutes;
  }
  if(12 < hours){
    hours = hours - 12;
  }
  date_hourMinute = hours + ":" + minutes;
  return date_hourMinute;
}
//Returns The Date
function getdate() {
  dateCheck = new Date();
  month = dateCheck.getMonth() + 1;
  day = dateCheck.getDate();
  year = dateCheck.getFullYear();
  date_monthDay = (((month + "/") + day) + "/") + year;
  return date_monthDay;
}
//Input Text, Returns encoded text
function encodeString(inputText) {
  var encodedString = "";
  for (var i = 0; i < inputText.length; i++) {
    var charCode = inputText.charCodeAt(i);
    var shiftedCharCode = charCode + 2;
    var encodedCharacter = String.fromCharCode(shiftedCharCode);
    encodedString += encodedCharacter;
  }
  return encodedString;
}
//Input Encoded Text, Return  decoded text
function decodeString(encodedString) {
  var decodedString = "";
  for (var i = 0; i < encodedString.length; i++) {
    var encodedCharCode = encodedString.charCodeAt(i);
    var originalCharCode = encodedCharCode - 2;
    var decodedCharacter = String.fromCharCode(originalCharCode);
    decodedString += decodedCharacter;
  }
  return decodedString;
}
