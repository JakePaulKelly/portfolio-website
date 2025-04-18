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
    }

    .home-button img {
        width: 5rem;
        height: 5rem;
        filter: drop-shadow(0px 0px 2px white);
    }

    .home-button:hover {
        transform: scale(1.10);
        transition: ease-in-out 0.3s;
        filter: drop-shadow(0px 0px 2.5px white);
    }

    /* Responsive Design */
    @media (max-width: 768px) {
        .home-button {
            font-size: 1rem;
            padding: 0.6rem 1rem;
        }
    }
</style>
