
<script>
    let selectedImage = null; // Track the currently selected image
    let hoverText = ''; // Text to display when hovering
    let mouseX = 0; // Mouse X position
    let mouseY = 0; // Mouse Y position
    let showHoverText = false; // Whether to show the hover text
    const images = [
        { id: 1, src: 'placeholder.jpg', alt: 'Image 1', hoverText: '"Henry of Skalitz getting a haircut"' },
        { id: 2, src: 'placeholder.jpg', alt: 'Image 2', hoverText: '"Henry getting a clean shave"' },
        { id: 3, src: 'placeholder.jpg', alt: 'Image 3', hoverText: '"Henry getting assasinated :-("' },
        { id: 4, src: 'placeholder.jpg', alt: 'Image 4', hoverText: '"Henry getting a haircut"' },
        { id: 5, src: 'placeholder.jpg', alt: 'Image 5', hoverText: '"Henry getting a clean shave"' },
        { id: 6, src: 'placeholder.jpg', alt: 'Image 6', hoverText: '"Henry getting assasinated :-("' },
        { id: 7, src: 'placeholder.jpg', alt: 'Image 7', hoverText: '"Henry getting a haircut"' },
        { id: 8, src: 'placeholder.jpg', alt: 'Image 8', hoverText: '"Henry getting a clean shave"' },
        { id: 9, src: 'placeholder.jpg', alt: 'Image 9', hoverText: '"Henry getting assasinated :-("' }
        ];

function selectImage(image) {
    selectedImage = selectedImage == image ? null : image; // Toggle selection
}

function handleMouseMove(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
}

function handleMouseEnter(image) {
    hoverText = image.hoverText;
    showHoverText = true;
}

function handleMouseLeave() {
    showHoverText = false;
}
</script>

<div class="seagul"></div>
<div class="seagul-1"></div>

<div class="jake_persona" >
    <div class="reveal">
        <img src="/portfolio.png" alt="Jake Persona" style="width: 350px" class="flex-image" draggable="false" />
    </div>
</div>

<div class="reveal-text">
    <h1>Portfolio</h1>
</div>


<div class="grid-container">
    {#each images as image (image.id)}
        <div
            class="grid-item"
            on:click={() => selectImage(image)}
            on:mousemove={handleMouseMove}
            on:mouseenter={() => handleMouseEnter(image)}
            on:mouseleave={handleMouseLeave}
        >
            <img src={image.src} alt={image.alt} draggable="false" />
        </div>
    {/each}
</div>


{#if showHoverText}
    <div
        class="hover-text"
        style="top: {mouseY + 10}px; left: {mouseX + 5}px;">
        {hoverText}
    </div>
{/if}

<!-- displays the image -->
{#if selectedImage}
    <div class="modal" on:click={() => (selectedImage = null)}>
        <img src={selectedImage.src} alt={selectedImage.alt} class="modal-image" draggable="false" />
    </div>
{/if}

<style>


    /* grid screen */
.grid-container {
    margin-top: 10rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    background: linear-gradient(to top, 
            rgb(0, 38, 144) 0%,
            rgb(25, 159, 255) 70%,  
            rgb(0, 38, 144)) 100%;
    border-radius: 10px;
    gap: 1rem;
    width: 100%;
    max-height: 10000vh;
    padding: 1rem;
    box-sizing: border-box;
    overflow-y: auto;
}

    /* grid items */
    .grid-item {
        position: relative;
        overflow: hidden;
        cursor: pointer;
        transition: transform 0.3s ease, z-index 0.3s ease;
    }

    .hover-text {
        font-family: "Syne Mono", monospace;
        font-weight: 300;
        font-style: normal;
        font-style: italic;
        position: fixed;
        background-color: rgba(255, 255, 255, 0.9);
        color: rgb(0, 38, 144   );
        padding: 0.2rem 1rem;
        font-size: 1.5rem;
        pointer-events: none;
        z-index: 1000;
        white-space: nowrap;
    }

    .grid-item img {
        width: 100%;
        height: auto;
        object-fit: cover;
        transition: transform 0.3s ease;
    }

    /* modal for the selected image */
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: url('sketch logo-w-modal.png') repeat;
        background-size: 150px 150px;
        background-position: center;
        background-color: rgba(0, 0, 0, 1);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        cursor: pointer;
}

    .modal-image {
        max-width: 90%;
        max-height: 90%;
        object-fit: contain;
    }

    .seagul {
        aspect-ratio: 1/0.5;
        width: 10vw;
        background-image: url('/seagul.gif');
        animation: moveCloudRight 10s linear infinite;
        animation-delay: 5s;
        position: absolute;
        top: 2%;
        left: 80%;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        pointer-events: none;
        opacity: 0;
        z-index: 0;   
    }

    .seagul-1{
        aspect-ratio: 2/0.5;
        width: 10vw;
        background-image: url('/seagul.gif');
        animation: moveCloudRight 15s linear infinite;
        animation-delay: 7s;
        position: absolute;
        top: 10%;
        left: 88%;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        pointer-events: none;
        opacity: 0;
        z-index: 0;   
    }
    

    .jake_persona {
        max-width: 120px;
        margin: 0 auto;
        height: 65vh;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 1rem;
        position: relative;
        z-index: 5;
    }

    .reveal {
        opacity: 0;
        animation: revealPersona 1s forwards ease-out;
        width: 100%;
        max-width: 350px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
    }

    .reveal-text {
        opacity: 0;
        animation: revealPersona 1s forwards ease-out;
        width: 100%;
        max-width: 350px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        position: relative;
        z-index: 5;
    }

    h1 {
        font-family: "Lexend Giga", sans-serif;
        font-size: 7rem;
        letter-spacing: 1rem;
        color: white;
        font-weight: 600;
        text-align: center;
        margin: 0 auto;
        white-space: nowrap;
        padding-top: 1rem;
        margin-bottom: 1rem;
        z-index: 10;
        position: relative;
    }

    @keyframes revealPersona {
        0% {
            opacity: 0;
            transform: translateY(20px);
            scale: 1.15;
        }
        100% {
            opacity: 1;
            transform: translateY(0);
            scale: 1.25;
        }
    }

    @keyframes moveCloudRight {
        0% {
            transform: translateX(-10vw); /* Start off-screen */
            opacity: 0;
        }

        50% {
            opacity: 0.8; /* Center of the viewport */
        }
        
        100% {
            transform: translateX(-80vw); /* Move across the viewport */
            opacity: 0;
        }
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
        .grid-container {
            grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        }
    }
</style>

<div class="sky-background"></div>