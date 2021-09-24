// references to html elements

var billref = document.querySelector("#bill-amount");
var cashref = document.querySelector("#cash-amount");
var btnref = document.querySelector("#btn-primary");
var error = document.querySelector("#error-message");
var output = document.querySelector("#user-output");

// labels
var labels = ["Note", "No of notes"];

// notes object
var notes = {
  2000: 0,
  500: 0,
  100: 0,
  20: 0,
  10: 0,
  5: 0,
  1: 0,
};

function calculateNotes(amount) {
  notes["2000"] = amount >= 2000 ? Math.floor(amount / 2000) : 0;
  amount = amount >= 2000 ? amount % 2000 : amount;

  notes["500"] = amount >= 500 ? Math.floor(amount / 500) : 0;
  amount = amount >= 500 ? amount % 500 : amount;

  notes["100"] = amount >= 100 ? Math.floor(amount / 100) : 0;
  amount = amount >= 100 ? amount % 100 : amount;

  notes["20"] = amount >= 20 ? Math.floor(amount / 20) : 0;
  amount = amount >= 20 ? amount % 20 : amount;

  notes["10"] = amount >= 10 ? Math.floor(amount / 10) : 0;
  amount = amount >= 10 ? amount % 10 : amount;

  notes["5"] = amount >= 5 ? Math.floor(amount / 5) : 0;
  amount = amount >= 5 ? amount % 5 : amount;

  notes["1"] = amount >= 1 ? Math.floor(amount / 1) : 0;
  amount = amount >= 1 ? amount % 1 : amount;

  buildTable();
}

function myScript() {
  var billAmount = parseInt(billref.value);
  var cashAmount = parseInt(cashref.value);

  if (billAmount < 0 || cashAmount < 0) {
    error.innerText = "🥵🥵 Invalid Amount 🥵🥵";
    // output.innerHTML = "";
  } else if (cashAmount < billAmount) {
    error.innerText = "🥵🥵 Do you want to get beaten? 🥵🥵";
    // output.innerHTML = "";
  } else {
    error.innerText = "";
    calculateNotes(cashAmount - billAmount);
  }
}

btnref.addEventListener("click", myScript);

function buildTable() {
  var amounts = Object.keys(notes);
  var counts = Object.values(notes);

  var table = document.createElement("table");
  var thead = document.createElement("thead");
  var tbody = document.createElement("tbody");

  var tr = document.createElement("tr");
  for (let i = 0; i < labels.length; i++) {
    var th = document.createElement("th");
    th.innerText = labels[i];
    tr.appendChild(th);
  }
  thead.appendChild(tr);
  table.appendChild(thead);

  for (let i = 0; i < amounts.length; i++) {
    var tRow = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    td1.innerText = amounts[i];
    td2.innerText = counts[i];
    tRow.appendChild(td1);
    tRow.appendChild(td2);
    tbody.appendChild(tRow);
  }
  table.appendChild(tbody);
  output.innerHTML = "";
  table.setAttribute("class", "output-table");
  output.appendChild(table);
}
