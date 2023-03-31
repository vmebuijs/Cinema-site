fetch('http://localhost:8026/tp')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        let output = '<h2>Users</h2>'
        
        
        var bla = document.getElementsByClassName('film__title');
        var pic = document.getElementsByClassName('film__poster');
        for(var i = 0; i < bla.length; i++){
           
                // console.log(data);
                // output += `
                // <ul>
                //     <li>${data[j].title}</li>
                // </ul>
                // `;
            bla[i].textContent = data[i].title;
            pic[i].src = data[i].poster;
        }
        
    })
    .catch(err => console.log(err))

