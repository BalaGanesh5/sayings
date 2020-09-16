import React from 'react'
import { useSpring, a } from 'react-spring';
import ParticlesBg from "particles-bg"
import './Card.css';
import MouseParticles from "react-mouse-particles";


const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(900px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`


const Card = ({ advice, onClick }) => {

    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    const [prop, sets] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 1, tension: 350, friction: 4 } }))
    return (
        <div className="container">
            
            <a.div className="card"
                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: props.xys.interpolate(trans) }}
            >
                <h3 className="advice">{advice}</h3>
                <ParticlesBg  num={4}  type="circle" radius={2} bg={true} />
            </a.div>
           
            <a.div
             onMouseMove={({ clientX: x, clientY: y }) => sets({ xys: calc(x, y) })}
             onMouseLeave={() => sets({ xys: [0, 0, 1] })}
             style={{ transform: prop.xys.interpolate(trans) }}
            >
                <button className="button" 
                onClick={onClick}>Moon<br/>Sayings
                 </button>
                 <MouseParticles g={0} life={2} num={2} color="random" cull="button" level={3} />
            </a.div>
           
        </div>
    )
}

export default Card
