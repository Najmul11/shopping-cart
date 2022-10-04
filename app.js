const buttonHandle = (inputId, isAdding) => {
    const inputField = document.getElementById(inputId);
    let inputValue = parseInt(inputField.value);
    if (isAdding == true) {
      inputValue++;
    } else {
      if (inputValue > 0) {
        inputValue--;
      }
    }
    inputField.value = inputValue;
    return inputValue;
  };
  const getElemntText=(element,newText)=>{
      const elementField=document.getElementById(element)
      const elementText=parseFloat(elementField.innerText);
      elementField.innerText=newText;
  }
  const calc=(element,inputValue,defaultPrice)=>{
      const newElementText=inputValue *defaultPrice;
      const elementText=getElemntText(element,newElementText);
  }
  function getElementText2(element) {
      const elementField=document.getElementById(element)
      const elementText=parseFloat(elementField.innerText);
      return elementText;
  }
  function total(){
      const phnTotal=getElementText2('phnTotal-price')
      const totalCasePrice=getElementText2('caseTotal-price')
      
      const subTotal=document.getElementById('sub-total')
      const newSub=phnTotal + totalCasePrice;
      subTotal.innerText=newSub;
  
      const taxTotal=document.getElementById('tax')
      const newTax=newSub *.1;
      taxTotal.innerText=newTax;
  
      const Total=document.getElementById('total')
      const newtotal=newSub + newTax
      Total.innerText=newtotal;
  
  }
  
  // ------------phone--------------
  const phnPlusBtn = document.getElementById("phone-plus");
  phnPlusBtn.addEventListener("click", () => {
    const phonePlus = buttonHandle("phone-input", true);
    const totalPricePhone=calc('phnTotal-price',phonePlus,1000)
    total()
  
  });
  
  const phnMinusBtn = document.getElementById("phone-minus");
  phnMinusBtn.addEventListener("click", () => {
    const phoneMinus = buttonHandle("phone-input", false);
    const totalPricePhone=calc('phnTotal-price',phoneMinus,1000)
    total()
  });
  
  
  // -----------case----------------------
  const casePlusBtn = document.getElementById("case-plus");
  casePlusBtn.addEventListener("click", () => {
    const casePlus = buttonHandle("case-input", true);
    const totalPriceCase=calc('caseTotal-price',casePlus,50)
    total()
  });
  
  const caseMinusBtn = document.getElementById("case-minus");
  caseMinusBtn.addEventListener("click", () => {
    const caseMinus = buttonHandle("case-input", false);
    const totalPriceCase=calc('caseTotal-price',caseMinus,50)
    total()
  });
  