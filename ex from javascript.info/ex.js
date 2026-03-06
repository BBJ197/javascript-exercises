function mapToName(){
    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 28 };
    let users = [ john, pete, mary ];
    let names = []
    for (let i in users){
        names.push(users[i].name);
    }
    alert( names ); // John, Pete, Mary
}
// mapToName()

function mapToObjects(){
    let john = { name: "John", surname: "Smith", id: 11 };
    let pete = { name: "Pete", surname: "Hunt", id: 2 };
    let mary = { name: "Mary", surname: "Key", id: 3 };

    let users = [ john, pete, mary ];

    let fullName = [];
    let usersMapped = []

    for (let i in users){
        fullName.push(users[i].name + " " + users[i].surname);
    }

    for (let j in users){
        dict = {}
        dict.fullName = fullName[j]
        dict.id = users[j].id
        usersMapped.push(dict);
    }
    alert( usersMapped[0].id ) // 1
    alert( usersMapped[0].fullName ) // John Smith
}

// mapToObjects()

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

function sortByAge(array){
    // let ageByName={}
    // let ages = []
    // for (let i in array){
    //     ageByName[array[i].age] = array[i]
    //     ages.push(array[i].age)
    //  }
    // Object.keys(ageByName).sort()
    // ages.sort()
    // for (let j in array){
    //     array.shift()
    //     array.push(ageByName[ages[j]])
    //  }

    const sorted = array.sort((a , b) => a.age - b.age)
}
sortByAge(arr);

// alert(arr[0].name); // John
// alert(arr[1].name); // Mary
// alert(arr[2].name); // Pete


let arry = [1, 2, 3];

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    console.log(array)
  }
// shuffle(arry);
// shuffle(arry);
// shuffle(arry);


let johN = { name: "John", age: 25 };
let petE = { name: "Pete", age: 30 };
let marY = { name: "Mary", age: 29 };

let ary = [ johN, petE, marY];



function getAverageAge(array){
    // let total = 0
    // for (let i in array){
    //     total= total + ary[i].age 
    // }
    // return(total/(array.length))

    const totalAge = array.reduce((total, inventor) => {
        return total + inventor.age   
    }, 0)
    return (totalAge/(array.length))
}
alert( getAverageAge(ary) ); 




let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];
  
let usersById = groupById(users);
  
function groupById(Users){
    let userS = {}

    for (let i in Users){
        userS[Users[i].id] = Users[i]
    }
    return(userS)
}

// console.log(usersById)
