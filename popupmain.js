let selectPost = document.getElementById("settotalvalue");

let minimumP = document.getElementById("minimump");

let inputArea1 = document.getElementById("inputareap1");
let inputArea2 = document.getElementById("inputareap2");
let inputArea3 = document.getElementById("inputareap3");
let inputArea4 = document.getElementById("inputareap4");
let inputArea5 = document.getElementById("inputareap5");
let inputArea6 = document.getElementById("inputareap6");
let inputArea7 = document.getElementById("inputareap7");
let inputArea8 = document.getElementById("inputareap8");
let inputArea9 = document.getElementById("inputareap9");

let inputP1 = document.getElementById("inputp1");
let inputP2 = document.getElementById("inputp2");
let inputP3 = document.getElementById("inputp3");
let inputP4 = document.getElementById("inputp4");
let inputP5 = document.getElementById("inputp5");
let inputP6 = document.getElementById("inputp6");
let inputP7 = document.getElementById("inputp7");
let inputP8 = document.getElementById("inputp8");
let inputP9 = document.getElementById("inputp9");

let inputbtn1 = document.getElementById("inputbtn1");
let inputbtn2 = document.getElementById("inputbtn2");
let inputbtn3 = document.getElementById("inputbtn3");
let inputbtn4 = document.getElementById("inputbtn4");
let inputbtn5 = document.getElementById("inputbtn5");
let inputbtn6 = document.getElementById("inputbtn6");
let inputbtn7 = document.getElementById("inputbtn7");
let inputbtn8 = document.getElementById("inputbtn8");
let inputbtn9 = document.getElementById("inputbtn9");

let resultP1 = document.getElementById("resultp1");
let resultP2 = document.getElementById("resultp2");
let resultP3 = document.getElementById("resultp3");
let resultP4 = document.getElementById("resultp4");
let resultP5 = document.getElementById("resultp5");
let resultP6 = document.getElementById("resultp6");
let resultP7 = document.getElementById("resultp7");
let resultP8 = document.getElementById("resultp8");
let resultP9 = document.getElementById("resultp9");

let value1 = document.getElementById("value1");
let value2 = document.getElementById("value2");
let value3 = document.getElementById("value3");
let value4 = document.getElementById("value4");
let value5 = document.getElementById("value5");
let value6 = document.getElementById("value6");
let value7 = document.getElementById("value7");
let value8 = document.getElementById("value8");
let value9 = document.getElementById("value9");
let totalP = document.getElementById("totalpost");

let wlcpage = document.getElementById("welcome-page");
let hstart = document.getElementById("homestart");

let cntainer = document.getElementById("container");
hstart.onclick = function(){
  wlcpage.style.display = "none";
  cntainer.style.display = "block";
}


selectPost.addEventListener("change", () => {
    if (selectPost.value === "0") {
      minimumP.style.display = "block";
      minimumP.innerText = "Select total post";
    } else{
        minimumP.style.display = "none";
    }
  });

  selectPost.addEventListener("change", () => {
    if (selectPost.value === "1") {
        inputArea1.style.display = "block";
    } else{
        inputArea1.style.display = "none";
    }
  });

    selectPost.addEventListener("change", () => {
    if (selectPost.value === "2") {
        inputArea1.style.display = "block";
        inputArea2.style.display = "block";
    } else{
        inputArea2.style.display = "none";
    }
  });

  selectPost.addEventListener("change", () => {
    if (selectPost.value === "3") {
        inputArea1.style.display = "block";
        inputArea2.style.display = "block";
        inputArea3.style.display = "block";
    } else{
        inputArea3.style.display = "none";
    }
  });
  
  selectPost.addEventListener("change", () => {
    if (selectPost.value === "4") {
        inputArea1.style.display = "block";
        inputArea2.style.display = "block";
        inputArea3.style.display = "block";
        inputArea4.style.display = "block";
    } else{
        inputArea4.style.display = "none";
    }
  });

  selectPost.addEventListener("change", () => {
    if (selectPost.value === "5") {
        inputArea1.style.display = "block";
        inputArea2.style.display = "block";
        inputArea3.style.display = "block";
        inputArea4.style.display = "block";
        inputArea5.style.display = "block";
    } else{
        inputArea5.style.display = "none";
    }
  });

  selectPost.addEventListener("change", () => {
    if (selectPost.value === "6") {
        inputArea1.style.display = "block";
        inputArea2.style.display = "block";
        inputArea3.style.display = "block";
        inputArea4.style.display = "block";
        inputArea5.style.display = "block";
        inputArea6.style.display = "block";
    } else{
        inputArea6.style.display = "none";
    }
  });

  selectPost.addEventListener("change", () => {
    if (selectPost.value === "7") {
        inputArea1.style.display = "block";
        inputArea2.style.display = "block";
        inputArea3.style.display = "block";
        inputArea4.style.display = "block";
        inputArea5.style.display = "block";
        inputArea6.style.display = "block";
        inputArea7.style.display = "block";
    } else{
        inputArea7.style.display = "none";
    }
  });

  selectPost.addEventListener("change", () => {
    if (selectPost.value === "8") {
        inputArea1.style.display = "block";
        inputArea2.style.display = "block";
        inputArea3.style.display = "block";
        inputArea4.style.display = "block";
        inputArea5.style.display = "block";
        inputArea6.style.display = "block";
        inputArea7.style.display = "block";
        inputArea8.style.display = "block";
    } else{
        inputArea8.style.display = "none";
    }
  });

  selectPost.addEventListener("change", () => {
    if (selectPost.value === "9") {
        inputArea1.style.display = "block";
        inputArea2.style.display = "block";
        inputArea3.style.display = "block";
        inputArea4.style.display = "block";
        inputArea5.style.display = "block";
        inputArea6.style.display = "block";
        inputArea7.style.display = "block";
        inputArea8.style.display = "block";
        inputArea9.style.display = "block";
    } else{
        inputArea9.style.display = "none";
    }
  });


  inputbtn1.onclick = function() {
    const inputValue = inputP1.value.trim();
    if (!isNaN(inputValue) && inputValue !== "") {
        value1.value = inputValue;
        inputP1.setAttribute("hidden","");
      inputbtn1.setAttribute("hidden","");
      resultP1.innerHTML = "Post 1 Selected"+" "+inputValue;
      totalP.value = selectPost.value;
    } else {
        resultP1.innerText = "Input a valid Post Number";
    }
  }

  inputbtn2.onclick = function() {
    const inputValue = inputP2.value.trim();
    if (!isNaN(inputValue) && inputValue !== "") {
        value2.value = inputValue;
        inputP2.setAttribute("hidden","");
      inputbtn2.setAttribute("hidden","");
      resultP2.innerHTML = "Post 2 Selected"+" "+inputValue;
      totalP.value = selectPost.value;
    } else {
        resultP2.innerText = "Input a valid Post Number";
    }
  }

  inputbtn3.onclick = function() {
    const inputValue = inputP3.value.trim();
    if (!isNaN(inputValue) && inputValue !== "") {
        value3.value = inputValue;
        inputP3.setAttribute("hidden","");
      inputbtn3.setAttribute("hidden","");
      resultP3.innerHTML = "Post 3 Selected"+" "+inputValue;
      totalP.value = selectPost.value;
    } else {
        resultP3.innerText = "Input a valid Post Number";
    }
  }

  inputbtn4.onclick = function() {
    const inputValue = inputP4.value.trim();
    if (!isNaN(inputValue) && inputValue !== "") {
        value4.value = inputValue;
        inputP4.setAttribute("hidden","");
      inputbtn4.setAttribute("hidden","");
      resultP4.innerHTML = "Post 4 Selected"+" "+inputValue;
      totalP.value = selectPost.value;
    } else {
        resultP4.innerText = "Input a valid Post Number";
    }
  }

  inputbtn5.onclick = function() {
    const inputValue = inputP5.value.trim();
    if (!isNaN(inputValue) && inputValue !== "") {
        value5.value = inputValue;
        inputP5.setAttribute("hidden","");
        inputbtn5.setAttribute("hidden","");
      resultP5.innerHTML = "Post 5 Selected"+" "+inputValue;
      totalP.value = selectPost.value;
    } else {
        resultP5.innerText = "Input a valid Post Number";
    }
  }

  inputbtn6.onclick = function() {
    const inputValue = inputP6.value.trim();
    if (!isNaN(inputValue) && inputValue !== "") {
        value6.value = inputValue;
        inputP6.setAttribute("hidden","");
        inputbtn6.setAttribute("hidden","");
      resultP6.innerHTML = "Post 6 Selected"+" "+inputValue;
      totalP.value = selectPost.value;
    } else {
        resultP6.innerText = "Input a valid Post Number";
    }
  }

  inputbtn7.onclick = function() {
    const inputValue = inputP7.value.trim();
    if (!isNaN(inputValue) && inputValue !== "") {
        value7.value = inputValue;
        inputP7.setAttribute("hidden","");
        inputbtn7.setAttribute("hidden","");
      resultP7.innerHTML = "Post 7 Selected"+" "+inputValue;
      totalP.value = selectPost.value;
    } else {
        resultP7.innerText = "Input a valid Post Number";
    }
  }

  inputbtn8.onclick = function() {
    const inputValue = inputP8.value.trim();
    if (!isNaN(inputValue) && inputValue !== "") {
        value8.value = inputValue;
        inputP8.setAttribute("hidden","");
        inputbtn8.setAttribute("hidden","");
      resultP8.innerHTML = "Post 8 Selected"+" "+inputValue;
      totalP.value = selectPost.value;
    } else {
        resultP8.innerText = "Input a valid Post Number";
    }
  }

  inputbtn9.onclick = function() {
    const inputValue = inputP9.value.trim();
    if (!isNaN(inputValue) && inputValue !== "") {
        value9.value = inputValue;
        inputP9.setAttribute("hidden","");
        inputbtn9.setAttribute("hidden","");
      resultP9.innerHTML = "Post 9 Selected"+" "+inputValue;
      totalP.value = selectPost.value;
    } else {
        resultP9.innerText = "Input a valid Post Number";
    }
  }

  let readybtn = document.getElementById("getLS");
  let startbtn = document.getElementById("setLS");
  let clearbtn = document.getElementById("clearLS");
  let clickresult = document.getElementById("clickresult");


  readybtn.onclick = function(){
    let selectP = document.getElementById("totalpost").value;
    let pvalue1 = value1.value;
    let pvalue2 = value2.value;
    let pvalue3 = value3.value;
    let pvalue4 = value4.value;
    let pvalue5 = value5.value;
    let pvalue6 = value6.value;
    let pvalue7 = value7.value;
    let pvalue8 = value8.value;
    let pvalue9 = value9.value;


    if (selectP == 0){
      clickresult.innerHTML = "You Are Not Selected Any Post";
    }

    if(selectP == 1){
        if (pvalue1 !== "") {
          clickresult.innerHTML = "Ready For Start";
        } else {
          clickresult.innerHTML = "Post Number Not Found";
        } 
    }


    if(selectP == 2){
      if (pvalue1 !== "" && pvalue2 !== "") {
        clickresult.innerHTML = "Ready For Start";
      } else {
        clickresult.innerHTML = "Post Number Not Found";
      }
    }


    if(selectP == 3){
      if (pvalue1 !== ""  && pvalue2 !== "" && pvalue3 !== "") {
        clickresult.innerHTML = "Ready For Start";
      } else {
        clickresult.innerHTML = "Post Number Not Found";
      }
    }


    if(selectP == 4){
      if (pvalue1 !== ""  && pvalue2 !== "" && pvalue3 !== "" && pvalue4 !== "") {
        clickresult.innerHTML = "Ready For Start";
      } else {
        clickresult.innerHTML = "Post Number Not Found";
      }
    }


    if(selectP == 5){
      if (pvalue1 !== ""  && pvalue2 !== "" && pvalue3 !== "" && pvalue4 !== "" && pvalue5 !== "") {
        clickresult.innerHTML = "Ready For Start";
      } else {
        clickresult.innerHTML = "Post Number Not Found";
      }
    }


    if(selectP == 6){
      if (pvalue1 !== ""  && pvalue2 !== "" && pvalue3 !== "" && pvalue4 !== "" && pvalue5 !== "" && pvalue6 !== "") {
        clickresult.innerHTML = "Ready For Start";
      } else {
        clickresult.innerHTML = "Post Number Not Found";
      }
    }


    if(selectP == 7){
      if (pvalue1 !== ""  && pvalue2 !== "" && pvalue3 !== "" && pvalue4 !== "" && pvalue5 !== "" && pvalue6 !== "" && pvalue7 !== "") {
        clickresult.innerHTML = "Ready For Start";
      } else {
        clickresult.innerHTML = "Post Number Not Found";
      }
    }


    if(selectP == 8){
      if (pvalue1 !== ""  && pvalue2 !== "" && pvalue3 !== "" && pvalue4 !== "" && pvalue5 !== "" && pvalue6 !== "" && pvalue7 !== "" && pvalue8 !== "") {
        clickresult.innerHTML = "Ready For Start";
      } else {
        clickresult.innerHTML = "Post Number Not Found";
      }
    }


    if(selectP == 9){
      if (pvalue1 !== ""  && pvalue2 !== "" && pvalue3 !== "" && pvalue4 !== "" && pvalue5 !== "" && pvalue6 !== "" && pvalue7 !== "" && pvalue8 !== "" && pvalue9 !== "") {
        clickresult.innerHTML = "Ready For Start";
      } else {
        clickresult.innerHTML = "Post Number Not Found";
      }
    }
}


startbtn.onclick = function(){

  let selectP = document.getElementById("totalpost").value;
  let pvalue1 = value1.value;
  let pvalue2 = value2.value;
  let pvalue3 = value3.value;
  let pvalue4 = value4.value;
  let pvalue5 = value5.value;
  let pvalue6 = value6.value;
  let pvalue7 = value7.value;
  let pvalue8 = value8.value;
  let pvalue9 = value9.value;

  let cntainer = document.getElementById("container");
  let started = document.getElementById("starting");


  if (selectP == 0){
    clickresult.innerHTML = "You Are Not Selected Any Post";
  }

  if(selectP == 1){
    if (pvalue1 !== "") {
      started.style.display = "block";
      cntainer.style.display = "none";
    } else {
      clickresult.innerHTML = "Please Ready Your Post";
    } 
  }

  if(selectP == 2){
    if (pvalue1 !== "" && pvalue2 !== "") {
      started.style.display = "block";
      cntainer.style.display = "none";
    } else {
      clickresult.innerHTML = "Please Ready Your Post";
    } 
  }

  if(selectP == 3){
    if (pvalue1 !== "" && pvalue2 !== "" && pvalue3 !== "") {
      started.style.display = "block";
      cntainer.style.display = "none";
    } else {
      clickresult.innerHTML = "Please Ready Your Post";
    } 
  }

  if(selectP == 4){
    if (pvalue1 !== "" && pvalue2 !== "" && pvalue3 !== "" && pvalue4 !== "") {
      started.style.display = "block";
      cntainer.style.display = "none";
    } else {
      clickresult.innerHTML = "Please Ready Your Post";
    } 
  }

  if(selectP == 5){
    if (pvalue1 !== "" && pvalue2 !== "" && pvalue3 !== "" && pvalue4 !== "" && pvalue5 !== "") {
      started.style.display = "block";
      cntainer.style.display = "none";
    } else {
      clickresult.innerHTML = "Please Ready Your Post";
    } 
  }

  if(selectP == 6){
    if (pvalue1 !== "" && pvalue2 !== "" && pvalue3 !== "" && pvalue4 !== "" && pvalue5 !== "" && pvalue6 !== "") {
      started.style.display = "block";
      cntainer.style.display = "none";
    } else {
      clickresult.innerHTML = "Please Ready Your Post";
    } 
  }

  if(selectP == 7){
    if (pvalue1 !== "" && pvalue2 !== "" && pvalue3 !== "" && pvalue4 !== "" && pvalue5 !== "" && pvalue6 !== "" && pvalue7 !== "") {
      started.style.display = "block";
      cntainer.style.display = "none";
    } else {
      clickresult.innerHTML = "Please Ready Your Post";
    } 
  }

  if(selectP == 8){
    if (pvalue1 !== "" && pvalue2 !== "" && pvalue3 !== "" && pvalue4 !== "" && pvalue5 !== "" && pvalue6 !== "" && pvalue7 !== "" && pvalue8 !== "") {
      started.style.display = "block";
      cntainer.style.display = "none";
    } else {
      clickresult.innerHTML = "Please Ready Your Post";
    } 
  }

  if(selectP == 9){
    if (pvalue1 !== "" && pvalue2 !== "" && pvalue3 !== "" && pvalue4 !== "" && pvalue5 !== "" && pvalue6 !== "" && pvalue7 !== "" && pvalue8 !== "" && pvalue9 !== "") {
      started.style.display = "block";
      cntainer.style.display = "none";
    } else {
      clickresult.innerHTML = "Please Ready Your Post";
    } 
  }

}

clearbtn.onclick = function(){
  clickresult.innerHTML = "Data Cleared"
}