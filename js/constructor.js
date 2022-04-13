// Sales Data
// Instructions
// Create a new branch for today’s lab. Make sure it has all of your changes from lab 06 so that you can extend the functionality.

// Replace all of your object literals for the salmon cookie stand with a single constructor function that, when called with the ‘new’ keyword, it creates a new instance.

// Replace the lists of your data for each store and build a single table of data instead. It should look similar to the following:

// Display each stores data in a table format similar to what is below. Break each column by the hour and complete each row with a “Daily Location Total”.

// Each cookie stand location should have a separate render() method that creates and appends its row to the table

// The header row and footer row are each created in their own stand-alone function

// NOTE: Please use a header cell for both the header row ( containing store hours ), and the footer row ( hourly and grand totals across all stores ).

const hours = ['6am', '7am','8am', '9am', '10am', '11am','12am', '1pm', '2pm', '3pm','4pm', '5pm', '6pm', '7pm']

function randomInRange(min, max){
    const span = max - min + 1;   //check for 'off by one errors'
    const randInSpan = Math.floor(Math.random() *span);
    return min + randInSpan;
};

function Location(title, minCust, maxCust, avgCookieSale, randCookiesPerH, allCookiesSold, allCookiesSold, genRandCookiesPerH) { // Capital L because it is a constructor 
    this.title = title;                     // parameter filled with argument (value?) in each constructor
    this.minCust = minCust;                 // parameter filled with argument (value?) in each constructor
    this.maxCust = maxCust;                 // parameter filled with argument (value?) in each constructor
    this.avgCookieSale = avgCookieSale;     // parameter filled with argument (value?) in each constructor
    this.randCookiesPerH = [];              // creates and array
    this.allCookiesSold = 0;                // variable needed for later in genRandCookiesPerH function/method
    this.genRandCookiesPerH();              // method that calls the function below for each location
};

//  method (function in an object that generates values) property of object
Location.prototype.genRandCookiesPerH = function () {
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
};

// render: function () {

// //  Location	Min / Cust	Max / Cust	Avg Cookie / Sale
// //  Inspired by John Cokos - Code 201 Day 07 Demo - 2022 Mar 20
// //  These look like they could become for loops
// const containerElem = document

//   const table = document.createElement('table');

//   const row1 = document.createElement('tr');
//   const row2 = document.createElement('tr');
//   const row3 = document.createElement('tr');
//   const row4 = document.createElement('tr');
//   const row5 = document.createElement('tr');

//   const th1 = document.createElement('th');
//   th1.textContent = 'Location';
//   const th2 = document.createElement('th');
//   th2.textContent = 'Min / Cust';
//   const th3 = document.createElement('th');
//   th3.textContent = 'Max / Cust';
//   const th4 = document.createElement('th');
//   th4.textContent = 'Cookie / Sale';

//   const td1 = document.createElement('td');
//   td1.textContent = this.title;
//   const td2 = document.createElement('td');
//   td2.textContent = this.minCust;
//   const td3 = document.createElement('td');
//   td3.textContent = this.maxCust;
//   const td4 = document.createElement('td');
//   td4.textContent = this.avgCookieSale;

//   row1.appendChild(th1);
//   row1.appendChild(th2);
//   row1.appendChild(th3);
//   row1.appendChild(th4);

//   row2.appendChild(td1);
//   row2.appendChild(td2);
//   row2.appendChild(td3);
//   row2.appendChild(td4);

//   table.appendChild(row1);
//   table.appendChild(row2);
//   table.appendChild(row3);
//   table.appendChild(row4);
//   table.appendChild(row5);
//   article.appendChild(table);
// }
//   seattle.render();
//   tokyo.render();
//   dubai.render();
//   paris.render();
//   lima.render();

// constructors will generally be put at the bottom even though JS will hoist things if necessary

const seattle = new Location('Seattle', 23, 65, 6.3);
console.log(seattle);  // lower case

const tokyo = new Location('Tokyo', 3, 24, 1.2);
console.log(tokyo);

const dubai = new Location('Dubai', 11, 38, 3.7);
console.log(dubai);

const paris = new Location('Paris', 20, 38, 2.3);
console.log(paris);

const lima = new Location('Lima', 2, 16, 4.6);
console.log(lima);