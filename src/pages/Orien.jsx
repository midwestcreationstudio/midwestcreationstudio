import React, { useEffect, useState } from 'react';
import './Orien.css';

// Assets
import heroImg from '../assets/orien/hero.png';
import navImg from '../assets/orien/navigation.png';
import typeImg from '../assets/orien/type.png';
import controlImg from '../assets/orien/control.png';
import memoriesImg from '../assets/orien/memories.png';
import appStoreDark from '../assets/orien/app-store-dark.png';
import appStoreLight from '../assets/orien/app-store-light.png';

const Orien = () => {
    const [theme, setTheme] = useState(document.documentElement.getAttribute('data-theme') || 'dark');

    useEffect(() => {
        document.title = "Orien | Free Eye-Tracking AAC for ALS";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Hands-free communication app for iOS. No head tracking required. Download for free.");
        }

        // Listen for theme changes if the app supports it dynamically
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'data-theme') {
                    setTheme(document.documentElement.getAttribute('data-theme') || 'dark');
                }
            });
        });

        observer.observe(document.documentElement, { attributes: true });
        return () => observer.disconnect();
    }, []);

    const badgeSrc = theme === 'light' ? appStoreLight : appStoreDark;

    return (
        <div className="orien-page">
            {/* Hero Section */}
            <section className="orien-section">
                <div className="orien-container">
                    <div className="feature-block">
                        <div className="hero-content">
                            <h1 className="orien-h1">SPEAK WITH YOUR EYES.</h1>
                            <p className="orien-subhead">
                                Hands-free communication designed for accessibility and independence.
                            </p>
                            <p className="orien-body">
                                Orien is a free iOS app that enables hands-free interaction using facial movement and dwell-based focus. Navigate, communicate, and access your device without touch.
                                <br /><br />
                                <strong>Designed for accessibility. Built for independence.</strong>
                            </p>
                            <div className="cta-group">
                                <a href="https://apple.co/orien" target="_blank" rel="noopener noreferrer" className="app-store-button">
                                    <img src={badgeSrc} alt="Download on the App Store" style={{ height: '44px' }} />
                                </a>
                                <div className="privacy-shield" style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '8px', opacity: 0.8 }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.14 7.75-7 8.99V12H5V6.3l7-3.11v8.8z" />
                                    </svg>
                                    <span style={{ fontSize: '0.9rem' }}>100% On-Device Processing. No video data leaves your phone.</span>
                                </div>
                            </div>
                        </div>
                        <div className="device-frame">
                            <img src={heroImg} alt="Orien Splash Screen" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 1: Effortless Navigation */}
            <section className="orien-section">
                <div className="orien-container">
                    <div className="feature-block reversed">
                        <div className="feature-content">
                            <h2 className="orien-h2">Effortless Navigation</h2>
                            <h3 className="orien-subhead" style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Large, high-contrast buttons designed for easy selection.</h3>
                            <p className="orien-body">
                                Orien’s interface is intentionally simple. Oversized, high-contrast controls reduce visual strain and make navigation predictable and reliable when using hands-free input.
                                <br /><br />
                                Users move between sections using dwell-based focus — no tapping, swiping, or fine motor control required.
                            </p>
                        </div>
                        <div className="device-frame">
                            <img src={navImg} alt="Effortless Navigation" loading="lazy" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Type Without Touch */}
            <section className="orien-section">
                <div className="orien-container">
                    <div className="feature-block">
                        <div className="feature-content">
                            <h2 className="orien-h2">Type Without Touch</h2>
                            <h3 className="orien-subhead" style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Precision eye-tracking keyboard with instant voice output.</h3>
                            <p className="orien-body">
                                Compose messages completely hands-free using Orien’s dwell-based keyboard. Each key is selected by focused gaze and confirm with just a blink.
                            </p>
                            <ul className="tech-list" style={{ color: 'var(--orien-text-secondary)', fontSize: '1.125rem' }}>
                                <li>Adjustable dwell timing</li>
                                <li>Clear visual feedback</li>
                                <li>Optional instant voice output</li>
                            </ul>
                            <p className="orien-body">
                                Messages can be fully typed and prepared before sending, allowing users to communicate at their own pace.
                            </p>
                        </div>
                        <div className="device-frame">
                            <img src={typeImg} alt="Type Without Touch" loading="lazy" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Intuitive Control */}
            <section className="orien-section">
                <div className="orien-container">
                    <div className="feature-block reversed">
                        <div className="feature-content">
                            <h2 className="orien-h2">Intuitive Control</h2>
                            <h3 className="orien-subhead" style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Smart “dwell-to-click” safety prevents accidental selections.</h3>
                            <p className="orien-body">
                                Orien is designed to reduce errors. Selections only activate after intentional focus, helping prevent accidental clicks caused by natural movement.
                                <br /><br />
                                Visual indicators and timing controls give users confidence and consistency while navigating the app.
                            </p>
                        </div>
                        <div className="device-frame">
                            <img src={controlImg} alt="Intuitive Control" loading="lazy" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: Your World, Your Memories */}
            <section className="orien-section">
                <div className="orien-container">
                    <div className="feature-block">
                        <div className="feature-content">
                            <h2 className="orien-h2">Your World, Your Memories</h2>
                            <h3 className="orien-subhead" style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Access your photos and videos completely hands-free.</h3>
                            <p className="orien-body">
                                Browse your photo library and watch videos without touching the screen. Orien enables hands-free access to personal media while preserving familiar system behaviors like confirmations and navigation cues.
                                <br /><br />
                                Your content stays private and on-device — Orien simply provides an alternative way to interact.
                            </p>
                        </div>
                        <div className="device-frame">
                            <img src={memoriesImg} alt="Your Memories" loading="lazy" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5: About System-Level Actions */}
            <section className="orien-section" style={{ background: 'rgba(255,255,255,0.02)' }}>
                <div className="orien-container">
                    <div className="tech-spec" style={{ background: 'transparent', border: 'none', padding: '0' }}>
                        <h2 className="orien-h2" style={{ textAlign: 'center' }}>About System-Level Actions</h2>
                        <h3 className="orien-subhead" style={{ textAlign: 'center', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 1.5rem' }}>
                            Orien is designed to prepare actions hands-free while respecting iOS system boundaries.
                        </h3>
                        <p className="orien-body" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                            Access to photos, videos, and contacts is optional and controlled by the user. Orien does not manage device-level actions such as permanent deletion or message sending. Those actions remain under standard iOS control, as they would when using the device normally.
                        </p>
                    </div>
                </div>
            </section>

            {/* Section 6: Guided From the Start */}
            <section className="orien-section">
                <div className="orien-container">
                    <div className="tech-spec">
                        <h2 className="orien-h2" style={{ textAlign: 'center' }}>Guided From the Start</h2>
                        <h3 className="orien-subhead" style={{ textAlign: 'center', fontSize: '1.2rem' }}>Built-in walkthrough with spoken guidance.</h3>
                        <p className="orien-body" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem' }}>
                            Orien includes a guided tutorial that explains each section out loud and demonstrates how to navigate, type, and adjust settings. New users are never left guessing.
                            <br /><br />
                            Interaction speed and sensitivity can be adjusted at any time to match individual comfort and ability.
                        </p>
                    </div>
                </div>
            </section>

            {/* Final CTA / Closing */}
            < section className="orien-section" style={{ textAlign: 'center', background: 'rgba(0,0,0,0.2)' }}>
                <div className="orien-container">
                    <h2 className="orien-h2">Free. Accessible. Built to Empower.</h2>
                    <p className="orien-body" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
                        Orien is free to use and designed to make hands-free interaction more accessible to everyone who needs it.
                    </p>
                    <a href="https://apple.co/orien" target="_blank" rel="noopener noreferrer">
                        <img src={badgeSrc} alt="Download on the App Store" style={{ height: '54px' }} />
                    </a>
                </div>
            </section >

            {/* Footer Section */}
            <footer className="orien-section" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="orien-container" style={{ textAlign: 'center' }}>
                    <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                        <a href="/orien/support" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.8 }}>Support</a>
                        <a href="/orien/privacy" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.8 }}>Privacy Policy</a>
                        <a href="/orien/terms" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.8 }}>Terms of Use</a>
                    </div>
                    <p style={{ opacity: 0.5, fontSize: '0.9rem' }}>© 2025 Midwest Creation Studio LLC. Orien was built in the Green Bay area.</p>
                </div>
            </footer>
        </div >
    );
};

export default Orien;
