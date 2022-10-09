// var content = document.getElementById("content");
// fetch(`http://www.omdbapi.com/?apikey=716ec24e&s=thor`)
//     .then(function (res) {
//       return res.json();
//     })
//     .then(function (re2) {
//       re2.Search.forEach(function (elem) {
//         content.innerHTML += `
//                 <div id="parent">
//                 <img  id="poster" src="${elem.Poster}" alt="">
//                 <div  id="extra"> 
//                 <h2 id="title"> Name: ${elem.Title}</h2>
//                 <h3 id="year"> Year: ${elem.Year}</h3>
//                 <h3 id="imdbID"> ImdbID: ${elem.imdbID}</h3>
//                 <h3 id="type"> Type: ${elem.Type}</h3>
          
//                 </div>
     
//                 </div>`;
//       });
//     })
  

//     fetch(`http://www.omdbapi.com/?apikey=716ec24e&t=don`)
//     .then(function (res) {
//       return res.json();
//     })
//     .then(function (re2) {
//       re2.Search.forEach(function (elem) {
//         content.innerHTML += `
//                 <div id="parent">
//                 <img  id="poster" src="${elem.Poster}" alt="">
//                 <div  id="extra"> 
//                 <h2 id="title"> Name: ${elem.Title}</h2>
//                 <h3 id="year"> Year: ${elem.Year}</h3>
//                 <h3 id="imdbID"> ImdbID: ${elem.imdbID}</h3>
//                 <h3 id="type"> Type: ${elem.Type}</h3>
          
//                 </div>
     
//                 </div>`;
//       });
//     })
 




// function moviedisplay() {
//   content.innerHTML = "";
//   var movieName = document.getElementById("movieName").value;
//   fetch(`http://www.omdbapi.com/?apikey=716ec24e&s=${movieName}`)
//     .then(function (res) {
//       return res.json();
//     })
//     .then(function (re2) {
//       re2.Search.forEach(function (elem) {
//         content.innerHTML += `
//                 <div id="parent">
//                 <img  id="poster" src="${elem.Poster}" alt="">
//                 <div  id="extra"> 
//                 <h2 id="title"> Name: ${elem.Title}</h2>
//                 <h3 id="year"> Year: ${elem.Year}</h3>
//                 <h3 id="imdbID"> ImdbID: ${elem.imdbID}</h3>
//                 <h3 id="type"> Type: ${elem.Type}</h3>
          
//                 </div>
     
//                 </div>`;
//       });
//     })
//     .catch(function (err) {
//       document.getElementById("error").innerHTML =
//         '<img id="errorimage" src="https://c.tenor.com/unvXyxtdn3oAAAAC/no-result.gif">';
//       console.log(err);
//     });

//   // window.location.reload();
//   // setTimeout(function(){
//   //     location.reload(1);
//   // },5000);
// }


// try to


var content = document.getElementById("content");
content.innerHTML = "";
fetch(`http://www.omdbapi.com/?apikey=716ec24e&s=thor`)
  .then(function (res) {
    return res.json();
  })
  .then(function (re2) {
    re2.Search.forEach(function (elem) {
      ratingFun();
      async function ratingFun() {
          var ra = elem.imdbID;
          var data = await fetch(`http://www.omdbapi.com/?apikey=316f46e2&i=${ra}`);
     
          var data3 = await data.json()
          
          var rating = parseFloat(data3.Ratings[0].Value);
          if (rating > 7.5) {
              rating += "  Recommended"
          }
        
          content.innerHTML += `
         
          
          <div id="parent">
          <img  id="poster" src="${elem.Poster}" alt="">
          <div  id="extra"> 
          <h2 id="title"> Name: ${elem.Title}</h2>
          <h3 id="year"> Year: ${data3.Released}</h3>
          <h3 id="imdbID"> Rating : ${rating}</h3>
         
    
          </div>

          </div>`;

      }
    });
  })

  content.innerHTML = "";
  fetch(`http://www.omdbapi.com/?apikey=716ec24e&s=manjhi`)
    .then(function (res) {
      return res.json();
    })
    .then(function (re2) {
      re2.Search.forEach(function (elem) {
        ratingFun();
        async function ratingFun() {
            var ra = elem.imdbID;
            var data = await fetch(`http://www.omdbapi.com/?apikey=316f46e2&i=${ra}`);
       
            var data3 = await data.json()
            
            var rating = parseFloat(data3.Ratings[0].Value);
            if (rating > 7.5) {
                rating += "  Recommended"
            }
          
            content.innerHTML += `
           
            
            <div id="parent">
            <img  id="poster" src="${elem.Poster}" alt="">
            <div  id="extra"> 
            <h2 id="title"> Name: ${elem.Title}</h2>
            <h3 id="year"> Year: ${data3.Released}</h3>
            <h3 id="imdbID"> Rating : ${rating}</h3>
           
      
            </div>
 
            </div>`;

        }
      });
    })



function moviedisplay() {
  content.innerHTML = "";
  var movieName = document.getElementById("movieName").value;
  fetch(`http://www.omdbapi.com/?apikey=716ec24e&s=${movieName}`)
    .then(function (res) {
      return res.json();
    })
    .then(function (re2) {
      re2.Search.forEach(function (elem) {
        ratingFun();
        async function ratingFun() {
            var ra = elem.imdbID;
            var data = await fetch(`http://www.omdbapi.com/?apikey=316f46e2&i=${ra}`);
       
            var data3 = await data.json()
            
            var rating = parseFloat(data3.Ratings[0].Value);
            if (rating > 7.5) {
                rating += "  Recommended"
            }
          
            content.innerHTML += `
           
            
            <div id="parent">
            <img  id="poster" src="${elem.Poster}" alt="">
            <div  id="extra"> 
            <h2 id="title"> Name: ${elem.Title}</h2>
            <h3 id="year"> Year: ${data3.Released}</h3>
            <h3 id="imdbID"> Rating : ${rating}</h3>
           
      
            </div>
 
            </div>`;

        }
      });
    })
    .catch(function (err) {
      document.getElementById("error").innerHTML =
        '<img id="errorimage" src="https://c.tenor.com/unvXyxtdn3oAAAAC/no-result.gif">';
      console.log(err);
    });

  // window.location.reload();
  // setTimeout(function(){
  //     location.reload(1);
  // },5000);
}

