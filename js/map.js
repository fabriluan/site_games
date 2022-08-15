function iniciar() {

    let latidudade = -25.625784;

    let longitude = -50.691713;

    let nomemark = 'Arcade Storage';


    let cordenadas = {lat: latidudade, lng: longitude};

    let map = new google.maps.Map(

        document.getElementById('map'), {zoom: 18, center: cordenadas});

    let marker = new google.maps.Marker({position: cordenadas, map: map, title: nomemark});

}