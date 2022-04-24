'use strict'

const header = ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00',]
const hourlyTotals = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];  //there must be a better way to set this array as numbers for math later.
var grandTotal = 0;
const tableElem = document.createElement('table');  //used by multiple functions

function randomInRange(min, max) {
    const span = max - min + 1;
    const randInSpan = Math.floor(Math.random() * span);
    return min + randInSpan;
};

function Location(title, minCust, maxCust, avgCookieSale, randCookiesPerH, allCookiesSold, genRandCookiesPerH) { // Capital L because it is a constructor 
    this.title = title;                     // parameter filled with argument (value?) in each constructor
    this.minCust = minCust;                 // parameter filled with argument (value?) in each constructor
    this.maxCust = maxCust;                 // parameter filled with argument (value?) in each constructor
    this.avgCookieSale = avgCookieSale;     // parameter filled with argument (value?) in each constructor
    this.randCookiesPerH = [];              // creates and array
    this.allCookiesSold = 0;                // variable needed for later in genRandCookiesPerH function/method
    this.genRandCookiesPerH();              // method that calls the function below for each location
};

Location.prototype.genRandCookiesPerH = function () { //cumulative daily total of a store
    let total = 0;
    console.log(`Code check: ${this.title} genRandCookiesPerH method started.`);

    //HOURLY PREDICTIONS
    for (let i = 0; i < header.length; i++) {
        const randCustPerH = randomInRange(this.minCust, this.maxCust);
        const cookiesSold = Math.ceil(this.avgCookieSale * randCustPerH);
        this.randCookiesPerH[i] = cookiesSold;
        total += cookiesSold;
    }
    this.allCookiesSold = total;
    console.log(`Code check: ${this.title} genRandCookiesPerH method ended with a total value of "${total}".`);

    //CUMULATIVE HOURLY TOTALS OF PREDICTIONS
    for (let i = 0; i < header.length; i++) {
        hourlyTotals[i] += this.randCookiesPerH[i];
        grandTotal += hourlyTotals[i];
    };
};

//  Trying to print constructor values for verification
//  Location	Min / Cust	Max / Cust	Avg Cookie / Sale
//  Inspired by John Cokos - Code 201 Day 07 Demo - 2022 Mar 20

// STARTING POINT FOR TABLE OF PLANNING INPUTS
const containerElem = document.getElementById('inputTable');    // sets the root container of the function to the section with 'location' id?

//CONSTANT FRAMEWORK OF TABLE OF PLANNING INPUTS
const table = document.createElement('table');    //creates instructions to build a table
containerElem.appendChild(table);                 //appends ta table element to the container

const row1 = document.createElement('tr');

const th1 = document.createElement('th');
th1.textContent = 'Location';
const th2 = document.createElement('th');
th2.textContent = 'Min / Cust';
const th3 = document.createElement('th');
th3.textContent = 'Max / Cust';
const th4 = document.createElement('th');
th4.textContent = 'Cookie / Sale';

table.appendChild(row1);

//VALUES OF PLANNING INPUTS
Location.prototype.render2 = function () {     // This puts input data on the screen as a table! 

    const row2 = document.createElement('tr');

    const td1 = document.createElement('td');
    td1.textContent = this.title;
    const td2 = document.createElement('td');
    td2.textContent = this.minCust;
    const td3 = document.createElement('td');
    td3.textContent = this.maxCust;
    const td4 = document.createElement('td');
    td4.textContent = this.avgCookieSale;

    row1.appendChild(th1);
    row1.appendChild(th2);
    row1.appendChild(th3);
    row1.appendChild(th4);

    row2.appendChild(td1);
    row2.appendChild(td2);
    row2.appendChild(td3);
    row2.appendChild(td4);

    table.appendChild(row2);
};

//DAILY TABLE OF TOTALS
//CREATES A TABLE WITH A HEADER ROW AND A FOOTER
function createTable() {  //MIGHT NOT HAVE NEEDED TO BE A FUNCTION EXCEPT THAT I AM REUSING VARIABLES
    const containerElem = document.getElementById('outputTable');

    //NEW TABLE
    containerElem.appendChild(tableElem);

    //HEADER
    const tableHead = document.createElement('thead');
    tableElem.appendChild(tableHead);

    //HEADER ROW
    const headerRow = document.createElement('tr');
    tableHead.appendChild(headerRow);

    //HEADER DATA TAGS
    const headerCell = document.createElement('th');
    headerRow.appendChild(headerCell);

    //INSERTS HOURS INTO HEADER TAGS
    for (let i = 0; i < header.length; i++) {
        const headerCell = document.createElement('th');
        headerRow.appendChild(headerCell);
        headerCell.textContent = header[i];
    }

    //APPENDS "TOTALS" ONTO THE END OF THE HEADER ROW.
    const locTotal = document.createElement('th');
    headerRow.appendChild(locTotal);
    locTotal.textContent = 'Totals';

    //FOOTER
    const tableFoot = document.createElement('tfoot');
    tableElem.appendChild(tableFoot);

    //FOOTER ROW
    const footerRow = document.createElement('tr');
    tableFoot.appendChild(footerRow);

    //CREATES "TOTALS" LABEL FOR HOURLY TOTALS
    const dayTotal = document.createElement('th');
    footerRow.appendChild(dayTotal);
    dayTotal.textContent = 'Totals';

    //INSERTS HOURLY TOTALS INTO FOOTER TAGS
    for (let i = 0; i < header.length; i++) {
        const footerCell = document.createElement('th');
        footerRow.appendChild(footerCell);
        footerCell.textContent = hourlyTotals[i];
    }

    //GRAND TOTAL IN LAST CELL
    const grandTCell = document.createElement('th');
    footerRow.appendChild(grandTCell);
    grandTCell.textContent = grandTotal;
};

createTable();  //ONLY NEEDS TO RUN ONCE

// FILLS THE TABLE ROWS WITH STORE DATA
Location.prototype.render3 = function () {

    // STARTING POINT ATTACHES TABLE BODY TO TABLE                                              
    const tableBody = document.createElement('tbody');
    tableElem.appendChild(tableBody);

    const dataRow = document.createElement('tr');
    tableBody.appendChild(dataRow);

    const nameCell = document.createElement('th');
    dataRow.appendChild(nameCell);
    nameCell.textContent = this.title;

    for (let i = 0; i < this.randCookiesPerH.length; i++) {
        const dataCell = document.createElement('td');
        dataRow.appendChild(dataCell);
        dataCell.textContent = this.randCookiesPerH[i];
    }

    const totalCell = document.createElement('th');
    dataRow.appendChild(totalCell);
    totalCell.textContent = this.allCookiesSold;
};

//VALUES BY STORE IN A LIST
Location.prototype.render = function () {     // This  puts data on the screen as a list! 

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
        const timeSlot = header[i];                                          // this pulls the time value string from the hours array.
        const cookiesSoldThisHour = this.randCookiesPerH[i];
        liElem.textContent = `${timeSlot}: ${cookiesSoldThisHour}`;        // called a statement to fill the list item
    }
};

const seattle = new Location('Seattle', 23, 65, 6.3);
console.log(seattle);  // lower case...  why?
seattle.render();  //renders the basic list
seattle.render2();  //renders inputs into a table  **extra
seattle.render3();  //renders outputs into a table

const tokyo = new Location('Tokyo', 3, 24, 1.2);
console.log(tokyo);
tokyo.render();
tokyo.render2();
tokyo.render3();

const dubai = new Location('Dubai', 11, 38, 3.7);
console.log(dubai);
dubai.render();
dubai.render2();
dubai.render3();

const paris = new Location('Paris', 20, 38, 2.3);
console.log(paris);
paris.render();
paris.render2();
paris.render3();

const lima = new Location('Lima', 2, 16, 4.6);
console.log(lima);
lima.render();
lima.render2();
lima.render3();