//  Question 1 squre all num in array

// const MyNum = [2,5,6,4,8,9];
// const SqurNum = MyNum.map((e) => e * e );
// console.log(SqurNum)


// Question 2 give grade to students according to the marks

// const marks = Number(prompt('enter your total marks Max marks is 500'));
// const percent = (marks * 100) / 500;
// let grade = percent > 90 ? "A" : percent > 80 ? "B" : percent > 70 ? "C" : percent > 60 ? "D" : percent > 50 ? "E" : "F";
// console.log(grade);


// Question 3 Car Object and Destructing 

// const MyCar = {Company: "Toyate", Model: "Top", Year: 2022};
// const changeYear = (year, obj)=>  obj.Year = year;
// console.log(MyCar);
// changeYear(2024, MyCar)
// console.log(MyCar);
// let {Company, Model} = MyCar
// console.log(Company, Model)


//  Question 4 filter the prime number in a array


// let MyNums = [2,45,22,88,99,123,3, 1]
// const PrimeNum = MyNums.filter((e) => {
//     for(let i =2; i < e; i++){
//         return e % i === 0 ? false : true;
//     }
// });
// console.log(PrimeNum)



// Question 5 The diffrent usecase of map, filter and reduse

//     map => when we have to mutate the array but we don't want to mutate the orignal array that time map give us a new array to make changes according to the need without mutation the actual array.
//     filter => filter is used when we have to filter out a array accourding to the need or we want a spacific type of data from a array so that is possiabal useing filter function it runs the conditions to each element and if condition passed it return true and add the element in new array it also give us a new array with filter elements.
//     reduse => we can remove duplicate items from a array we can get the total of a array and also we can group elements togather along with flating the array,


//  Question 6 api call and show it to console 

// async function getdata (){
//     try{
//         const data = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//         const cleanData = await data.json();
//         console.log('Data', cleanData);
//     }catch(error){
//         console.log('error', error);
//     }
// }

// getdata()



// Qusetion 7 Object Accessing

const persons = [
    {
        name: "alladin",
        age: 24,
        details: {
            add: "skdjfjslfal aksjls dfjjsf",
            contact: '9999885566'
        },

    },
    {
        name: "skdjkfh",
        age: 14,
        details: {
            add: "skdjfjslfal aksjls dfjjsf",
            
        },

    },
    {
        name: "rohit",
        age: 30,
        details: {
            add: "skdjfjslfal aksjls dfjjsf",
            contact: '4587956899'
        },

    },
    {
        name: "Aadi",
        age: 28,
        details: {
            add: "skdjfjslfal aksjls dfjjsf",
            contact: '985632568'
        },

    },
]
console.log(persons[1].details?.contact);  // change the number to get the contact 