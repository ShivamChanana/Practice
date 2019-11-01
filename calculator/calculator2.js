function test(){var type = prompt(
  "Enter you operation type: 1 - add, 2 - sub, 3 - mul, 4 - div, 5 - mod, 6 - exit"
);

var check = /[0-9]/g;

console.log(type.match(check))
if (type.match(check)) {
  if (type != 6) {
    var x = parseInt(prompt("Please enter x:"));
    var y = parseInt(prompt("Please enter y:"));

    var result;
    // 1 - add
    // 2 - sub
    // 3 - mul
    // 4 - div
    // 5 - mod
    // 6 - exit

    if (type == 1) {
      result = x + y;
    } else if (type == 2) {
      result = x - y;
    } else if (type == 3) {
      result = x * y;
    } else if (type == 4) {
      result = x / y;
    } else if (type == 5) {
      result = x % y;
    }
    alert(result);
  } else {
    alert("Cannot Be 6.");
  }
} else {
  type = prompt(
    "Please enter a valid number. Enter you operation type: 1 - add, 2 - sub, 3 - mul, 4 - div, 5 - mod, 6 - exit"
  );
}
}

test();