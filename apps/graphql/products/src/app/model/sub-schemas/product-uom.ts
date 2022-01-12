export const ProductUoMSchema = {
  unitType: {
    type: String
  }, // ml, Box, Gram, Piece, Kilo, Liter, Pack
  minQty: {
    type: Number
  }, // minimum orderable quantity per unit of measure. defaults to 1
  price: {
    type: Number
  },
  displayText: {
    type: String
  }, // "2x200 ml"
}
