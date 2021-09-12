// Telephone Number Validator

function telephoneCheck(str) {
    // add regex to arr 
    let regex = [ /^1\s[1-9]\d{2}-\d{3}-\d{4}/ , /^1\(\d{3}\)\s\d{3}-\d{4}/ , /^1\s\(\d{3}\)\s\d{3}-\d{4}/ , /^1\(\d{3}\)\d{3}-\d{4}/ , /^1\s[1-9]\d{2}\s\d{3}\s\d{4}/ , /^[1-9]\d{2}-\d{3}-\d{4}/ , /^\(\d{3}\)\s\d{3}-\d{4}/ , /^\(\d{3}\)\d{3}-\d{4}/ , /^[1-9]\d{2}\s\d{3}\s\d{4}/ , /^\d{10}/ ]
    // add test var 
    let aa0 = regex[0].test(str);
    let aa1 = regex[1].test(str);
    let aa2 = regex[2].test(str);
    let aa3 = regex[3].test(str);
    let aa4 = regex[4].test(str);
    let aa5 = regex[5].test(str);
    let aa6 = regex[6].test(str);
    let aa7 = regex[7].test(str);
    let aa8 = regex[8].test(str);
    let aa9 = regex[9].test(str);
    
    // add var to create result in if cond es6
    const result = aa0 ? true
           : aa1 ? true
           : aa2 ? true
           : aa3 ? true
           : aa4 ? true
           : aa5 ? true
           : aa6 ? true
           : aa7 ? true
           : aa8 ? true
           : (aa9 && str.length ===10) ? true
           : false;
  
    return  result;
  }
  
//   test here

  console.log(telephoneCheck("555-555-5555"));