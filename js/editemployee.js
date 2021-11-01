function init(){
    let data =localStorage.getItem('rowValue');
    employeeData = data ? JSON.parse(data):"nothing";
    if(employeeData){
        view();
    }else{
        updateEmployee();
    }
}

init();

function view(){


  let data= localStorage.getItem('rowValue');
  const employee = JSON.parse(data);
  
  document.getElementById("name").value = employee.name;
  document.getElementById("number").value =employee.number;
  document.getElementById("email").value = employee.email;
  document.getElementById("address").value = employee.address;
  document.getElementById("city").value = employee.city;
  document.getElementById("role").value = employee.role;
    
}
let employees = [];
let nameElem = document.getElementById("name");
let numberElem = document.getElementById("number");
let emailElem = document.getElementById("email");
let addressElem = document.getElementById("address");
let cityElem = document.getElementById("city");
let roleElem = document.getElementById("role");
let employeeIndex = null;


function updateEmployee(e){
  let datas= localStorage.getItem('employees');
  const employees = JSON.parse(datas);
  let datass= localStorage.getItem('rowValue');
  const employed= JSON.parse(datass);
  const val =employed.ind

    
    event.preventDefault();
        let employee = {
        name: nameElem.value,
        number: numberElem.value,
        email: emailElem.value,
        address: addressElem.value,
        city: cityElem.value,
        role: roleElem.value,
       
      }
      employees[val].name = employee.name
      employees[val].number = employee.number
      employees[val].email = employee.email,
      employees[val].address = employee.address,
      employees[val].city =employee.city,
      employees[val].role = employee.role,
      
      
    
  
      
      localStorage.setItem('employees',JSON.stringify(employees))
    //   let selectedRow = document.querySelector('[index="'+employeeIndex+'"]')
  
    //   selectedRow.cells[1].innerHTML = employee.name;
    //   selectedRow.cells[2].innerHTML = employee.number;
    //   selectedRow.cells[3].innerHTML = employee.email;
    //   selectedRow.cells[4].innerHTML = employee.address;
    //   selectedRow.cells[5].innerHTML = employee.city;
    //   selectedRow.cells[6].innerHTML = employee.role;
      location.href = "showemployee.html";
     
     
  }
