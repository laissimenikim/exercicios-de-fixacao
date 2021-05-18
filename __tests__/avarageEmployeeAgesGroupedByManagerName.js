const { avarageEmployeeAgesGroupedByManagerName } = require("../index");

const employees = [
  { id: "id-1", name: "Jane", managerId: undefined, age: 30 },
  { id: "id-2", name: "John", managerId: "id-1", age: 24 },
  { id: "id-3", name: "Carla", managerId: "id-1", age: 21 },
  { id: "id-4", name: "Tonia", managerId: "id-1", age: 18 },
  { id: "id-5", name: "Sarah", managerId: undefined, age: 35 },
  { id: "id-6", name: "Masha", managerId: "id-5", age: 29 },
  { id: "id-7", name: "James", managerId: "id-5", age: 27 },
];

describe("avarageEmployeeAgesGroupedByManagerName", () => {
  it("returns the average employee age grouped by manager name", () => {
    expect(avarageEmployeeAgesGroupedByManagerName(employees)).toEqual({
      Jane: 21,
      Sarah: 28,
    });
  });
});
