



let workoutInfo = [{

  
  
 
  name: "Push-ups",
  sets: 3,
  reps: 15,
  
},
{
  
  name: "Pull-ups",
  sets: 4,
  reps: 12,
},
{
  
  name: "Dips",
  sets: 3,
  reps: 10,
}
];

const excerciseBlock = document.querySelector('.js-excercise-block');
const nameInput = document.querySelector('.js-name-input');
const setsInput = document.querySelector('.js-sets-input');
const repsInput = document.querySelector('.js-reps-input');


function renderExcercise() {
  
  let html = '';

  workoutInfo.forEach((value, i) => {
    const {  name, sets, reps } = value;
    html += ` <div class="excercise-added ">
     
        <p class="excercise-name">${name}</p>
        <p class="excercise-sets">Sets<span>:${sets}</span></p>
        <p class="excercise-reps">Reps <span>:${reps}</span></p>
        <button class="excercise-delete-button js-delete">Delete</button>
        
      </div>
    `;
  });
  
  excerciseBlock.innerHTML = html;
  
   document.querySelectorAll('.js-delete').forEach((btn, i) => {
    btn.addEventListener('click', () => {
      workoutInfo.splice(i, 1);
      renderExcercise();
    });
  });
}
document.querySelector('.js-add').addEventListener
  ('click', () => addExcercise());


function addExcercise() {
  const name = nameInput.value;
  const sets = setsInput.value;
  const reps = repsInput.value;

  workoutInfo.push({
    name,
    sets,
    reps
  });

  nameInput.value = '';
  setsInput.value = '';
  repsInput.value = '';

  renderExcercise();


}



renderExcercise();