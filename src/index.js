let ones = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
];
let tens = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
];
let teens = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
];

function convert_hundreds(num) {
    
        if (num > 99) {
            if (num % 100 != 0)
                return (
                    ones[Math.floor(num / 100)] + " hundred " + convert_tens(num % 100)
                );
            else return ones[Math.floor(num / 100)] + " hundred";
        } else return convert_tens(num);

}

function convert_tens(num) {
    if (num < 10) return ones[num];
    else if (num >= 10 && num < 20) {
        return teens[Math.floor(num % 10)];
    } else if (num % 10 != 0) {
        return tens[Math.floor(num / 10)] + " " + convert_ones(num % 10);
    } else return tens[Math.floor(num / 10)];
}

function convert_ones(num) {
    if (num > 0) return ones[num];
    else return;
}

module.exports = function toReadable(number) {
    if (number == 0) return ones[0];
    return convert_hundreds(number);
};
