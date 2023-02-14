const set_elements_dragable = (elements) => {
  elements.forEach((element) => {
    element.setAttribute("draggable", true);
  });
};

const draggables = document.querySelectorAll(".draggable");

set_elements_dragable(draggables);
