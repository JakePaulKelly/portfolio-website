<div class="overlay">
    <div class="cloud cloud-1"></div>
    <div class="cloud cloud-2"></div>
    <div class="cloud cloud-3"></div>
</div>


<div class="jake_persona">
    <div class="reveal">
        <img src="/sketch logo-w-g-2.png" alt="Jake Persona" style="width: 350px" class="flex-image">
    </div>
</div>

<div class="reveal-text">
    <h1>Jake Kelly</h1>
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
        font-size: 5rem;
        letter-spacing: 1rem;
        color: white;
        font-weight: 500;
        text-align: center;
        margin: 0 auto;
        white-space: nowrap;
        padding-top: 1rem;
        margin-bottom: 1rem;
        z-index: 10;
    }

    .cloud {
        position:fixed  ;
        background-image: url('/cloud.png');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        pointer-events: none;
    }

    .cloud-1 {
        width: 600px;
        height: 350px;
        top: 10%;
        animation: moveCloud 60s linear infinite;
        transform: scaleX(-1);
    }

    .cloud-2 {
        width: 600px;
        height: 500px;
        top: 30%;
        left: 450px;   
        animation: moveCloud 40s linear infinite;
        z-index: 2;
    }

    .cloud-3 {
        width: 600px;
        height: 350px;
        top: 50%;
        left: -500px;
        opacity:0.5;
        animation: moveCloud 60s linear infinite;
    }

    
    .jake_persona {
        max-width: 120px;
        margin: 0 auto;
        height: 65vh;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 1rem;
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
    }

    @keyframes moveCloud {
        0% {
            left: -600px;
        }
        100% {
            left: 100%;
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

</style>

