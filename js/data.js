
window.reviewData = [
    {
        location: 'Guildwood Park',
        name:'Sarah M.',
        date: '2023/04/10',
        rating: '3',
        comment: 'Its kinda boring and there isnt much to do here. View is nice and its lowkey but idk if its worth the trek',
    },
    {
        location: 'Grey Abbey Park',
        name:'Naushin R.',
        date: '2023/01/14',
        rating: '5',
        comment: 'Its so peaceful and serene, i love listening to the birds',
    },
    {
        location: 'Midori Ramen',
        name:'Jermaine R.',
        date: '2023/07/19',
        rating: '4',
        comment: "Theyre garlic ramen is amazing, I'll be sure to come back with my whole family."
    },
    {
        location: 'Arctic Bites',
        name:'Michael J.',
        date: '2023/08/09',
        rating: '2',
        comment: 'Ice cream is too sweet and line was wayy too long',
    },
    {
        location: 'Saving Mondays',
        name:'Giuliana S.',
        date: '2023/08/10',
        rating: '4',
        comment: "Staff as so kind and their cookies are amazing!! Love coming here to work! It's such a cozy and cute space.",
    }
];

function reviewCards() {
    const reviewCont = document.getElementById("review-container");
    reviewCont.innerHTML = "";
  
    reviewData.forEach((review) => {
      const card = document.createElement("div");
      card.classList.add("review-cards");
  
      const rating = document.createElement("p");
      rating.classList.add("card-rating");
      rating.textContent = starRating(review.rating);
  
      const reviewText = document.createElement("p");
      reviewText.textContent = review.comment;
      reviewText.classList.add("card-text");
  
      const date = document.createElement("p");
      date.textContent = `${review.date}`;
      date.classList.add("card-date");
  
      const name = document.createElement("p");
      name.textContent = `${review.name}`;
      name.classList.add("card-name");

      const location = document.createElement("h3");
      location.textContent = review.location;
      location.classList.add("card-location");

      card.appendChild(location);
      card.appendChild(rating);
      card.appendChild(reviewText);
      card.appendChild(name);
      card.appendChild(date);
  
      reviewCont.appendChild(card);
    });
  }

  function starRating(rating) {
    const totalStar = 5;
    const fullStar = "★".repeat(rating);
    const emptyStar = "☆".repeat(totalStar - rating);
    return fullStar + emptyStar;
  }

  function addReview() {
    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const rating = parseInt(document.getElementById("rating").value);
    const reviewText = document.getElementById("reviewText").value;
    const location = document.getElementById("location").value;

    if (name === "" || date === "" || isNaN(rating) || reviewText === "") {
      alert("Please enter your information and try again");
      return false;
    }
  
    reviewData.push({
      location: location,
      name: name,
      date: date,
      rating: rating,
      text: reviewText
    });
  
    reviewCards();
  }
  

  window.onload = reviewCards();