// function calculateAge
function calculateAge() {
    // Get 
    const birthdateInput = document.getElementById('birthdate').value;
    const birthdate = new Date(birthdateInput);
    const today = new Date();

    if (!birthdateInput) {
        document.getElementById('result').innerText = "Please enter a valid birthdate.";
        return;
    }

    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDifference = today.getMonth() - birthdate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }

    document.getElementById('result').innerText = `Your age is ${age} years.`;
}
