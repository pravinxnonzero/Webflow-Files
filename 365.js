document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");

  const svgImagesByColor = {
    c1: [
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662f43daeeded5c12168eefd_c1%2028.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662f43dad9bd1a1455f3d3cb_c1%2036.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662f43da7d19acb80a433046_c1%2023.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662f43da9dc3be3390004f01_c1%2022.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662f43da578bf59635ef5450_c1%2026.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662f43da96448b5ba168ae23_c1%2025.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662f43da210174c495f700d3_c1%2024.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662f43da887570941dcb6e46_c1%2035.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662f43da80f366064f0b1279_c1%2034.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662f43da0fa83b0239a3649c_c1%2032.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662f43da8a6b992f28e37545_c1%2031.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662f43da023057804e1da5cb_c1%2027.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662f43da179c941f7472e344_c1%2030.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662f43da96695bb401659972_c1%2033.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662f43da2af57775869f17e1_c1%2029.svg",
    ],
    c2: [
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662f44b7179c941f7473b1db_c2%2078.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662f44b7c83cf1a6751a0be9_c2%2069.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662f44b7a812082265ae9692_c2%2074.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662f44b7c83cf1a6751a0bdc_c2%2081.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662f44b7c83cf1a6751a0bc2_c2%2075.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662f44b78f5725a4b0d4b4a6_c2%2082.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662f44b745d3860529b81f0e_c2%2072.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662f44b78594ae917a35c53c_c2%2070.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662f44b7c91cc7a39f311a34_c2%2077.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662f44b78693f415a86886a1_c2%2080.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662f44b7f049d4c6c9284549_c2%2071.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662f44b7cf79487c6d7eccf3_c2%2076.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662f44b77d19acb80a43e4af_c2%2067.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662f44b7d9bd1a1455f494a7_c2%2068.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662f44b71e5bcb87de1cb8fa_c2%2073.svg",
    ],
    c3: [
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
    c4: [
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662b51af2d06b485668cc7cd_c4%2020.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662b51aeb4e64386001daa3b_c4%2019.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662b51aeb4e64386001da9fc_c4%2014.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662b51aea3ded1e03b65ad6c_c4%206.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662b51aeacd9a73cb4ae7df0_c4%2018.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662b51ae9096b3ecea166f11_c4%2013.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662b51ae39ceef7e9742d2e0_c4%2010.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662b51ae1a38efacdbf7c67f_c4%208.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662b51ae7bff26120f2ca923_c4%2015.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662b51ae97da13889dc3a9b7_c4%2017.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662b51ae110574b337068874_c4%207.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662b51aef89fbabb6286ae89_c4%2016.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662b51aec8162147b92292f1_c4%209.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662b51aede847ada02ce8c44_c4%2012.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662b51ae961466f0f09e558a_c4%2011.svg",
    ],
    c5: [
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662f474d8f5725a4b0d68b40_c5%2092.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662f474dac9ffe8a4e1ec7ff_c5%2096.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662f474df049d4c6c92a9f0d_c5%2085.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662f474df049d4c6c92a9f07_c5%2084.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662f474d5afe7ca36e27938a_c5%2097.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662f474daeab63f51e123bb2_c5%2091.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662f474d1e5bcb87de1f4023_c5%2086.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662f474d6c3222339822ed95_c5%2083.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662f474d3b72d65bdb888947_c5%2087.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662f474d8a6b992f28e63d78_c5%2094.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662f474df3aaad6dfb1706a3_c5%2090.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662f474dd03bc52926018d2c_c5%2093.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662f474df2f2ec313a3f7f7d_c5%2095.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662f47d56c322233982348ae_Asset%2089.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662f47d5c91cc7a39f3397f5_Asset%2088.svg",
    ],
    c6: [
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662f47d12fc514e610709e50_c6%20(2).svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662f47d152df5b9d6f7bc650_c6%20(1).svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662f47d11e5bcb87de1fb958_c6%20(3).svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662f47c9f630506fa9b74168_c6%2047.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662f47c81b5c37bd12c05976_c6%2040.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662f47c86ac00ea31c15296b_c6%2051.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662f47c8122fa6e1fb82740d_c6%2050.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662f47c8fc4b4d4229f596ae_c6%2049.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662f47c822b87f99865070fa_c6%2043.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662f47c81aefcc3603b46010_c6%2044.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662f47c80d51b3d2d2b4cdbe_c6%2042.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662f47c83b72d65bdb88e59e_c6%2048.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662f47c89f187d3886b076d6_c6%2045.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662f47c818078dac5c1dda87_c6%2046.svg",
      "https://uploads-ssl.webflow.com/64356a21efff2ba4f4579384/662f47c87412ee992b97d1bb_c6%2041.svg",
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

        // Add looping animation
        const animationImages = [];
        for (let j = 0; j < 5; j++) {
            const animationIndex = Math.floor(Math.random() * svgArray.length);
            const animationSvgUrl = svgArray[animationIndex];
            animationImages.push(animationSvgUrl);
        }

        let animationIndex = 0;
        const animateCell = () => {
            if (animationIndex >= animationImages.length) {
                // Stop animation and show final image
                const finalSvgUrl = svgArray[randomIndex];
                img.src = finalSvgUrl;
                cell.appendChild(img);
                cell.addEventListener("click", function () {
                    regenerateCell(cell, randomColor);
                });
                cell.addEventListener("contextmenu", function (event) {
                    event.preventDefault();
                    cell.style.backgroundColor = "transparent";
                    cell.innerHTML = "";
                });
                return;
            }

            const animationSvgUrl = animationImages[animationIndex];
            img.src = animationSvgUrl;
            animationIndex++;
            setTimeout(animateCell, 200); // Adjust the delay between animation frames if needed
        };

        const img = document.createElement("img");
        img.crossOrigin = "anonymous";
        img.style.height = "100%";
        img.style.width = "100%";

        animateCell();

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
            const img = document.createElement("img");
            img.crossOrigin = "anonymous"; // This needs server support
            img.src = svgUrl;
            img.style.width = "100%";
            img.style.height = "100%";
            cell.innerHTML = "";
            cell.appendChild(img);

            // Add animation
            const animationInterval = setInterval(() => {
                const newIndex = Math.floor(Math.random() * svgArray.length);
                const newSvgUrl = svgArray[newIndex];
                img.src = newSvgUrl;
            }, 100);

            // Stop animation after 5-8 iterations
            const iterations = Math.floor(Math.random() * 4) + 5;
            setTimeout(() => {
                clearInterval(animationInterval);
                img.src = svgUrl;
            }, iterations * 100);
        });
}

function startAnimation() {
    let animationInterval;
    let animationDuration = 10000; // 10 seconds

    function animateGrid() {
        // Replace items with random items in random patterns
        const gridItems = document.querySelectorAll(".grid-item");
        const randomColors = Array.from({ length: gridItems.length }, () => getRandomColor());
        const randomIndexes = getRandomIndexes(gridItems.length);

        gridItems.forEach((item, index) => {
            const randomIndex = randomIndexes[index];
            const randomColor = randomColors[randomIndex];
            regenerateCell(item, randomColor);
        });
    }

    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function getRandomIndexes(length) {
        const indexes = Array.from({ length }, (_, index) => index);
        for (let i = indexes.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [indexes[i], indexes[j]] = [indexes[j], indexes[i]];
        }
        return indexes;
    }

    function handleKeyDown(event) {
        if (event.ctrlKey && event.key === "y") {
            animationInterval = setInterval(animateGrid, animationDuration);
        }
    }

    document.addEventListener("keydown", handleKeyDown);
}

startAnimation();

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

//   function downloadGridAsImage() {
//     html2canvas(gridContainer, { backgroundColor: null })
//       .then((canvas) => {
//         const image = canvas
//           .toDataURL("image/png")
//           .replace("image/png", "image/octet-stream");
//         let link = document.createElement("a");
//         link.download = "grid-image.png";
//         link.href = image;
//         link.click();
//         link.remove();
//       })
//       .catch((err) => {
//         console.error("Could not generate image", err);
//       });
//   }

// function downloadGridAsImage() {
//     domtoimage.toPng(gridContainer)
//         .then(function (dataUrl) {
//             var link = document.createElement('a');
//             link.download = 'grid-image.png';
//             link.href = dataUrl;
//             link.click();
//             link.remove();
//         })
//         .catch(function (error) {
//             console.error('Could not generate image', error);
//         });
// }


//   document
//     .querySelector(".download-icon")
//     .addEventListener("click", downloadGridAsImage);
// });


document.querySelector('.download-icon').addEventListener('click', downloadImage);

function downloadImage() {
    const element = document.querySelector('.grid-pattern'); // Your grid container
    const scale = 2;  // Scale factor
    const originalWidth = element.offsetWidth;
    const originalHeight = element.offsetHeight;

    domtoimage.toPng(element, {
        width: originalWidth * scale,
        height: originalHeight * scale,
        style: {
            transform: `scale(${scale})`,
            transformOrigin: 'top left'
        }
    })
    .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'scaled-grid-image.png';
        link.href = dataUrl;
        link.click();
        link.remove();
    })
    .catch(function (error) {
        console.error('Could not capture image', error);
    });
}
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


// ---- Update Color Mode Label as per selection ----
document.addEventListener("DOMContentLoaded", function () {
    const dropdownLinks = document.querySelectorAll('.color-op');
    const dropdownLabel = document.getElementById('to-upd');  // Use the new ID to select the label

    dropdownLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default anchor behavior

            const selectedArrangement = event.target.textContent;  // Get the text from the clicked link
            dropdownLabel.textContent = selectedArrangement;  // Update the dropdown label with this text

            console.log("Color mode selected: " + selectedArrangement); // Optional: log the selected color mode to the console
        });
    });
});
