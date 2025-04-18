<footer>
    <p class="footer-text">Made with ♥ by </p>
    <img src="/sketch logo-w.png" alt="Persona" class="footer-persona" draggable="false"/>
    <img src="/grass4.png" alt="Footer Logo" class="footer-image" draggable="false" />
</footer>

<style>
    
    .footer-text {
        font-family: "Syne Mono", monospace;
        font-weight: 300;
        font-style: normal;
        text-shadow:  0px 0px 2px white;
        position: absolute;
        top: 65%;
        left: 45%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 2vw; 
        z-index: 1; 
        margin: 0;  
    }

    footer {
        text-align: center;
        position: relative;
        margin-top: auto;
        bottom: -1vh;
        width: 100%;
        overflow: hidden; 
    }

    .footer-persona {
        position: absolute;
        filter: drop-shadow(0px 0px 1px white);
        top: 60%;
        left: 57%;
        transform: translate(-50%, -50%);
        width: 6vw; /* Adjust the size of the persona */
        height: auto; /* Maintain aspect ratio */
        z-index: 1; /* Ensure the persona appears above the grass but below the text */
    }

    .footer-image {
        display: block;
        max-width: 60%; 
        height: auto; 
        margin: 0 auto;
        object-fit: contain;
    }

    /* Mobile: Adjust image size for smaller screens */
    @media (max-width: 768px) {
        .footer-image {
            width: 100%; /* Ensure the image still spans the full width */
        }
    }
</style>