const submitBtn = document.querySelector("#submit-button");
const rateBtn = document.querySelector("#rate-button");
const ratedInputs = document.querySelectorAll(".card__numbers--noactive");
const activeInput = document.querySelector(".active");
const checkedRating = document.querySelector("#checked");
const thankYouCard = document.querySelector(".thank-you");
const mainCard = document.querySelector(".card");

let selectedInput;



ratedInputs.forEach((rated) => {
  rated.addEventListener("click", () => {
    checkedRating.innerHTML = rated.value;
  });
});

submitBtn.addEventListener("click", () => {
    // ratedInputs.forEach(check => {
    //     let value = check.value
    //     if(check.checked) {
    //         console.log('fajo');
    //     }
        
    // })


  mainCard.style.display = "none";
  thankYouCard.style.display = "block";
});

rateBtn.addEventListener("click", () => {
  mainCard.style.display = "block";
  thankYouCard.style.display = "none";
});
