let char="t";
function convert(char){
  let s1= "abcdefghijklmnopqrstuvwxyz";
  let s2= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for(let i=0;i<s1.length;i++){
    if(char==s1[i]){
      return char;
    }
    else if(char==s2[i]){
      // console.log(s1[i]);
      return s1[i];
    }
  }
  }
convert ("D");
let str="TuShaR";
let bag="";
for(let i=0;i<str.length;i++){
  bag+=convert(str[i]);
}
console.log(bag);

let arr=["MA", "SA", "I", "SCH", "OOL"];
let lower = [];
for (let index = 0; index < arr.length; index++) {
  lower.push(arr[index].toLowerCase());
}
console.log(lower);