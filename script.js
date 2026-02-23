

// 1. The Modal Function
function openEventModal(title, image, description, date, category) {
    // Fill the modal with data - IDs must match your HTML exactly
    document.getElementById('eventTitle').innerText = title;
    document.getElementById('eventImage').src = image;
    document.getElementById('eventDescription').innerText = description;
    document.getElementById('eventDate').innerText = date;
    document.getElementById('eventCategory').innerText = category;

    // Show the Modal using Bootstrap's built-in command
    var modalElement = document.getElementById('eventModal');
    var myModal = new bootstrap.Modal(modalElement);
    myModal.show();
}
// Function to open the Announcements Modal
function openAnnouncementsModal() {
    var announceModal = new bootstrap.Modal(document.getElementById('announcementsModal'));
    announceModal.show();
}
const searchBtn = document.querySelector('.btn-success') || document.querySelector('button.btn-secondary'); // Adjust selector to your specific search button
const searchInput = document.querySelector('input[placeholder="Search events..."]');

if (searchBtn && searchInput) {
    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query) {
            // Redirects to events page with the search term as a URL parameter
            window.location.href = `events.html?search=${encodeURIComponent(query)}`;
        }
    });
}