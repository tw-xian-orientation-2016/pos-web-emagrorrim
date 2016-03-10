$(document).ready(function() {
  loadReceiptListPage();
});

function loadReceiptListPage() {
  var receiptlist = getReceiptList();
  displayReceiptList(receiptlist);
  setBtnAction();
}

function setBtnAction() {
  setCartBtnAction();
  setLogoBtnAction();
}

function displayReceiptList(receiptlist) {
  receiptlist.forEach(function(receipt) {
    var date = receipt.date;

    var tr =
      "<tr class='row' name='rowBtn'>" +
      "<td>" + date + "</td>" +
      "<td>" + receipt.total + "</td>" +
      "</tr>";

    $("#tableView").append(tr);
  })
}
