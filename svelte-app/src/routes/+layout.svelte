<script>
    import Footer from "../lib/components/Footer.svelte";
    import "../global.css";
</script>

<a href="/" class="home-button">
    <img src = "/house.svg" alt = "Home" draggable="false"/>
</a>
<main>
<slot />
</main>

<!-- Footer-->
<Footer />

<style>
    .home-button {
        position: fixed;
        top: 1rem;
        left: 1rem;
        z-index: 1000;
        transition: opacity 0.3s ease, transform 0.3s ease;
        display: flex;
        justify-content: center;
        align-items: center;
        backdrop-filter: blur(5px);
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        padding: 0.5rem;
        will-change: transform; /* Optimize for animations */
        transform: translateZ(0); /* Force GPU acceleration */
    }

    .home-button img {
        width: 5rem;
        height: 5rem;
        filter: drop-shadow(0px 0px 10px rgb(61, 168, 255));
    }

    .home-button:hover {
        transform: scale(1.10) translateZ(0);
        transition: ease-in-out 0.3s;
    }

    .home-button:active {
        transform: scale(0.95) translateZ(0);
    }

    /* Responsive Design */
    @media (max-width: 768px) {
        .home-button {
            top: 1.75rem;
            left: 0.75rem;
            padding: 0.4rem;
        }
        
        .home-button img {
            width: 3.5rem;
            height: 3.5rem;
        }
    }
    
    @media (max-width: 480px) {
        .home-button {
            top: 1.5rem;
            left: 0.5rem;
            padding: 0.3rem;
        }
        
        .home-button img {
            width: 2.5rem;
            height: 2.5rem;
        }
    }
</style>
