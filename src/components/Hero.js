import './Hero.sass';

function Hero() {
    return (
        <div className="hero">
            <div className="hero__content">
                <div className="hero__video-container">
                    <video className="hero__video" autoPlay muted loop>
                        <source src="https://template-riptide.s3.us-west-1.amazonaws.com/hero-video-compressed.mp4" type="video/mp4" />
                    </video>
                </div>
                <img className="hero__logo" src="https://template-riptide.s3.us-west-1.amazonaws.com/riptide-western-gold.png" alt="Logo" />
                <div className="hero__scroll-arrow">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 9l6 6 6-6" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default Hero;
