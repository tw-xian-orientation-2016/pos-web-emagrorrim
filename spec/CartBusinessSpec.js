var getAllItems = require('../js/storage/storage')
var getCartItems = require('../js/cartpage/cart-business')

describe('cart-business-test', function() {
  it('getCartItems should output correct array', function() {
    var inputs = [
      { barcode:'ITEM000001', count:5 },
      { barcode:'ITEM000003', count:2 },
      { barcode:'ITEM000005', count:3 }
    ];

    var allItems = getAllItems();

    var output = getCartItems(inputs, allItems);

    var expectObject = [
      {
        item:{ barcode: 'ITEM000001', name: '雪碧', unit: '瓶', price: 3.00 },
        count: 5
      },
      {
        item: { barcode: 'ITEM000003', name: '荔枝', unit: '斤', price: 15.00 },
        count: 2
      },
      {
        item: { barcode: 'ITEM000005', name: '方便面', unit: '袋', price: 4.50 },
        count: 3
      }
    ];

    expect(output).toEqual(expectObject);
  });
});
