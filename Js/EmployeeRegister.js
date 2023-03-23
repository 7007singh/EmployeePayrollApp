let salary=document.querySelector('#salary');
let output=document.querySelector('.SalaryOutput');
output.textContent=salary.value;
    salary.addEventListener('input',function(){
            output.textContent=salary.value;
        });