const API_KEY = 'ac642e75a4334629bc009ac08d'

document.getElementById('submit-wx').addEventListener('click', (e,) => {
    icao = document.getElementById('icao').value;
    let wxAddress = 'https://api.checkwx.com/metar/'+`${icao}`;
    var xhttp = new XMLHttpRequest();
    let wxDiv = document.getElementById('wx')
    wxDiv.classList.remove('hidden');
    wxDiv.classList.add('block');

    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
            metar = JSON.parse(this.responseText);
            console.log(metar.results);
            popResults(metar);
      }
    };

    xhttp.open("GET", wxAddress, true);
    xhttp.setRequestHeader('X-API-Key', 'ac642e75a4334629bc009ac08d');
    xhttp.send();
    
});

function popResults(data) {
    let wx = data.data;
    let content = document.getElementById('wxResults');
    for (let metar of wx) {
       content.innerHTML += `<span class='block'>${metar}</span>`;
    };
    console.log(content);

};
