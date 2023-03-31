fetch('http://localhost:8026/tp')
    .then(res => res.json())
    .then(data => {

        const nextButton = document.getElementsByClassName('films-slideshow__button')[1];
        const previousButton = document.getElementsByClassName('films-slideshow__button')[0];
        const slide = document.getElementsByClassName('films-slideshow__poster')[0];

        let n = 0;
        let pictureI = data[n].poster;
        // console.log(slide);
        slide.src = pictureI;
        console.log(slide.src);


        nextButton.addEventListener('click', () => {
            n += 1;
            slide.src = data[n].poster;
            console.log(slide.src);
        });

        previousButton.addEventListener('click', () => {
            n -= 1;
            slide.src = data[n].poster;
            console.log(slide.src); // src/img/hjdbsh
            console.log(slide); // src: src/img/hjdbsh
        });

        console.log(data);
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
        // for(let dat of data){
        //    let pictureIndex = dat;
        //    console.log(pictureIndex);
        // }
        

       
        

        // showPicture(pictureIndex);

        

        // function plusSlide(n){
        //     showPicture(pictureIndex += n);
        // }

        // function showPicture(){
        //     let i;
        //     let slidesPlaceHolder = 5;
        // }


        
    })
    .catch(err => console.log(err));

  
    // on click picture index + 1, id van de foreach is de picture index


