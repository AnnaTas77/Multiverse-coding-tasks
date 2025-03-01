/**
 * you can use this example drawer to do some debugging
 *
 * note that we usually represent money in integers not decimals:
 * https://blog.agentrisk.com/you-better-work-in-cents-not-dollars-2edb52cdf308
 */

const drawer = [
  {
    name: "penny",
    value: 1, // a penny is 1 cent
    quantity: 72, // 72 pennies in the drawer
  },
  {
    name: "nickel",
    value: 5,
    quantity: 41,
  },
  {
    name: "dime",
    value: 10,
    quantity: 31,
  },
  {
    name: "quarter",
    value: 25,
    quantity: 17,
  },
  {
    name: "one", // N.B. a $1 bill is a note, not a coin
    value: 100,
    quantity: 90,
  },
  {
    name: "five",
    value: 500,
    quantity: 11,
  },
  {
    name: "ten",
    value: 1_000,
    quantity: 2,
  },
  {
    name: "twenty",
    value: 2_000,
    quantity: 3,
  },
  {
    name: "hundred",
    value: 10_000,
    quantity: 1,
  },
];

module.exports = drawer;
