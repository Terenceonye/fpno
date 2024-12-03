// Insert Header and Footer Plus Dropdown menu in small screen
document.addEventListener("DOMContentLoaded", () => {
    // Load Header and Footer
    $(document).ready(function () {
        // Load Header
        $("#header").load("header.html", function () {
            initializeDropdowns(); // Initialize dropdowns after the header is loaded
        });

        // Load Footer
        $("#footer").load("footer.html", function () {
            initializechatinfo(); // Initialize chat info (alert) after footer is loaded
        });
    });

    // Function to initialize the chat popup alert
    function initializechatinfo() {
        // Trigger Alert AFTER Footer is Loaded
        const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
        
        // Function to create and append the alert
        const appendAlert = (message, type) => {
            const wrapper = document.createElement('div');
            wrapper.innerHTML = [
                `<div class="alert alert-${type} alert-dismissible fade show" role="alert">`,
                `   <div>${message}</div>`,
                '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
                '</div>'
            ].join('');
        
            alertPlaceholder.append(wrapper);
        
            // Close event listener for the alert
            wrapper.querySelector('.btn-close').addEventListener('click', () => {
                // After closing the alert, append "alert closed" message
                setTimeout(()=> {
                    const closedMessage = document.createElement('div');
                closedMessage.innerHTML = '<div class="alert alert-info">I am FPNO AI. You can ask me anything about our Polytechnic!</div>';
                alertPlaceholder.append(closedMessage);
                }, 300000)
                
            });
        };
    
        // Automatically trigger the alert when footer is loaded
        appendAlert('I am FPNO AI. You can ask me anything about our Polytechnic!', 'info');
    }
    

    // Function to initialize dropdown menu for small screens
    function initializeDropdowns() {
        // Attach event listeners to dropdown buttons
        var dropdown = document.getElementsByClassName("dropdown-button");
        for (var i = 0; i < dropdown.length; i++) {
            dropdown[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var dropdownContent = this.nextElementSibling;
                if (dropdownContent.style.display === "block") {
                    dropdownContent.style.display = "none";
                } else {
                    dropdownContent.style.display = "block";
                }
            });
        }
    }
});









let activeFaq = null;

function toggleFaq(card) {
    // Get the plus sign inside the clicked card
    const plusSign = card.querySelector('.plus-sign');

    // Check if the clicked card is already active
    const isActive = card.classList.contains('active');

    // Close the currently active FAQ if any
    if (activeFaq && activeFaq !== card) {
        activeFaq.classList.remove('active');
        activeFaq.querySelector('.plus-sign').classList.replace('fa-minus', 'fa-plus'); // Change back to plus icon
    }

    // If the clicked card was not active, make it active
    if (!isActive) {
        card.classList.add('active');
        plusSign.classList.replace('fa-plus', 'fa-minus'); // Change to minus icon
        activeFaq = card;
    } else {
        card.classList.remove('active');
        plusSign.classList.replace('fa-minus', 'fa-plus'); // Change back to plus icon
        activeFaq = null;
    }
}



//gallery-js
document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab-btn");
    const galleryItems = document.querySelectorAll(".gallery-item");
    const lightbox = document.querySelector(".lightbox");
    const lightboxImg = document.querySelector(".lightbox-img");
    const closeBtn = document.querySelector(".lightbox-close");
    const prevBtn = document.querySelector(".lightbox-prev");
    const nextBtn = document.querySelector(".lightbox-next");

    let currentIndex = 0;
    let currentCategory = "all";

    // Tabs filter functionality
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            currentCategory = tab.getAttribute("data-category");
            galleryItems.forEach(item => {
                if (currentCategory === "all" || item.getAttribute("data-category") === currentCategory) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });

    // Open lightbox on gallery item click
    galleryItems.forEach((item, index) => {
        item.addEventListener("click", () => {
            currentIndex = index;
            currentCategory = item.getAttribute("data-category");
            openLightbox(item.querySelector("img").src);
        });
    });

    function openLightbox(src) {
        lightboxImg.src = src;
        lightbox.classList.add("fade-in");
        lightbox.style.display = "flex";
    }

    // Close lightbox
    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    // Navigate to the previous image
    prevBtn.addEventListener("click", () => {
        const items = Array.from(galleryItems).filter(item => 
            currentCategory === "all" || item.getAttribute("data-category") === currentCategory
        );
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        lightboxImg.src = items[currentIndex].querySelector("img").src;
    });

    // Navigate to the next image
    nextBtn.addEventListener("click", () => {
        const items = Array.from(galleryItems).filter(item => 
            currentCategory === "all" || item.getAttribute("data-category") === currentCategory
        );
        currentIndex = (currentIndex + 1) % items.length;
        lightboxImg.src = items[currentIndex].querySelector("img").src;
    });
});


  // Script to open and close sidebar
  function navba_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";

    // Get the body element
    const pageBody = document.getElementsByTagName('body')[0]; // Access the first <body> element

    // Add the no-scroll class
    pageBody.classList.add('no-scroll');
}

function navba_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";

    // Get the body element correctly
    const pageBody = document.getElementsByTagName('body')[0];

    // Remove the no-scroll class
    pageBody.classList.remove('no-scroll');
}





//Scroll To Top Btn
// let btnScroll = document.getElementById("scrollBtn");

// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     btnScroll.style.display = "block";
//   } else {
//     btnScroll.style.display = "none";
//   }
// }
// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }
 


// chatbtn

let btnScroll = document.getElementById("scrollBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  
    btnScroll.style.display = "block";

}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
 


    
