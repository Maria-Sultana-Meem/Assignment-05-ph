
//common function
function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

// ........heart count........
let Count = 0;
const countDisplay = document.querySelectorAll('.heartClick');
for (const counts of countDisplay) {
     counts.addEventListener('click', function (){
    Count++;
    getElement('heart').innerText = Count;
})
}


