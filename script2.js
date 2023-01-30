    // document.getElementById('innercard').addEventListener('click', mydata);

    // async function mydata(){
    //     const res=await fetch('https://api.themoviedb.org/3/movie/691422?api_key=05115a04b06d974d0210b99b0228bd44')
    //     const data=await res.json();
    //     console.log(data);



    // }
let movieid =localStorage.getItem("movieid");
let seriesid =localStorage.getItem("seriesid");
const imgsec=document.getElementById('imgsec');
const plot=document.getElementById('plot');
if(movieid!=null){
    showdata1(movieid);
    // getCast1(movieid);

}
else if(seriesid!=null){
    showdata2(seriesid); 
    // getCast2(seriesid);

}

async function showdata1(movieid){
    const res=await fetch(`https://api.themoviedb.org/3/movie/${movieid}?api_key=05115a04b06d974d0210b99b0228bd44`)
        const data=await res.json();
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
    <div class="plotleft">
                <h1>Plot :</h1>
                <p>${data.overview}</p>
            </div>       
            <div id="casting">
                <div class="castcard">
                    <img src="" alt="img">
                    <h3>name</h3>
                </div>
            </div>
    `

    const cast = document.getElementById("casting")
    console.log(cast)
    const castres = await fetch(` https://api.themoviedb.org/3/movie/${movieid}/credits?api_key=3fd2be6f0c70a2a598f084ddfb75487c`)
    console.log(castres)
    const castdata = await castres.json()
    console.log(castdata.cast[0].profile_path)
    cast.innerHTML=`
                <div class="castcard">
                    <img src="https://image.tmdb.org/t/p/w45${castdata.cast[0].profile_path}"alt="img">
                    <h3>${castdata.cast[0].name}</h3>
                </div>
                <div class="castcard">
                    <img src="https://image.tmdb.org/t/p/w45${castdata.cast[1].profile_path}"alt="img">
                    <h3>${castdata.cast[1].name}</h3>
                </div>
                <div class="castcard">
                    <img src="https://image.tmdb.org/t/p/w45${castdata.cast[2].profile_path}"alt="img">
                    <h3>${castdata.cast[2].name}</h3>
                </div>
                <div class="castcard">
                    <img src="https://image.tmdb.org/t/p/w45${castdata.cast[3].profile_path}"alt="img">
                    <h3>${castdata.cast[3].name}</h3>
                </div>
                <div class="castcard">
                    <img src="https://image.tmdb.org/t/p/w45${castdata.cast[4].profile_path}"alt="img">
                    <h3>${castdata.cast[4].name}</h3>
                </div>
    
    `

    localStorage.clear();

}
async function showdata2(seriesid){
    const res=await fetch(`https://api.themoviedb.org/3/tv/${seriesid}?api_key=05115a04b06d974d0210b99b0228bd44`)
        const data=await res.json();
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
    <div class="plotleft">
                <h1>Plot :</h1>
                <p>${data.overview}</p>
            </div>       
            <div id="casting"">
                <div class="castcard">
                    <img src="" alt="img">
                    <h3>name</h3>
                </div>
            </div>
    `

    const cast = document.getElementById("casting")
    console.log(cast)
    const castres = await fetch(` https://api.themoviedb.org/3/tv/${seriesid}/credits?api_key=05115a04b06d974d0210b99b0228bd44`)
    const data1 = await castres.json()
    console.log(data1.cast)
    cast.innerHTML=`
                <div class="castcard">
                    <img src="https://image.tmdb.org/t/p/w45${data1.cast[0].profile_path}"alt="img">
                    <h3>${data1.cast[0].name}</h3>
                </div>
                <div class="castcard">
                    <img src="https://image.tmdb.org/t/p/w45${data1.cast[1].profile_path}"alt="img">
                    <h3>${data1.cast[1].name}</h3>
                </div>
                <div class="castcard">
                    <img src="https://image.tmdb.org/t/p/w45${data1.cast[2].profile_path}"alt="img">
                    <h3>${data1.cast[2].name}</h3>
                </div>
                <div class="castcard">
                    <img src="https://image.tmdb.org/t/p/w45${data1.cast[3].profile_path}"alt="img">
                    <h3>${data1.cast[3].name}</h3>
                </div>
                <div class="castcard">
                    <img src="https://image.tmdb.org/t/p/w45${data1.cast[4].profile_path}"alt="img">
                    <h3>${data1.cast[5].name}</h3>
                </div>
    
    `
    localStorage.clear();

}

// async function getCast1(id){
//     const cast1=document.getElementById('casting')
//     const res1=await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=05115a04b06d974d0210b99b0228bd44`);
//     const data1=await res.json();
//     for(let i=0;i<=5;i++){
//         console.log(data.cast[i].name);
//         cast1.innerHTML+=`
//         <div class="castcard">
//         <h3>hello</h3>
//     </div>
        
//         `
//     }

// }
// async function getCast2(id){
//     const res=await fetch(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=05115a04b06d974d0210b99b0228bd44`);
//     const data=await res.json();
//     console.log(data);

// }
    