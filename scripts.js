// scripts.js

document.addEventListener('DOMContentLoaded', function () {
    updateTime();
    setInterval(updateTime, 1000);
    generateCalendar();
    generateHolidays();
    showSection('jmb');
});

// [Put all other JavaScript functions here like updateTime(), showSection(), addToCart(), bookAppointment(), etc.]

