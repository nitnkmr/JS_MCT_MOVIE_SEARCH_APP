    // document.getElementById('innercard').addEventListener('click', mydata);

    // async function mydata(){
    //     const res=await fetch('https://api.themoviedb.org/3/movie/691422?api_key=05115a04b06d974d0210b99b0228bd44')
    //     const data=await res.json();
    //     console.log(data);



    // }
let movieid =localStorage.getItem("movieid");
let seriesid =localStorage.getItem("seriesid");
console.log(movieid);
const imgsec=document.getElementById('imgsec');
const plot=document.getElementById('plot');
if(movieid!=null){
    showdata1(movieid);

}
else if(seriesid!=null){
    showdata2(seriesid);  
}

async function showdata1(movieid){
    const res=await fetch(`https://api.themoviedb.org/3/movie/${movieid}?api_key=05115a04b06d974d0210b99b0228bd44`)
        const data=await res.json();
        console.log(data);
    imgsec.innerHTML=`
            <div class="imgsec1" style="background-image: url('https://image.tmdb.org/t/p/w1280${data.backdrop_path}')">
                <div class="innerposter">
                    <img src="https://image.tmdb.org/t/p/w154${data.poster_path}" alt="img">
                </div>
                <div class="innerinfo">
                    <div class="circle">${(data.vote_average*10).toFixed(1)}%</div>
                    <div class="length">
                        <p>${data.release_date}</p>
                        <p>${data.runtime} mins</p>
                         <p>EngLish</p>
                    </div>
                    <div class="title">
                        <div class="genere">Horror || Fantasy</div>
                        <h2>${data.original_title}</h2>
                    </div>
                </div>

            </div>
        
        

    `
    plot.innerHTML=`
    <h1>Plot :</h1>
    <p>${data.overview}</p>
    `
    localStorage.clear();

}
async function showdata2(seriesid){
    const res=await fetch(`https://api.themoviedb.org/3/tv/${seriesid}?api_key=05115a04b06d974d0210b99b0228bd44`)
        const data=await res.json();
        console.log(data);
    imgsec.innerHTML=`
            <div class="imgsec1" style="background-image: url('https://image.tmdb.org/t/p/w1280${data.backdrop_path}')">
                <div class="innerposter">
                    <img src="https://image.tmdb.org/t/p/w154${data.poster_path}" alt="img">
                </div>
                <div class="innerinfo">
                    <div class="circle">${(data.vote_average*10).toFixed(1)}</div>
                    <div class="length">
                        <p>${data.first_air_date}</p>
                        <p>${data.seasons.length} Seasons</p>
                         <p>${data.spoken_languages[0].name}</p>
                    </div>
                    <div class="title">
                        <div class="genere">Horror || Fantasy</div>
                        <h2>${data.name}</h2>
                    </div>
                </div>

            </div>
        
        

    `
    plot.innerHTML=`
    <h1>Plot :</h1>
    <p>${data.overview}</p>
    `
    localStorage.clear();

}
    