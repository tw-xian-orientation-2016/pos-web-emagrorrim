function getItem(barcode, allItems) {
  for (var i = 0; i < allItems.length; i++) {
    if (barcode === allItems[i].barcode) {
      return allItems[i];
    }
  }
}
