function not_coastal(arry) {
    var i = 0;
    while (i < arry.length) {
        if (!arry[i].is_coastal) {
            console.log(`${arry[i].city_name} is NOT coastal`)
        }
        i++
    }
}

function onearg(obby) {
    if (obby.is_coastal) {
        return true;
    }
}





var city = {
    city_name: 'Saskatoon',
    population: 1200000,
    is_coastal: false

}

if (city.is_coastal) {
    console.log(`${city.city_name} has a population of ${city.population}`);
}

var cities = [{

    city_name: 'Saskatoon',
    population: 1200000,
    is_coastal: false
},
{
    city_name: 'Vancouver',
    population: 1300000,
    is_coastal: true
},
{
    city_name: 'Edmonton',
    population: 900000,
    is_coastal: false
},
{
    city_name: 'St.John',
    population: 1500000,
    is_coastal: true
},

];

for (var i = 0; i < cities.length; i++) {
    if (cities[i].is_coastal && cities[i].population > 1000000) {
        console.log(`${cities[i].city_name} has a population of ${cities[i].population}`);
    }
}

i = 0;
while (i < cities.length) {
    if (cities[i].is_coastal === true && cities[i].population > 1000000) {
        console.log(`${cities[i].city_name} has a population of ${cities[i].population}`);
    }
    i++
}




not_coastal(cities);



onearg(city);

var non_coastal_cities = cities.filter((cities) => !cities.is_coastal);

for (var i = 0; i < non_coastal_cities.length; i++) {
    console.log(`${non_coastal_cities[i].city_name} has a population of ${non_coastal_cities[i].population}`);
}