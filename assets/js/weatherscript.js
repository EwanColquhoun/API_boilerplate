const API_KEY = 'ac642e75a4334629bc009ac08d'

document.getElementById('submit-wx').addEventListener('click', (e,) => {
    icao = document.getElementById('icao').value;
    let wxAddress = 'https://api.checkwx.com/metar/'+`${icao}`;
    var xhttp = new XMLHttpRequest();

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
    // wx = data.data;
    // num = data.results;
    // let results = `<span class='block'>${wx}</span>`;
    // console.log(num);
    // document.getElementById('wxResults').innerHTML = results;


    let resultsText = `<span class='block'>${data.data}</span>`;
    document.getElementById('wxResults').innerHTML = resultsText;

    

};
