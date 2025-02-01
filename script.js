// Select all images in the gallery
const galleryImages = document.querySelectorAll('.gallery img');

// Create the modal elements
const modal = document.createElement('div');
modal.classList.add('modal');

const modalContent = document.createElement('div');
modalContent.classList.add('modal-content');

const modalImage = document.createElement('img');
modalImage.classList.add('modal-img'); // Added a class for better styling
modalContent.appendChild(modalImage);

const closeModal = document.createElement('span');
closeModal.innerHTML = '&times;';
closeModal.classList.add('close');

modal.appendChild(closeModal);
modal.appendChild(modalContent);
document.body.appendChild(modal);

// Add click event to each image
galleryImages.forEach((image) => {
    image.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImage.src = image.src;
    });
});

// Close the modal when the "close" button is clicked
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close the modal when clicking outside the image
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Apply CSS for proper positioning
const style = document.createElement('style');
style.innerHTML = `
    .modal {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }
    .modal-content {
        position: relative;
        max-width: 90%;
        max-height: 90%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .modal-img {
        max-width: 100%;
        max-height: 100%;
        border-radius: 10px;
    }
    .close {
        position: absolute;
        top: 20px;
        right: 30px;
        font-size: 2rem;
        color: white;
        cursor: pointer;
    }
`;
document.head.appendChild(style);


document.querySelector(".banner").addEventListener("click", function () {
    document.querySelector("#form").scrollIntoView({ behavior: "smooth" });
});
