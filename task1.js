const loop = (times = 0, callback = null) => {
  if (typeof callback !== 'function') {
    return;
  }
  for (let i = 0; i < times; i++) {
    callback(i);
  }
};
console.log('task1 ---------------------------------');
loop(4);
loop(3, (val) => console.log(val));