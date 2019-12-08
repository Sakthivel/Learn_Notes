(function () {
    /**
     * The find() method returns the value of the first element in the provided array that satisfies
     */

    /**
    Simple Array Find 
    */

    var sampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        outputArray;

    // Find with Normal Function
    outputArray = sampleArray.find(function (item) {
        return item > 2;
    });

    // Find with Arrow Function
    outputArray = sampleArray.find((item) => {
        return item > 5;
    });

    // Find with Arrow Function and single statment
    outputArray = sampleArray.find((item) => item > 4);

    console.log('====================================');
    console.log("outputArray:-", outputArray);
    console.log('====================================');

    /**
    Array of Object Find
    */

    var sampleArray = [{
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

    // Find with Normal Function
    outputArray = sampleArray.find(function (item) {
        return item.year > 1990;
    });

    // Find with Arrow Function
    outputArray = sampleArray.find((item) => {
        return item.place === 'Bangalore';
    });

    // Find with Arrow Function and single statment
    outputArray = sampleArray.find((item) => item.year === 2006);

    console.log('====================================');
    console.log("outputArray:-", outputArray);
    console.log('====================================');

})();
