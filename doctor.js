mapboxgl.accessToken = 'pk.eyJ1Ijoia2F1c3R5bWYiLCJhIjoiY2xtdDlvcjMxMDJ3NjJpbG9iejJ2aWM1ZiJ9.Iktp8XVd2kjnqdlIcNE80A';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [88.3639, 22.5726],
    zoom: 12
});

var dieticians = [
    { name: 'Dietician Shreyoshi Bhaumick', image: 'https://lh3.googleusercontent.com/p/AF1QipPxE17jEvynXfhSrNTmcw65sn0GBoObrwErqah0=s680-w680-h510', contact: '9874561234', location: [88.34143166103352, 22.482963878692516] },
    { name: 'Swastika Sinha Roy Dietician', image: 'https://www.dietitianpriyanka.com/wp-content/uploads/2023/09/Best-Dietician-In-Secunderabad.jpg', contact: '7854522152', location: [88.32011426812964, 22.503155029051424] },
    { name: 'Kalyan Ray Dietician', image: 'https://3.imimg.com/data3/ET/SK/MY-4102188/dietician-500x500.jpg', contact: '9856415986', location: [88.30394267799635,22.4817394385271] },
    { name: 'Dr. Radhika Biswas Dietician', image: 'https://media.istockphoto.com/id/1315142714/photo/nutritionist-consultation-dietitian-plans-meal-plan-for-a-female-obese-patient.jpg?s=612x612&w=0&k=20&c=PZwbcAcsSMs5bjjQhAL9vtUbwW7TPG2o9TMyHrWj5WI=', contact: '9784522698', location: [88.35090893920933,22.466663056267755] },
    { name: 'Nutrition center in Kolkata', image: 'https://apolloranchi.com/wp-content/uploads/2023/06/dietician.webp', contact: '7858526152', location: [ 88.34524402547365,22.562122436519925] },
    { name: 'Take Your Meals Seriously-Nutrition Hub', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Es0_7pCHh3hvNxg3E18NhuWI_4Ctb8xigw&usqp=CAU', contact: '9854522152', location: [88.36079287141028,22.55926696361449 ] },
    { name: 'Dr. Susruta Sanyal', image: 'https://rubymedicalserviceswagholi.com/wp-content/uploads/2022/01/dietician-service-111.jpg', contact: '7854566152', location: [ 88.31220272785826,22.57680679166895] },
    { name: 'Dietician Nazir Mallick', image: 'https://experience.care/wp-content/uploads/2022/03/senior-nutritionist-working-in-the-office-2021-09-17-18-22-55-utc-1024x683.jpg', contact: '7854522152', location: [88.37976959188991,22.58904086623421] },
    { name: 'Dietician Kaustav Bagchi', image: 'https://media.gettyimages.com/id/1452594824/photo/female-nutricionist-doctor-in-her-office-in-a-medical-consultation-with-overweight-male.jpg?s=612x612&w=gi&k=20&c=LpF3ztABEIqDgDMz-Aq82eA9L3aIgzlU8YTbnXs5Wz8=', contact: '7854456715', location: [88.27813652853463,22.5361985768397] }
];

dieticians.forEach(function(dietician) {
    var popup = new mapboxgl.Popup().setHTML(
        '<div>'+
            '<h3>'+ dietician.name +'</h3>'+
            '<p>Contact: '+ dietician.contact +'</p>'+
        '</div>'
    );

    new mapboxgl.Marker({ color: 'green' })
        .setLngLat(dietician.location)
        .setPopup(popup)
        .addTo(map);
});

// Panning feature in map
dieticians.forEach(function(dietician, index) {
    var dieticianList = document.getElementById('dietician-list');
    var listItem = document.createElement('div');
    listItem.className = 'dietician';
    listItem.innerHTML = '<img src="'+ dietician.image +'" alt="'+ dietician.name +'">'+
                        '<h3>'+ dietician.name +'</h3>'+
                        '<p>Contact: '+ dietician.contact +'</p>';
    listItem.addEventListener('click', function() {
        console.log('Clicked:', dietician.name);
        console.log('Location:', dietician.location);
        map.flyTo({
            center: dietician.location,
            zoom: 15, 
            essential: true 
        });
    });
    dieticianList.appendChild(listItem);
});
