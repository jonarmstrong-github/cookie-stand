// Sales Data
// Instructions
// Create a new branch for today’s lab. Make sure it has all of your changes from lab 06 so that you can extend the functionality.

// Replace all of your object literals for the salmon cookie stand with a single constructor function that, when called with the ‘new’ keyword, it creates a new instance.

// Replace the lists of your data for each store and build a single table of data instead. It should look similar to the following:

// Display each stores data in a table format similar to what is below. Break each column by the hour and complete each row with a “Daily Location Total”.

// Each cookie stand location should have a separate render() method that creates and appends its row to the table

// The header row and footer row are each created in their own stand-alone function

// NOTE: Please use a header cell for both the header row ( containing store hours ), and the footer row ( hourly and grand totals across all stores ).

function Location(title, minCust, maxCust, avgCookieSale){  // , randCookiesPerH, allCookiesSold, allCookiesSold, genRandCookiesPerH) { // Capital L because it is a constructor 
    this.title = title;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookieSale = avgCookieSale;
}

const seattle = new Location('Seattle', 23, 65, 6.3,)


const tokyo = new Location('Tokyo', 3, 24, 1.2,)

const dubai = new Location('Dubai', 11, 38, 3.7,)

const paris = new Location('Paris', 20, 38, 2.3,)

const lima = new Location('Lima', 2, 16, 4.6,)

const seattle = new Location('Seattle', 23, 65, 6.3,)


render: function () {

//  Location	Min / Cust	Max / Cust	Avg Cookie / Sale
//  Inspired by John Cokos - Code 201 Day 07 Demo - 2022 Mar 20
//  These look like they could become for loops

  const table = document.createElement('table');

  const row1 = document.createElement('tr');
  const row2 = document.createElement('tr');
  const row3 = document.createElement('tr');
  const row4 = document.createElement('tr');
  const row5 = document.createElement('tr');

  const th1 = document.createElement('th');
  th1.textContent = 'Location';
  const th2 = document.createElement('th');
  th2.textContent = 'Min / Cust';
  const th3 = document.createElement('th');
  th3.textContent = 'Max / Cust';
  const th4 = document.createElement('th');
  th4.textContent = 'Cookie / Sale';

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

  table.appendChild(row1);
  table.appendChild(row2);
  table.appendChild(row3);
  table.appendChild(row4);
  table.appendChild(row5);
  article.appendChild(table);
}