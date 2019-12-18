(function(){

    // The map() method is used to apply a function on every element in an array. A new array is then returned.

    // Ref. https://codeburst.io/learn-understand-javascripts-map-function-ffc059264783

    // Chaining Map, Filter, and Reduce -> Ref. https://codeburst.io/javascript-learn-to-chain-map-filter-and-reduce-acd2d0562cd4
    
    /**
    Simple Array Map 
    */

    var sampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        outputArray;

    // Map with Normal Function
    outputArray = sampleArray.map(function (item) {
        return item * 2;
    });

    // Map with Arrow Function
    outputArray = sampleArray.map((item) => {
        return item + 2;
    });

    // Map with Arrow Function and single statment
    outputArray = sampleArray.map((item) => item - 1 );

    console.log('====================================');
    console.log('outputArray:-', outputArray);
    console.log('====================================');

    /**
    Array of Object Map 
    */

    var sampleArray = [
        {
            "name": "Kumaran",
            "place": "Chennai",
            "year": 2000
        },
        {
            "name": "Velan",
            "place": "Erode",
            "year": 2005
        },
        {
            "name": "Murugan",
            "place": "Palani",
            "year": 2006
        },
        {
            "name": "Kandhan",
            "place": "Bangalore",
            "year": 2009
        },
        {
            "name": "Karthiran",
            "place": "London",
            "year": 2019
        }
    ],
        outputArray;

    // Map with Normal Function
    outputArray = sampleArray.map(function (item) {
        return item.name;
    });

    // Map with Arrow Function
    outputArray = sampleArray.map((item) => {
        return item.place;
    });

    // Map with Arrow Function and single statment
    outputArray = sampleArray.map((item) => item.year);

    console.log('====================================');
    console.log('outputArray:-', outputArray);
    console.log('====================================');

})();
