const table = document.querySelector(".table");

// functions for all Events...
const createTable = (col, row) => {
  for (let x = 0; x < col; x++) {
    let tr = document.createElement("tr");
    table.append(tr);
    for (let y = 0; y < row; y++) {
      let td = document.createElement("td");
      td.className = `box-cell`;
      tr.append(td);
    }
  }
};

const drawPixel = () => {
  let boxes = document.querySelectorAll(".box-cell");
  boxes.forEach(box => {
    box.style.border = "none";
  });
};

const deleteTable = () => {
  table.innerHTML = "";
};

const clearFields = () => {
  document.querySelector("#height").value = "";
  document.querySelector("#width").value = "";
};

const zoom = (() => {
  let height = 10;
  let width = 10;

  function changeValue(h, w) {
    height += h;
    width += w;
  }

  return {
    add: function() {
      1;
      changeValue(2, 2);
    },
    minus: function() {
      changeValue(-2, -2);
    },
    reset: function() {
      height = 10;
      width = 10;
    },
    zoomOutIn: function() {
      let table = document.querySelectorAll("td");
      table.forEach(fig => {
        fig.style.height = `${height}px`;
        fig.style.width = `${width}px`;
      });
    }
  };
})();

// *Events for creating Table...
document.querySelector(".create-table").addEventListener("click", e => {
  e.preventDefault();
  const column = document.querySelector("#height").value;
  const row = document.querySelector("#width").value;
  createTable(column, row);
  clearFields();
});

// Event for coloring the table....
document.querySelector(".table").addEventListener("click", e => {
  const color = document.querySelector("#color").value;
  e.target = "td" ? (e.target.style.backgroundColor = color) : `#fff`;
});

//Event for clearing the Table.
document.querySelector(".delete").addEventListener("click", e => {
  e.preventDefault();
  deleteTable();
});

//*Events to clear color ....
document.querySelector(".clear").addEventListener("click", e => {
  e.preventDefault();
  let boxes = document.querySelectorAll(".box-cell");
  boxes.forEach(box => {
    box.style.backgroundColor = "#fff";
  });
});

//*Events to Draw pixel ....
document.querySelector(".draw").addEventListener("click", e => {
  e.preventDefault();
  drawPixel();
});

const zoomIn = document.querySelector(".zoom-in");
const zoomOut = document.querySelector(".zoom-out");
const reset = document.querySelector(".reset");

zoomOut.addEventListener("click", function() {
  zoom.add();
  zoom.zoomOutIn();
});

zoomIn.addEventListener("click", () => {
  zoom.minus();
  zoom.zoomOutIn();
});

reset.addEventListener("click", () => {
  zoom.reset();
  zoom.zoomOutIn();
});
