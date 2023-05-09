// Step 1: Create a new <span> element
var spanElement = document.createElement('span');

// Step 2: Set attributes or properties for the <span> element
spanElement.textContent = 'Dynamic Span';
spanElement.style.color = 'red';

// Step 3: Append the <span> element to its parent's next sibling
var parentElement = document.getElementById('parent'); // Replace 'parent' with the actual parent element's ID
var nextSibling = parentElement.nextSibling;
nextSibling.appendChild(spanElement);
