'use strict';

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


let headerArray = ['Name', 'Email', 'Department', 'Salary'];
let form = document.getElementById('myForm');
let divTable = document.getElementById('divTable');
let table = document.createElement('table');
divTable.appendChild(table);
let pEl = document.createElement('p');
divTable.appendChild(pEl);
function totalNumber() {
  let total = 0;
  for (let i = 0; i < mainEmployee.length; i++) {
    total = total + mainEmployee[i].salary;
  }
  return total;
}

function Employee(name, email, department) {
  this.name = name;
  this.email = email;
  this.department = department;
  this.salary = 0;

  mainEmployee.push(this);
}
let mainEmployee = [];

Employee.prototype.randomNumber = function () {
  this.salary = getRndInteger(100,500);
};

Employee.prototype.render = function () {
  let trEl = document.createElement('tr');
  table.appendChild(trEl);

  let tdName = document.createElement('td');
  trEl.appendChild(tdName);
  tdName.textContent = this.name;

  let tdEmail = document.createElement('td');
  trEl.appendChild(tdEmail);
  tdEmail.textContent = this.email;

  let tdDepartment = document.createElement('td');
  trEl.appendChild(tdDepartment);
  tdDepartment.textContent = this.department;

  let tdSalary = document.createElement('td');
  trEl.appendChild(tdSalary);
  tdSalary.textContent = this.salary;

  pEl.textContent = `Total = ${totalNumber()}`;

};



function tableHeader() {
  let headerRow = document.createElement('tr');
  table.appendChild(headerRow);

  for (let i = 0; i < headerArray.length; i++) {
    let thEl = document.createElement('th');
    headerRow.appendChild(thEl);
    thEl.textContent = headerArray[i];
  }
}
tableHeader();



form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();

  let employeeName = event.target.name.value;
  let employeeEmail = event.target.email.value;
  let employeeDepartment = event.target.department.value;

  let newEmployee = new Employee(employeeName, employeeEmail, employeeDepartment);
  newEmployee.randomNumber();
  newEmployee.render();

  setLocal();
}

function setLocal() {
  localStorage.setItem('employee', JSON.stringify(mainEmployee));
}

function getLocal() {
  let convert = localStorage.getItem('employee');
  if (convert) {
    mainEmployee = JSON.parse(convert);
    tableRender();
  }
}



function tableRender() {

  for (let i = 0; i < mainEmployee.length; i++) {
    let trEl = document.createElement('tr');
    table.appendChild(trEl);

    let tdName = document.createElement('td');
    trEl.appendChild(tdName);
    tdName.textContent = mainEmployee[i].name;

    let tdEmail = document.createElement('td');
    trEl.appendChild(tdEmail);
    tdEmail.textContent = mainEmployee[i].email;

    let tdDepartment = document.createElement('td');
    trEl.appendChild(tdDepartment);
    tdDepartment.textContent = mainEmployee[i].department;

    let tdSalary = document.createElement('td');
    trEl.appendChild(tdSalary);
    tdSalary.textContent = mainEmployee[i].salary;
  }
  pEl.textContent = `Total = ${totalNumber()}`;
}



getLocal();

