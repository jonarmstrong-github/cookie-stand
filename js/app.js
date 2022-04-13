// Sales Data
// Within your javascript file (example: app.js), create separate JS object literals for each shop location that outputs the following to the sales.html file:
// --needs to store name/location
// Stores the min/max hourly customers, and the average cookies per customer, in object properties
// --need an array?
// Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
// --enable a function that represent customers per hour
// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
// Store the results for each location in a separate array… perhaps as a property of the object representing that location

const hours = ['6am', '7am','8am', '9am', '10am', '11am','12am', '1pm', '2pm', '3pm','4pm', '5pm', '6pm', '7pm']
//setting hours manually in an array named 'hours'...  this way .length can be called later.

const seattle = {                       // const is declaring a 'seattle' named object
    title: "Seattle",                   // key:value  value is called with object.key  This key is holding a string
    minCust: 23,                        // Everything needs a comma!!!   
    maxCust: 65,                        // This key is holding an integer
    //avgPurchase: 6.3,                 // Changed key names because of discussions in class
    //randCustPerH: [],                 // Changed key names because of discussions in class
    avgCookieSale: 6.3,                 // This key is holding a float (but javaScript doesn't differentiate between floats and integers so I'm not sure why it matters.)
    randCookiesPerH: [],                // This key is holding an array
    allCookiesSold: 0,                  // This key was added in class discussions because of a need in Lab 7.  Add all properties here.
    genRandCookiesPerH: function () {   // This key is holding a function () without arguments.  In an object is is a method and is invoked with its key.

        // changed in review during class.
        // loop gen values to populate.
        // for (let i = 0; i < hours.length; i++) {
        //   const randCustPerH = randomInRange(this.minCust, this.maxCust);
        //   this.randCustPerH[i] = Math.ceil(this.avgCookieSale * randomInRange(this.minCust, this.maxCust))
        //  average customer ph x a generated random number within a range.

        // class review inspired code.
        let total = 0;                              // defines 'total' and sets value to 0.
        console.log(`Code check: ${this.title} genRandCookiesPerH method started.`);
        for (let i = 0; i < hours.length; i++) {    // declaring a for loop because I know how many times to repeat (once for each 'hour')
            const randCustPerH = randomInRange(this.minCust, this.maxCust);
            // declaring a new variable and filling with a random number(inclusive) from a set min/max range referenced from inside this same object.
            const cookiesSold = Math.ceil(this.avgCookieSale * randCustPerH);  // The Math.ceil() function always rounds a number up to the next largest integer!
            // declaring a new variable and filling with the total cookies sold based on average cookie sale and our random customer projection.
            // const element = hours[index];        // did not use this path
            this.randCookiesPerH[i] = cookiesSold;  // fills each indexed in the randCookiesPerH array with the number of cookies sold.
            total += cookiesSold;                   // adds each run of the loop together for a grand total.
        }
        this.allCookiesSold = total;                // fills allCookiesSold in the object with the total from the getRandCookiesPerH method.
        console.log(`Code check: ${this.title} genRandCookiesPerH method ended with a total value of "${total}".`);     // simple test
    },                                                                  // This is still a part of the object and need to be separated by commas

    render: function () {                                               // This method (another function in the original object) puts data on the screen! 
        
        // starting point                                               // DOM!!!!  DOM!!!!
        const containerElem = document.getElementById('locations');    // sets the root container of the function to the section with 'location' id?

        // articles
        const articleElem = document.createElement('article');          // creates an article element in articleElem
        containerElem.appendChild(articleElem);                         // and appends in below the section element (containerElem)

        // heading
        const h2Elem = document.createElement('h2');                    // creates an h2 element.  H1 was already used in the page.
        articleElem.appendChild(h2Elem);                                // and appends in below the article element
        h2Elem.textContent = this.title;                                // pulls the title value string from the object

        // list container                                               
        const ulElem = document.createElement('ul');                    // creates a ul element.
        articleElem.appendChild(ulElem);

        // list item
        for (let i = 0; i < this.randCookiesPerH.length; i++) {         // loop created to populate multiple line items.
        const liElem = document.createElement('li');                    // creates an li element.
        ulElem.appendChild(liElem);                                     // appended liElem below ulElem.
        const timeSlot = hours[i];                                          // this pulls the time value string from the hours array.
        const cookiesSoldThisHour = this.randCookiesPerH[i];
        liElem.textContent = `${timeSlot}: ${cookiesSoldThisHour}`;        // called a statement to fill the list item
        }
    }
};

seattle.genRandCookiesPerH();   // all functions must be called! () = ((w/o arguments))  should be automatic...  isn't yet.
seattle.render();               // calling the function to render the html page?

const tokyo = {
    title: "Tokyo",
    minCust: 3,
    maxCust: 24,
    avgCookieSale: 1.2,
    randCookiesPerH: [],
    allCookiesSold: 0,
    genRandCookiesPerH: function () {
        let total = 0;
        console.log(`Code check: ${this.title} genRandCookiesPerH method started.`);
        for (let i = 0; i < hours.length; i++) {
            const randCustPerH = randomInRange(this.minCust, this.maxCust);
            const cookiesSold = Math.ceil(this.avgCookieSale * randCustPerH);
            this.randCookiesPerH[i] = cookiesSold;
            total += cookiesSold;
        }
        this.allCookiesSold = total;
        console.log(`Code check: ${this.title} genRandCookiesPerH method ended with a total value of "${total}".`);
    },

    render: function () {
        const containerElem = document.getElementById('locations');

        // articles
        const articleElem = document.createElement('article');
        containerElem.appendChild(articleElem);

        // heading
        const h2Elem = document.createElement('h2');
        articleElem.appendChild(h2Elem);
        h2Elem.textContent = this.title;

        // list container                                               
        const ulElem = document.createElement('ul');
        articleElem.appendChild(ulElem);

        // list item
        for (let i = 0; i < this.randCookiesPerH.length; i++) {
        const liElem = document.createElement('li');
        ulElem.appendChild(liElem);
        const timeSlot = hours[i];
        const cookiesSoldThisHour = this.randCookiesPerH[i];
        liElem.textContent = `${timeSlot}: ${cookiesSoldThisHour}`;
        }
    }
};

tokyo.genRandCookiesPerH();
tokyo.render();

const dubai = {
    title: "Dubai",
    minCust: 11,
    maxCust: 38,
    avgCookieSale: 3.7,
    randCookiesPerH: [],
    allCookiesSold: 0,
    genRandCookiesPerH: function () {
        let total = 0;
        console.log(`Code check: ${this.title} genRandCookiesPerH method started.`);
        for (let i = 0; i < hours.length; i++) {
            const randCustPerH = randomInRange(this.minCust, this.maxCust);
            const cookiesSold = Math.ceil(this.avgCookieSale * randCustPerH);
            this.randCookiesPerH[i] = cookiesSold;
            total += cookiesSold;
        }
        this.allCookiesSold = total;
        console.log(`Code check: ${this.title} genRandCookiesPerH method ended with a total value of "${total}".`);
    },

    render: function () {
        const containerElem = document.getElementById('locations');

        // articles
        const articleElem = document.createElement('article');
        containerElem.appendChild(articleElem);

        // heading
        const h2Elem = document.createElement('h2');
        articleElem.appendChild(h2Elem);
        h2Elem.textContent = this.title;

        // list container                                               
        const ulElem = document.createElement('ul');
        articleElem.appendChild(ulElem);

        // list item
        for (let i = 0; i < this.randCookiesPerH.length; i++) {
        const liElem = document.createElement('li');
        ulElem.appendChild(liElem);
        const timeSlot = hours[i];
        const cookiesSoldThisHour = this.randCookiesPerH[i];
        liElem.textContent = `${timeSlot}: ${cookiesSoldThisHour}`;
        }
    }
};

dubai.genRandCookiesPerH();
dubai.render();

const paris = {
    title: "Paris",
    minCust: 20,
    maxCust: 38,
    avgCookieSale: 2.3,
    randCookiesPerH: [],
    allCookiesSold: 0,
    genRandCookiesPerH: function () {
        let total = 0;
        console.log(`Code check: ${this.title} genRandCookiesPerH method started.`);
        for (let i = 0; i < hours.length; i++) {
            const randCustPerH = randomInRange(this.minCust, this.maxCust);
            const cookiesSold = Math.ceil(this.avgCookieSale * randCustPerH);
            this.randCookiesPerH[i] = cookiesSold;
            total += cookiesSold;
        }
        this.allCookiesSold = total;
        console.log(`Code check: ${this.title} genRandCookiesPerH method ended with a total value of "${total}".`);
    },

    render: function () {
        const containerElem = document.getElementById('locations');

        // articles
        const articleElem = document.createElement('article');
        containerElem.appendChild(articleElem);

        // heading
        const h2Elem = document.createElement('h2');
        articleElem.appendChild(h2Elem);
        h2Elem.textContent = this.title;

        // list container                                               
        const ulElem = document.createElement('ul');
        articleElem.appendChild(ulElem);

        // list item
        for (let i = 0; i < this.randCookiesPerH.length; i++) {
        const liElem = document.createElement('li');
        ulElem.appendChild(liElem);
        const timeSlot = hours[i];
        const cookiesSoldThisHour = this.randCookiesPerH[i];
        liElem.textContent = `${timeSlot}: ${cookiesSoldThisHour}`;
        }
    }
};

paris.genRandCookiesPerH();
paris.render();

const lima = {
    title: "Lima",
    minCust: 2,
    maxCust: 16,
    avgCookieSale: 4.6,
    randCookiesPerH: [],
    allCookiesSold: 0,
    genRandCookiesPerH: function () {
        let total = 0;
        console.log(`Code check: ${this.title} genRandCookiesPerH method started.`);
        for (let i = 0; i < hours.length; i++) {
            const randCustPerH = randomInRange(this.minCust, this.maxCust);
            const cookiesSold = Math.ceil(this.avgCookieSale * randCustPerH);
            this.randCookiesPerH[i] = cookiesSold;
            total += cookiesSold;
        }
        this.allCookiesSold = total;
        console.log(`Code check: ${this.title} genRandCookiesPerH method ended with a total value of "${total}".`);
    },

    render: function () {
        const containerElem = document.getElementById('locations');

        // articles
        const articleElem = document.createElement('article');
        containerElem.appendChild(articleElem);

        // heading
        const h2Elem = document.createElement('h2');
        articleElem.appendChild(h2Elem);
        h2Elem.textContent = this.title;

        // list container                                               
        const ulElem = document.createElement('ul');
        articleElem.appendChild(ulElem);

        // list item
        for (let i = 0; i < this.randCookiesPerH.length; i++) {
            const liElem = document.createElement('li');
            ulElem.appendChild(liElem);
            const timeSlot = hours[i];
            const cookiesSoldThisHour = this.randCookiesPerH[i];
            liElem.textContent = `${timeSlot}: ${cookiesSoldThisHour}`;
        }
    }
};

lima.genRandCookiesPerH();
lima.render();

function randomInRange(min, max){
    const span = max - min + 1;   //check for 'off by one errors'
    const randInSpan = Math.floor(Math.random() *span);
    return min + randInSpan;
}

// Display the values of each array as unordered lists in the browser
// Calculating the sum of these hourly totals; your output for each location should look like this:

// Seattle
// 6am: 16 cookies
// 7am: 20 cookies
// 8am: 35 cookies
// 9am: 48 cookies
// 10am: 56 cookies
// 11am: 77 cookies
// 12pm: 93 cookies
// 1pm: 144 cookies
// 2pm: 119 cookies
// 3pm: 84 cookies
// 4pm: 61 cookies
// 5pm: 23 cookies
// 6pm: 42 cookies
// 7pm: 57 cookies
// Total: 875 cookies
// Display the lists on sales.html. We will be adding features to this application and working with its layout in the upcoming labs.

// Here are the starting numbers that you’ll need to build these objects:

// Location	    Min / Cust	Max / Cust	Avg Cookie / Sale
// Seattle	        23	        65	            6.3
// Tokyo	        3	        24	            1.2
// Dubai	        11	        38	            3.7
// Paris	        20	        38	            2.3
// Lima	            2	        16	            4.6
// These numbers are simply Pat’s estimates for now, but eventually, once there has been some history collected that provides more accurate numbers, we’ll want the ability to update these numbers for each location, and to add/remove locations. But we’ll not build all of that today. Make sure to make each location is its own JavaScript object.