// Get the scrolling text element
const scrollingText = document.getElementById('scrollingText');

// Function to continuously add the first word after the last word
function addFirstWordAfterLastWord() {
    // Get the text content of the scrolling element
    let textContent = scrollingText.textContent;
    // Split the text content into an array of words
    let words = textContent.trim().split(' ');
    // Add the first word after the last word
    words.push(words[0]);
    // Join the words into a string and set it as the new text content
    scrollingText.textContent = words.join(' ');
}

// Call the function to add the first word after the last word continuously
setInterval(addFirstWordAfterLastWord, 2000); // Adjust the interval as needed (in milliseconds)
