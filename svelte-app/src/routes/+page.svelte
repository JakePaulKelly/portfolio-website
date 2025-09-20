<script>
    import { base } from '$app/paths';
    import { onMount } from 'svelte';
    
    let mounted = false;
    let scrollY = 0;
    
    onMount(() => {
        mounted = true;
    });
</script>

<svelte:window bind:scrollY />

<div class="sky-background"></div>

<!-- Hero Section -->
<section class="hero-section">
    <div class="hero-content" class:animate-in={mounted}>
        <h1 class="hero-title">Jake</h1>
        <p class="hero-subtitle">Creative Developer & Digital Artist</p>
</section>

<!-- About Section -->
<section class="about-section">
    <div class="about-container" class:animate-in={mounted}>
        <div class="about-header">
            <h2 class="about-title">About Me</h2>
        </div>
        
        <div class="about-content">
            <div class="about-card">
                <div class="card-icon">💻</div>
                <p class="about-text">
                    I'm a creative professional who blends front-end development, graphic design, and concept art into cohesive digital experiences. With expertise in modern web technologies, I craft interfaces that are both functional and visually compelling—where every element serves a purpose and tells a story.
                </p>
            </div>
            
            <div class="about-card">
                <div class="card-icon">🎨</div>
                <p class="about-text">
                    My design background fuels a broader creative vision that spans from brand identities to immersive digital worlds. I thrive on bridging the gap between imagination and execution, continuously exploring new tools and techniques to bring fresh, bold ideas to life.
                </p>
            </div>
        </div>
        
        <div class="skills-showcase">
            <div class="skill-tag">Frontend Development</div>
            <div class="skill-tag">Graphic Design</div>
            <div class="skill-tag">Concept Art</div>
            <div class="skill-tag">UI/UX Design</div>
        </div>
    </div>
</section>

<style>
    /* Hero Section Styles */
    .hero-section {
        position: relative;
        min-height: 90vh;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        z-index: 5;
    }

    .hero-content {
        text-align: center;
        position: relative;
        z-index: 10;
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    .hero-content.animate-in {
        opacity: 1;
        transform: translateY(0);
    }

    .hero-title {
        font-family: "Lexend Giga", sans-serif;
        font-size: clamp(3rem, 8vw, 7rem);
        letter-spacing: clamp(0.2rem, 1vw, 1rem);
        color: white;
        font-weight: 600;
        margin: 0;
        text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        animation: titleGlow 3s ease-in-out infinite alternate;
    }

    @keyframes titleGlow {
        0% { text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 30px rgba(255, 255, 255, 0.1); }
        100% { text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 40px rgba(255, 255, 255, 0.2); }
    }

    .hero-subtitle {
        font-family: "Syne Mono", monospace;
        font-size: clamp(1rem, 2.5vw, 1.8rem);
        color: rgba(255, 255, 255, 0.9);
        margin: 1rem 0 2rem;
        font-weight: 300;
        letter-spacing: 0.1rem;
        opacity: 0;
        animation: subtitleFadeIn 1s ease-out 0.5s forwards;
    }

    @keyframes subtitleFadeIn {
        to { opacity: 1; }
    }

    /* About Section Styles */
    .about-section {
        position: relative;
        padding: 6rem 2rem;
        z-index: 5;
    }

    .about-container {
        max-width: 1200px;
        margin: 0 auto;
        opacity: 0;
        transform: translateY(50px);
        transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    .about-container.animate-in {
        opacity: 1;
        transform: translateY(0);
    }

    .about-header {
        text-align: center;
        margin-bottom: 4rem;
    }

    .about-title {
        font-family: "Lexend Giga", sans-serif;
        font-size: clamp(2.5rem, 5vw, 3.5rem);
        color: white;
        margin: 0;
        font-weight: 600;
        letter-spacing: 0.3rem;
        text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    }

    .about-content {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        gap: 2rem;
        margin-bottom: 3rem;
    }

    .about-card {
        background: rgba(240, 247, 255, 1);
        padding: 2.5rem;
        text-align: center;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        position: relative;
        overflow: hidden;
    }

    .about-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        transition: left 0.6s ease;
    }

    .about-card:hover {
        transform: translateY(-10px) scale(1.02);
        box-shadow: 0 15px 40px rgba(25, 125, 255, 0.2);
        border-color: rgba(25, 125, 255, 0.3);
    }

    .about-card:hover::before {
        left: 100%;
    }

    .card-icon {
        font-size: 3rem;
        margin-bottom: 1.5rem;
        display: block;
    }

    .about-text {
        font-family: "Syne Mono", monospace;
        font-size: clamp(1rem, 1.2vw, 1.2rem);
        color: rgb(0, 26, 112);
        line-height: 1.8;
        margin: 0;
        font-weight: 300;
    }

    /* Skills Showcase */
    .skills-showcase {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
        margin-top: 2rem;
    }

    .skill-tag {
        background: rgba(25, 125, 255, 0.1);
        color: white;
        padding: 0.8rem 1.5rem;
        border-radius: 25px;
        font-family: "Syne Mono", monospace;
        font-size: 0.9rem;
        font-weight: 400;
        border: 1px solid rgba(25, 125, 255, 0.3);
        backdrop-filter: blur(10px);
        transition: all 0.3s ease;
        cursor: default;
    }

    .skill-tag:hover {
        background: rgba(25, 125, 255, 0.2);
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(25, 125, 255, 0.2);
    }

    /* Responsive Design */
    @media (max-width: 768px) {
        .hero-section {
            min-height: 80vh;
        }

        .about-section {
            padding: 4rem 1rem;
        }

        .about-content {
            grid-template-columns: 1fr;
            gap: 1.5rem;
        }

        .about-card {
            padding: 2rem;
        }

        .skills-showcase {
            gap: 0.8rem;
        }

        .skill-tag {
            padding: 0.6rem 1.2rem;
            font-size: 0.8rem;
        }
    }

    @media (max-width: 480px) {
        .hero-section {
            min-height: 70vh;
        }

        .about-section {
            padding: 3rem 1rem;
        }

        .about-content {
            grid-template-columns: 1fr;
        }

        .about-card {
            padding: 1.5rem;
        }

        .card-icon {
            font-size: 2.5rem;
            margin-bottom: 1rem;
        }

        .skills-showcase {
            gap: 0.6rem;
        }

        .skill-tag {
            padding: 0.5rem 1rem;
            font-size: 0.75rem;
        }
    }

    @media (max-width: 320px) {
        .about-content {
            grid-template-columns: 1fr;
            gap: 1rem;
        }

        .about-card {
            padding: 1.25rem;
        }

        .card-icon {
            font-size: 2rem;
        }
    }
</style>

