let s = 'celso SOARES t1Y2';
let stringArray = s.split('');

for (let i=0; i<stringArray.length; i++){
  if (stringArray[i] == stringArray[i].toLowerCase()){
    stringArray[i] = stringArray[i].toUpperCase();
  } else if (stringArray[i] == stringArray[i].toUpperCase()){
    stringArray[i] = stringArray[i].toLowerCase();
  } else {
    continue;
  }
}
console.log(stringArray.join(''));