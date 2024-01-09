import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import arrow from '../assets/icons/arrow.svg'; // Make sure to import the arrow icon correctly

const AnimatedButton = ({ link, text="View More" }) => {
    const [hover, setHover] = React.useState(false);

    const animation = useSpring({
        width: hover ? '100%' : '0%', // Animate width from 0% to 100%
    });

    return (
        <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
            position: 'relative',
            padding: '0.5rem 1rem',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            borderRadius: '20px', // Makes the button rounded
            overflow: 'hidden', // Ensures the pseudo-element doesn't overflow the button's rounded corners
        }}
        >
        <animated.div
            style={{
            ...animation,
            position: 'absolute',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, #0061ff -20%, #60efff 120%)',
            zIndex: 0,
            }}
        />
        <Link
            to={link}
            style={{
            position: 'relative',
            textDecoration: 'none',
            color: hover ? 'white' : 'blue',
            zIndex: 1,
            }}
        >
            {text}
        </Link>
        <img
            src={arrow}
            alt="arrow"
            style={{
            width: '16px', // Adjust as needed
            height: '16px', // Adjust as needed
            position: 'relative',
            zIndex: 1,
            }}
        />
        </div>
    );
};

export default AnimatedButton;