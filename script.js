/*
  File: script.js
  Author: CS100 Team
  Date Created: 23 July 2023
  Copyright: CSTU
  Description: JS code of CSTU Passport that validate with JS
*/

const config = {
    backendUrl: "http://localhost:8000/", // Default backend URL
  };
  const port = 8000;

//function alert
function ourpage() {
  alert("Welcome our activities form ت ");
}

function formsubmit(){
  alert("This form was submitted !")
}

  // Function to validate Firstname and Lastname
function validateName() {
  const fullnameInput = document.getElementById("fullname");
  const names = fullnameInput.value.trim().split(" ");
  const errorElement = document.getElementById("fullnameError");

  if (names.length !== 2) {
    errorElement.textContent = "Please enter both your Firstname and Lastname.";
    return false;
  } else {
    errorElement.textContent = ""; // Clear the error message when valid
  }
  return true;
}

// Function to validate Student ID
function validateStudentID() {
  const studentIDInput = document.getElementById("studentID");
  const studentIDPattern = /^\d{10}$/;
  const errorElement = document.getElementById("studentIDError");

  if (!studentIDPattern.test(studentIDInput.value)) {
    errorElement.textContent = "Please enter your 10 digits Student ID .";
    return false;
  } else {
    errorElement.textContent = ""; // Clear the error message when valid
  }
  return true;
}

// Function to validate form inputs on user input
function validateFormOnInput() {
  validateName();
  validateStudentID();
}

// Event listener when the page content has finished loading
document.addEventListener("DOMContentLoaded",()=> {
  const form = document.getElementById("myform");
  form.addEventListener("submit", submitform);
});

// Function to submit the form
async function submitform(event) {
  event.preventDefault();

// Create the data object to send to the backend
const formData = new FormData(event.target);
const data = {
  first_name: formData.get("fullname").split(" ")[0],
  last_name: formData.get("fullname").split(" ")[1],
  student_id: parseInt(formData.get("studentID"))
};

console.log(data);
}

async function fetchData() {
  try {
    // Send data to the backend using POST request
    const response = await fetch(`http://${window.location.hostname}:${port}/record`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const responseData = await response.json();
      console.log("Form data submitted successfully!");

      // Format JSON data for display
      const formattedData = Object.entries(responseData.data)
        .map(([key, value]) => `"${key}": "${value}"`)
        .join("\n");

      // Display success message with formatted data
      alert(responseData.message + "\n" + formattedData);

      document.getElementById("myForm").reset();
    } else {
      console.error("Failed to submit form data.");

      // Display error message
      alert("Failed to submit form data. Please try again.");
    }
  } catch (error) {
    console.error("An error occurred while submitting form data:", error);
  }
}

// Event listener for form submission
document.getElementById("myform").addEventListener("submit", submitform);

// Event listeners for input validation
document.getElementById("fullname").addEventListener("input", validateName);
document.getElementById("studentID").addEventListener("input", validateStudentID);

document.getElementById('myform').addEventListener('submit', function(event) {
  event.preventDefault();

  const fullName = document.getElementById('fullname').value.toLowerCase();
  const studentId = document.getElementById('studentID').value.toLowerCase();
  const resultText = document.getElementById('result-text');
  const subResultText = document.getElementById('sub-result-text');

  if (fullName.includes('thunjira satthapiriyapong') && studentId.includes('6609613077')) {
    resultText.innerText = "Fair's Activities";
    subResultText.innerHTML = '<div style="text-align: left;">'
                              +'4  aug  2023     : ปฐมนิเทศมหาวิทยาลัยธรรมศาสตร์<br>'
                              +'8  aug  2023     : ปฐมนิเทศนักศึกษาใหม่คณะวิทยาศาสตร์และเทคโนโลยี<br>'
                              +'10 aug  2023     : กิจกรรมแรกพบนักศึกษาใหม่<br>'
                              +'25 aug  2023     : กิจกรรมเฉลยสายรหัสสาขาวิชาสถิติ<br>'
                              +'20 oct  2023     : กิจกรรมพบอาจารย์ที่ปรึกษาสาขาวิชาสถิติ';

  } else if (fullName.includes('jutathip thangprasomsuk') && studentId.includes('6609612905')) {
    resultText.innerText = "Tonnam's Activities";
    subResultText.innerHTML = '<div style="text-align: left;">'
                              +'4  aug  2023     : ปฐมนิเทศมหาวิทยาลัยธรรมศาสตร์<br>'
                              +'8  aug  2023     : ปฐมนิเทศนักศึกษาใหม่คณะวิทยาศาสตร์และเทคโนโลยี<br>'
                              +'10 aug  2023     : กิจกรรมแรกพบนักศึกษาใหม่<br>'
                              +'25 aug  2023     : กิจกรรมเฉลยสายรหัสสาขาวิชาสถิติ<br>'
                              +'20 oct  2023     : กิจกรรมพบอาจารย์ที่ปรึกษาสาขาวิชาสถิติ<br>'
                              +'20 nov  2023     : TU Freshy Games 2023- Parade';

  } else {
    resultText.innerText = 'NOT FOUND';
    subResultText.innerText = '';
  }
});