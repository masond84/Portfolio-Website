import React from 'react'
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

// assets
import { mongodb, react, linkedin } from '../assets/icons'

const SkillBar = ({ percentage }) => {
    

    const props = useSpring({ 
        from: {width: "0%"},
        to: { width: percentage},
        reset: true,
    });

    return (
        <animated.div 
            style={{
                ...props, 
                height: '5px',
                background: 'green',
                borderRadius: '5px',
            }}
        />
    );
};

const ServiceCard = ({ icon, title, description, skillPercentage='0%' }) => {
    const [ ref, inView ] = useInView({
        threshold: 0.1,
        triggerOnce: true
    });
    const [ isHovered, setHovered ] = React.useState(false);

    // Come Into View Animation
    const cardAnimation = useSpring({
        opacity: inView ? 1: 0,
        transform: inView ? 'translateY(0) rotateX(0deg)' : 'translateY(50px) rotateX(90deg)',
        config: { mass: 5, tension: 350, friction: 40 }
    });

    // Hover animations
    const hoverAnimation = useSpring({
        transform: isHovered ? 'scale(1.05) rotateY(5deg)' : 'scale(1) rotateY(0deg)',
        boxShadow: isHovered ? '0 10px 30px rgba(0, 0, 0, 0.5)' : '0 5px 15px rgba(0, 0, 0, 0.25)',
        config: { mass: 1, tension: 500, friction: 15 },
    });

    return (
        <animated.div 
            ref={ref}
            style={ {...cardAnimation, ...hoverAnimation} }
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="flex flex-col items-center p-4 shadow-custom rounded-lg transition-all duration-300 w-full md:w-1/4 lg:w-1/5 xl:w-1/6 min-h-[250px]"
        >
            <img src={icon} alt={title} className='w-12 h-12 mb-3'/>
            <h3 className="text-lg font-semibold mb-2`">{title}</h3>
            <p className="text-gray-400 text-sm text-center font-medium flex-grow mt-4 mb-4">{description}</p>
            <SkillBar percentage={skillPercentage} />
        </animated.div>    
    );
};

const ServiceSection = () => {
  return (
    <section className='text-center py-16 bg-gray-900 text-white'>
        <h2 className="text-3xl md:text-5xl lg:text-6xl leading-tight tracking-tighter font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-300">Innovation With Endless Curiosity</h2>
        <p className='max-w-xl mx-auto mb-12'>
            A passion for lifelong learning guides my pursit of technical mastery.
            Each new framework, or methodology is a chapter in my ongoing story of growth and relentless pursuit of knowledge.
        </p>
        <hr className='border-t border-[#303030] py-5'/>
        <div className='flex flex-wrap justify-around gap-4 md:gap-8 px-4'>
            <ServiceCard 
                icon={mongodb}
                title="Data Analysis & Automation"
                description="
                I enjoy transforming data into insights, offering comprehensive Data Analysis skillsets.
                Utilizing Python, Excel, and various data applications, I will ensure efficient and insightful solutions to drive insightful decision-making.
                "
                skillPercentage='75%'
            />
            <ServiceCard 
                icon={react}
                title="Full-Stack & Software Development"
                description="
                Covering both front-end and back-end technologies -  
                I leverage a robust skill set in Django, and React.js to build dynamic and responsive applications.
                I will ensure scalable, efficient, and innovative software solutions.
                "  
                skillPercentage='50%'        
            />
            <ServiceCard 
                icon={linkedin}
                title="Business & Lead Generation Services"
                description="
                My skills in Business Acquistion are designed to expand your market reach. 
                Leveraging cutting-edge strategies and tools, 
                I focus on creating opportunities that increase your brand's impact and drive growth.
                "
                skillPercentage='75%'
            />
        </div>
    </section>
  )
}


export default ServiceSection;