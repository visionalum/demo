const make_draggable = (elements) => {
  elements.forEach((element) => {
    element.setAttribute("draggable", true);
  });
};
const make_dropable = (elements) => {
  elements.forEach((element)=>{
    element.setAttribute("dropable",true);
  })
}

const draggables = document.querySelectorAll(".draggable");
const dropables = document.querySelectorAll(".dropable");

make_draggable(draggables);
make_dropable(dropables);

function handleDragStart(e) {
  let draggable = e.target;
  if (!draggable.classList.contains('draggable')) return;

  console.log("DRAG START");
  this.style.opacity = '.5';
  this.style.backgroundColor = 'green';
  e.dataTransfer.setData('application/json', {dropable:true});
}

function handleDragEnd(e) {
  let draggable = e.target;
  if (!draggable.classList.contains('draggable')) return;

  console.log("DRAG END");
  this.style.opacity = '1';
  this.style.backgroundColor = 'transparent';
}
function handleDragEnter(e) {
  e.preventDefault();
  let dropable = e.target;
  if (!dropable.classList.contains('dropable')) return;

  console.log("DRAGE ENTER");
  this.style.scale = 1.5;
}
function handleDragLeave(e){
  e.preventDefault();
  let dropable = e.target;
  if (!dropable.classList.contains('dropable')) return;

  console.log("DRAGE LEAVE");
  this.style.scale = 1;
}
function handleDrop(e){
  console.log("drop");

  e.preventDefault();
  let isTargetDropable = e.target.classList.contains('dropable');
  if (!isTargetDropable) return;
  if (isTargetDropable) {
    let isTargetHome = e.target.classList.contains('right-home')
    isTargetHome ? console.log("right") : console.log("wrong")
    if(! isTargetHome){
      this.style.scale = 1;
    }
    if(isTargetHome){
      console.log("congratulation")
      congatulation();
    }

  }
  
}




draggables.forEach(function (item) {
  item.addEventListener('dragstart', handleDragStart);
  item.addEventListener('dragend', handleDragEnd);
});

dropables.forEach(dropable => {
  dropable.addEventListener('dragenter',handleDragEnter);
  dropable.addEventListener('dragleave', handleDragLeave);
  dropable.addEventListener('drop', handleDrop);
  dropable.addEventListener('dragover', (e)=>e.preventDefault());
});


function congatulation(e){
  document.querySelector('.congrats-container').style.visibility = 'visible';
}