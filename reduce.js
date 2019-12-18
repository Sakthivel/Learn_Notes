(function () {

    // The reduce() method is used to apply a function to each element in the array to reduce the array to a single value.

    // Ref. https://codeburst.io/learn-understand-javascripts-reduce-function-b2b0406efbdc

    // Chaining Map, Filter, and Reduce -> Ref. https://codeburst.io/javascript-learn-to-chain-map-filter-and-reduce-acd2d0562cd4

    /**
     * Simple Array Reduce, it takes callback function (it is mandatory and it will allow four params but 1 and 2 is mandatory) and initial value (it is optional)
     *  accumulator is previous values or sum of the values and going to
     *  return it at the last
     *  currentValue passed by array during iteration
     *  currentIndex is the third param of the callback and its optional
     * sourceArray is the fourth param of the callback and its optional(Here sampleArray is our sourceArray)
    */

    var sampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        outputValue;  // It is not an array

    // Reduce with Normal Function and Initial Passed and outputValue '65'
    outputValue = sampleArray.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    }, 10);

    // Reduce with Normal Function and Initial Not Passed and outputValue '55'
    outputValue = sampleArray.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    });

    // Reduce with Arrow Function
    outputValue = sampleArray.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    });

    // Reduce with Arrow Function and single statment
    outputValue = sampleArray.reduce((accumulator, currentValue) => accumulator + currentValue, 10);

    console.log('====================================');
    console.log('outputValue:-', outputValue);
    console.log('====================================');

    /**
    Array of Object Reduce
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
        outputValue;

    // Reduce with Normal Function
    outputValue = sampleArray.reduce(function (accumulator, currentValue) {
        return [...accumulator, currentValue.place];
    }, []);

    // Reduce with Arrow Function
    outputValue = sampleArray.reduce((accumulator, currentValue) => {
        return [...accumulator, currentValue.place];
    }, []);

    // Reduce with Arrow Function and single statment
    outputValue = sampleArray.reduce((accumulator, currentValue) => [...accumulator, currentValue.place], []);

    console.log('====================================');
    console.log('outputValue:-', outputValue);
    console.log('====================================');

})();
