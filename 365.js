document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");

  const svgImagesByColor = {
    c1: [
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/6629582bd2c68e1098c7a841_c1-1.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/6629582a5e138c178c60e8b8_c1-2.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/6629582aab4ee3b5267d2845_c1-3.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/6629582b178d6106b56b9349_c1-4.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/6629582ccf5e6dd363f844aa_c1-5.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/6629582bd74b360a4b6eb764_c1-6.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/6629582c5d9995fec183ad20_c1-7.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/6629582c9b84e2a7d666fad2_c1-8.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/6629582b6014bebdb24ca1e0_c1-9.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/6629582bd2c68e1098c7a909_c1-10.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/6629582c4fda3caf12eed466_c1-11.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/6629582c583d39cf7d066d04_c1-12.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/6629582bc1c2a26e15c41f65_c1-13.svg",
    ],
    c2: [
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662958225815855ba70d16de_c2-1.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/66295824322bf7597770c874_c2-2.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/66295828c888ef80e0d5800c_c2-3.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/66295828ad20ff7934576280_c2-4.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/6629582493e87221098a46b6_c2-5.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/66295824178d6106b56b8c3d_c2-6.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/66295829ad20ff793457630a_c2-7.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/66295829339a4598f7abd6fa_c2-8.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662958285d9995fec183a9ab_c2-9.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/6629582c6fc0ce024c0deb12_c2-10.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/6629582824f7e8040a025c09_c2-11.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/66295828f528d79e5157b6e6_c2-12.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/6629582b4ba58ccdee3fef47_c2-13.svg",
    ],
    c3: [
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/66295822d5bdac229cc59b21_c3-1.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/6629582330e4c9d83db2f73e_c3-2.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/66295822176f45050eb7f9c8_c3-3.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/66295823f528d79e5157b4d2_c3-4.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/66295822e1544585ca0ed06b_c3-5.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/66295822a5e6caee42930e3e_c3-6.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662958224ba58ccdee3fe924_c3-7.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/66295829322bf7597770ca7b_c3-8.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662958245815855ba70d1805_c3-9.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/66295824c1c2a26e15c41bc0_c3-10.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/66295823e9e3744b2b71b706_c3-11.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/66295823067f07a80937147f_c3-12.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/66295823c5df9507d4369ed0_c3-13.svg",
    ],
    c4: [
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/6629581cfac50229e26ab655_c4-1.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/6629581c23d574a38a72398d_c4-2.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/6629581cdc830b22ecd7452c_c4-3.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/6629581cd93e82c7df12d993_c4-4.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/6629581d36941613092138c5_c4-5.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/6629581e24f7e8040a025197_c4-6.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/6629581e4fda3caf12eec7fd_c4-7.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/6629581e5815855ba70d1214_c4-8.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/6629581f9dc148656d2a3f75_c4-9.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/6629581e2cb2f0fa8103924a_c4-10.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/6629581fa9b843fd077d4ebb_c4-11.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/6629581f602404b72f7e1670_c4-12.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/6629581fbaf2aa858a7b8ebe_c4-13.svg",
    ],
    c5: [
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/66295818c5df9507d4369744_c5-1.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/66295818d74b360a4b6eacd5_c5-2.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662958183e6d5b0d70057d71_c5-3.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/6629581a3e6d5b0d70057f67_c5-4.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/66295819cf5e6dd363f838fe_c5-5.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/66295819bec26402daeab052_c5-6.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/6629581a8a77a0403010025e_c5-7.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/6629581a438cbbd40bfa0dcb_c5-8.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/6629581afac50229e26ab51f_c5-9.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/6629581ad93e82c7df12d818_c5-10.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/6629581a5815855ba70d0fb8_c5-11.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/6629581cc098d4d5c6a773b6_c5-12.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/6629581cd44724113bdc04eb_c5-13.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/6629581cbec26402daeab1c7_c5-14.svg",
    ],
    c6: [
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/66295818c5df9507d4369744_c5-1.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/66295818d74b360a4b6eacd5_c5-2.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662958183e6d5b0d70057d71_c5-3.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/6629581a3e6d5b0d70057f67_c5-4.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/66295819cf5e6dd363f838fe_c5-5.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/66295819bec26402daeab052_c5-6.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/6629581a8a77a0403010025e_c5-7.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/6629581a438cbbd40bfa0dcb_c5-8.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/6629581afac50229e26ab51f_c5-9.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/6629581ad93e82c7df12d818_c5-10.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/6629581a5815855ba70d0fb8_c5-11.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/6629581cc098d4d5c6a773b6_c5-12.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/6629581cd44724113bdc04eb_c5-13.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/6629581cbec26402daeab1c7_c5-14.svg",
    ],
  };

  const gridContainer = document.querySelector(".grid-pattern");
  const rowInput = document.getElementById("row-input");
  const colInput = document.getElementById("col-input");
  const regenerateButton = document.querySelector(".regener");
  const colorElements = document.querySelectorAll(".color");

  const colorArrangement = [
    "random",
    "alternate-columns",
    "alternate-rows",
    "diagonal",
    "zigzag",
    "radial",
    "diamond",
  ];
  const dropdownList = document.querySelector(".dropdown-list");
  //   const dropdownOptions = document.querySelectorAll(".color-op");

  let selectedArrangement = "radial";
  //   // Clear existing options

  colorArrangement.forEach((arrangement) => {
    const dropdownLink = document.createElement("a");
    dropdownLink.href = "#";
    dropdownLink.classList.add("color-op", "w-dropdown-link");
    dropdownLink.textContent =
      arrangement.charAt(0).toUpperCase() + arrangement.slice(1); // Capitalize the first letter
    dropdownLink.dataset.arrangement = arrangement; // Store the arrangement name in a data attribute
    dropdownList.appendChild(dropdownLink);

    // Add click event listener to each option
    dropdownLink.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default action
      selectedArrangement = event.target.getAttribute("data-arrangement");
      updateGrid();
    });
  });

  function generateGrid(rows, cols, selectedColors, arrangement) {
    gridContainer.innerHTML = ""; // Clear previous grid
    gridContainer.style.gridTemplateRows = `repeat(${rows}, 120px)`;
    gridContainer.style.gridTemplateColumns = `repeat(${cols}, 120px)`;

    for (let i = 0; i < rows * cols; i++) {
      const cell = document.createElement("div");
      cell.style.cssText =
        "width: 120px; height: 120px; display: flex; align-items: center; justify-content: center; cursor: pointer;";

      const colorKeys =
        selectedColors.length > 0
          ? selectedColors
          : Object.keys(svgImagesByColor);

      const randomColor = getColorByArrangement(
        arrangement,
        i,
        rows,
        cols,
        colorKeys
      );

      const svgArray = svgImagesByColor[randomColor];
      const randomIndex = Math.floor(Math.random() * svgArray.length);
      const svgUrl = svgArray[randomIndex];

      fetch(svgUrl)
        .then((response) => response.text())
        .then((svgData) => {
          const svgWrapper = document.createElement("div");
          svgWrapper.innerHTML = svgData;
          svgWrapper.querySelector("svg").setAttribute("height", "100%");
          svgWrapper.querySelector("svg").setAttribute("width", "100%");
          svgWrapper
            .querySelector("svg")
            .setAttribute("preserveAspectRatio", "none");
          cell.appendChild(svgWrapper);
          cell.addEventListener("click", function () {
            regenerateCell(cell, randomColor);
          });
          // Add right-click event listener
          cell.addEventListener("contextmenu", function (event) {
            event.preventDefault(); // Prevent the context menu from appearing
            cell.style.backgroundColor = "transparent"; // Change the cell's background color to white
            cell.innerHTML = ""; // Remove the cell's content
          });
        });
      gridContainer.appendChild(cell);
    }
  }

  function regenerateCell(cell, color) {
    const svgArray = svgImagesByColor[color];
    const randomIndex = Math.floor(Math.random() * svgArray.length);
    const svgUrl = svgArray[randomIndex];

    fetch(svgUrl)
      .then((response) => response.text())
      .then((svgData) => {
        cell.innerHTML = "";
        const svgWrapper = document.createElement("div");
        svgWrapper.innerHTML = svgData;
        svgWrapper.querySelector("svg").setAttribute("height", "100%");
        svgWrapper.querySelector("svg").setAttribute("width", "100%");
        svgWrapper
          .querySelector("svg")
          .setAttribute("preserveAspectRatio", "none");
        cell.appendChild(svgWrapper);
      });
  }

  function updateGrid() {
    const rows = parseInt(rowInput.value) || 3;
    const cols = parseInt(colInput.value) || 3;
    const selectedColors = Array.from(
      document.querySelectorAll(".color.active")
    ).map((el) => el.id);

    // console.log("color mode called : " + arrangement);
    // Check if the dropdown element exists
    const dropdownElement = document.querySelector("#w-dropdown-toggle-0 div");
    console.log("color mode called : " + selectedArrangement);

    generateGrid(rows, cols, selectedColors, selectedArrangement);
  }

  function handleColorSelection(event) {
    event.currentTarget.classList.toggle("active");

    // Find the child element with the class "color-active"
    const colorActiveElement =
      event.currentTarget.querySelector(".color-active");

    // Toggle the visibility of the "color-active" child element based on the "active" class
    if (event.currentTarget.classList.contains("active")) {
      colorActiveElement.style.display = "block"; // Show the child element
    } else {
      colorActiveElement.style.display = "none"; // Hide the child element
    }
    updateGrid();
  }

  colorElements.forEach((color) => {
    color.addEventListener("click", handleColorSelection);
  });

  rowInput.addEventListener("input", updateGrid);
  colInput.addEventListener("input", updateGrid);
  regenerateButton.addEventListener("click", updateGrid);

  rowInput.value = 3;
  colInput.value = 3;
  //   rowInput.addEventListener("input", updateGrid);
  //   colInput.addEventListener("input", updateGrid);

  updateGrid(); // Generate initial 3x3 grid

  function downloadGridAsImage() {
    html2canvas(gridContainer, { backgroundColor: null })
      .then((canvas) => {
        const image = canvas
          .toDataURL("image/png")
          .replace("image/png", "image/octet-stream");
        let link = document.createElement("a");
        link.download = "grid-image.png";
        link.href = image;
        link.click();
        link.remove();
      })
      .catch((err) => {
        console.error("Could not generate image", err);
      });
  }

  document
    .querySelector(".download-icon")
    .addEventListener("click", downloadGridAsImage);
});

//----------COLOR ARRANGEMENTs------------------------

function getRandomColor(colorKeys) {
  return colorKeys[Math.floor(Math.random() * colorKeys.length)];
}

function getAlternateColumnColor(i, cols, colorKeys) {
  const currentCol = i % cols;
  return colorKeys[currentCol % colorKeys.length];
}

function getAlternateRowColor(i, cols, colorKeys) {
  const currentRow = Math.floor(i / cols);
  return colorKeys[currentRow % colorKeys.length];
}
function getDiagonalColor(i, cols, colorKeys) {
  const currentDiagonal = Math.floor(i / cols) + (i % cols);
  return colorKeys[currentDiagonal % colorKeys.length];
}
function getZigZagColor(i, cols, colorKeys) {
  const currentRow = Math.floor(i / cols);
  const currentCol = i % cols;
  const zigZagIndex = currentRow % 2 === 0 ? currentCol : cols - currentCol - 1;
  return colorKeys[zigZagIndex % colorKeys.length];
}
function getRadialColor(i, rows, cols, colorKeys) {
  const centerX = Math.floor(cols / 2);
  const centerY = Math.floor(rows / 2);

  const x = i % cols;
  const y = Math.floor(i / cols);

  const dx = Math.abs(x - centerX);
  const dy = Math.abs(y - centerY);

  const distance = Math.sqrt(dx * dx + dy * dy);
  const maxDistance = Math.sqrt(centerX * centerX + centerY * centerY);

  const colorIndex = Math.floor(
    (distance / maxDistance) * (colorKeys.length - 1)
  );
  return colorKeys[colorIndex];
}
function getDiamondColor(i, rows, cols, colorKeys) {
  const centerX = Math.floor(cols / 2);
  const centerY = Math.floor(rows / 2);

  const x = i % cols;
  const y = Math.floor(i / cols);

  const dx = Math.abs(x - centerX);
  const dy = Math.abs(y - centerY);

  // Use the Chebyshev distance to create a diamond effect
  const distance = Math.max(dx, dy);
  const maxDistance = Math.max(centerX, centerY);

  const colorIndex = Math.floor(
    (distance / maxDistance) * (colorKeys.length - 1)
  );
  return colorKeys[colorIndex];
}

function getColorByArrangement(arrangement, i, rows, cols, colorKeys) {
  switch (arrangement) {
    case "random":
      return getRandomColor(colorKeys);
    case "alternate-columns":
      return getAlternateColumnColor(i, cols, colorKeys);
    case "alternate-rows":
      return getAlternateRowColor(i, cols, colorKeys);
    case "diagonal":
      return getDiagonalColor(i, cols, colorKeys);
    case "zigzag":
      return getZigZagColor(i, cols, colorKeys);
    case "radial":
      return getRadialColor(i, rows, cols, colorKeys);
    case "diamond":
      return getDiamondColor(i, rows, cols, colorKeys);
    default:
      return getRandomColor(colorKeys);
  }
}

// ------------for row/col button ----------------------

function incrementValue(e) {
  e.preventDefault();
  var fieldName = $(e.target).data("field");
  var input = document.querySelector("input[name=" + fieldName + "]");
  var currentVal = parseInt(input.value, 10);

  if (!isNaN(currentVal)) {
    input.value = currentVal + 1;
    input.dispatchEvent(new Event("input")); // Trigger input event to update the grid
  } else {
    input.value = 0;
  }
}

function decrementValue(e) {
  e.preventDefault();
  var fieldName = $(e.target).data("field");
  var input = document.querySelector("input[name=" + fieldName + "]");
  var currentVal = parseInt(input.value, 10);

  if (!isNaN(currentVal) && currentVal > 0) {
    input.value = currentVal - 1;
    input.dispatchEvent(new Event("input")); // Trigger input event to update the grid
  } else {
    input.value = 0;
  }
}

$(".input-group").on("click", ".button-plus", function (e) {
  incrementValue(e);
});

$(".input-group").on("click", ".button-minus", function (e) {
  decrementValue(e);
});
