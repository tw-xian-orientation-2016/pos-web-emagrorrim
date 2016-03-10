$(document).ready(function() {
  loadHomePage();
});

function loadHomePage() {
  var allItems = getAllItems();
  var cartRecords = getCartRecords();
  displayItemsList(allItems, cartRecords);
  setLogoBtnAction();
}

function displayItemsList(allItems, cartRecords) {
  $('#cartCount').html(cartRecords.length);

  cartRecords.forEach(function(cartRecord) {
    var item = getItem(cartRecord.barcode, allItems);

    var tr =
      "<tr class='row'>" +
      "<td>" + item.name + "</td>" +
      "<td>" + item.price + "</td>" +
      "<td>" + item.unit + "</td>" +
      "<td><input type='text' data-barcode='" + item.barcode +
      "' name='itemCount' value='" + cartRecord.count + "'/></td>" +
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
    var cartRecords = getCartRecords();
    $('#cartCount').html(cartRecords.length);
  });
}

function getItem(barcode, allItems) {
  for (var i = 0; i < allItems.length; i++) {
    if (barcode === allItems[i].barcode) {
      return allItems[i];
    }
  }
}
