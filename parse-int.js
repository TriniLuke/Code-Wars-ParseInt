function parseInt(string) {
  // TODO: it's your task now
  
  // create an object to store constant numbers
  const obj = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90,
    hundred: 100,
    thousand: 1000,
    million: 1000000,
  }

  // create an array from the input string  
  const newStr = string.replace(' and', ' '); // replace 'and' with empty space
  const stringArr = newStr.split(/[- ]+/); // remove hypens and spaces from the string
  let result = []; // initial array to hold each value in the object
  let complex = []; // initial array to hold complex values
  let simple = []; // initial array to hold simple values
  let final; // final results

  // loop thru each item in the object and return an array of each value
  stringArr.forEach(item => {
    for(let prop in obj) {
      if(item === prop) {
        result.push(obj[prop])
      }
    }
  })
  
  // logic to calculate the input string and compare them the object values
  if(result.length === 1) {
    final = result[0]
  } else if((result.length === 2 && result[1] === 100) || (result.length === 2 && result[1] === 1000) || (result.length === 2 && result[1] === 1000000)) {
    final = (result[0] * result[1])
  } else if(result.length === 2){
    final = (result[0] + result[1])
  } else if(result.length === 3 && result[1] === 100 && result[2] === 1000){
    final = (result[0] * result[1] * result[2])
  } else if((result.length === 3 && result[3] === 100) || (result.length === 3 && result[3] === 1000)) {
    final = ((result[0] + result[1]) * result[2])
  } else if(result.length === 3){
    final = ((result[0] + result[1]) * result[2])
  } else if(result.length === 4 && result[3] === 1000) {
    final = ((result[0] * result[1]) * result[3] + (result[2] * result[3]))
  } else if(result.length === 4 && result[2] !== 1000) {
    final = ((result[0] * result[1]) + (result[2] + result[3]))
  } else if(result.length === 4 && result[3] === 1000) {
    final = ((result[0] * result[1]) * (result[2] * result[3]))
  } else if(result.length === 4 && result[1] === 100) {
    final = (result[0] * result[1] * result[2] + result[3])
  } else if(result.length === 4 && result[2] === 1000) {
    final = ((result[0] + result[1]) * result[2] + result[3])
  } else if(result.length === 5 && result[4] === 100) {
    final = ((result[0] * result[1] * result[2]) + result[3] * result[4])
  } else if(result.length === 5) {
    final = (result[0] * result[1] + result[2] * result[3] + result[4])
  } else if(result.length === 6) {
    final = (result[0] * result[1] + result[2] * result[3] + result[4] + result[5])
  } else if(result.length === 7) {
    final = ((result[0] + result[1]) * result[2] + result[3] * result[4] + result[5] + result[6])
  } else if(result.length === 8 && result[6] === 100) {
    let number;
    simple.push((result[0] * result[1]) + result[2] + result[3])
    complex.push(result[5] * result[6] + result[7])
    number = simple.toString().split('').slice(0, 3).concat(complex.toString()).join('')

    final = +number;
  } else if(result.length === 8) {
    let number;
    simple.push((result[0] * result[1]) + result[2])
    complex.push(result[3] * result[4] + result[5] + result[6])
    number = simple.toString().split('').slice(0, 3).concat(complex.toString()).join('')

    final = +number;
  } else if(result.length === 9) {
    let number;
    simple.push((result[0] * result[1]))
    complex.push((result[2] + result[3]) * result[4] + result[5] * result[6] + result[7] + result[8])
    number = simple.toString().split('').slice(0, 1).concat(complex.toString()).join('')


    final = +number;
  }

  console.log(final)
  return final

}

parseInt('two hundred twenty-two thousand four hundred eighteen')