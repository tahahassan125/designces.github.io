// Get the elements
var openFormButtons = document.getElementsByClassName('openFormBtn');
var popupForm = document.getElementById('popupForm');
var closeFormBtn = document.getElementById('closeFormBtn');

// Add event listener to each button
for (var i = 0; i < openFormButtons.length; i++) {
    openFormButtons[i].onclick = function() {
        popupForm.style.display = 'block';
        //popupForm.style.top = this.getBoundingClientRect().bottom + 'px';
    };
}

// Close the popup when the "X" is clicked
closeFormBtn.onclick = function() {
    popupForm.style.display = 'none';
};

// Close the popup when clicking outside of it
window.onclick = function(event) {
    if (event.target === popupForm) {
        popupForm.style.display = 'none';
    }
};




