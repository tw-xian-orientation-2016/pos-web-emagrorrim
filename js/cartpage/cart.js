$(document).ready(function() {
  loadCartPage();
});

function loadCartPage() {
  var allItems = getAllItems();
  var cartRecords = getCartRecords();
  displayItemsList(allItems, cartRecords);
  setBtnAction();
}

function setBtnAction() {
  setLogoBtnAction();
  setReceiptBtnAction();
  bindItemCountAction();
  bindDeleteBtnAction();
  bindCheckOutBtnAction();
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
      "<td><input type='button' data-barcode='" + item.barcode +
      "' name='deleteBtn' value='删除'/></td>"
      "</tr>";

    $("#tableView").append(tr);
  });


}

function bindItemCountAction() {
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

function bindDeleteBtnAction() {
  $('input[name="deleteBtn"]').click(function() {
    setCartRecord({ barcode: this.dataset.barcode, count: 0 });

    $(this).parents('tr').remove();
    var cartRecords = getCartRecords();
    $('#cartCount').html(cartRecords.length);
  });
}

function bindCheckOutBtnAction() {
  $('#checkOutBtn').click(function() {
    var allItems = getAllItems();
    var cartRecords = getCartRecords("cartRecords");
    var receipt = generateReceipt(cartRecords, allItems);
    setCurrentReceipt(receipt);
    storeInList(receipt);
    window.location.href = '../../html/receipt.html';
  });
}
