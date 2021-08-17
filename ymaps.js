const ymaps = require('ymaps');

        const myGeocoder = ymaps.geocode("Московская обл., г. Балашиха, ш.Энтузиастов, д.48", {json: true});
        myGeocoder
            .then(res => {
                console.log(res);
                // map.geoObjects.add(res.geoObjects);
                // Выведем в консоль данные, полученные в результате геокодирования объекта.
                //console.log(res.geoObjects.get(0).properties.get('metaDataProperty').getAll());
            })
            .catch(err => {
                console.log(err);
            });
