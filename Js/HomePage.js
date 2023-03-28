window.addEventListener('DOMContentLoaded', function () {
    createInnerHtml();
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
    let htmlContent = `${headerContent}
<tr>
    <td><img class="profile" src="../assets/profile-images/Ellipse -5.png" alt="profilePic"></td>
    <td>Mohan Roy</td>
    <td>Male</td>
    <td class="dept-level">Sales</td>
    <td>350000</td>
    <td>10-03-2023</td>
    <td>
        <img id="1" onclick="remove(this)" src="../assets/icons/delete-black-18dp.svg" alt="delete">
        <img id="2" onclick="update(this)" src="../assets/icons/create-black-18dp.svg" alt="edit">
    </td>
</tr>
<tr>
    <td><img class="profile" src="../assets/profile-images/Ellipse -1.png" alt="profilePic"></td>
    <td>Sanskriti</td>
    <td>Female</td>
    <td class="dept-level">Hr</td>
    <td>450000</td>
    <td>15-03-2023</td>
    <td>
        <img id="1" onclick="remove(this)" src="../assets/icons/delete-black-18dp.svg" alt="delete">
        <img id="2" onclick="update(this)" src="../assets/icons/create-black-18dp.svg" alt="edit">
    </td>
</tr>`;

    document.querySelector('#table').innerHTML = htmlContent;
}