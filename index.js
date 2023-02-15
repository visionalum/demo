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
  let dropable = e.target;
  if (!dropable.classList.contains('dropable')) return;
  
  e.dataTransfer.getDate()
}

function congatulation(e){
  document.getElementById('kallu').style.opacity = 0;
  document.getE
}

function handleDragOver(e){
  data = e.dataTransfer.getData('application/json');
  e.target.classList.contains('right-home') ? console.log("right") : console.log("wrong")
  if(e.target.classList.contains('right-home')){
    
    setInterval(congatulation,300)
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
  dropable.addEventListener('dragover', handleDragOver);
});