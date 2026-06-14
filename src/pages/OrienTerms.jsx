import React, { useEffect } from 'react';
import './Orien.css';

const OrienTerms = () => {
    useEffect(() => {
        document.title = "Orien | Terms of Use";
    }, []);

    return (
        <div className="orien-page">
            <div className="orien-container" style={{ padding: '8rem 2rem' }}>
                <div className="tech-spec" style={{ textAlign: 'left', maxWidth: '800px', margin: '0 auto' }}>
                    <h1 className="orien-h1">Orien Terms of Use</h1>
                    <p className="orien-body" style={{ opacity: 0.7 }}>Last updated: December 19, 2025</p>

                    <div style={{ marginTop: '3rem' }}>
                        <p className="orien-body">
                            Orien is provided as a free application intended to offer an alternative, hands-free interaction method for communication and navigation.
                        </p>

                        <hr style={{ margin: '3rem 0', opacity: 0.1, border: 'none', borderTop: '1px solid currentColor' }} />

                        <h2 className="orien-h2">Disclaimer</h2>
                        <p className="orien-body">
                            Orien is not a medical device and does not provide medical advice, diagnosis, or treatment. The app does not replace system accessibility features or professional assistive technologies.
                        </p>
                        <p className="orien-body">
                            Use of the app is at your own discretion and risk. Midwest Creation Studio LLC makes no guarantees regarding suitability for any specific condition or use case.
                        </p>

                        <hr style={{ margin: '3rem 0', opacity: 0.1, border: 'none', borderTop: '1px solid currentColor' }} />

                        <h2 className="orien-h2">Privacy & Camera Usage</h2>
                        <p className="orien-body">
                            The device camera is used solely to enable hands-free interaction. No photos or videos are stored, recorded, or transmitted by Orien.
                        </p>

                        <hr style={{ margin: '3rem 0', opacity: 0.1, border: 'none', borderTop: '1px solid currentColor' }} />

                        <h2 className="orien-h2">No Warranties</h2>
                        <p className="orien-body">
                            The app is provided “as is” without warranties of any kind. We may update or modify the app at any time.
                        </p>

                        <hr style={{ margin: '3rem 0', opacity: 0.1, border: 'none', borderTop: '1px solid currentColor' }} />

                        <h2 className="orien-h2">Agreement</h2>
                        <p className="orien-body">
                            By using Orien, you agree to these Terms of Use.
                        </p>

                        <hr style={{ margin: '3rem 0', opacity: 0.1, border: 'none', borderTop: '1px solid currentColor' }} />

                        <h2 className="orien-h2">Contact</h2>
                        <p className="orien-body">If you have questions about these Terms, you may contact:</p>
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

export default OrienTerms;
