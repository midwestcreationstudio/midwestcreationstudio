import React, { useEffect } from 'react';
import './Orien.css';

const OrienSupport = () => {
    useEffect(() => {
        document.title = "Orien | Support & Compatibility";
    }, []);

    return (
        <div className="orien-page">
            <div className="orien-container" style={{ padding: '8rem 2rem' }}>
                <div className="tech-spec" style={{ textAlign: 'left', maxWidth: '800px', margin: '0 auto' }}>
                    <h1 className="orien-h1">Device Compatibility Guide</h1>

                    <p className="orien-body">
                        Orien utilizes Apple's <strong>ARKit Face Tracking</strong> technology to enable precise eye-gaze navigation and interaction. To use Orien, your device must be equipped with a front-facing <strong>TrueDepth Camera</strong> or an <strong>A12 Bionic chip (or later)</strong>.
                    </p>

                    <div style={{ marginTop: '3rem' }}>
                        <h2 className="orien-h2">Compatible iPhone Models</h2>
                        <p className="orien-body">Orien is compatible with iPhones featuring FaceID (TrueDepth camera system):</p>
                        <ul className="tech-list" style={{ columns: '2', columnGap: '2rem' }}>
                            <li>iPhone 17, Pro, Pro Max & iPhone Air</li>
                            <li>iPhone 16, Plus, Pro, Pro Max, 16e</li>
                            <li>iPhone 15, Plus, Pro, Pro Max</li>
                            <li>iPhone 14, Plus, Pro, Pro Max</li>
                            <li>iPhone 13, mini, Pro, Pro Max</li>
                            <li>iPhone 12, mini, Pro, Pro Max</li>
                            <li>iPhone 11, Pro, Pro Max</li>
                            <li>iPhone XS & XS Max</li>
                            <li>iPhone XR</li>
                            <li>iPhone SE (2020, 2022)</li>
                        </ul>

                        <hr style={{ margin: '3rem 0', opacity: 0.1, border: 'none', borderTop: '1px solid currentColor' }} />

                        <h2 className="orien-h2">Compatible iPad Models</h2>
                        <p className="orien-body">Orien supports iPad models equipped with the TrueDepth camera system:</p>
                        <ul className="tech-list">
                            <li>iPad Pro 12.9-inch: 3rd Generation (2018) and newer</li>
                            <li>iPad Pro 11-inch: 1st Generation (2018) and newer</li>
                            <li>iPad Air: 4th Generation (2020) and newer</li>
                            <li>iPad mini: 6th Generation (2021) and newer</li>
                        </ul>

                        <div style={{
                            marginTop: '2rem',
                            padding: '1.5rem',
                            background: 'rgba(255,255,255,0.05)',
                            borderRadius: '12px',
                            border: '1px solid var(--orien-accent-glow)',
                            color: 'var(--orien-text-secondary)'
                        }}>
                            <p style={{ margin: 0, fontSize: '0.95rem' }}>
                                <strong>Note:</strong> For the best eye-tracking experience, we recommend using a device with a <strong>TrueDepth camera</strong> (FaceID) for superior precision and stability.
                            </p>
                        </div>

                        <hr style={{ margin: '3rem 0', opacity: 0.1, border: 'none', borderTop: '1px solid currentColor' }} />

                        <h2 className="orien-h2">Software Requirements</h2>
                        <ul className="tech-list">
                            <li><strong>iOS/iPadOS:</strong> Version 17.0 or later</li>
                            <li><strong>Permissions:</strong> Orien requires access to the <strong>Camera</strong> to perform face and eye tracking. No video or image data is ever recorded or transmitted off the device.</li>
                        </ul>

                        <hr style={{ margin: '3rem 0', opacity: 0.1, border: 'none', borderTop: '1px solid currentColor' }} />

                        <h2 className="orien-h2">Still Need Help?</h2>
                        <p className="orien-body">If you have questions about device compatibility or need technical assistance, please contact us:</p>
                        <div style={{ marginTop: '1.5rem', padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
                            <p className="orien-body" style={{ margin: 0 }}>
                                <strong>Midwest Creation Studio LLC</strong><br />
                                <a href="mailto:midwestcreationstudio@gmail.com" style={{
                                    color: 'inherit',
                                    overflowWrap: 'anywhere',
                                    fontSize: '0.95em'
                                }}>midwestcreationstudio@gmail.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
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
        </div>
    );
};

export default OrienSupport;
