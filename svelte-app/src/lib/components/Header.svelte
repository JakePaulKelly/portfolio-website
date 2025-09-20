<script>
    import { base } from '$app/paths';
    import { page } from '$app/stores';
    
    // Navigation items
    const navItems = [
        { href: `${base}/`, label: 'home' },
        { href: `${base}/portfolio`, label: 'portfolio' },
        { href: `${base}/cv`, label: 'cv' }
    ];
    
    // Mobile menu state
    let mobileMenuOpen = false;
    
    function toggleMobileMenu() {
        mobileMenuOpen = !mobileMenuOpen;
    }
    
    function closeMobileMenu() {
        mobileMenuOpen = false;
    }
</script>

<header class="main-header">
    <div class="header-content">
        <!-- Logo/Home link on the left -->
        <a href="{base}/" class="logo-link">
            <span class="logo">:-)</span>
        </a>

        <!-- Navigation tabs on the right -->
        <nav class="nav-tabs" class:mobile-open={mobileMenuOpen}>
            {#each navItems as item}
                <a 
                    href={item.href} 
                    class="nav-tab"
                    class:active={$page.url.pathname === item.href || ($page.url.pathname === `${base}/` && item.href === `${base}/`)}
                    on:click={closeMobileMenu}
                >
                    {item.label}
                </a>
            {/each}
        </nav>

        <!-- Mobile menu button -->
        <button class="mobile-menu-btn" on:click={toggleMobileMenu}>
            {mobileMenuOpen ? '✕' : '☰'}
        </button>
    </div>
</header>

<style>
    .main-header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
        background: rgba(172, 211, 255, 0.45);
        backdrop-filter: blur(10px);
        border-bottom: 1px solid rgba(0, 38, 144, 0.1);
        /* Slide down animation */
        opacity: 0;
        transform: translateY(-100%);
        animation: slideDownHeader 0.8s ease-out 0.2s forwards;
    }

    @keyframes slideDownHeader {
        0% {
            opacity: 0;
            transform: translateY(-100%);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .header-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1400px;
        margin: 0 auto;
        padding: 0.75rem 2rem;
    }

    .logo-link {
        display: flex;
        align-items: center;
        transition: transform 0.3s ease;
        text-decoration: none;
    }

    .logo-link:hover {
        transform: scale(1.05);
    }

    .logo {
        font-family: "Syne Mono", monospace;
        font-size: 2.5rem;
        font-weight: 600;
        color: rgb(0, 26, 112);
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
    }

    .logo-link:hover .logo {
        color: rgb(255, 255, 255);
        transform: scale(1.1);
    }

    .nav-tabs {
        display: flex;
        gap: 2rem;
        align-items: center;
    }

    .nav-tab {
        font-family: "Syne Mono", monospace;
        font-size: 1.2rem;
        font-weight: 400;
        color: rgb(0, 26, 112);
        text-decoration: none;
        padding: 0.75rem 1.5rem;
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
    }

    .nav-tab:hover {
        background: rgba(255, 255, 255, 0.9);
        border-color: rgb(25, 125, 255);
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(25, 125, 255, 0.2);
        color: rgb(25, 125, 255);
    }

    .nav-tab.active {
        background: rgba(255, 255, 255, 0.95);
        box-shadow: 0 0 15px rgba(25, 125, 255, 0.2);
        color: rgb(25, 125, 255);
        font-weight: 500;
    }

    .mobile-menu-btn {
        display: none;
        background: rgba(255, 255, 255, 1);
        color: rgb(0, 26, 112);
        font-size: 1.5rem;
        padding: 0.5rem 0.75rem;
        cursor: pointer;
        transition: all 0.3s ease;
        font-family: "Syne Mono", monospace;
    }

    .mobile-menu-btn:hover {
        background: rgba(255, 255, 255, 0.9);
        border-color: rgb(25, 125, 255);
        color: rgb(25, 125, 255);
    }

    /* Responsive Design */
    @media (max-width: 768px) {
        .header-content {
            padding: 0.5rem 1rem;
        }

        .logo {
            font-size: 2rem;
        }

        .nav-tabs {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            flex-direction: column;
            background: rgba(240, 247, 255, 0.98);
            backdrop-filter: blur(10px);
            gap: 0;
            padding: 1rem;
            box-shadow: 0 5px 20px rgba(0, 38, 144, 0.2);
            transform: translateY(-10px);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            border-top: 1px solid rgba(0, 38, 144, 0.1);
        }

        .nav-tabs.mobile-open {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
        }

        .nav-tab {
            width: 100%;
            text-align: center;
            margin-bottom: 0.5rem;
            font-size: 1rem;
        }

        .nav-tab:last-child {
            margin-bottom: 0;
        }

        .mobile-menu-btn {
            display: block;
        }
    }

    @media (max-width: 480px) {
        .header-content {
            padding: 0.5rem 0.75rem;
        }

        .logo {
            font-size: 1.8rem;
        }

        .nav-tab {
            font-size: 0.9rem;
            padding: 0.6rem 1.2rem;
        }
    }

    /* Add some top padding to body content to account for fixed header */
    :global(main) {
        padding-top: 5rem;
    }

    @media (max-width: 768px) {
        :global(main) {
            padding-top: 4rem;
        }
    }

    @media (max-width: 480px) {
        :global(main) {
            padding-top: 3.5rem;
        }
    }
</style>