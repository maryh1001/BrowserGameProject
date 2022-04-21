// make it functional

// drop down list

// let topicsDropDown = document.getElementById("topicsDropDown")

// let  topicsOptions = {
//     "Dogs": src="/dogs.html",
//     "Sonic": "",
//     "Harry Potter": "",
//   }

// for (let key in topicsOptions) {
//     let option = document.createElement("option");
//     option.setAttribute('value', data[key]);

//     let optionText = document.createTextNode(key);
//     option.appendChild(optionText);

//     topicsDropDown.appendChild(option);
//   }

//make it have question populate when each topic is clicked
//when question is answered
//say right or wrong in some way
//change correct answer counter to reflect answer
//go to next question
//at the end state score and reset
//option to go to main page, redo or choose the other topics

//Dogs
let Questions = [
  {
    id: 0,
    q: "What is the largest dog?",
    a: [
      { text: "Lab", isCorrect: false },
      { text: "Aussie", isCorrect: false },
      { text: "Great Dane", isCorrect: true },
      { text: "Hound", isCorrect: false },
    ],
  },
  {
    id: 1,
    q: "Can dogs be trained with out treats?",
    a: [
      { text: "Only Treats", isCorrect: false, isSelected: false },
      { text: "Need E Collar", isCorrect: false },
      { text: "Use Toys too", isCorrect: false },
      { text: "Depends on the dog", isCorrect: true },
    ],
  },
  {
    id: 2,
    q: "What is the best name for a dog?",
    a: [
      { text: "Lassie", isCorrect: false },
      { text: "Daily", isCorrect: false },
      { text: "Chad", isCorrect: true },
      { text: "Sadie", isCorrect: false },
    ],
  },
];

function iterate(id) {
  let dogquestions = document.getElementById("dogquestions");
  dogquestions.innerText = Questions[id].q;
  
    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');
    const op4 = document.getElementById('op4');
  
  
    // Providing option text 
    op1.innerText = Questions[id].a[0].text;
    op2.innerText = Questions[id].a[1].text;
    op3.innerText = Questions[id].a[2].text;
    op4.innerText = Questions[id].a[3].text;
  
    // Providing the true or false value to the options
    op1.value = Questions[id].a[0].isCorrect;
    op2.value = Questions[id].a[1].isCorrect;
    op3.value = Questions[id].a[2].isCorrect;
    op4.value = Questions[id].a[3].isCorrect;

    var selected = "";

     // Show selection for op1
     op1.addEventListener("click", () => {
        op1.style.backgroundColor = "lightgoldenrodyellow";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightskyblue";
        selected = op1.value;
    })
  
    // Show selection for op2
    op2.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightgoldenrodyellow";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightskyblue";
        selected = op2.value;
    })
  
    // Show selection for op3
    op3.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightgoldenrodyellow";
        op4.style.backgroundColor = "lightskyblue";
        selected = op3.value;
    })
  
    // Show selection for op4
    op4.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightgoldenrodyellow";
        selected = op4.value;
    })
}

window.onload = ()=>{
    iterate(0)
}

//Sonic
//HP
