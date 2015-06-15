var moment = require('moment');

// Parse
var today = moment('2015-06-15', 'YYYY-MM-DD');

// Format
console.log(today.format()); // "2015-06-15T00:00:00+09:00"
console.log(today.format('YYYY-MM-DD')); // "2015-06-15"
console.log(today.format('YYYY')); // "2015"
console.log(today.format('MM')); // "06"
console.log(today.format('DD')); // "15"

// Query
console.log(moment('2010-10-20').isSame('2010-10-21')); // false
console.log(moment('2009-10-20').isSame('2010-10-21', 'year')); // false
console.log(moment('2010-10-20').isSame('2010-10-21', 'month')); // true
console.log(moment('2010-10-20').isSame('2010-10-21', 'date')); // false

// Duration
console.log(moment.duration(1000 * 60 * 60).asSeconds()); // 3600
console.log(moment.duration(1000 * 60 * 60).asMinutes()); // 60
console.log(moment.duration(1000 * 60 * 60).asHours()); // 1

