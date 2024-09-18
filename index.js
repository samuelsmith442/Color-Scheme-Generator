document.getElementById('color-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents form submission

    const color = document.getElementById('color-picker').value.substring(1); // Remove the '#'
    const mode = document.getElementById('scheme-mode').value;

    // Make the request to the color API
    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}&count=5`)
        .then(response => response.json())
        .then(data => {
            const schemeContainer = document.getElementById('color-scheme');
            schemeContainer.innerHTML = ''; // Clear the previous content

            // Loop through the returned colors
            data.colors.forEach(color => {
                // Create a color container div
                const colorContainer = document.createElement('div');
                colorContainer.classList.add('color-container');

                // Create the color box div
                const colorBox = document.createElement('div');
                colorBox.classList.add('color-box');
                colorBox.style.backgroundColor = color.hex.value; // Set background color

                // Create a footer element for the hex value
                const footer = document.createElement('footer');
                footer.classList.add('color-footer');
                footer.innerHTML = `<p>${color.hex.value}</p>`; // Insert hex value in the footer

                // Append the color box and footer to the color container
                colorContainer.appendChild(colorBox);  // First append the color box
                colorContainer.appendChild(footer);    // Then append the footer

                // Add the color container to the main color-scheme div
                schemeContainer.appendChild(colorContainer);
            });
        });
});
