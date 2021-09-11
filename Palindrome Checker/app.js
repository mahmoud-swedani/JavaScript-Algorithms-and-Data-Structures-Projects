function palindrome(str) {
    // delete regex from str and shang letter to lower case 
    let a = str.replace(/[`~ !@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,"").toLowerCase();
    // if str = reverse str  true 
     return a === a.split("").reverse().join("")
  }
  console.log(palindrome("race car"));