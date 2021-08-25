
/* Mast will learn ES৬, open a JavaScript file and practice the following.

1. You need to know when to declare a variable with const and when with let. 
You manually declare a variable with one const and another let.
 ----------------*/
const number = 33;
let num = 33;
num = 34;
// number = 34; it will give an error, you can't reassign a variable value declared with const




/* --------------------------
2. Create a string with the template string. 
Set the value of the variable declared above dynamically. Similarly, declare an object at the top. 
And dynamically insert the values ​​of the two properties of the above object into your template string. 
------------------------------*/

const laptop = 'hp';
const price = 3000;
const mylaptop = 'asus';
const myLaptopPrice = 3200;


const details = `I gave him a ${laptop} laptop. it's price is ${price}`;
const myDetails = `He gave me a ${mylaptop} laptop. it's price is ${myLaptopPrice}`;
console.log('2.1 No:', details, myDetails)


const person = {
    name: 'Rakib',
    id: 100, 
    address: 'bd',
    duty: 'web development'
}

const rakib = `His name is ${person.name}. His id is ${person.id}. He get ${person.id *50} as his salary. He is responsible for ${person.duty}`
console.log('2.2 No:', rakib)




/*------------------
 3.1 Declare an arrow function with one parameter. And the function of that function 
will be to give the output by dividing the input number by 5 if you give any input. 
 ------------------*/
const division = number => number /5;
console.log('3.1 No:', division(100))



/*------------------
3.2 You will write an arrow function with two parameters. That function will work inside.
 Add 2 to each input parameter then double the sum. Try to figure out what to do with the cam
 ------------------*/
 const mathOparetion = (x, y) => (x+2) * y+2;
  console.log('3.2 No:', mathOparetion(4,2));




  /* ------------------- 
  3.3 Now declare an arrow function with three parameters. The function that will work will return the result by multiplying the three parameters by three parameters.
  ------------------- */
const multipication = (x,y,z) => x*y*z;
console.log('3.3 No:', multipication(2,2,2))





  /* ------------------- 
3.4 This time it will take an arrow function with two parameters. That arrow function will have many lines. There will add 2 to each input parameter then double the sum. Try to figure out what to do with the cam.
  ------------------- */

  const mathOparetion1 = (x, y) => {
    const add = x +2;
    const add1 = y + 2;
    return add * add1;
 }
  console.log('3.4 No:', mathOparetion1(2,2));




  /* ------------------- 
  4. [Homework] Do a little Google search: javascript function declaration vs arrow function then try to understand by reading a few articles.
  ------------------- */






  /* ------------------- 
  4.5. [Extra is another homework. This is not mentioned in the video]: 
What is the difference between var, let, const of JavaScript?
  ------------------- */










  /* ------------------- 
  5. There will be an array of many numbers. Then your job is to use the map above the array. 
  Multiply each element by 5 and put the product as another array. The whole work will be in one line..
  ------------------- */
const numbers = [2,4,5,6,3,10];
const multiplying = numbers.map(number => number *5);
console.log('5 No:', multiplying)



  /* ------------------- 
6. [Challenging. Use Google search
    Use a filter to bring out even odd numbers from an array of many numbers
  ------------------- */
  const numbersArray = [-2,100,158,4,5,6,3,-10];
  const even = numbersArray.filter(n => n%2 ==0)
//   const even = numbersArray.filter(function (n){
//       return n % 2 == 0;
//   })
  console.log('6 No:', even)
  


  
  /* -------------------
7. An array contains many objects. Find the object that has a price of 5,000 ace by finding that object. 
  ------------------- */
const items = [
    {name: 'Laptop', price: 32000},
    {name: 'phone', price: 5000},
    {name: 'watch', price: 2000},
    {name: 'book', price: 320}
]
const finding = items.filter(item => item.price == 5000)
console.log('7 No:', finding)

  /* ------------------- 
7.5 [Extra] What happens with the map, forEach, filter, find of the array in JavaScript. Write a summary of it
  ------------------- */

  


  /* ------------------- 
  8. Use destructuring to declare a property of a simple JavaScript object as a variable.
  ------------------- */
const laptop1 = {
    name2: 'hp',
    price2: 1000,
    model: 'hp brand new'
}
const {name2, price2,model} =laptop1;
console.log('8 No:', name2, price2,model)  

  const {laptopHP, phone, book} = {laptopHP: 'hp', phone:'mi', book: 'Enjoy you life'}



  /* ------------------- 
9. [Challenging] will destructuring the array and to do that you will destructuring the element of the third position in the array and put it in a variable called 'three'.
  ------------------- */
  // const numbers2 = [{first10: 23, sec: 44, third: 21}];
  // const {firs10, sec, third} =numbers2[0];
  // console.log( 'des', sec, third)
  // const three = numbers2[2];
  // console.log('9 No', three)
  const numbersDestruc = [12,20,310,4,60];
  const [num1, num2, num3, num4] =numbersDestruc;
  const three = num3;
  console.log('9 No: ', three);




  /* ------------------- 
  10. Write a function with three parameters.
   The function that will work will return the sum by adding the three parameters with the three parameters. 
   And the third parameter will have a default value. That would be 7.
  ------------------- */
  function multipicationThree(x,y,z=7){
      return x + y + z;
  }
console.log('10 No:', multipicationThree(10,13))

  /* ------------------- 
  ------------------- */
  const mathOparetion3 = (x, y) => (x+2) * (y+2);
  console.log('3.2 No:', mathOparetion3(2,2));


  /* ------------------- 
  [Optional]

11. Declare a nested object (that is, an object that can contain the property of an object. 
  It can also contain the object within the property of that object. Declare such an object. And the value of any property will be an array. Just such a Object).
  ------------------- */
  const company = {
    name: 'TH Group',
    ceo: 'Hossain',
     ITdepartment: 
        {duty:  
        {webdeb: {language: 'Javascript'}}
  } 
  
  }
console.log('11. No: ', company.ITdepartment.duty.webdeb.language)

  /* ------------------- 
12. Optional chaining can be done with the question mark before the dot in the object above. Practice it a little
  ------------------- */
  
  const company1 = {
    name: 'TH Group',
    ceo: 'Hossain',
     ITdepartment: 
        {duty:  
        {webdeb: {language: 'Javascript'}}
  } 
  
  }
console.log('12. No: ', company.ITdepartmendt?.duty.webdebo?.tech)

  /* ------------------- 
  ------------------- */
  


  /* ------------------- 
  ------------------- */
  


  /* ------------------- 
  ------------------- */
  


  /* ------------------- 
  ------------------- */
  


  /* ------------------- 
  ------------------- */
  


  /* ------------------- 
  ------------------- */
  


