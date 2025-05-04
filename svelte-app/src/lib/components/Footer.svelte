<script>
    import { base } from '$app/paths';
</script>


<footer>
    <div class="footer-content">
        <p class="footer-text">Made with ♥ by</p>
        <img src="{base}/sketch logo-w.png" alt="Persona" class="footer-persona" draggable="false"/>
    </div>
    <img src="{base}/grass4.png" alt="Footer Logo" class="footer-image" draggable="false" />
</footer>

<style>
    footer {
        position: relative;
        width: 100%;
        margin-top: auto;
        text-align: center;
        overflow: hidden;
    }

    .footer-content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        align-items: center;
        gap: 1rem;
        z-index: 2;
    }

    .footer-text {
        font-family: "Syne Mono", monospace;
        font-weight: 300;
        font-style: normal;
        text-shadow: 0px 0px 2px white;
        color: white;
        font-size: clamp(1rem, 1.5vw, 2rem);
        margin: 0;
    }

    .footer-persona {
        filter: drop-shadow(0px 0px 1px white);
        width: clamp(2rem, 4vw, 4rem);
        height: auto;
    }

    .footer-image {
            display: block;
            width: 100%;
            max-width: 60%;
        height: auto;
        margin: 0 auto;
        object-fit: contain;
    }

    @media (max-width: 768px) {
        .footer-content {
            gap: 0.5rem;
        }
        
        .footer-text {
            font-size: 1rem;
        }

        .footer-persona {
            width: 2rem;
        }

        .footer-image {
            max-width: 100%;
        }
    }

    @media (max-width: 768px) {
        .footer-image {
            width: 100%;
            max-width: 100%;
        }
        
        .footer-content {
            margin-bottom: -1rem;
        }
    }
    
    /* Extra small screens */
    @media (max-width: 480px) {
        .footer-text {
            font-size: 0.9rem;
        }
        
        .footer-persona {
            width: 2.5rem;
        }
        
        .footer-content {
            margin-bottom: -0.5rem;
        }
    }
</style>