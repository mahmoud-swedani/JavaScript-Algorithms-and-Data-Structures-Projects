function rot13(str) {
    // Result end 
    let result = [];
    // to test 1 case
    let regex = /^[A-M]/;
    // to test tow case
    let regex1 = /^[N-Z]/;
    
    // for loop to push test str input to reslt
    for(let i = 0; i< str.length;i++){
      // var to conv str to sharcode and reseve it to str after add 13
      let e1 = String.fromCharCode(str.charCodeAt(i) +13)
      // var to conv str to sharcode and reseve it to str after remove 13
      let e2 = String.fromCharCode(str.charCodeAt(i) -13)
      // if stat to test and push item to result var
      if(regex.test(str[i])){
        result.push(e1)
      } else if(regex1.test(str[i])){
        result.push(e2)
        }else{
        result.push(str[i])
      }
  
      
    }
    // return arr in var result and conv to string
    return result.join("");
  }
  // test Here  
  console.log(rot13("SERR PBQR PNZC"));
  console.log(rot13("SERR CVMMN!"));
  console.log(rot13("SERR YBIR?"));
  console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));