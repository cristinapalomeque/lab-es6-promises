// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
/* getInstruction(
  "mashedPotatoes",
  0,
  (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  1,
  (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  2,
  (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  3,
  (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  4,
  (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  },
  (error) => console.log(error)
);
*/

// Iteration 1 - using callbacks
// ...
getInstruction("mashedPotatoes", 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
  getInstruction(
    "mashedPotatoes",
    1,
    (step2) => {
      document.querySelector(
        "#mashedPotatoes"
      ).innerHTML += `<li>${step2}</li>`;
      // demano 3
      getInstruction(
        "mashedPotatoes",
        2,
        (step3) => {
          document.querySelector(
            "#mashedPotatoes"
          ).innerHTML += `<li>${step3}</li>`;
          getInstruction(
            "mashedPotatoes",
            3,
            (step4) => {
              document.querySelector(
                "#mashedPotatoes"
              ).innerHTML += `<li>${step4}</li>`;
              getInstruction(
                "mashedPotatoes",
                4,
                (step5) => {
                  document.querySelector(
                    "#mashedPotatoes"
                  ).innerHTML += `<li>${step5}</li><li>Mashed potatoes are ready</li>`;
                  document
                    .querySelector("#mashedPotatoesImg")
                    .removeAttribute("hidden");
                },
                (error) => console.log(error)
              );
            },
            (error) => console.log(error)
          );
        },
        (error) => console.log(error)
      );
    },
    (error) => console.log(error)
  );
});

// Iteration 2 - using promises
// ...
obtainInstruction("steak", 0).then((step0) => {
  document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
  obtainInstruction("steak", 1).then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    obtainInstruction("steak", 2).then((step2) => {
      document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
      obtainInstruction("steak", 3).then((step3) => {
        document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
        obtainInstruction("steak", 4).then((step4) => {
          document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
          obtainInstruction("steak", 5).then((step5) => {
            document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
            obtainInstruction("steak", 6).then((step6) => {
              document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
              obtainInstruction("steak", 7).then((step7) => {
                document.querySelector(
                  "#steak"
                ).innerHTML += `<li>${step7}</li><li>Stake is ready</li>`;
              });
            });
          });
        });
      });
    });
  });
  document.querySelector("#steakImg").removeAttribute("hidden");
});
// ... Your code here

/*Melisa's code
const STEAK = "steak";
const steakArr = steak;
const steakOL = document.getElementById(STEAK);
const steakImg = document.getElementById("steakImg");

obtainInstruction(STEAK, 0);
then((step) => (steakOL.innerHTML += `<li>${step}</li>`));
then((step) => obtainInstruction(STEAK, 1));
then((step) => (steakOL.innterHTML += <li></li>));
*/
// Iteration 3 using async/await

async function makeBroccoli() {
  const broc = document.querySelector("#broccoli");
  for (let i = 0; i < 8; i++) {
    try {
      const step = await obtainInstruction("broccoli", i);
      broc.innerHTML += `<li>${step}</li>`;
    } catch (error) {
      console.log(error);
    }
  }
  document.querySelector("#broccoliImg").removeAttribute("hidden");
}

makeBroccoli();

// Bonus 2 - Promise all
// ...
const promeses = [];
for (let i = 0; i < 8; i++) {
  const step = obtainInstruction("brusselsSprouts", i);
  promeses.push(step);
}
const sprouts = document.querySelector("#brusselsSprouts");
Promise.all(promeses).then((steps) => {
  steps.forEach((step) => {
    sprouts.innerHTML += `<li>${step}</li>`;
  });
  sprouts.innerHTML += `<li>Brussel sprouts are ready!</li>`;
  document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
});
/*

//Melisa's version
const BRUSSELS = "brusselsSprouts";
const arrOfSteps = brusselsSprouts;
let arrOfPromises = [];
const brusselsSproutsOL = document.getElementById(BRUSSELS);
const brussImg = document.getElementById("brusselsSproutsImg");

for (let i = 0; i < arrOfSteps.length; i++) {
  arrOfPromises.push(obtainInstruction(BRUSSELS, i));
}

Promise.all(arrOfPromises)
  .then((steps) =>
    steps.forEach((step) => (brusselsSproutsOL.innerHTML += `<li>${step}</li>`))
  )
  .then(
    () =>
      (brusselsSproutsOL.innerHTML += `<li>Brussels sprouts are ready!</li>`)
  )
  .then(() => brussImg.removeAttribute("hidden"));


  Edu's version

  // Bonus 2 - Promise all
const step1 = obtainInstruction('brusselsSprouts', 0)
const step2 = obtainInstruction('brusselsSprouts', 1)
const step3 = obtainInstruction('brusselsSprouts', 2)
const step4 = obtainInstruction('brusselsSprouts', 3)
const step5 = obtainInstruction('brusselsSprouts', 4)
const step6 = obtainInstruction('brusselsSprouts', 5)
const step7 = obtainInstruction('brusselsSprouts', 6)
const step8 = obtainInstruction('brusselsSprouts', 7)
Promise.all([step1, step2, step3, step4, step5, step6, step7, step8]).then((step) => {
  step.forEach((stp) => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${stp}</li>`;
  })
  document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`;
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
});
*/
