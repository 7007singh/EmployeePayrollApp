let isUpdate = false;
let employeePayrollObj = {};

window.addEventListener('DOMContentLoaded', function () {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function () {
        if (name.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try {
            (new EmployeePayrollData()).name = name.value;
            textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
        }
    });

    const day = document.querySelector('#day');
    const month = document.querySelector('#month');
    const year = document.querySelector('#year');
    const errorDate = document.querySelector('.date-error');
    day.addEventListener('input', function() {
        dateValidation();
    });

    month.addEventListener('input', function() {
        dateValidation();
    });

    year.addEventListener('input', function() {
        dateValidation();
    });

    const dateValidation = () => {
        let date = getInputValueById('#day') + " " + getInputValueById('#month') + " " + getInputValueById('#year');
        try{
            (new EmployeePayrollData()).startDate = new Date(date);
            errorDate.textContent = "";
        } catch (e) {
            errorDate.textContent = e;
        }
    }

    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input', function () {
        output.textContent = salary.value;
    })

    checkForUpdate();
});

const checkForUpdate = () => {
     const employeePayrollJson = localStorage.getItem('editEmp');
     isUpdate = employeePayrollJson ? true : false;
     if(!isUpdate) return;
     employeePayrollObj = JSON.parse(employeePayrollJson);
     setForm();
}

const setForm = () => {
    setValue('#name', employeePayrollObj._name);
    setSelectedValue('[name=profile]', employeePayrollObj._profilePic);
    setSelectedValue('[name=gender]', employeePayrollObj._gender);
    setSelectedValue('[name=department]', employeePayrollObj._department);
    setValue('#salary', employeePayrollObj._salary);
    setTextValue('.salary-output', employeePayrollObj._salary);
    setValue('#notes', employeePayrollObj._notes);
    let date = stringifyDate(employeePayrollObj._startDate).split(" ");
    setValue('#day', date[0]);
    setValue('#month', date[1]);
    setValue('#year', date[2]);
}

const setSelectedValue = (propertyValue, value) => {
    let allItem = document.querySelector(propertyValue);
    allItem.forEach(item => {
        if (Array.isArray(value)){
            if(value.includes(item.value)){
                item.checked = true;
            }
        }
        else if(item.value === value)
          item.checked = true;
    });
}

const save = (event) => {
    event.preventDefault();
    event.stopPropagation();
    try {
        let employeePayrollData = createEmployeePayroll();
        createAndUpdateStorage(employeePayrollData);
        window.location.replace(site_properties.home_page);
    } catch (e) {
        return;
    }
}

function createAndUpdateStorage(employeePayrollData){
    let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));

    if(employeePayrollList != undefined){
        employeePayrollList.push(employeePayrollData);
    } else{
        employeePayrollList = [employeePayrollData]
    }
    alert(employeePayrollList.toString());
    localStorage.setItem("EmployeePayrollList", JSON.stringify(employeePayrollList))
}

const createEmployeePayroll = () => {
    let employeePayrollData = new EmployeePayrollData();
    try {
        employeePayrollData.name = getInputValueById('#name');
    } catch (e) {
        setTextValue('.text-error', e);
        throw e;
    }
    employeePayrollData.profilePic = getSelectedValue('[name=profile]').pop();
    employeePayrollData.gender = getSelectedValue('[name=gender]').pop();
    employeePayrollData.department = getSelectedValue('[name=department]');
    employeePayrollData.salary = getInputValueById('#salary');
    employeePayrollData.notes = getInputValueById('#notes');
    let date = getInputValueById('#day') + " " + getInputValueById('#month') + " " + getInputValueById('#year');
    employeePayrollData.startDate = new Date(date);
    alert(employeePayrollData.toString());
    return employeePayrollData;
}   


const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}

const getSelectedValue = (propertyValue) => {
    let allItem = document.querySelectorAll(propertyValue);
    let setItem = [];
    allItem.forEach(item => {
        if (item.checked) setItem.push(item.value);
    });
    return setItem;
}    

const setTextValue = (id, value) => {
    const element = document.querySelector(id);
    element.textContent = value;
}

const resetForm = () => {
    setValue('#name ','');
    unsetSelectedValue('[name=profile]');
    unsetSelectedValue('[name=gender]');
    unsetSelectedValue('[name=department]');
    setVlaueByClassName('.text-error','');
    setVlaueByClassName('.date-error','');
    setValue('#salary','');
    setVlaueByClassName('.salary-output','');
    setValue('#notes','');
    setValue('#day','1');
    setValue('#month','January');
    setValue('#year','2023');
}

const unsetSelectedValue = (propertyValue) => {
    let allItem = document.querySelectorAll(propertyValue);
    allItem.forEach(item => {
        item.checked = false;
    });
}

const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
}

const setVlaueByClassName = (id, value) => {
    const element = document.querySelector(id);
    element.textContent = value;
}