import React, { useEffect } from 'react';
import './Hero.sass';

function Hero() {
    useEffect(() => {
        const hero = document.querySelector('.hero-image');

        const handleScroll = () => {
            // Calculate the background position offset based on the current scroll position
            const offset = window.pageYOffset * 0.5;
            hero.style.backgroundPositionY = `${offset}px`;
        };

        // Improved performance by marking the scroll event as passive
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="hero-image">
            <div className="hero-content">
                <h1>Welcome to Riptide</h1>
                <p>Explore the depths of our services.</p>
            </div>
        </div>
    );
}

export default Hero;
