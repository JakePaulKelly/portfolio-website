<script> 
    import { base } from '$app/paths';
</script>

<div class="sky-background"></div>

<div class="cv-container">
    <h1>CV</h1>
    
    <div class="pdf-frame">
        <iframe src="{base}/example.pdf" title="CV"></iframe>
    </div>
    
    <a href="{base}/example.pdf" download class="download-btn">download pdf ᕦ(ᐛ)ᕤ</a>
</div>

<style>
    .cv-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem 1rem;
        min-height: 80vh;
    }
    
    h1 {
        font-family: "Lexend Giga", sans-serif;
        font-size: 5rem;
        letter-spacing: 0.8rem;
        color: white;
        margin-bottom: 2rem;
    }
    
    .pdf-frame {
        width: 90%;
        max-width: 900px;
        height: 70vh;
        border-radius: 10px;
        overflow: hidden;
        background: white;
        box-shadow: 0 0 20px rgba(0, 38, 144, 0.5);
        margin-bottom: 2rem;
    }
    
    iframe {
        width: 100%;
        height: 100%;
        border: none;
    }
    
    .download-btn {
        background-color: white;
        color: rgb(0, 38, 144);
        font-family: "Syne Mono", monospace;
        padding: 0.8rem 1.5rem;
        font-size: 1.2rem;
        text-decoration: none;
    }
    
    /* Responsive styles */
    @media (max-width: 768px) {
        h1 {
            font-size: 3.5rem;
        }
    }
    
    @media (max-width: 480px) {
        h1 {
            font-size: 2.5rem;
        }
        
        .pdf-frame {
            width: 100%;
        }
    }
</style>
