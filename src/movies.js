// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function clonArray(array) {
  return JSON.parse(JSON.stringify(array));
}

function getAllDirectors(moviesArray) {
  return moviesArray.map((el1) => {
    return el1.director;
  });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let counter = 0;
  moviesArray.map((elm) => {
    if (elm.director === "Steven Spielberg" && elm.genre.includes("Drama")) {
      counter++;
    }
  });
  return counter;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray.length) {
    return 0;
  }
  let average = moviesArray.reduce((acc, elm) => {
    if (elm.score) {
      return acc + elm.score;
    } else {
      return acc;
    }
  }, 0);
  average = average / moviesArray.length;
  average = Math.round(average * 100) / 100;
  return average;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let arrayFiltered = moviesArray.filter((eachMovie) => {
    if (eachMovie.genre.includes("Drama")) {
      return true;
    } else {
      return false;
    }
  });
  return scoresAverage(arrayFiltered);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const newArray = clonArray(moviesArray);
  newArray.sort((elm1, elm2) => {
    if (elm1.year > elm2.year) {
      return 1;
    } else if (elm1.year < elm2.year) {
      return -1;
    } else if (elm1.year === elm2.year) {
      if (elm1.title > elm2.title) {
        return 1;
      } else if (elm1.title < elm2.title) {
        return -1;
      } else {
        return 0;
      }
    }
  });
  //   console.log(newArray);
  return newArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const newArray = clonArray(moviesArray);
  newArray.sort((elm1, elm2) => {
    if (elm1.title > elm2.title) {
      return 1;
    } else if (elm1.title < elm2.title) {
      return -1;
    } else {
      return 0;
    }
  });

  let result = newArray.map((elm, index) => {
    return elm.title;
  });

  return result.splice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function timeChanger(string){
  if (!string){return 0}
  // console.log(string);
  if(string.includes("h") && string.includes("min") ){//console.log(string)
    string = string.split(" ")
    let hours = string[0].slice(0,-1)
    // console.log(string[0])

    // console.log(string[1])
    let time = hours * 60
    let minutes = string[1].slice(0,-3)
    minutes = minutes - - 0;
    time += minutes;
    return time;}
    else if(string.includes("min") && !string.includes("h")){
      let minutes = string.slice(0, -3)
    minutes = minutes - - 0;
    return minutes
    }else if(string.includes("h") && !string.includes("min")){
      let minutes = string.slice(0, -1)
      minutes = minutes - - 0;
      minutes = minutes*60
      return minutes}
}

console.log(timeChanger('7min'));



function turnHoursToMinutes(moviesArray) {
    const newArray = clonArray(moviesArray);
    newArray.forEach(element => {
        element.duration = timeChanger(element.duration)
        
    });
    return newArray
}


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
