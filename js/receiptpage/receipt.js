$(document).ready(function() {
  loadReceiptPage();
});

function loadReceiptPage() {
  $('#cartCount').html(getTotalItemNumber());
  var receipt = getCurrentReceipt();
  displayReceipt(receipt);
  setNavBtnAction();
  bindBackBtnAction();
}

function displayReceipt(receipt) {

  var total = receipt.total;
  displayTotalPrice(total);

  var receiptItems = receipt.receiptItems;

  receiptItems.forEach(function(receiptItem) {
    var tr =
      "<tr class='row'>" +
      "<td>" + receiptItem.cartItem.item.name + "</td>" +
      "<td>￥" + receiptItem.cartItem.item.price.toFixed(2) + "</td>" +
      "<td>" + receiptItem.cartItem.item.unit + "</td>" +
      "<td>" + receiptItem.cartItem.count + "</td>" +
      "<td>" + receiptItem.total.toFixed(2) + "</td>" +
      "</tr>";

    $("#tableView").append(tr);
  });
}

function displayTotalPrice(total) {
  var totalPrice = '￥' + total.toFixed(2);
  $('#totalPrice').html(totalPrice);
}

function bindBackBtnAction() {
  $('#backHomeBtn').click(function() {
    window.location.href = "../../index.html";
  });
}
