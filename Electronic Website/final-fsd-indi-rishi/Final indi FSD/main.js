document.addEventListener("DOMContentLoaded", function () {
    var progressBar = document.getElementById("progress");
    var progress = 0;

    // Function to update progress bar
    function updateProgress() {
        if (progress <= 100) {
            progress += 1;
            progressBar.style.width = progress + "%";
            setTimeout(updateProgress, 130); // Adjust the time interval as needed
        } else {
            // Redirect to another page
            window.location.href = "file:///C:/Users/NIHAL%20DOSHI/Desktop/techgroove/final-fsd-indi-rishi/Final%20indi%20FSD/HomePage.html"; // Change the URL to the desired destination
        }
    }

    updateProgress(); // Start updating the progress bar
});