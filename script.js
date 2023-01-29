const BASE_URL='https://api.themoviedb.org/3'
const API_KEY='api_key=05115a04b06d974d0210b99b0228bd44'
// const API_URL=BASE_URL+"/discover/movie?sort_by=popularity.desc&"+API_KEY
// console.log(API_URL);
const searchURL=BASE_URL+'/search/movie?'+API_KEY;

let movie = document.getElementById("movie");
let series = document.getElementById("series");
const select = document.getElementById("select");

let day = "day";

function hello() {
  day = select.value;
  if (movie.checked == true && day == "week") {
    // console.log(day);
    movie.addEventListener("change", getMovie(day));
    day = select.value;
  } else if (movie.checked == true && day == "day") {
    movie.addEventListener("change", getMovie(day));
    day = select.value;
  } else if (movie.checked == false && day == "week") {
    movie.addEventListener("change", getSeries(day));
    day = select.value;
  } else if (series.checked == true && day == "day") {
    movie.addEventListener("change", getSeries(day));
    day = select.value;
  }
}

function up() {
  getMovie(day);
}
function down() {
  getSeries(day);
}


let card = document.getElementById("card2");
async function getMovie(e) {
  card.innerHTML = ``;
  console.log(e);
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/movie/${e}?api_key=3fd2be6f0c70a2a598f084ddfb75487c`
  );
  const data = await res.json();
  data.results.map((e) => {
    console.log(e);
    card.innerHTML += `
    <div class="card">
    <div class="circle">${(e.vote_average*10).toFixed(1)}<span>%</span></div>
    <img src="https://image.tmdb.org/t/p/w154${e.poster_path}" alt="">
    <div><h2>${e.title}</h2>
    <p>Genere</p>
    <h3>${e.release_date}</h3></div>
    </div>
</div>
      `;
  });
}
async function getSeries(el) {
  card.innerHTML = ``;
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/tv/${el}?api_key=05115a04b06d974d0210b99b0228bd44`
  );
  const data = await res.json();
  data.results.map((e) => {
    card.innerHTML += `
    <div class="card">
    <div class="circle"></div>
    <img src="https://image.tmdb.org/t/p/w154${e.poster_path}" alt="">
    <div><h2>${e.name}</h2>
    <p>Genere</p>
    <h3>${e.first_air_date}</h3></div>
    </div>
</div>
        `;
  });
}
getMovie("day");
