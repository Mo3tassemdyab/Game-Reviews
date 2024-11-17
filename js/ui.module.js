export class Ui {
  displayDataGame(data) {
    let gamesBox = ``;
    for (let i = 0; i < data.length; i++) {
      gamesBox += `
         <div class="col">
         <div data-id="${
           data[i].id
         }"  class="card h-100 bg-transparent" role="button" ">
            <div  class="card-body">
               <figure class="position-relative">
                  <img class="card-img-top object-fit-cover h-100" src="${
                    data[i].thumbnail
                  }" />
               
               </figure>
   
               <figcaption>
   
                  <div class="hstack justify-content-between">
                     <h3 class="h6 small">${data[i].title}</h3>
                     <span class="badge text-bg-primary p-2">Free</span>
                  </div>
   
                  <p class="card-text small text-center opacity-50">
                     ${data[i].short_description.split(" ", 8)}
                  </p>
   
               </figcaption>
            </div>
   
            <footer class="card-footer small hstack justify-content-between">
   
               <span class="badge badge-color">${data[i].genre}</span>
               <span class="badge badge-color">${data[i].platform}</span>
   
            </footer>
         </div>
      </div>
         `;
    }

    document.getElementById("gameData").innerHTML = gamesBox;
  }

  displayDetails(data) {
    const content = `
      <div class="col-md-4">
      <img src="${data.thumbnail}" class="w-100" alt="image details" />
   </div>
   <div class="col-md-8">
      <h3>Title: ${data.title}</h3>
      <p>Category: <span class="badge text-bg-info"> ${data.genre}</span> </p>
      <p>Platform: <span class="badge text-bg-info"> ${data.platform}</span> </p>
      <p>Status: <span class="badge text-bg-info"> ${data.status}</span> </p>
      <p>Release Date: <span class="badge text-bg-info"> ${data.release_date }</span> </p>
      <p class="small">${data.description}</p>
      <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">Show Game</a>
      <a class="btn btn-outline-warning" target="_blank" href="${data.freetogame_profile_url}">Show Profile</a>
   </div>

 <div>
    <div id="carouselExample" class="carousel slide">
    <h3 class='text-center py-3 fw-bold'>Screenshots</h3>
  <div class="carousel-inner ">
    <div class="carousel-item active">
      <img src="${data.screenshots[0].image}" class="d-block w-75 m-auto" alt="...">
    </div>
    <div class="carousel-item">
      <img src="${data.screenshots[1].image}" class="d-block w-75 m-auto" alt="...">
    </div>
    <div class="carousel-item">
      <img src="${data.screenshots[2].image}" class="d-block w-75 m-auto" alt="...">
    </div>
  </div>


 
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>

</div>


      `;

    document.getElementById("detailsContent").innerHTML = content;
    
  }

 
}
