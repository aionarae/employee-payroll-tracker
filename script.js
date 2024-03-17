// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.getElementById("add-employees-btn");

// Collect employee data

const employees = []
function collectEmployees () {
  // TODO: Get user input to create and return an array of employee objects
  while (true) {
    const firstName = prompt("Enter first name:");
    const lastName = prompt("Enter last name:");
    let salary = parseFloat(prompt("Enter salary:"));

    if (isNaN(salary)){
      salary= 0;
    }

    // Create an object for the current employee
    const employee = {
        firstName: firstName,
        lastName: lastName,
        salary: salary
    };

    // Push the employee object into the array
    employees.push(employee);

    // Ask the user if they want to add another employee
    const addAnother = confirm("Do you want to add another employee?");

    if (!addAnother) {
        break; // Exit the loop if the user does not want to add another employee
    }
  }
  return employees;

}

const displayAverageSalary = function(employees) {
  // TODO: Calculate and display the average salary
  if (employees.length === 0) {
    return 0; // Return 0 if there are no employees to avoid division by zero 
  }

// Calculate total salary
  const totalSalary = employees.reduce((acc, employee) => acc + employee.salary, 0);

// Calculate average salary
  const averageSalary = totalSalary / employees.length;

  console.log(`The average employee salary between our ${employees.length} employee(s) is ${averageSalary}.`);

  return averageSalary;

}


// Select a random employee
const getRandomEmployee = function(employees) {
  // TODO: Select and display a random employee
  const randEmployee = employees[Math.floor(Math.random() * employees.length)]
  console.log(`Congratulations to ${randEmployee.firstName} ${randEmployee.lastName}, our random drawing winner!`)
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {

  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
