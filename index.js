function isLeapYear(year) {
    // Leap year conditions:
    // 1. The year is evenly divisible by 4
    // 2. If the year is divisible by 100, it must also be divisible by 400

    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;  // It's a leap year
    } else {
        return false;  // It's not a leap year
    }
}

// Test the function with a year (e.g., 2024)
const yearToCheck = 2024;
if (isLeapYear(yearToCheck)) {
    console.log(yearToCheck + " is a leap year.");
} else {
    console.log(yearToCheck + " is not a leap year.");
}
