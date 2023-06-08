class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  Mul(m) {
    this.x *= m;
    this.y *= m;
  }

  Add(v) {
    this.x += v.x;
    this.y += v.y;
  }

  Sub(v) {
    this.x -= v.x;
    this.y -= v.y;
  }

  Mag() {
    let measure = Math.sqrt(this.x * this.x + this.y * this.y);
    return measure;
  }
}

class Mover {
  constructor() {
    this.location = location;
    this.speed = speed;
  }

  Mover() {}

  Draw() {}

  Update() {}
}

let data = `first_name;last_name;email
Tom;Peeters;tom.peeters@ap.be
Tim;Dams;tim.dams@ap.be
Test;Test;Test@test.be`;

let lines = data.split("\n"); // Split the data into lines

let headers = lines[0].split(";"); // Split the first line into headers

let jsonObjects = []; // This will hold our JSON objects

for (let i = 1; i < lines.length; i++) {
  // Start from 1 to skip the header line
  let values = lines[i].split(";"); // Split the line into values
  let obj = {}; // This will hold the JSON object for this line
  for (let j = 0; j < headers.length; j++) {
    // Loop over each header
    obj[headers[j]] = values[j]; // Assign the corresponding value to the header
  }
  jsonObjects.push(obj); // Add the JSON object to the array
}

console.log(jsonObjects);

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Define a function named checkStraightLine that takes an array called coordinates as input
const checkStraightLine = function (coordinates) {
  // Destructure the x and y coordinates of the first point
  const [x0, y0] = coordinates[0];
  // Destructure the x and y coordinates of the second point
  const [x1, y1] = coordinates[1];

  // Check if the line is vertical (x coordinates are the same)
  if (x1 - x0 === 0) {
    // If the x coordinates are the same, iterate through the remaining points
    for (let i = 2; i < coordinates.length; i++) {
      // Check if the x coordinate of the current point is different from the first point
      if (coordinates[i][0] !== x0) {
        // If the x coordinate is different, it means the points do not form a straight line
        return false;
      }
    }
  } else {
    // Calculate the slope between the first two points
    const initialSlope = (y1 - y0) / (x1 - x0);

    // Check if all other points have the same slope as the initial slope
    for (let i = 2; i < coordinates.length; i++) {
      // Destructure the x and y coordinates of the current point
      const [x, y] = coordinates[i];

      // Check for division by zero (avoid dividing by zero)
      if (x - x0 === 0) {
        // If division by zero occurs, it means the points do not form a straight line
        return false;
      }

      // Calculate the slope between the current point and the first point
      const slope = (y - y0) / (x - x0);

      // If the slope between any two points is different from the initial slope, return false
      if (slope !== initialSlope) {
        // If the slopes are different, it means the points do not form a straight line
        return false;
      }
    }
  }

  // If the code reaches this point, it means all points lie on a straight line
  return true;
};

const coordinates1 = [
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
];
console.log(checkStraightLine(coordinates1)); // Output: true

const coordinates2 = [
  [1, 1],
  [2, 2],
  [3, 4],
  [4, 5],
  [5, 6],
  [7, 7],
];
console.log(checkStraightLine(coordinates2)); // Output: false

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
