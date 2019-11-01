while (true) {
  operator = prompt(
    parseInt("choose 1-add, 2-sub, 3-mul, 4-div, 5-modulo, 6-exit")
  );
  if (operator != 6) {
    var x = prompt(parseInt("Enter value of x : "));
    var y = prompt(parseInt("Enter value of y : "));
    var result;

    if (operator == 1) {
      result = x + y;
    } else if (operator == 2) {
      result = x - y;
    } else if (operator == 3) {
      result = x * y;
    } else if (operator == 4) {
      result = x / y;
    } else if (operator == 5) {
      result = x % y;
    }

    alert(result);
  } else {
    alert("cannot be 6");
  }
}
