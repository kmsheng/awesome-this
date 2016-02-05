var obj = {};

obj.test = function() {
  console.log(this);    // obj
}

obj.test();
