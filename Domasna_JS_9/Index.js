// 3)_________________________________________ 
class Rectangle{
    #width
    #height
    constructor(color, width, height){
        this.#width = width
    this.#height = height
    this.color = color
    }
    getShapeType(){
        return "Rectangle"
    }
    get getWidth(){
return this.#width
    }
    get getHeight(){
        return this.#height
            }
    set setWidth(newWidth) {
        if (newWidth > 0) {
            this.#width = newWidth
        } else {
            console.log("Width must be a positive number!")
        }
        }
        set setHeight(newHeight) {
            if (newHeight > 0) {
                this.#height = newHeight
            } else {
                console.log("Height must be a positive number!")
            }
            }
    getArea(){
        return this.#width * this.#height
    }
    describe(){
        console.log(`The rectangle's color is ${this.color}, has wight of ${this.#width} and height of ${this.#height}`)
    }
}
const rectangle1 = new Rectangle("blue", 12, 13)
console.log(rectangle1.getArea())
rectangle1.describe()
rectangle1.setWidth = 22
rectangle1.setHeight = 23
console.log(rectangle1.getWidth)
console.log(rectangle1.getHeight)

rectangle1.describe()

const rectangle2 = new Rectangle("Red", 43, 23)
rectangle2.describe()
console.log(rectangle1.getArea())
rectangle2.setWidth = 13
rectangle2.setHeight = 17
rectangle2.describe()
console.log(" and area of ", rectangle2.getArea() )

console.log("Test")

function substraction(a, b) {
    return a - b;
}

// 4)_________________________________________ 
// class BankAccount{
//     #balance
//     constructor(accountNumber, accountHolder, balance) {
//         this.accountNumber = accountNumber
//         this.accountHolder = accountHolder
//         this.#balance = balance
//     }
//     deposit(amount){
//         this.#balance += amount
//     }
//     withdraw(amount){
//         if(amount < this.#balance){
//             this.#balance -= amount
//         } else {
//             console.log("Ammount entered is above your current balance")
//         }
//     }
//     get getBalance(){
//         return this.#balance
//     }
//   }

//   const accountKosta = new BankAccount(12345678, "Kostadin Ljochev", 300)
//   console.log(accountKosta.getBalance)
//   accountKosta.deposit(50)
//   console.log(accountKosta.getBalance)
//   accountKosta.withdraw(100)
//   console.log(accountKosta.getBalance)
//   accountKosta.withdraw(300)
//   console.log(accountKosta.getBalance)

//   const accountMyke = new BankAccount(87654321, "Myke Bryan", 600)

//   accountMyke.withdraw(450)
//   console.log(accountMyke.getBalance)
//   accountMyke.deposit(50)
//   console.log(accountMyke.getBalance)
//   accountMyke.withdraw(500)
//   console.log(accountMyke.getBalance)

