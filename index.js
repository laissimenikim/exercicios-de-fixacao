function average(numbers) {
  // parameter numbers: number[]
  // return number
  //
  // write here
}

function countOddsAndEvens(numbers) {
  // parameter numbers: number[]
  // return { odd:number, even: number }
  //
  // write here
}

function totalVotesPerMinimumAge(voters, minimumAge) {
  // parameter voters: { name: string, age: number, voted: boolean }[]
  // parameter minimumAge: number
  // return number
  //
  // write here
}

function calculateShoppingCart(cart) {
  // parameter cart: {
  //    products: { product: string, price: number, quantity: number }[]
  //    shipping: number
  // }
  // return number (2 decimal places)
  //
  // write here
}

function getEmployeesByManagerName(employees, managerName) {
  // parameter employees: { id: string, name: string, managerId?: string }[]
  // parameter managerName: string
  // return { id: string, name: string, managerId?: string }[]
  //
  // write here
}

function avarageEmployeeAgesGroupedByManagerName(employees) {
  // parameter employees: { id: string, name: string, managerId?: string, age: number }[]
  // return { [string]: number }
  //
  // write here
}

module.exports = {
  average,
  countOddsAndEvens,
  totalVotesPerMinimumAge,
  calculateShoppingCart,
  getEmployeesByManagerName,
  avarageEmployeeAgesGroupedByManagerName,
};
