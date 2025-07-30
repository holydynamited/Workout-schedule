



let workoutInfo = [{

  
  
  id: "ex-12345",
  name: "Push-ups",
  sets: 3,
  reps: 15,
  
},
{
  id: "ex-12346",
  name: "Pull-ups",
  sets: 4,
  reps: 12,
},
{
  id: "ex-123457",
  name: "Dips",
  sets: 3,
  reps: 10,
}
];


const excerciceBlock = document.querySelector('.js-excercice-block');

function renderExcercice() {
  let html = '';

  workoutInfo.forEach((value, i) => {
    const { id, name, sets, reps } = value;
    html += ` <div class="excercise-added ">
     
        <p class="excercise-name">${name}</p>
        <p class="excercise-sets">Sets<span>:${sets}</span></p>
        <p class="excercise-reps">Reps <span>:${reps}</span></p>
        <button class="excercise-delete-button js-delete">Delete</button>
        
      </div>
    `;
  });
  
  excerciceBlock.innerHTML = html;
  
   document.querySelectorAll('.js-delete').forEach((btn, i) => {
    btn.addEventListener('click', () => {
      workoutInfo.splice(i, 1);
      renderExcercice();
    });
  });
}
renderExcercice();