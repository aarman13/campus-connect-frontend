// Function to filter events based on the button clicked
function filterEvents(category) {
    // 1. Update the "Active" button styling
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.currentTarget.classList.add('active');

    // 2. Hide or Show the cards based on data-category
    const cards = document.querySelectorAll('.event-card-item');
    
    cards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (category === 'All' || cardCategory === category) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
const eventSearch = document.getElementById('eventSearch'); // Ensure your input has id="eventSearch"

if (eventSearch) {
    eventSearch.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const cards = document.querySelectorAll('.event-card-item');

        cards.forEach(card => {
            const title = card.querySelector('.card-title').innerText.toLowerCase();
            if (title.includes(term)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
}