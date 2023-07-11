const allStar = document.querySelectorAll(".rating .star");
const ratingValue = document.querySelector(".rating input");
const userVal = document.querySelector(".txt");
const userVal1 = document.querySelector(".txt1");

allStar.forEach((item, idx) => {
  item.addEventListener("click", function() {
    let click = 0;
    ratingValue.value = idx + 1;
    // console.log(ratingValue.value);
    allStar.forEach((i) => {
      i.classList.replace("bxs-star", "bx-star");
      i.classList.remove("active");
    });
    for (let i = 0; i < allStar.length; i++) {
      if (i <= idx) {
        allStar[i].classList.replace("bx-star", "bxs-star");
        allStar[i].classList.add("active");
      } else {
        allStar[i].style.setProperty("--i", click);
        click++;
      }
    }
  });
});

const firebaseConfig = {
  apiKey: "AIzaSyBDcn-g4Xtj8N3eV-V8sxn_b5EsGPxUW3M",
  authDomain: "buddyblogratings.firebaseapp.com",
  databaseURL: "https://buddyblogratings-default-rtdb.firebaseio.com",
  projectId: "buddyblogratings",
  storageBucket: "buddyblogratings.appspot.com",
  messagingSenderId: "1052624289891",
  appId: "1:1052624289891:web:c6ada2d74b568b7f7bf856",
};

firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("ratingform");

document.getElementById("ratingform").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var feedback = userVal.value;
  var star = ratingValue.value;
  var User = userVal1.value;

  saveMessages(feedback, star, User);


  document.querySelector(".alert").style.display = "block";
  document.querySelector(".alert1").style.display = "none";

  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 4000);

  setTimeout(() => {
    document.querySelector(".alert1").style.display = "block";
  }, 4000);

  document.getElementById("ratingform").reset();
}

const saveMessages = (feedback, star, User) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    FEED_BACK: feedback,
    STAR_RATINGS: star,
    USER_NAME: User,
  });
};

