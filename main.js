document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const workItems = document.querySelectorAll('.work-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxContent = document.querySelector('.lightbox-content');
    const lightboxClose = document.querySelector('.lightbox-close');

    // Function to apply filter
    const applyFilter = (filterValue) => {
        workItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');
            if (filterValue === 'all' || filterValue === itemCategory) {
                item.classList.remove('hidden'); // Show item
            } else {
                item.classList.add('hidden'); // Hide item
            }
        });
    };

    // Check if elements exist before adding listeners
    if (filterButtons.length > 0) {
        // Apply initial filter based on the default active button
        const initialActiveButton = document.querySelector('.filter-btn.active');
        if (initialActiveButton) {
            const initialFilter = initialActiveButton.getAttribute('data-filter');
            // Apply filter immediately, even if workItems is empty initially
            applyFilter(initialFilter);
        }

        // Add click listeners to buttons
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filterValue = button.getAttribute('data-filter');

                // Update active button state
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                // Apply filter
                applyFilter(filterValue);
            });
        });
    } else {
        console.warn('Filter buttons not found on this page.');
    }

    // --- Lightbox Logic --- 
    if (lightbox && lightboxContent && lightboxClose) {
        // Open lightbox when any image item is clicked (photos, posters, banners, mock cheques, etc.)
        const lightboxImages = document.querySelectorAll('.work-item.image-item img');
        lightboxImages.forEach(img => {
            // img.style.cursor = 'pointer'; // Removed - Handled by CSS
            img.addEventListener('click', () => {
                lightboxContent.src = img.src; // Set the lightbox image source
                lightboxContent.alt = img.alt; // Set the lightbox image alt text
                lightbox.classList.remove('lightbox-hidden');
            });
        });

        // Close lightbox when the close button is clicked
        lightboxClose.addEventListener('click', () => {
            lightbox.classList.add('lightbox-hidden');
        });

        // Close lightbox when clicking outside the image
        lightbox.addEventListener('click', (e) => {
            // Check if the click is directly on the overlay, not the image itself
            if (e.target === lightbox) {
                lightbox.classList.add('lightbox-hidden');
            }
        });
    } else {
         console.warn('Lightbox elements not found on this page.');
    }
}); 