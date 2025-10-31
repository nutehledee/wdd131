document.addEventListener('DOMContentLoaded', function() {
    // Set current year
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    
    // Set last modified date
    document.getElementById("lastModified").innerHTML = "Last Updated: " + document.lastModified;
});