const calculateArea = (points = [{}]) => {
  let sum1 = 0,
      sum2 = 0;
  for (let i = 0; i < points.length; i++) {
    const nextPoint = (i === points.length - 1) ? 0 : i + 1;
    sum1 += points[i].x * points[nextPoint].y;
    sum2 -= points[nextPoint].x * points[i].y;
  }
  const area = -(sum1 + sum2) / 2;
  return {area: area, figure: `${points.length}-угольник`, input: points}
};
console.log('task2 ---------------------------------');

console.log(calculateArea([
  {x:3, y:4},
  {x:5, y:11},
  {x:12, y:8},
  {x:9, y:5},
  {x:5, y:6},
  ]));