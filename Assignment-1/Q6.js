// Q6. Write a Javascript program to calculate the Body Mass Index (BMI) using the formula BMI = weight (kg)/height * height.

function BodyMassIndex(Weight, Height) {
  console.log("Weight in Kg is: " + Weight);
  console.log("Height in inches is: " + Height);
  let BMI = Weight / ((Height / 40) * (Height / 40));
  if (BMI < 18.5) {
    console.log("Calculated BMI is: " + BMI + " UnderWeight BMI");
  } 
  else if (BMI> 25.0) {
    console.log("Calculated BMI is: " + BMI + " OverWeight BMI");
  } 
  else {
    console.log("Calculated BMI is: " + BMI + " Nomral BMI");
  }

}

BodyMassIndex(100,72)
