// Get references to HTML elements
const dayInput = document.getElementById('day');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');
const calculateButton = document.getElementById('calculate');
const resultElement = document.getElementById('result');

// Event listener for the Calculate button
calculateButton.addEventListener('click', calculateAge);

function calculateAge() {
    // Get user inputs
    const day = parseInt(dayInput.value);
    const month = parseInt(monthInput.value);
    const year = parseInt(yearInput.value);

    // Check for valid inputs
    if (isNaN(day) || isNaN(month) || isNaN(year) || day < 1 || day > 31 || month < 1 || month > 12 || year < 1900 || year > new Date().getFullYear()) {
        resultElement.innerHTML = "Invalid date. Please enter a valid date.";
    } else {
        const currentDate = new Date();
        const birthDate = new Date(year, month - 1, day);
        
        // Calculate age
        const ageInMilliseconds = currentDate - birthDate;
        const ageInYears = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));
        
        // Calculate remaining months and days
        const remainingMilliseconds = ageInMilliseconds - (ageInYears * 365.25 * 24 * 60 * 60 * 1000);
        const remainingMonths = Math.floor(remainingMilliseconds / (30.44 * 24 * 60 * 60 * 1000));
        const remainingDays = Math.floor((remainingMilliseconds % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));
        
        // Display the result
        resultElement.innerHTML = `Your age is ${ageInYears} years, ${remainingMonths} months, and ${remainingDays} days.`;
    }
}
