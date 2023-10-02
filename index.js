//Original employee object
const employee = {
  name: "Sam",
  streetAddress: "11 Broadway",
}

//Function to update an employee,s property non-destructively
function updateEmployeeWithKeyAndValue(employee, key, value) {
  const updatedEmployee = { ...employee}
  updatedEmployee[key] = value
  return updatedEmployee
}

//Function to update an emlpoyee's property destructively
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value
  return employee
}

//Function to delete an employee's property non-destructively
function deleteFromEmployeeByKey(employee, key) {
const newEmployee = { ...employee }
delete newEmployee[key]
return newEmployee
}

//Function to delete an emloyee's property destructively
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key]
    return employee
}















  
 

