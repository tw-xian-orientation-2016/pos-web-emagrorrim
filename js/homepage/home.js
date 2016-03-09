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
      "<td><input type='text' data-barcode='" + item.barcode +
      "' name='itemCount' value='" + count + "'/></td>" +
      "</tr>";

    $("#tableView").append(tr);
  });

  bindMethod();
}

function bindMethod() {
  $('input[name="itemCount"]').change(function() {
    var count = $(this).val();
    if (count === '') {
      count = '0';
      $(this).val('0');
    }
    var barcode = this.dataset.barcode;
    setCartRecord({ barcode: barcode, count: parseFloat(count) });
  });
}
