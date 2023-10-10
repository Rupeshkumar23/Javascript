// Selecting elements from the HTML DOM.
const outputElement = document.querySelector("#output");
const btnCopy = document.querySelector("#btnCopy");
const passwordLengthElement = document.querySelector("#length");
const numberElement = document.querySelector("#number");
const captialElement = document.querySelector("#captial");
const smallElement = document.querySelector("#small");
const symbolElement = document.querySelector("#symbol");
const frm = document.querySelector("#frm");
const dialog = document.querySelector("#dialog");
const dialog1 = document.querySelector("#dialog1");

// Adding an event listener for the button to copy the password to the clipboard.
btnCopy.addEventListener("click", async (e) => {
  e.preventDefault();
  const pass = outputElement.value;
  if (pass) {
    await navigator.clipboard.writeText(pass);
    dialog.style.display = "block";
    setTimeout(() => {
      dialog.style.display = "none";
    }, 2000);
  } else {
    await navigator.clipboard.writeText(pass);
    dialog1.style.display = "block";
    setTimeout(() => {
      dialog1.style.display = "none";
    }, 2000);
    // alert("There is no password to copy");
  }
});

/*
ASCII - American Standard Code for Information Interchange.

0-128
0-255

65-90  -  A-Z
97-122 -  a-z
48-57  -  0-9
32     -  space

*/

// Function to generate a random character between the min and max ASCII values.
function generateRandomChar(min, max) {
  const limit = max - min + 1;
  return String.fromCharCode(Math.floor(Math.random() * limit) + min);
}
// Functions to generate a random capital letter, small letter, number and symbol respectively.
function captitalValue() {
  return generateRandomChar(65, 90);
}
function smallValue() {
  return generateRandomChar(97, 122);
}
function numberValue() {
  return generateRandomChar(48, 57);
}

function symbolValue() {
  const symbols = "~!@#$%^&*()_+|}{<>*./";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// An array of objects, where each object contains an element (checkbox) and its corresponding function to generate a value.
const functionArray = [
  {
    element: numberElement,
    fun: numberValue,
  },
  {
    element: captialElement,
    fun: captitalValue,
  },
  {
    element: smallElement,
    fun: smallValue,
  },
  {
    element: symbolElement,
    fun: symbolValue,
  },
];

// Adding an event listener for the form submit button
frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const limit = passwordLengthElement.value; // Getting the password length value from the input field.
  let generatedPassword = ""; // Initializing an empty string for the generated password.
  const funArray = functionArray.filter(({ element }) => element.checked); // Creating a new array of selected elements and their corresponding functions.
  //console.log(funArray);

  for (i = 0; i < limit; i++) {
    const index = Math.floor(Math.random() * funArray.length); // Generating a random index based on the length of the function array.
    const letter = funArray[index].fun(); // Using the function corresponding to the selected element to generate a random value.
    generatedPassword += letter; //5$  // Appending the generated value to the password string.
  }
  outputElement.value = generatedPassword; // Setting the generated password as the value of the output element.
});
