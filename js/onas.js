function addReview() {
    var name = document.getElementById("name").value;
    var comment = document.getElementById("comment").value;

    if (name && comment) {
      var review = {
        name: name,
        comment: comment
      };

      // Retrieve existing reviews from local storage
      var existingReviews = JSON.parse(localStorage.getItem("reviews")) || [];

      // Add the new review
      existingReviews.push(review);

      // Save the updated reviews to local storage
      localStorage.setItem("reviews", JSON.stringify(existingReviews));

      // Clear the input fields
      document.getElementById("name").value = "";
      document.getElementById("comment").value = "";

      // Refresh the reviews section
      displayReviews();
    }
  }

  function displayReviews() {
    var reviewContainer = document.getElementById("reviewContainer");
    reviewContainer.innerHTML = "";

    // Retrieve reviews from local storage
    var reviews = JSON.parse(localStorage.getItem("reviews")) || [];

    for (var i = 0; i < reviews.length; i++) {
      var review = reviews[i];

      // Create review elements
      var reviewDiv = document.createElement("div");
      reviewDiv.classList.add("review");

      var nameElement = document.createElement("h4");
      nameElement.textContent = review.name;

      var commentElement = document.createElement("p");
      commentElement.textContent = review.comment;

      reviewDiv.appendChild(nameElement);
      reviewDiv.appendChild(commentElement);

      reviewContainer.appendChild(reviewDiv);
    }
  }

  // Display existing reviews when the page loads
  window.addEventListener("load", function () {
    displayReviews();
  });