



let workoutInfo = {
  monday: [],
  tuesday: [],
  wednesday: [],
  thursday: [],
  friday: [],
  saturday: [],
  sunday: []
};




const excerciseBlock = document.querySelector('.js-excercise-block');
const nameInput = document.querySelector('.js-name-input');
const setsInput = document.querySelector('.js-sets-input');
const repsInput = document.querySelector('.js-reps-input');

let currentDay = 'monday';


function renderExcercise() {
  
  let html = '';

  workoutInfo[currentDay].forEach((value, i) => {
    const {  name, sets, reps } = value;
    html += ` <div class="excercise-added ">
     
        <p class="excercise-name">${name}</p>
        <p class="excercise-sets">Sets<span>:${sets}</span></p>
        <p class="excercise-reps">Reps <span>:${reps}</span></p>
        <button class="excercise-delete-button js-delete">Delete</button>
        
      </div>
    `;
  });

  saveToLocalStorage();
  
  excerciseBlock.innerHTML = html;
  
   document.querySelectorAll('.js-delete').forEach((btn, i) => {
    btn.addEventListener('click', () => {
      workoutInfo[currentDay].splice(i, 1);
       saveToLocalStorage();
      renderExcercise();
    });
  });
}

function addExcercise() {
  const name = nameInput.value;
  const sets = setsInput.value;
  const reps = repsInput.value;

  workoutInfo[currentDay].push({
    name,
    sets,
    reps
  });

  nameInput.value = '';
  setsInput.value = '';
  repsInput.value = '';

  renderExcercise();


}

function saveToLocalStorage() {
  localStorage.setItem('workoutInfo', JSON.stringify(workoutInfo));
}

function loadFromLocalStorage() {
  const data = localStorage.getItem('workoutInfo');
  if (data) {
    workoutInfo = JSON.parse(data);
  }
}




  document.querySelector('.js-add').addEventListener
  ('click', () => addExcercise());
  
  const buttons = document.querySelectorAll('.sidebar-button');
  
  buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const day = button.dataset.day;
    console.log(day); 

    currentDay = day;
    renderExcercise();
  });
});
 


loadFromLocalStorage();

renderExcercise();