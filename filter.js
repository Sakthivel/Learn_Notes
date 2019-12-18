(function(){

    //The filter() method returns a new array created from all elements that pass a certain test preformed on an original array.

    // Ref. https://codeburst.io/learn-understand-javascripts-filter-function-bde87bce206
    
    // Chaining Map, Filter, and Reduce -> Ref. https://codeburst.io/javascript-learn-to-chain-map-filter-and-reduce-acd2d0562cd4

    /**
    Simple Array Filter 
    */

    var sampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        outputArray;

    // Filter with Normal Function
    outputArray = sampleArray.filter(function (item) {
        return item % 2 === 0;
    });

    // Filter with Arrow Function
    outputArray = sampleArray.filter( (item) => {
        return item / 2 === 3;
    });

    // Filter with Arrow Function and single statment
    outputArray = sampleArray.filter((item) => item % 2 === 1 );

    console.log('====================================');
    console.log("outputArray:-", outputArray);
    console.log('====================================');

    /**
    Array of Object Filter 
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

    // Filter with Normal Function
    outputArray = sampleArray.filter(function (item) {
        return item.name === 'Kumaran';
    });

    // Filter with Arrow Function
    outputArray = sampleArray.filter( (item) => {
        return item.place === 'Bangalore';
    });

    // Filter with Arrow Function and single statment
    outputArray = sampleArray.filter((item) => item.year === 2019);

    console.log('====================================');
    console.log("outputArray:-", outputArray);
    console.log('====================================');

})();
