 function showExistingForm() {
    document.getElementById('existingForm').style.display = 'block';
    document.getElementById('newBuildForm').style.display = 'none';
  }

  function showNewBuildForm() {
    document.getElementById('newBuildForm').style.display = 'block';
    document.getElementById('existingForm').style.display = 'none';
  }
function calculateExistingCost() {
    var location = document.getElementById('location').value;
    var yearBuilt = parseInt(document.getElementById('yearBuilt').value);
    var propertySize = parseInt(document.getElementById('propertySize').value);
    var freestandingStructures = parseInt(document.getElementById('freestandingStructures').value);
    var crawlspace = document.getElementById('crawlspace').value;
    var noneCheckbox = document.getElementById('noneCheckbox').checked;
    var moldCheckbox = document.getElementById('moldCheckbox').checked;
    var wdiTermiteCheckbox = document.getElementById('wdiTermiteCheckbox').checked;
    var asbestosCheckbox = document.getElementById('asbestosCheckbox').checked;
    var foundationCheckbox = document.getElementById('foundationCheckbox').checked;
    var sewerCheckbox = document.getElementById('sewerCheckbox').checked;
    var atticBasementCheckbox = document.getElementById('atticBasementCheckbox').checked;

    var locationCost = calculateLocationCost(location);
    var sizeCost = calculatePropertySizeCost(propertySize);
    var yearBuiltCost = (yearBuilt < 1980) ? 150 : 0;
    var crawlspaceCost = 0;
    if (crawlspace === "Yes") {
        if (propertySize <= 4999) {
            crawlspaceCost = 50;
        } else {
            crawlspaceCost = 100;
        }
    }
    var freestandingCost = freestandingStructures * 40;
    var additionalCost = 0;
    if (noneCheckbox) additionalCost += 0;
    if (moldCheckbox) additionalCost += 259.42;
    if (wdiTermiteCheckbox) additionalCost += 97;
    if (asbestosCheckbox) additionalCost += 141;
    if (foundationCheckbox) additionalCost += 49;
    if (sewerCheckbox) additionalCost += 228;
    if (atticBasementCheckbox) additionalCost += 42.66;

    var totalCost = locationCost + sizeCost + yearBuiltCost + crawlspaceCost + freestandingCost + additionalCost;

    document.getElementById('result').innerHTML = "Estimated home inspection cost is: $" + totalCost.toFixed(2);
}

  function calculateNewBuildCost() {
    var locationNew = document.getElementById('locationNew').value;
    var preDrywallCheckbox = document.getElementById('preDrywallCheckbox').checked;
    var fullHomeCheckbox = document.getElementById('fullHomeCheckbox').checked;
    var elevenMonthCheckbox = document.getElementById('elevenMonthCheckbox').checked;

    var locationCost = calculateLocationCost(locationNew);
    var inspectionCost = 0;
    if (preDrywallCheckbox) inspectionCost += 200;
    if (fullHomeCheckbox) inspectionCost += 300;
    if (elevenMonthCheckbox) inspectionCost += 300;

    var totalCost = locationCost + inspectionCost;

    document.getElementById('result').innerHTML = "Estimated home inspection cost is: $" + totalCost.toFixed(2);
  }

  function calculateLocationCost(location) {
    switch (location) {
      case "West Virginia":
      case "Utah":
      case "Colorado":
      case "Idaho":
      case "Illinois":
      case "Indiana":
      case "Georgia":
      case "Michigan":
      case "North Carolina":
      case "Mississippi":
      case "Massachusetts":
      case "Nevada":
      case "Texas":
        return 110.5;
      case "Alabama":
      case "Arizona":
      case "Florida":
      case "Delaware":
      case "Louisiana":
      case "Montana":
        return 22.25;
      case "Arkansas":
      case "Kentucky":
      case "North Dakota":
      case "Ohio":
      case "Kansas":
      case "Iowa":
        return 25.75;
      case "Alaska":
      case "Wyoming":
      case "Pennsylvania":
        return 127.25;
      case "Maryland":
      case "Oklahoma":
      case "Nebraska":
      case "Wisconsin":
        return 91.25;
      case "Minnesota":
      case "Vermont":
      case "South Carolina":
      case "South Dakota":
        return 165;
      case "Missouri":
      case "New Hampshire":
      case "New Jersey":
      case "New Mexico":
      case "Tennessee":
      case "California":
      case "Connecticut":
      case "Maine":
        return 110.75;
      case "New York":
      case "Virginia":
      case "Oregon":
      case "Rhode Island":
        return 147.25;
      case "Washington":
        return 213.95;
      case "Hawaii":
        return 255.5;
      default:
        return 20.5;
    }
  }

  function calculatePropertySizeCost(propertySize) {
    if (propertySize < 1000) return 185;
    else if (propertySize <= 1500) return 225.25;
    else if (propertySize <= 2000) return 315.75;
    else if (propertySize <= 3000) return 415;
    else if (propertySize <= 4000) return 510.25;
    else if (propertySize <= 5000) return 625.25;
    else return 790;
  }