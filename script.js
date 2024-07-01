function ageCalculate() {
    // Get the value from the date input field
    const dateInput = document.getElementById('date-input').value;
    
    // Check if the input field is empty
    if (!dateInput) {
        alert('Please select a date.');
        return;
    }

    // Convert the input date string into a Date object
    const birthDate = new Date(dateInput);
    const today = new Date();

    // Calculate the difference in years, months, and days
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    // If days are negative, subtract one month and adjust days
    if (days < 0) {
        months -= 1;
        // Get the last date of the previous month to adjust days
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    // If months are negative, subtract one year and adjust months
    if (months < 0) {
        years -= 1;
        months += 12;
    }

    // Update the HTML content to display the calculated age
    document.getElementById('years').textContent = years;
    document.getElementById('months').textContent = months;
    document.getElementById('days').textContent = days;
}
