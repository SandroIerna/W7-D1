let container = document.querySelector(".row");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0338074fd7mshc55ec8ce8050d51p1f1e97jsn507294c645ff",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

let getDaftPunk = function () {
  fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=pink floyd", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

  fetch(
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=daft punk",
    options
  )
    .then((response) => response.json())
    .then((songList) => {
      for (song of songList.data) {
        console.log(song);
        container.innerHTML += `<div class="col-4  my-3">
                     <div class="card">
                        <img src="${song.album.cover_xl}" class="card-img-top" alt="..." />
                        <div class="card-body">
                        <h5 class="card-title">${song.title_short}</h5>
                        </div>
                     </div>
                    </div>
                </div>  `;
      }
    })
    .catch((err) => console.error(err));
};

let getPinkFloyd = function () {
  fetch(
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=pink floyd",
    options
  )
    .then((response) => response.json())
    .then((songList) => {
      for (song of songList.data) {
        console.log(song);
        container.innerHTML += `<div class="col-4  my-3">
                     <div class="card">
                        <img src="${song.album.cover_xl}" class="card-img-top" alt="..." />
                        <div class="card-body">
                        <h5 class="card-title">${song.title_short}</h5>
                        </div>
                     </div>
                    </div>
                </div>  `;
      }
    })
    .catch((err) => console.error(err));
};

let getMetallica = function () {
  fetch(
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica",
    options
  )
    .then((response) => response.json())
    .then((songList) => {
      for (song of songList.data) {
        console.log(song);
        container.innerHTML += `<div class="col-4 my-3">
                 <div class="card">
                    <img src="${song.album.cover_xl}" class="card-img-top" alt="..." />
                    <div class="card-body">
                    <h5 class="card-title">${song.title_short}</h5>
                    </div>
                 </div>
                </div>
            </div>  `;
      }
    })
    .catch((err) => console.error(err));
};

window.onload = () => {
  getDaftPunk();
  getMetallica();
  getPinkFloyd();
};
