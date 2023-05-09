// Get the buttons from the sections
const buttons = document.querySelectorAll('section button');

// Loop through the buttons and add a click event listener
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the section heading and button text
    const sectionHeading = button.parentElement.querySelector('h2').textContent;
    const buttonText = button.textContent;
    
    // Log a message to the console with the section heading and button text
    console.log(`Clicked ${buttonText} button in ${sectionHeading} section`);
    
    // Show a confirmation message to the user
    alert(`You clicked the ${buttonText} button in the ${sectionHeading} section!`);
  });
});

// realtime

// Define an array of eco-friendly tips
var tips = [
    "Reduce your water usage by turning off the tap while brushing your teeth.",
    "Save energy by using LED light bulbs instead of incandescent bulbs.",
    "Reduce your carbon footprint by walking, biking, or taking public transportation instead of driving.",
    "Conserve water by fixing leaky faucets and toilets.",
    "Reduce waste by using reusable bags, bottles, and containers instead of single-use items.",
    "Support local agriculture by shopping at farmers markets and buying in-season produce.",
    "Save energy and money by turning off lights and electronics when they're not in use.",
    "Reduce your meat consumption to lower your carbon footprint and promote animal welfare.",
    "Conserve water by taking shorter showers and installing low-flow showerheads and toilets.",
    "Reduce your use of plastic by choosing products with minimal packaging and avoiding single-use plastics."
  ];
  
  // Define a function that randomly selects a tip from the array and outputs it to the page
  function getAdvice() {
    var randomIndex = Math.floor(Math.random() * tips.length);
    var randomTip = tips[randomIndex];
    document.getElementById("advice").innerHTML = randomTip;
  }
  
  // Add an event listener to the button to trigger the "getAdvice" function
  document.getElementById("advice-btn").addEventListener("click", getAdvice);
  
// Define an array of eco-friendly tips
var tips = [
  "Reduce your water usage by turning off the tap while brushing your teeth.",
  "Save energy by using LED light bulbs instead of incandescent bulbs.",
  "Reduce your carbon footprint by walking, biking, or taking public transportation instead of driving.",
  "Conserve water by fixing leaky faucets and toilets.",
  "Reduce waste by using reusable bags, bottles, and containers instead of single-use items.",
  "Support local agriculture by shopping at farmers markets and buying in-season produce.",
  "Save energy and money by turning off lights and electronics when they're not in use.",
  "Reduce your meat consumption to lower your carbon footprint and promote animal welfare.",
  "Conserve water by taking shorter showers and installing low-flow showerheads and toilets.",
  "Reduce your use of plastic by choosing products with minimal packaging and avoiding single-use plastics."
];

// Define a function that randomly selects a tip from the array and outputs it to the page
function getAdvice() {
  var randomIndex = Math.floor(Math.random() * tips.length);
  var randomTip = tips[randomIndex];
  document.getElementById("advice").innerHTML = randomTip;
}

// Add an event listener to the button to trigger the "getAdvice" function
document.getElementById("advice-btn").addEventListener("click", getAdvice);


  