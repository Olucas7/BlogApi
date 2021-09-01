let url = " http://localhost:3000/posts";
fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));

const mostarData = (data) => {
    console.log(data)
    let body = ''
    for (let i =0 ; i < data.lenght; i++){
        body += '<h1>${data.[i].title}</h1>'+
        '<p>${data[i].paragraph}</p>'+
        '<h1>${data[i].subtitle</h1>'+
        '<img src="${data[i].img" alt"" ></img>'+
        '<p>${data[i].paragraph2}</p>';
    }
    document.getElementById('article').innerHTML=body;
}
    