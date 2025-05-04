<script>
    import { base } from '$app/paths';

    // villager files
    const funnyVillager = [
        '/Villager_accept1.ogg',
        '/Villager_accept2.ogg',
        '/Villager_accept3.ogg',
        '/Villager_idle3.ogg'
    ];

    // speech text array
    const speechTexts = [
        "𐐘 among us",
        "Teris or Block Blast?",
        "♥",
        "[as]",
        "⍥",
        "☻",
    ];

    // track index
    let you_are_here_index = 0;

    // persona
    let jakePersona;

    // state to control speech visibility and text
    let showSpeech = false;

    // initial speech text
    let indexSpeech = speechTexts[0];

    let cooldown = false;

    // play sound and cycle speech text when the persona is clicked
    function villagerNoises() {
        if (cooldown) return; // prevent multiple clicks

        cooldown = true;
        
        const sound = new Audio(funnyVillager[you_are_here_index]);
        sound.volume = 0.30;
        sound.play();

        // Cycle through the sounds
        you_are_here_index = (you_are_here_index + 1) % funnyVillager.length;

        // Cycle through the speech texts
        indexSpeech = speechTexts[you_are_here_index];

        // Show the speech bubble
        showSpeech = true;

        // Hide the speech bubble after 2 seconds
        setTimeout(() => {
            showSpeech = false;
            cooldown = false; // reset cooldown
        }, 2000);
    }
</script>

<div class="sky-background"></div>
<div class="cloud cloud-1"></div>
<div class="cloud cloud-2"></div>
<div class="jake_persona" on:click={villagerNoises} bind:this={jakePersona}>
    <div class="reveal">
        <img src="{base}/sketch logo-w.png" alt="Jake Persona" style="width: 350px" class="flex-image"    >
    </div>
    
    <!-- Speech bubble with text -->
    <div class="speech" style="opacity: {showSpeech ? 1 : 0};">
        <p class="speech-text">{indexSpeech}</p>
    </div>
</div>

<div class="reveal-text">
    <h1>Jake Kelly</h1>
</div>

<div class="about-me-container">
    <h2>About Me</h2>
        <p>
          As a versatile and passionate creative professional, I bring together the worlds of front-end web development, graphic design, and concept art into a cohesive, innovative skill set. With a deep understanding of modern web technologies, I craft user interfaces that are not only functional and responsive but also visually engaging. My development work is driven by a designer’s eye, ensuring that each element on the screen serves both a purpose and an aesthetic. Whether I'm building sleek websites, refining UI/UX, or optimizing interactions, my attention to detail and appreciation for form and function stand out in every project.
        </p>
        
        <p>
          Beyond code, my background in graphic design and concept art fuels a broader creative vision. I approach each project as a storyteller, whether it’s designing a brand identity, illustrating characters and environments, or shaping immersive digital experiences. This fusion of technical skill and artistic intuition allows me to bridge the gap between imagination and execution. Passionate about pushing boundaries, I continuously explore new tools and trends, bringing fresh ideas and bold creativity to everything I create.
        </p>
</div>      

<div class="nav-links-container">
    <a href="{base}/portfolio" class="nav-link portfolio-link">
        <h2>Portfolio</h2>
        <img src="{base}/portfolio.png" alt="Portfolio Logo" />
    </a>
    
    <a href="{base}/cv" class="nav-link cv-link">
        <h2>CV</h2>
        <img src="{base}/thumbs up.png" alt="CV Logo" />
    </a>
</div>

<style>
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

    .nav-links-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 3rem;
        margin: 5rem auto;
        z-index: 1000;
        width: 100%;
        max-width: 1200px;
    }

    .nav-link {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 15rem;
        height: 15rem;
        transition: all 0.3s ease;
        text-decoration: none;
        border-radius: 10px;
        padding: 1rem;
    }

    .nav-link:hover {
        transform: scale(1.05);
    }

    .nav-link h2 {
        font-family: "Lexend Giga", sans-serif;
        font-size: 3.5rem;
        color: white;
        margin: 0.5rem 0;
        text-align: center;
    }

    .nav-link img {
        width: 100px;
        height: auto;
        margin-top: 1rem;
    }

    .portfolio-link img {
        width: 150px;
    }

    .cv-link img {
        width: 120px;
    }

    .cloud {
        position: absolute;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        pointer-events: none;
        opacity: 0;
        z-index: 0;
    }

    .cloud-1 {
        aspect-ratio: 1/1;
        width: 30vw;
        background-image: url('/cloud.png');
        top: 5%;
        left: -10%;
        animation: moveCloudLeft 20s linear infinite; 
        animation-delay: 5s;
        transform: scaleX(-1);
    }

    .cloud-2 {
        aspect-ratio: 1/1;
        width: 30vw;
        background-image: url('/cloud.png');
        top: 30%;
        right: 0%;  
        animation: moveCloudRight 15s linear infinite;
        animation-delay: 5s;
        
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

    .jake_persona:hover {
        transform: scale(1.05);
        transition: ease-in-out 0.3s;
    }

    .speech {
        position: absolute;
        top: 35%;
        left: -470%;
        transform: translateY(-50%); 
        width: 300px;
        height: 150px;
        background: url('/speech.png') no-repeat;
        background-size: contain;
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
        z-index: 10;
        display: flex;
        justify-content: center;
        padding: 40px;
        text-align: center;
    }

    .speech-text {
        font-family: "Lexend Giga", sans-serif;
        font-size: 2rem;
        background: linear-gradient(to top, 
            rgb(25, 125, 255) 0%,
            rgb(25, 159, 255) 70%,  
            rgb(0, 38, 144)) 100%   ;
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        margin: 0;
        line-height: 1.2;
    }

    .about-me-container {
        position: relative;
        margin: 0 auto;
        margin-top: 10rem;
        padding: 2rem;
        max-width: 1200px;
        width: 90%;
        background: rgb(240, 247, 255);
        box-shadow: 0 0 20px 1.5rem rgb(240, 247, 255);
        text-align: center;
        z-index: 5;
        border-radius: 8px;
    }

    .about-me-container h2 {
        font-family: "Lexend Giga", sans-serif;
        font-size: 3.5rem;
        font-style: italic;
        letter-spacing: 0.5rem;
        color: rgb(25, 125, 255);
        margin-bottom: 1.5rem;
    }

    .about-me-container p {
        font-family: "Syne Mono", monospace;
        font-size: 1.7rem;
        color: rgb(0, 26, 112);
        line-height: 1.6;
        margin-bottom: 1.5rem;
    }
    
    .about-me-container p:last-child {
        margin-bottom: 0;
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

    @keyframes moveCloudLeft {
        0% {
            transform: translateX(10vw);
            opacity: 0;
        }

        20% {
            opacity: 1;
        }
        
        100% {
            transform: translateX(30vw);
            opacity: 0;
        }
    }

    @keyframes moveCloudRight {
        0% {
            transform: translateX(-10vw);
            opacity: 0;
        }

        20% {
            opacity: 1;
        }
        
        100% {
            transform: translateX(-30vw); 
            opacity: 0;
        }
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

    @media (max-width: 768px) {
        .cloud {
            display: none !important;
        }
        
        h1 {
            font-size: 3.5rem;
            letter-spacing: 0.5rem;
            padding-top: 0.5rem;
            margin-bottom: 0.5rem;
        }

        .portfolio-button {
            width: 12rem;
            height: 12rem;
            margin-top: 3rem;
        }
        .portfolio-button h2 {
            font-size: 3rem;
        }
        
        .jake_persona {
            height: 40vh;
            padding-top: 0;
        }
        
        .reveal img {
            width: 250px !important;
        }
        
        .speech {
            display: none !important;
            visibility: hidden !important;
            opacity: 0 !important;
            pointer-events: none !important;
        }

        .about-me-container {
            margin-top: 6rem;
            padding: 1.5rem;
            width: 90%;
            max-width: 700px;
            box-shadow: 0 0 15px 1rem rgb(240, 247, 255);
        }

        .about-me-container h2 {
            font-size: 2.8rem;
            letter-spacing: 0.3rem;
            margin-bottom: 1.2rem;
        }

        .about-me-container {
            margin-top: 6rem;
            padding: 1.5rem;
            width: 90%;
            max-width: 700px;
            box-shadow: 0 0 15px 1rem rgb(240, 247, 255);
        }

        .about-me-container h2 {
            font-size: 2.8rem;
            letter-spacing: 0.3rem;
            margin-bottom: 1.2rem;
        }

        .about-me-container p {
            font-size: 1.5rem;
            line-height: 1.5;
            margin-bottom: 1.2rem;
            padding: 0 0.5rem;
        }

        .nav-links-container {
            flex-direction: row;
            gap: 2rem;
            margin: 4rem auto;
        }

        .nav-link {
            width: 12rem;
            height: 12rem;
        }

        .nav-link h2 {
            font-size: 2.8rem;
        }

        .nav-link img {
            width: 80px;
        }

        .portfolio-link img {
            width: 120px;
        }

        .cv-link img {
            width: 100px;
        }

    @media (max-width: 480px) {
        h1 {
            font-size: 2.5rem;
            letter-spacing: 0.25rem;
        }

        .portfolio-button {
            width: 12rem;
            height: 12rem;
        }
        
        .jake_persona {
            height: 35vh;
        }
        
        .reveal img {
            width: 200px !important;
        }

        .about-me-container {
            margin-top: 4rem;
            padding: 1.25rem;
            width: 95%;
            max-width: none;
            box-shadow: 0 0 12px 0.8rem rgb(240, 247, 255);
        }

        .about-me-container h2 {
            font-size: 2.2rem;
            letter-spacing: 0.2rem;
            margin-bottom: 1rem;
        }

        .about-me-container p {
            font-size: 1.2rem;
            word-break: break-word;
        }

        .nav-links-container {
            flex-direction: column;
            gap: 2rem;
            margin: 3rem auto;
        }

        .nav-link {
            width: 10rem;
            height: 10rem;
            padding: 0.8rem;
        }

        .nav-link h2 {
            font-size: 2.2rem;
        }

        .nav-link img {
            width: 70px;
            margin-top: 0.5rem;
        }

        .portfolio-link img {
            width: 100px;
        }

        .cv-link img {
            width: 80px;
        }
    }
}


    @media (max-width: 320px) {
        .about-me-container {
            margin-top: 3rem;
            padding: 1rem;
            box-shadow: 0 0 10px 0.6rem rgb(240, 247, 255);
        }

        .about-me-container h2 {
            font-size: 1.8rem;
            letter-spacing: 0.15rem;
            margin-bottom: 0.8rem;
        }

        .nav-link {
            width: 8rem;
            height: 8rem;
            padding: 0.5rem;
        }

        .nav-link h2 {
            font-size: 1.8rem;
        }

        .nav-link img {
            width: 60px;
            margin-top: 0.3rem;
        }

        .portfolio-link img {
            width: 80px;
        }

        .cv-link img {
            width: 70px;
        }
    }
    </style>

