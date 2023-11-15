// ## Домашна 4

// ### Задача 1.------------------------

// books = [
//     { title: "Book 1", author: "Author A", year: 2000 },
//     { title: "Book 2", author: "Author B", year: 2010 },
//     { title: "Book 3", author: "Author C", year: 2020 },
//   ]


//   books.forEach((book) => console.log(book.title, book.author))
//   console.log( books.find((book) => book.year > 2000))



//   ### Задача 2.------------------------

// let person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     address: {
//       street: "123 Main Street",
//       city: "New York",
//       state: "NY",
//       postalCode: "10001",
//     },
//     hobbies: ["Reading", "Traveling", "Cooking"],
//   }

// //   a)------------------------

// let additionalInfo = {
//     email: "johndoe@gmail.com",
//     phone: "1234327890",
//     education: {
//         degree: "bachelor",
//         major: "Telecommunications"
//     },

// }

// let newObject = {...person,...additionalInfo}
// console.log(newObject)


// b)------------------------

// user = {
//     id: 123,
//     username: "jsmith",
//     fullName: { firstName: "John", lastName: "Smith" },
//     contact: { email: "john@example.com", phone: "555-555-5555" },
//     addresses: [
//       {
//         type: "home",
//         street: "123 Main Street",
//         city: "New York",
//         state: "NY",
//         zip: "10001",
//       },
//       {
//         type: "work",
//         street: "456 Market Street",
//         city: "San Francisco",
//         state: "CA",
//         zip: "94105",
//       },
//     ],
//   }


// let {username, fullName, contact, addresses} = user
//   let {firstName, lastName} = fullName
//   let {email} = contact
//   let [homeAddress, workAddress] = addresses
//   let {street: homeStreet, city: homeCity, state: homeState, zip: homeZip} = homeAddress
//   let {street: workStreet, city: workCity, state: workState, zip: workZip} = workAddress

//   console.log(username)
//   console.log(firstName, lastName)
//   console.log(email)
// console.log(homeStreet, homeCity, homeState, homeZip)
// console.log(workStreet, workCity, workState, workZip)

// -----------------------------------------------------------------------

// //   let {username} = user
// //   let {firstName, lastName} = user.fullName
// //   let {email} = user.contact
// //   let {street: homeStreet, city: homeCity, state: homeState, zip: homeZip} = user.addresses[0]
// //   let {street: workStreet, city: workCity, state: workState, zip: workZip} = user.addresses[1]

// //   console.log(username, firstName, lastName, email)
// // console.log(homeStreet, homeCity, homeState, homeZip)
// // console.log(workStreet, workCity, workState, workZip)

// -----------------------------------------------------------------------

// ### Задача 3. ------------------------

// const countries = [
//     "Albania",
//     "Bolivia",
//     "Canada",
//     "Denmark",
//     "Ethiopia",
//     "Finland",
//     "Germany",
//     "Hungary",
//     "Ireland",
//     "Japan",
//     "Kenya",
//     ]

//    // a)------------------------


// let checkString = (something) => something.includes('land')

//     let newCounties = countries.filter((string) => string.includes('land'))
//     console.log(newCounties)
//     newCounties = newCounties.map(string => string.toUpperCase())
//     console.log(newCounties)

// // b) ------------------------

// let newCountriesIa = countries.filter(string => string.endsWith('ia') && string.length > 7)

// console.log(newCountriesIa)





let zooAnimals = [
    {
      id: "0938aa23-f153-4937-9f88-4858b24d6bce",
      name: "lions",
      popularity: 4,
      location: "NE",
      residents: [
        {
          name: "Zena",
          sex: "female",
          age: 12,
        },
        {
          name: "Maxwell",
          sex: "male",
          age: 15,
        },
        {
          name: "Faustino",
          sex: "male",
          age: 7,
        },
        {
          name: "Dee",
          sex: "female",
          age: 14,
        },
      ],
    },
    {
      id: "e8481c1d-42ea-4610-8e11-1752cfc05a46",
      name: "tigers",
      popularity: 5,
      location: "NW",
      residents: [
        {
          name: "Shu",
          sex: "female",
          age: 19,
        },
        {
          name: "Esther",
          sex: "female",
          age: 17,
        },
      ],
    },
    {
      id: "baa6e93a-f295-44e7-8f70-2bcdc6f6948d",
      name: "bears",
      popularity: 5,
      location: "NW",
      residents: [
        {
          name: "Hiram",
          sex: "male",
          age: 4,
        },
        {
          name: "Edwardo",
          sex: "male",
          age: 4,
        },
        {
          name: "Milan",
          sex: "male",
          age: 4,
        },
      ],
    },
    {
      id: "ef3778eb-2844-4c7c-b66c-f432073e1c6b",
      name: "penguins",
      popularity: 4,
      location: "SE",
      residents: [
        {
          name: "Joe",
          sex: "male",
          age: 10,
        },
        {
          name: "Tad",
          sex: "male",
          age: 12,
        },
        {
          name: "Keri",
          sex: "female",
          age: 2,
        },
        {
          name: "Nicholas",
          sex: "male",
          age: 2,
        },
      ],
    },
    {
      id: "533bebf3-6bbe-41d8-9cdf-46f7d13b62ae",
      name: "otters",
      popularity: 4,
      location: "SE",
      residents: [
        {
          name: "Neville",
          sex: "male",
          age: 9,
        },
        {
          name: "Lloyd",
          sex: "male",
          age: 8,
        },
        {
          name: "Mercedes",
          sex: "female",
          age: 9,
        },
        {
          name: "Margherita",
          sex: "female",
          age: 10,
        },
      ],
    },
    {
      id: "89be95b3-47e4-4c5b-b687-1fabf2afa274",
      name: "frogs",
      popularity: 2,
      location: "SW",
      residents: [
        {
          name: "Cathey",
          sex: "female",
          age: 3,
        },
        {
          name: "Annice",
          sex: "female",
          age: 2,
        },
      ],
    },
    {
      id: "78460a91-f4da-4dea-a469-86fd2b8ccc84",
      name: "snakes",
      popularity: 3,
      location: "SW",
      residents: [
        {
          name: "Paulette",
          sex: "female",
          age: 5,
        },
        {
          name: "Bill",
          sex: "male",
          age: 6,
        },
      ],
    },
    {
      id: "bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5",
      name: "elephants",
      popularity: 5,
      location: "NW",
      residents: [
        {
          name: "Ilana",
          sex: "female",
          age: 11,
        },
        {
          name: "Orval",
          sex: "male",
          age: 15,
        },
        {
          name: "Bea",
          sex: "female",
          age: 12,
        },
        {
          name: "Jefferson",
          sex: "male",
          age: 4,
        },
      ],
    },
    {
      id: "01422318-ca2d-46b8-b66c-3e9e188244ed",
      name: "giraffes",
      popularity: 4,
      location: "NE",
      residents: [
        {
          name: "Gracia",
          sex: "female",
          age: 11,
        },
        {
          name: "Antone",
          sex: "male",
          age: 9,
        },
        {
          name: "Vicky",
          sex: "female",
          age: 12,
        },
        {
          name: "Clay",
          sex: "male",
          age: 4,
        },
        {
          name: "Arron",
          sex: "male",
          age: 7,
        },
        {
          name: "Bernard",
          sex: "male",
          age: 6,
        },
      ],
    },
  ]

//   ### Задача 4. ----------------

// а. ------------------------

// const animalsPopularity = zooAnimals.filter(animal => animal.popularity > 4)
// animalsPopularity.forEach(animal => console.log(animal.name)) 


// b) --------------------

// let elephant = zooAnimals.find(animal => animal.name === "elephants")
// let {residents: newElephants} = elephant
// newElephants.sort((a, b) => b.age - a.age )
// console.log("The oldest elephant is: ",newElephants[0])

// v) --------------------

// let penguins = zooAnimals.find(animal => animal.name === 'penguins')
//  let  {residents: newPenguins} = penguins
//  newPenguins = newPenguins.filter(animal => (animal.age < 10 && animal.sex === "female"))
//  newPenguins.forEach(penguin => console.log(penguin.name))

// g) --------------------

// let newZooAnimals = zooAnimals.sort((a, b) => b.name.length - a.name.length)
// let { residents: myAnimals} = newZooAnimals[0]
// let myAge = myAnimals.map(object => object.age).reduce((acc, curr) => acc + curr,0)
// console.log(newZooAnimals[0].name, myAge)

// d)
// најдете која група на животни има најмал број жители и најголем број жители,
//  потоа направете нова низа која ги содржи сите имиња на жителите


// let checkResidents = zooAnimals.sort((a,b) => a.residents.length - b.residents.length)
// let checkResidentsMin = checkResidents.shift()
// let checkResidentsMax = checkResidents.pop()

// let {residents: myResidentsMin} = checkResidentsMin
// let checkResidentsMinNames = myResidentsMin.map(object => object.name)

// let {residents: myResidentsMax} = checkResidentsMax
// let checkResidentsMaxNames = myResidentsMax.map(object => object.name)

// let myAnimasNames = [...checkResidentsMinNames,...checkResidentsMaxNames]
// console.log(myAnimasNames)

// ### Задача 5. ---------------------------

// let num1 = 99
// let checkGrade = (num) => 
// 90 <= num && num <= 100 ?  "A:" :
// 80 <= num && num <= 89 ? "B:" :
// 70 <= num && num <= 79 ? "C:" :
// 60 <= num && num <= 69 ? "D:" :
// 0 <= num && num <= 59 ? "F:" : "Wrong input"

// console.log(checkGrade(num1))