
window.reviewData = [
    {
        location: 'Grey Abbey Park',
        name:'Naushin R.',
        date: '2023-08-09',
        rating: '5/5',
        comment: 'Its so peaceful and serene, i love listening to the birds',
    },
    {
        location: 'Midori Ramen',
        name:'Jermaine R.',
        date: '2023-08-09',
        rating: '5/5',
        comment: "Theyre garlic ramen is amazing, I'll be sure to come back with my whole family."
    },
    {
        location: 'Guildwood Park',
        name:'Sarah M.',
        date: '2023-08-09',
        rating: '5/5',
        comment: 'Its so peaceful and serene, I love listening to the birds',
    },
    {
        location: 'Arctic Bites',
        name:'Naushin',
        date: '2023-08-09',
        rating: '5/5',
        comment: 'Its so peaceful and serene, I love listening to the birds',
    },
    {
        location: 'Saving Mondays',
        name:'Naushin',
        date: '2023-08-09',
        rating: '5/5',
        comment: "Staff as so kind and their cookies are amazing!! Love coming here to work! It's such a cozy and cute space",
    }
];

function reviewCards() {
    const reviewCont = document.getElementById("review-container");
    reviewCont.innerHTML = "";
  
    reviewData.forEach((review) => {
      const card = document.createElement("div");
      card.classList.add("reviewCards");
  
      const rating = document.createElement("p");
      rating.classList.add("card-rating");
      rating.textContent = review.rating;
  
      const reviewText = document.createElement("p");
      reviewText.textContent = review.comment;
      reviewText.classList.add("card-text");
  
      const date = document.createElement("p");
      date.textContent = `${review.date}`;
      date.classList.add("card-date");
  
      const name = document.createElement("p");
      name.textContent = `(${review.name})`;
      name.classList.add("card-name");

      const location = document.createElement("p");
      location.textContent = review.location;

      card.appendChild(rating);
      card.appendChild(reviewText);
      card.appendChild(date);
      card.appendChild(name);
      card.appendChild(location);
  
      reviewCont.appendChild(card);
    });
  }

  window.onload = reviewCards();