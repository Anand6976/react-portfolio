import React from 'react';
import SkillsBox from './SkillsBox';
import reactImg from '../../assets/skills/react.svg'
import nodeImg from '../../assets/skills/nodejs.svg'
import expressImg from '../../assets/skills/express.svg'
import mySqlImg from '../../assets/skills/mysql.png'
import mongoDb from '../../assets/skills/mongoDb.png'
import HtmlImg from '../../assets/skills/html.svg'
import CSSImg from '../../assets/skills/CSS3.svg'
import JavaImg from '../../assets/skills/java.svg'
import JavaScriptImg from '../../assets/skills/js.svg'
import TailwindImg from '../../assets/skills/tailwind.png'
import bootstrapImg from '../../assets/skills/bootstrap.png'
import github from '../../assets/skills/github.png'


const Skills = () => {
    let skillsArray = [
        { name: "React", icon: reactImg },
        { name: "Node.js", icon: nodeImg },
        { name: "Express.js", icon: expressImg },
        { name: "mySql", icon: mySqlImg },
        { name: "mongoDb", icon: mongoDb },
        { name: "HTML", icon: HtmlImg },
        { name: "CSS3", icon: CSSImg },
        { name: "Javascript", icon: JavaScriptImg },
        { name: "Tailwind", icon: TailwindImg },
        { name: "Bootstrap", icon: bootstrapImg },
        { name: "Java", icon: JavaImg },
        { name: "Git/Github", icon: github },
    ];

    return (
        <div className='w-full min-h-fit sm:h-screen text-custom-textColor flex flex-col justify-start items-center'>
            <div className='w-full p-2 flex flex-row justify-center items-center text-xl sm:text-5xl mt-5 font-bold'>
                <div>My Skills and</div>
                <div className='px-3 text-custom-linkActive'>Abilities</div>
            </div>
            <div className='w-full p-2 h-full flex flex-row justify-center mt-5 flex-wrap'>
                {
                    skillsArray.map((c, i) => (
                        <SkillsBox name={c.name} icon={c.icon} key={i}>
                            {c}
                        </SkillsBox>
                    ))
                }
            </div>
        </div>
    );
}

export default Skills;
