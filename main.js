// function sum1 (num,num2){

// return num+num2;

// }

// function sum (num,num2){
//     let total=num+num2;
//     return total;
    
//     }

// console.log(sum(10,10));

// q1

// const sum = (num,num2)=>{
//     console.log(num+num2);
// };

// const n = (num,num2)=>{
//     console.log(num-num2);
// };


// const m = (num,num2)=>{
//     console.log(num*num2);
// };


// const e = (num,num2)=>{
//     console.log(num/num2);
// };


// console.log(sum(5,6));
// console.log(n(5,6));
// console.log(m(5,6));
// console.log(e(5,6));


// q2

// console.log("-------------------------------------------------------------");
// let arr2 = new Array(2,3,4,5,6);
// // arr.unshift
// // arr.push
// // arr.pop
// // arr.shift
// console.log(arr.length);
// // arr.length();

// let arra=["aa","bb","cc","dd"]
// // console.log(arr);
// // arr.concat(arra);



// // q3
// let arr =[1,2,3,4,5,6,7,8,9,10,12,11,13,14,15,16,17,18,19,20];

// console.log("------------------------------even-------------------------------");
// const even=arr.filter(function name(carren)
//  {
  
//     return carren %  2==0;
   
// });
// console.log(even);
// console.log("------------------------------odd--------------------------------");

// const odd=arr.filter(function name(carren)
//  {
  
//     return carren %  2!=0;
   
// });
// console.log(odd);



//  console.log("----------------------------find---------------------------------");



//  const oddd=arr.find(function name(carren)
//  {
  
//     return carren %  2!=0;
   
// });
// console.log(oddd);




// // q4
// console.log("-----------------------------for-Each--------------------------------");
// // arr.filter();
// // arr.filter();
// let x;
// arr.forEach(function (x,i) {
//     arr[i]=x*2;
//     console.log(x,i);

// })

//  console.log(arr);




// //  q5
//  console.log("-----------------------------includes--------------------------------");


// console.log(arr.includes(11));
// // arr.includes(11);


// // q6
// console.log("-----------------------------reverse--------------------------------");
// sortarrA=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// console.log(sortarrA.reverse());

// console.log("-----------------------------sort--------------------------------");
// sortarr=[1,2,3,4,5,6,7,8,9,10,12,11,13,14,15,16,17,18,19,20];
// let sore =sortarr.sort(function (a,b) {
//     return a-b;
// });
// console.log(sore);

// let soreR =sortarr.sort(function (a,b) {
//     return b-a;
// });
// console.log(soreR);

// console.log("-----------------------------every--------------------------------");

// let everyarr=[1,2,3,4,5,6,7,8,9,10,12,11,13,14,15,16,17,18,19,20];
// let everyFun=everyarr.every(function (x) {
//     return x%2 !=0

// })
// console.log(everyFun);
// console.log("-----------------------------som--------------------------------");
// let somarr=[1,2,3,4,5,6,7,8,9,10,12,11,13,14,15,16,17,18,19,20];
// let somFun=somarr.some(function (x) {
//     return x%2 !=0

// })
// console.log(somFun);

// console.log("-----------------------------obj--------------------------------");
// const obj=[{
//     name:"abdullrahman",
//     age:20,
// },{
//     name:"abdullrahman",
//     age:20,
// },{
//     name:"abdullrahman",
//     age:20,
// },{
//     name:"abdullrahman",
//     age:20,
// }]

// console.log(obj);
// console.log("-----------------------------map--------------------------------");
// const arrobj=[{
//     name:"abdullrahman",
//     age:20,
// },{
//     name:"abdullrahman",
//     age:20,
// },{
//     name:"abdullrahman",
//     age:20,
// },{
//     name:"abdullrahman",
//     age:20,
// }]
// arrobj.map((value)=>{
// console.log(value.name);
// })


console.log("-----------------------------lab--------------------------------");
characters = [
    {
      name: "Luke Skywalker",
      height: 177,
      gender: "male",
      mass: 177,
      eye_color: "brown",
    },
    {
      name: "Leia Organa",
      height: 160,
      gender: "female",
      mass: 156,
      eye_color: "blue",
    },
    {
      name: "Han Solo",
      height: 180,
      gender: "male",
      mass: 180,
      eye_color: "brown",
    },
    {
      name: "Chewie",
      height: 222,
      gender: "male",
      mass: 190,
      eye_color: "black",
    },
    {
      name: "kevien",
      height: 106,
      gender: "male",
      mass: 322,
      eye_color: "red",
    },
  ];
console.log("-----------------------------find--------------------------------");
console.log("-----------------------------1--------------------------------");

const findname=characters.find(function name(value)
{
    
   return value.eye_color=="blue"; 
  
});

console.log(findname.name);
console.log("-----------------------------2--------------------------------");

const finmass=characters.find(function name(value)
{
 
   return  value.mass>=50;
  
});

console.log(finmass.gender);

console.log("-----------------------------filter--------------------------------");
console.log("-----------------------------1--------------------------------");
const filterheight=characters.filter(function (value)
 {
  
    return value.height<  200;
   
});
console.log(filterheight);
console.log("-----------------------------2--------------------------------");
const filtergender=characters.filter(function (value)
 {
  
    return value.gender== "male";
   
});
console.log(filtergender);

console.log("-----------------------------map--------------------------------");
console.log("-----------------------------1--------------------------------");

characters.map((value)=>{
    console.log(value.name);
    })
    console.log("-----------------------------2--------------------------------");
    characters.map((value)=>{
        console.log(value.height);
        })
 console.log("-----------------------------sort--------------------------------");
console.log("-----------------------------1--------------------------------");


let sortemass =characters.sort(function (a,b) {
    return  a.mass-b.mass ;
});
console.log(sortemass);

console.log("-----------------------------2--------------------------------");
let sorteheit =characters.sort(function (a,b) {
    return  b.height-a.height ;
});
console.log(sorteheit);

console.log("-----------------------------every--------------------------------");
console.log("-----------------------------1--------------------------------");

let everymass=characters.every(function (value) {
    return value.mass>=40

})
console.log(everymass);
console.log("-----------------------------2--------------------------------");
let everyhit=characters.every(function (value) {
    return value.height<200

})
console.log(everyhit);

console.log("-----------------------------some--------------------------------");
console.log("-----------------------------1--------------------------------");

let somBlueEyes=characters.some(function (value) {
    return value.eye_color =="blue"

})
console.log(somBlueEyes);
console.log("-----------------------------2--------------------------------");
let somtall=characters.some(function (value) {
    return value.height >210

})
console.log(somtall);