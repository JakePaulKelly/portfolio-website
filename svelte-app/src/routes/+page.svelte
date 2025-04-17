<script>
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

<div class="overlay"></div>

<div class="cloud cloud-1"></div>
<div class="cloud cloud-2"></div>

<div class="jake_persona" on:click={villagerNoises} bind:this={jakePersona}>
    <div class="reveal">
        <img src="/sketch logo-w.png" alt="Jake Persona" style="width: 350px" class="flex-image">
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
        Lorem ipsum dolor sit amet. Ut neque omnis ea internos voluptas est velit quia sit quia culpa et ipsa corporis? Eum delectus architecto ut iusto enim et porro quaerat et quos explicabo et iusto nulla sed eligendi vitae.

Ea sequi maiores est recusandae quas vel magnam perferendis qui fugit nobis eum sint deserunt. Sit corporis odit aut quibusdam animi ut accusantium consequatur est laboriosam consectetur.

Nam omnis dolores id officia quam non consequatur cupiditate nam quasi labore. 33 alias assumenda aut dolorum totam 33 sequi quasi sed aliquam porro aut eaque iste. Aut sint aliquid eos quae velit et sapiente dolorum in adipisci quas. Qui aliquam voluptatum sit voluptatibus asperiores et facere asperiores.

Id doloribus omnis qui recusandae quod ut minus optio id neque reprehenderit. 33 voluptas nihil qui quisquam omnis est enim Quis et provident ipsum sit voluptatem laboriosam! Id laborum necessitatibus in accusantium totam id exercitationem reprehenderit eos mollitia debitis.
    </p>

    <p>
        Lorem ipsum dolor sit amet. Ut neque omnis ea internos voluptas est velit quia sit quia culpa et ipsa corporis? Eum delectus architecto ut iusto enim et porro quaerat et quos explicabo et iusto nulla sed eligendi vitae.

Ea sequi maiores est recusandae quas vel magnam perferendis qui fugit nobis eum sint deserunt. Sit corporis odit aut quibusdam animi ut accusantium consequatur est laboriosam consectetur.

Nam omnis dolores id officia quam non consequatur cupiditate nam quasi labore. 33 alias assumenda aut dolorum totam 33 sequi quasi sed aliquam porro aut eaque iste. Aut sint aliquid eos quae velit et sapiente dolorum in adipisci quas. Qui aliquam voluptatum sit voluptatibus asperiores et facere asperiores.

Id doloribus omnis qui recusandae quod ut minus optio id neque reprehenderit. 33 voluptas nihil qui quisquam omnis est enim Quis et provident ipsum sit voluptatem laboriosam! Id laborum necessitatibus in accusantium totam id exercitationem reprehenderit eos mollitia debitis.
    </p>

    <p>
        Lorem ipsum dolor sit amet. Ut neque omnis ea internos voluptas est velit quia sit quia culpa et ipsa corporis? Eum delectus architecto ut iusto enim et porro quaerat et quos explicabo et iusto nulla sed eligendi vitae.

Ea sequi maiores est recusandae quas vel magnam perferendis qui fugit nobis eum sint deserunt. Sit corporis odit aut quibusdam animi ut accusantium consequatur est laboriosam consectetur.

Nam omnis dolores id officia quam non consequatur cupiditate nam quasi labore. 33 alias assumenda aut dolorum totam 33 sequi quasi sed aliquam porro aut eaque iste. Aut sint aliquid eos quae velit et sapiente dolorum in adipisci quas. Qui aliquam voluptatum sit voluptatibus asperiores et facere asperiores.

Id doloribus omnis qui recusandae quod ut minus optio id neque reprehenderit. 33 voluptas nihil qui quisquam omnis est enim Quis et provident ipsum sit voluptatem laboriosam! Id laborum necessitatibus in accusantium totam id exercitationem reprehenderit eos mollitia debitis.
    </p>

    <p>
        Lorem ipsum dolor sit amet. Ut neque omnis ea internos voluptas est velit quia sit quia culpa et ipsa corporis? Eum delectus architecto ut iusto enim et porro quaerat et quos explicabo et iusto nulla sed eligendi vitae.

Ea sequi maiores est recusandae quas vel magnam perferendis qui fugit nobis eum sint deserunt. Sit corporis odit aut quibusdam animi ut accusantium consequatur est laboriosam consectetur.

Nam omnis dolores id officia quam non consequatur cupiditate nam quasi labore. 33 alias assumenda aut dolorum totam 33 sequi quasi sed aliquam porro aut eaque iste. Aut sint aliquid eos quae velit et sapiente dolorum in adipisci quas. Qui aliquam voluptatum sit voluptatibus asperiores et facere asperiores.

Id doloribus omnis qui recusandae quod ut minus optio id neque reprehenderit. 33 voluptas nihil qui quisquam omnis est enim Quis et provident ipsum sit voluptatem laboriosam! Id laborum necessitatibus in accusantium totam id exercitationem reprehenderit eos mollitia debitis.
    </p>
</div>

<style>
    .overlay {
        position: fixed;    
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to top, 
            rgb(25, 125, 255) 0%,
            rgb(25, 159, 255) 50%,
            rgb(0, 38, 144)) 100%;
        z-index: -1;
        overflow: hidden;
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

    .cloud {
        position: absolute; /* Clouds' vertical position will now scroll with the page */
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        pointer-events: none;
        opacity: 0;
        z-index: 0;
    }

    .cloud-1 {
        aspect-ratio: 1/1;
        width: 30vw; /* Width of the cloud */
        background-image: url('/cloud.png');
        top: 5%;
        left: -10%;
        animation: moveCloudLeft 20s linear infinite; /* Horizontal animation remains */
        animation-delay: 5s;
        transform: scale(-1); /* Flip the cloud horizontally */
    }

    .cloud-2 {
        aspect-ratio: 1/1;
        width: 30vw; /* Width of the cloud */
        background-image: url('/cloud.png');
        top: 30%;
        right: 0%;  
        animation: moveCloudRight 15s linear infinite; /* Horizontal animation remains */
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
        transition: all 300ms ease-in-out;
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
        margin-top: 10rem; /* Add space below the splash screen */
        padding: 1rem;
        max-width: 1200px;
        background: rgb(240, 247, 255); /* Semi-transparent white background */
        box-shadow: 0 0 20px 1.5rem rgb(240, 247, 255); /* Blur border effect */
        text-align: center;
        z-index: 5;
    }

    .about-me-container h2 {
        font-family: "Lexend Giga", sans-serif;
        font-size: 3.5rem;
        font-style: italic;
        letter-spacing: 0.5rem;
        color: rgb(25, 125, 255);
        margin-bottom: 1rem;
    }

    .about-me-container p {
        font-family: "Syne Mono", monospace;
        font-size: 1.7rem;
        color: rgb(0, 26, 112);
        line-height: 1.6;
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
            transform: translateX(10vw); /* Start off-screen */
            opacity: 0;
        }

        20% {
            opacity: 1; /* Center of the viewport */
        }
        
        100% {
            transform: translateX(30vw); /* Move across the viewport */
            opacity: 0;
        }
    }

    @keyframes moveCloudRight {
        0% {
            transform: translateX(-10vw); /* Start off-screen */
            opacity: 0;
        }

        20% {
            opacity: 1; /* Center of the viewport */
        }
        
        100% {
            transform: translateX(-30vw); /* Move across the viewport */
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

    @keyframes bounce {
        0% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(50px);
        }
        100% {
            transform: translateY(0);
        }
    }

</style>