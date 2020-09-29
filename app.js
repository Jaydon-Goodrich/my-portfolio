let imageBox = document.getElementById("img-box");
let randomNumber = Math.floor(Math.random() * 1000);

const getComic = function() {
    fetch(`https://cors-anywhere.herokuapp.com/http://xkcd.com/${randomNumber}/info.0.json`, {
        "method": "GET",
    })
        .then(response => {
            response.json().then(data => {
                let box = document.createElement("img");
                box.setAttribute("src", data.img);
                imageBox.appendChild(box);
                
            })
        })
        .catch(err => {
            console.log(err);
        });
}

getComic();