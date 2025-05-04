
<script>
    let selectedImage = null; // Track the currently selected image
    let hoverText = ''; // Text to display when hovering
    let mouseX = 0; // Mouse X position
    let mouseY = 0; // Mouse Y position
    let showHoverText = false; // Whether to show the hover text
    const images = [
        { id: 1, src: 'placeholder.jpg', alt: 'Image 1', hoverText: 'KCD2 PLACEHOLDER 1' },
        { id: 2, src: 'placeholder.jpg', alt: 'Image 2', hoverText: 'KCD2 PLACEHOLDER 2' },
        { id: 3, src: 'placeholder.jpg', alt: 'Image 3', hoverText: 'KCD2 PLACEHOLDER 3' },
        { id: 4, src: 'placeholder.jpg', alt: 'Image 4', hoverText: 'KCD2 PLACEHOLDER 4' },
        { id: 5, src: 'placeholder.jpg', alt: 'Image 5', hoverText: 'KCD2 PLACEHOLDER 5' },
        { id: 6, src: 'placeholder.jpg', alt: 'Image 6', hoverText: 'KCD2 PLACEHOLDER 6' },
        { id: 7, src: 'placeholder.jpg', alt: 'Image 7', hoverText: 'KCD2 PLACEHOLDER 7' },
        { id: 8, src: 'placeholder.jpg', alt: 'Image 8', hoverText: 'KCD2 PLACEHOLDER 8' },
        { id: 9, src: 'placeholder.jpg', alt: 'Image 9', hoverText: 'KCD2 PLACEHOLDER 9' }
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

<div class="portfolio_img" >
    <div class="reveal">
        <img src="/portfolio.png" alt="Portfolio Image" style="width: 350px" class="flex-image" draggable="false" />
    </div>
</div>

<div class="reveal-text">
    <h1>Portfolio</h1>
</div>
<div class="sky-background"></div>


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

{#if selectedImage}
    <div class="modal" on:click={() => (selectedImage = null)}>
        <div class="modal-content">
            <img src={selectedImage.src} alt={selectedImage.alt} class="modal-image" draggable="false" />
            <div class="modal-text">{selectedImage.hoverText}</div>
        </div>
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
        color: rgb(0, 38, 144);
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

    .modal-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 90%;
        max-height: 90%;
    }

    .modal-image {
        max-width: 100%;
        max-height: 80vh;
        object-fit: contain;
    }

    .modal-text {
        display: none;
        font-family: "Syne Mono", monospace;
        font-weight: 300;
        font-style: italic;
        background-color: rgba(255, 255, 255, 0.8);
        color: rgb(0, 38, 144);
        padding: 0.5rem 1rem;
        margin-top: 1rem;
        font-size: 1.5rem;
        text-align: center;
        max-width: 90%;
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
    

    .portfolio_img {
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
            transform: translateX(-10vw);
            opacity: 0;
        }

        50% {
            opacity: 0.8;
        }
        
        100% {
            transform: translateX(-80vw);
            opacity: 0;
        }
    }

    @media (max-width: 768px) {

        .seagul {
            display: none !important;
        }  

        .seagul-1 {
            display: none !important;
        }

        .portfolio_img {
            height: 200px;
            max-width: 100%;
        }

        .flex-image {
            width: 150px !important;
        }

        .reveal {
            max-width: 200px;
        }
        
        .grid-container {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        }
        
        h1 {
            font-size: 2.2rem;
            letter-spacing: 0.5rem;
            padding-top: 0.5rem;
            margin-bottom: 0.5rem;
        }

        
        .modal-text {
            display: block;
        }

        .modal-content {
            max-height: 85vh;
        }

        .modal-image {
            max-height: 65vh;
        }
        
    }
    @media (max-width: 480px) {
        .modal-image {
            max-height: 60vh;
        }

        .modal-text {
            font-size: 1.2rem;
            padding: 0.4rem 0.8rem;
        }
    }
</style>