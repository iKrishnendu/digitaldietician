var selectedBoxId = null;

function changeColor(boxId) {
    if (selectedBoxId) {
        document.getElementById(selectedBoxId).style.backgroundColor = 'rgb(255, 255, 255, 0.6)';
    }
    document.getElementById(boxId).style.backgroundColor = 'blue';
    selectedBoxId = boxId;
}

function scrollToContact() {
    // Get the target element using its id
    var contactSection = document.getElementById('contactSection');

    // Scroll to the target element
    contactSection.scrollIntoView({ behavior: 'smooth' });
}