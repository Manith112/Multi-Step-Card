// switch payment method step 2 
const toggle = document.getElementById("toggle");
const monthly = document.getElementById("monthly");
const yearly = document.getElementById("yearly");
const monthlyPaid = document.querySelectorAll(".monthly-paid");
const yearlyPaid = document.querySelectorAll(".yearly-paid");
const yearlyFree = document.querySelectorAll(".year-free");
const pickMonth = document.querySelectorAll(".pick-month");
const pickYear = document.querySelectorAll(".pick-year");
const title = document.querySelectorAll(".monthly-title")
const totalMonth = document.getElementById("total-month");
const totalYear = document.getElementById("total-year");


 function toggleChecked(){
    if (toggle.checked){
    
      totalMonth.style.display = "none";
      totalYear.style.display = "flex"
     
        yearlyPaid.forEach(function(year){
            year.style.display = "flex";
        })
        yearlyFree.forEach(function(free) {
            free.innerText = "2 months free" 
        })
        monthly.style.color = "hsl(231, 11%, 63%)";
        yearly.style.color = "hsl(213, 96%, 18%)";
        monthlyPaid.forEach(function(month) {
            month.style.display = "none";
        })
        pickMonth.forEach(function(picking){
            picking.style.display = "none";
        })
        pickYear.forEach(function(picking){
            picking.style.display = "flex";
        })
        title.forEach(function(title){
          title.innerHTML = "(Yearly)";
        })
        
    }else{
     
      totalMonth.style.display = "";
      totalYear.style.display = ""
      
      title.forEach(function(title){
        title.innerHTML = "(Monthly)"
      })
        pickMonth.forEach(function(picking){
            picking.style.display = "";
        })
        pickYear.forEach(function(picking){
            picking.style.display = "";
        })
        yearlyPaid.forEach(function(year){
            year.style.display = "";
        })
        yearlyFree.forEach(function(free) {
            free.innerText = "" 
        })
        monthlyPaid.forEach(function(month) {
            month.style.display = "";
        })
        monthly.style.color = "";
        yearly.style.color = "";
    
    }
    updateStyles()
}
function updateStyles() {
  const secondStep = document.getElementById("step2")
  const box = document.querySelector(".box")
  const isMobile = window.matchMedia("(max-width: 600px)").matches;

  // Toggle the inline style based on the window width
  if(toggle.checked){
  if (isMobile) {
    secondStep.style.height = '670px';
    box.style.paddingTop = '10px'
  } else {
    secondStep.style.height = '';
    box.style.paddingTop = ''
  }
}else{
  secondStep.style.height = '';
  box.style.paddingTop = ''
}
}
// Call the function on page load and when the window is resized
window.addEventListener('load', updateStyles);
window.addEventListener('resize', updateStyles);


// new step 3
var selectedCheckboxes = [];

function stepCheckbox(checkboxId) {
    var checkbox = document.getElementById(checkboxId);

    if (selectedCheckboxes.includes(checkboxId)) {
        // If the clicked checkbox is already in the array, remove it
        selectedCheckboxes = selectedCheckboxes.filter(id => id !== checkboxId);
        checkbox.checked = false;
    } else {
        // If a different checkbox is clicked, add it to the array
        selectedCheckboxes.push(checkboxId);
        checkbox.checked = true;

        // You can perform additional actions when a checkbox is selected here
    }
    updateAdd();
    totalPrice();
}
// // display add-on selected on step-4
let totalyear1;
let totalyear2;
let totalyear3;
let totalmonth1;
let totalmonth2;
let totalmonth3;
function updateAdd(){
  
let add1 = document.getElementById("add-ons");
  let add2 = document.getElementById("add-ons2");
  let add3 = document.getElementById("add-ons3");
  let addons1 = document.getElementById("value1");
  let addons2 = document.getElementById("value2");
  let addons3 = document.getElementById("value3");
totalyear1 = 0;
totalyear2 = 0;
totalyear3 = 0;
totalmonth1 = 0;
totalmonth2 = 0;
totalmonth3 = 0;

  add1.style.display = "none";
  add2.style.display = "none";
  add3.style.display = "none";
  

  if (selectedCheckboxes.includes("checkbox1")) {
    add1.style.display = "flex";
    totalmonth1 = "1";
    if (toggle.checked) {
      addons1.value = "+$10/yr";
      totalyear1 = "10";
    } else {
      addons1.value = "$1/mo";
      // totalmonth1 = "1";
    }
  } else {
    totalyear1 = "0";
    totalmonth1 = "0";
  }

  if (selectedCheckboxes.includes("checkbox2")) {
    add2.style.display = "flex";
    totalmonth2 = "2";
    if (toggle.checked) {
      addons2.value = "+$20/yr";
      totalyear2 = "20";
    } else {
      addons2.value = "$2/mo";
      // totalmonth2 = "2";
    }
  } else {
  
    totalyear2 = "0";
    totalmonth2 = "0";
  }

  if (selectedCheckboxes.includes("checkbox3")) {
    add3.style.display = "flex";
    totalmonth3 = "2";
    if (toggle.checked) {
      addons3.value = "+$20/yr";
      totalyear3 = "20";
    } else {
      addons3.value = "$2/mo";
      // totalmonth3 = "2";
    }
  } else {
    
    totalyear3 = "0";
    totalmonth3 = "0";
  }

totalPrice();
}

// select and unselect box step 2 
let selectedRating = null;
function selectRating(rating) {
    if (selectedRating !== null) {
        document.getElementById("rating" + selectedRating).classList.remove("selected");
    }
    selectedRating = rating;
    document.getElementById("rating" + selectedRating).classList.add("selected");
    updatePlanAndPrice();
}

// display plan selected in step 4
var priceStep2;
function updatePlanAndPrice() {
var plan = document.querySelector(".chosenplan");
  var price = document.querySelector(".price");

  if (selectedRating === 1){
    if(toggle.checked){
    plan.innerText = "Arcade(Yearly)";
    price.value = "$90/yr"
    priceStep2 = "90";
  }else{
    price.value = "$9/mo";
    plan.innerText = "Arcade(Monthly)";
    priceStep2 = "9";
  }
}else if (selectedRating === 2){
    if(toggle.checked){
    plan.innerHTML = "Advanced(Yearly)";
    price.value = "$120/yr"
    priceStep2 = "120";
  }else{
    price.value = "$12/mo";
    plan.innerHTML = "Advanced(Monthly)";
    priceStep2 = "12";
  }
 } else{
    if(toggle.checked){
    plan.innerHTML = "Pro(Yearly)";
    price.value = "$150/yr"
    priceStep2 = "150";
  }else{
    price.value = "$15/mo";
    plan.innerHTML = "Pro(Monthly)";
    priceStep2 = "15";
  }} 
  totalPrice()
}


  // total price 
  function totalPrice(){
    const totalPrice = document.getElementById("total-price")
    var yearPrice = 0;
    var monthPrice = 0;
   

    // Add prices from step 2
    if (toggle.checked) {
      yearPrice += Number(priceStep2);
  } else {
      monthPrice += Number(priceStep2);
  }
   
  // Add prices from selected checkboxes in step 3
  yearPrice += Number(totalyear1) + Number(totalyear2) + Number(totalyear3);
  monthPrice += Number(totalmonth1) + Number(totalmonth2) + Number(totalmonth3);


    if (toggle.checked) {
     
      totalPrice.innerHTML = "+$" + Number(yearPrice) + "/yr";
    } else {
     
      totalPrice.innerHTML ="+$" + Number(monthPrice) + "/mo";
    }
    
    }

    // updateDot 
    function updateDots(currentStep) {
      const totalSteps = 4;
      for (let i = 1; i <= totalSteps; i++) {
        let dot = document.getElementById('dot' + i);
      
        if (i < currentStep) {
          dot.classList.add('complete');
          dot.classList.remove('active');
        } else if (i === currentStep) {
          dot.classList.add('active');
          dot.classList.remove('complete');
        } else {
          dot.classList.remove('active', 'complete');
        }
      }
    }

let currentStep = 1;
// show step of card 
function showStep(stepNumber) {
    const steps = document.querySelectorAll('.step');
    steps.forEach( function(step){
    step.style.display = 'none'
    document.getElementById(`step${stepNumber}`).style.display = 'flex';
});


updateDots(stepNumber);

  }




const phoneRegex = /^[0-9]{10}$/;
const nameRegex = /^[a-zA-Z\s]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const falseName = document.querySelector(".false-one")
    const falseEmail = document.querySelector(".false-two")
    const falsePhone = document.querySelector(".false-three")
function nextStep(){ 
    

    const name = document.getElementById("name")
    const email = document.getElementById("email")
    const phone = document.getElementById("phone")
    const nameInput = name.value;
const emailInput = email.value;
const phoneInput = phone.value;
// go next step 
        falseName.textContent = "";
        name.style.border = "1px solid hsl(231, 11%, 63%)"
        falseEmail.textContent = "";
        email.style.border = "1px solid hsl(231, 11%, 63%)"
        falsePhone.textContent = "";
        phone.style.border = "1px solid hsl(231, 11%, 63%)"

if (currentStep === 1){
    if(nameInput === "" || !nameRegex.test(nameInput) ){
        falseName.textContent = "This field is required";
        name.style.border = "1px solid red";
        return;
    }

    if(emailInput=== "" || !emailRegex.test(emailInput)){
    falseEmail.textContent = "This field is required";
    email.style.border = "1px solid red"
    return;
    }

    if(phoneInput === "" || !phoneRegex.test(phoneInput)){
            falsePhone.textContent = "This field is required";
            phone.style.border = "1px solid red";
            return;
        }
    
} else if (currentStep === 2) {
   
   

  }else if (currentStep === 3) {


  }else if (currentStep === 4){

  
}else if (currentStep === 5){

}
  if (currentStep < 6) {
    currentStep++;
    showStep(currentStep);
  }
     
}
// change method 
function changeMethod(){
  if (currentStep > 1) {
    currentStep = currentStep -2;
      showStep(currentStep);
  }
}
// back card 
function prevStep() {
    if (currentStep > 1) {
      currentStep--;
        showStep(currentStep);

    }
  }


// error message 
function validateNextStep(stepNumber){
    if (stepNumber === 2){
       if (selectedRating === null){
        alert("fill");
        return;
       }
      
    }else if(stepNumber === 3){
        // const checkSelected =document.querySelectorAll(".choose:checked")
      //  const checkSelected = Array.from(mySelect).some(check => check.checked);
      //   if (!checkSelected){
      //       alert('Please select at least one price before proceeding.');
      //       return;
      //   }
        
        
    }else if(stepNumber === 4){
    
        
    
  }else if(stepNumber === 5){
    
    return;
}

showStep(currentStep);
nextStep();

    
}

  showStep(currentStep);
