// ***** Important Note *****
// ON PAGE 37 — two numbers, 3618 and 3619 (the "two baddies"), are missing,
// causing what I'm henceforth going to refer to as the "weird jump."
// This "weird jump" has been taken into account.
//
// Also, "L-list" refers to the Letterboxd.com list this program is for.

MAX = 8933; // Number of movies currently in L-list


// Returns a random number between min and max (both inclusive)
function getRandInt(min, max) {
  return Math.floor(Math.random() * (max - min+1) ) + min;
}


// Returns link to L-list page containing a particular movie number 
function getListLink(num) {
  var page_num; // L-list page to be linked to

  // Before the "weird-jump"
  if (num < 3701) {
    if (num % 100 == 0) {
      page_num = Math.trunc(num/100);
    } else {
      page_num = Math.trunc(num/100) + 1;
    }
  }

  // After the "weird jump"
  if (num >= 3701) {
    if ((num % 100 == 0) || (num % 100 == 1) || (num % 100 == 2)) {
      page_num = Math.trunc(num/100);
    } else {
      page_num = Math.trunc(num/100) + 1;
    }
  }

  return "https://letterboxd.com/tobiasandersen2/list/random-movie-roulette/page/" + page_num
}


function generateNumber() {
  var movie_num = getRandInt(1, MAX);
  
  // Generates a new number if either of the "two baddies" are generated
  (movie_num == 3618 || movie_num == 3619) ? generateNumber() : false;

  return movie_num
}


function addMovie() {
  var movie_num = generateNumber()
}


function deleteMovie() {

}
