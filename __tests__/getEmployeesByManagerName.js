const { getEmployeesByManagerName } = require("../index");

const employees = [
  { id: "id-1", name: "Jane", managerId: undefined },
  { id: "id-2", name: "John", managerId: "id-1" },
  { id: "id-3", name: "Carla", managerId: "id-1" },
  { id: "id-4", name: "Tonia", managerId: "id-1" },
  { id: "id-5", name: "Sarah", managerId: undefined },
  { id: "id-6", name: "Masha", managerId: "id-5" },
  { id: "id-7", name: "James", managerId: "id-5" },
];

describe("getEmployeesByManagerName", () => {
  it("returns the employees managed by a manager given it's name", () => {
    expect(getEmployeesByManagerName(employees, "John")).toEqual([]);

    expect(getEmployeesByManagerName(employees, "Jane")).toEqual([
      { id: "id-2", name: "John", managerId: "id-1" },
      { id: "id-3", name: "Carla", managerId: "id-1" },
      { id: "id-4", name: "Tonia", managerId: "id-1" },
    ]);

    expect(getEmployeesByManagerName(employees, "Sarah")).toEqual([
      { id: "id-6", name: "Masha", managerId: "id-5" },
      { id: "id-7", name: "James", managerId: "id-5" },
    ]);
  });
});
