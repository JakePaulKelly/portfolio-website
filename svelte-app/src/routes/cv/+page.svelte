<div class="sky-background"></div>

<div class="cv-page">
    <div class="title-container">
        <h1>CV</h1>
    </div>

    <div class="pdf-container">
        <object 
            data="/example.pdf" 
            type="application/pdf" 
            class="pdf-viewer">
            <p>Your browser doesn't support embedded PDFs. <a href="/example.pdf" download>Download the PDF</a> instead.</p>
        </object>
    </div>

    <div class="download-link">
        <a href="/example.pdf" download>download pdf ᕦ(ᐛ)ᕤ </a>
    </div>
</div>

<style>
    .cv-page {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem 1rem;
        min-height: calc(100vh - 150px);
    }

    .title-container {
        margin-bottom: 2rem;
        text-align: center;
    }

    h1 {
        font-family: "Lexend Giga", sans-serif;
        font-size: 5rem;
        letter-spacing: 0.8rem;
        color: white;
        font-weight: 600;
        margin: 0;
        animation: fadeIn 1s ease-out;
    }

    .pdf-container {
        width: 90%;
        max-width: 900px;
        height: 70vh;
        background-color: rgba(255, 255, 255, 0.9);
        border-radius: 10px;
        box-shadow: 0 0 20px rgba(0, 38, 144, 0.5);
        overflow: hidden;
        margin-bottom: 2rem;
    }

    .pdf-viewer {
        width: 100%;
        height: 100%;
        border: none;
    }

    .download-link {
        margin-bottom: 2rem;
    }

    .download-link a {
        display: inline-block;
        background-color: rgb(255, 255, 255, 0.8);
        color: rgb(0, 38, 144);
        font-family: "Syne Mono", monospace;
        padding: 0.8rem 1.5rem;
        text-decoration: none;
        font-size: 1.2rem;
        transition: all 0.3s ease;
    }

    .download-link a:hover {
        transform: translateY(-2px);
    }

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
    }

    /* Responsive styles */
    @media (max-width: 768px) {
        h1 {
            font-size: 3.5rem;
            letter-spacing: 0.5rem;
        }

        .pdf-container {
            width: 95%;
            height: 65vh;
        }

        .download-link a {
            padding: 0.7rem 1.3rem;
            font-size: 1.1rem;
        }
    }

    @media (max-width: 480px) {
        h1 {
            font-size: 2.5rem;
            letter-spacing: 0.3rem;
        }

        .pdf-container {
            width: 100%;
            height: 70vh;
        }

        .download-link a {
            padding: 0.6rem 1.2rem;
            font-size: 1rem;
        }
    }
</style>
