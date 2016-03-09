$(document).ready(function() {
  loadHomePage();
});

function loadHomePage() {
  var allItems = getAllItems();
  var cartRecords = getCartRecords();
  displayItemsList(allItems, cartRecords)
}

function displayItemsList(allItems, cartRecords) {

  allItems.forEach(function(item) {
    var count = getPurchasedCount(item.barcode, cartRecords);

    var tr =
      "<tr class='row'>" +
      "<td>" + item.name + "</td>" +
      "<td>" + item.price + "</td>" +
      "<td>" + item.unit + "</td>" +
      "<td><input type='text' name='itemCount' value='" + count + "'/></td>" +
      "</tr>";

    $("#tableView").append(tr);
  });
}

function getPurchasedCount(barcode, cartRecords) {

  for (var i = 0; i < cartRecords.length; i++) {

    var cartRecord = cartRecords[i];
    if (cartRecord.barcode === barcode) {
      return cartRecord.count;
    }
  }
  return 0;
}
