function init(){
    let data =localStorage.getItem('rowValue');
    employeeData = data ? JSON.parse(data):"nothing";
    if(employeeData){
        view();
    }
}

init();

function view(){
    let data= localStorage.getItem('rowValue');
    const emp = JSON.parse(data);
    document.getElementById('name').innerHTML = emp.name;
    document.getElementById('number').innerHTML = emp.number;
    document.getElementById('email').innerHTML = emp.email;
    document.getElementById('address').innerHTML= emp.address;
    document.getElementById('city').innerHTML= emp.city;
    document.getElementById('role').innerHTML = emp.role;
}
