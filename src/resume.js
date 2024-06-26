window.onload = function() {
  fetchResumeData();
};

function fetchResumeData() {
  fetch("https://api.danmyers.net")
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to fetch resume data.");
      }
      return response.json();
    })
    .then(data => displayResumeData(data.body.resumeData))
    .catch(error => {
      document.getElementById("resumeData").innerHTML = "<p>" + error.message + "</p>";
    });
}

function displayResumeData(resumeData) {
  var resumeDiv = document.getElementById("resumeData");
  var resumeHTML = "";
  
  // Basic Information
  resumeHTML += "<h2>" + resumeData.basics.name + "</h2>";
  resumeHTML += "<h3>" + resumeData.basics.label + "</h3>";
  resumeHTML += "<p>Email: " + resumeData.basics.email + "</p>";
  resumeHTML += "<p>Phone: " + resumeData.basics.phone + "</p>";
  resumeHTML += "<p>Location: " + resumeData.basics.location.city + ", " + resumeData.basics.location.region + "</p>";
  resumeHTML += "<p>Summary: " + resumeData.basics.summary + "</p>";

  // Work Experience
  resumeHTML += "<h3>Work Experience</h3>";
  resumeData.work.forEach(function(work) {
    resumeHTML += "<p><strong>" + work.name + "</strong></p>";
    resumeHTML += "<p>Position: " + work.position + "</p>";
    resumeHTML += "<p>URL: <a href='" + work.url + "'>" + work.url + "</a></p>";
    resumeHTML += "<p>Start Date: " + work.startDate + "</p>";
    resumeHTML += "<p>End Date: " + work.endDate + "</p>";
    resumeHTML += "<p>Summary: " + work.summary + "</p>";
    resumeHTML += "<p>Highlights: <ul>";
    work.highlights.forEach(function(highlight) {
      resumeHTML += "<li>" + highlight + "</li>";
    });
    resumeHTML += "</ul></p>";
  });

  // Interests
  resumeHTML += "<h3>Interests</h3>";
  resumeData.interests.forEach(function(interest) {
    resumeHTML += "<p><strong>" + interest.name + "</strong></p>";
    resumeHTML += "<p>Keywords: " + interest.keywords.join(", ") + "</p>";
  });

  resumeDiv.innerHTML = resumeHTML;
}
