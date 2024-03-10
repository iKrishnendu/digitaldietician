function checkOther(select) {
  var otherSportInput = document.getElementById("otherSportInput");
  var otherSportDiv = document.getElementById("otherSport");

  if (select.value.toLowerCase() === "other") {
    otherSportDiv.style.display = "block";
    otherSportInput.required = true;
  } else {
    otherSportDiv.style.display = "none";
    otherSportInput.required = false;
  }
}

function checkDiabetics(select) {
  var RangeInp = document.getElementById("range");
  var RangeIdDiv = document.getElementById("Range");

  if (select.value === "yes") {
    RangeIdDiv.style.display = "block";
    RangeInp.required = true;
  } else {
    RangeIdDiv.style.display = "none";
    RangeInp.required = false;
  }
}

function checkBP(select) {
  var BPInp = document.getElementById("BPrange");
  var BPdiv = document.getElementById("bprange");

  if (select.value === "yes") {
    BPdiv.style.display = "block";
    BPInp.required = true;
  } else {
    BPdiv.style.display = "none";
    BPInp.required = false;
  }
}
function checkDisease(select) {
  var DSInp = document.getElementById("Diseases");
  var DSdiv = document.getElementById("Disease");

  if (select.value === "yes") {
    DSdiv.style.display = "block";
    DSInp.required = true;
  } else {
    DSdiv.style.display = "none";
    DSInp.required = false;
  }
}
function checkCL(select) {
  var CLInp = document.getElementById("cholestrolll");
  var CLdiv = document.getElementById("cholestroll");

  if (select.value === "yes") {
    CLdiv.style.display = "block";
    CLInp.required = true;
  } else {
    CLdiv.style.display = "none";
    CLInp.required = false;
  }
}

function submitForm(event) {
  // Prevent the default form submission behavior
  event.preventDefault();
  var profession = document.getElementById("Profession").value;
  var age = document.getElementById("age").value;
  var gender = document.getElementById("gender").value;
  var activityLevel = document.getElementById("activity-level").value;
  var sports = document.getElementById("sports").value;
  var dietaryPreference = document.getElementById("dietary-preference").value;
  var weightGoal = document.getElementById("weight-goal").value;
  var bodyWeight = document.getElementById("bodyweight").value;
  var diabetic = document.getElementById("diabetic").value;
  var diabeticLevel = document.getElementById("range").value;
  var bloodPressure = document.getElementById("bp").value;
  var bloodPressureRange = document.getElementById("BPrange").value;
  var cholesterol = document.getElementById("cholestrol").value;
  var cholesterolLevel = document.getElementById("cholestrolll").value;
  var diseases = document.getElementById("disease").value;
  var diseaseType = document.getElementById("Diseases").value;
  var height = document.getElementById("bodyheight").value;
  var smoker = document.getElementById("smoker").value;
  // window.location.href =
  //   "response.html?age=" +
  //   age +
  //   "&bodyweight=" +
  //   bodyWeight +
  //   "&height=" +
  //   height +
  //   "&diabetic=" +
  //   diabetic +
  //   "&diabeticLevel=" +
  //   diabeticLevel +
  //   "&bloodPressure=" +
  //   bloodPressure +
  //   "&bloodPressureRange=" +
  //   bloodPressureRange +
  //   "&cholesterol=" +
  //   cholesterol +
  //   "&cholesterolLevel=" +
  //   cholesterolLevel;
  console.log("Profession:", profession);
  console.log("Age:", age);
  console.log("Gender:", gender);
  console.log("Activity Level:", activityLevel);
  console.log("Sports:", sports);
  console.log("Dietary Preference:", dietaryPreference);
  console.log("Weight Goal:", weightGoal);
  console.log("Body Weight:", bodyWeight);
  console.log("Height:", height);
  console.log("Diabetic:", diabetic);
  console.log("Smoker:", smoker);
  if (diabetic === "yes") {
    console.log("Diabetic Level:", diabeticLevel);
  } else {
    diabeticLevel = 0;
    console.log("Diabetic Level:", diabeticLevel);
  }
  console.log("High Blood Pressure:", bloodPressure);
  if (bloodPressure === "yes") {
    console.log("Blood Pressure Range:", bloodPressureRange);
  } else {
    bloodPressureRange = 0;
    console.log("Blood Pressure Range:", bloodPressureRange);
  }
  console.log("Cholesterol:", cholesterol);
  if (cholesterol === "yes") {
    console.log("Cholesterol Level:", cholesterolLevel);
  } else {
    cholesterolLevel = 0;
    console.log("Cholesterol Level:", cholesterolLevel);
  }
  console.log("Diseases:", diseases);
  if (diseases === "yes") {
    console.log("Disease type:", diseaseType);
  } else {
    diseaseType = "none";
    console.log("Disease type:", diseaseType);
  }
}
function toggleDropdown() {
  var dropdownContainer = document.getElementById("dropdownContainer");
  if (dropdownContainer.style.display === "block") {
    dropdownContainer.style.display = "none";
  } else {
    dropdownContainer.style.display = "block";
  }
}
