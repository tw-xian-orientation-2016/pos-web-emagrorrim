describe('storage delete cart record', function() {
  
  it('should delete cart record', function() {

    var record = { barcode: "ITEM000002", count: 1 };
    var cartRecords = [{ barcode: "ITEM000002", count: 1 }, { barcode: "ITEM000001", count: 1 }];

    deleteCartRecord(record, cartRecords);

    var expectCartRecords = [{ barcode: "ITEM000001", count: 1 }];

    expect(cartRecords).toEqual(expectCartRecords);

  });
});
