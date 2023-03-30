let employeeList = [];
window.addEventListener('DOMContentLoaded', function () {
    employeeList = localStorage.getItem('EmployeePayrollList')?JSON.parse(localStorage.getItem('EmployeePayrollList')) : [];
    createInnerHtml();
    this.document.querySelector('.count').textContent = employeeList.length; 
});

//templete literals ES6 feature
const createInnerHtml = () => {
    let headerContent = `<tr>
    <th></th>
    <th>Name</th>
    <th>Gender</th>
    <th>Department</th>
    <th>Salary</th>
    <th>Start Date</th>
    <th>Action</th>
</tr>`;
    let employeePayrollList = employeeList;
    let htmlContent = `${headerContent}`;

    for (employeeData of employeePayrollList) {
        htmlContent= htmlContent+ `<tr>
        <td><img class="profile" src="${employeeData._profilePic}"></td>
        <td>${employeeData._name}</td>
        <td>${employeeData._gender}</td>
        <td>${getDeptHtml(employeeData._department)}</td>    
        <td>${employeeData._salary}</td>
        <td>${employeeData._startDate}</td>
        <td>
            <img id="1" onclick="remove(this)" src="../assets/icons/delete-black-18dp.svg" alt="delete">
            <img id="2" onclick="update(this)" src="../assets/icons/create-black-18dp.svg" alt="edit">
        </td>
    </tr>`;
    }
    document.querySelector('#table').innerHTML = htmlContent;
}

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList) {
        deptHtml = `${deptHtml} <div class="dept-lable">${dept}</div>`
    }
    return deptHtml;
}

const createEmployeePayrollJSON = () => {
    let employeePayrollListLocal = [
        {
            _name: 'Radha Kumari',
            _gender: 'Female',
            _department: ['Sales', 'Finance'],
            _salary: '352000',
            _startDate: '20-03-2023',
            _notes: '',
            _id: new Date().getTime(),
            _profilePic: '../assets/profile-images/Ellipse -1.png'
        },
        {
            _name: 'Rahul Kumar',
            _gender: 'Male',
            _department: ['Finance'],
            _salary: '452000',
            _startDate: '10-03-2023',
            _notes: '',
            _id: new Date().getTime(),
            _profilePic: '../assets/profile-images/Ellipse -5.png'
        }
    ];
    return employeePayrollListLocal;
}