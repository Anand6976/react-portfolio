import React from 'react';
import ProjectCard from './ProjectCard';
import noteapp from '../../assets/projects/noteapp.jpg'
import portfolio from '../../assets/projects/portfolio.jpg'
import calculator from '../../assets/projects/calculator.jpg'
import visualizer from '../../assets/projects/visualizer.jpg'
import snake from '../../assets/projects/snake.jpg'
import weather from '../../assets/projects/weather.jpg'

const Projects = (props) => {
    const projects = [
        {
            name: "Note App",
            img: noteapp,
            des: "Portfolio using React implementing React router , contextApi and TailwindCSS  with Light Modes",
            lag: "React , HTML , CSS",
            link: "https://github.com/Anand6976/Note-app"
        },
        {
            name: "React Portfolio website",
            img: portfolio,
            des: "Portfolio using React implementing React router , contextApi and TailwindCSS  with Dark and Light Modes",
            lag: "React , HTML , Tailwind",
            link: "https://github.com/abhayprasad565/portfolio-React"
        },
        {
            name: "Linked-List-Visualizer ",
            img: visualizer,
            des: "Developed a visualizer tool for linked lists to demonstrate data structure operations such as insertion, deletion,tra",
            lag: "HTML , CSS , JS ",
            link: "https://github.com/Anand6976/Linked-List-Visualizer"
        },
        {
            name: "Weather Webisite ",
            img: weather,
            des: "weather app to fetch data directly from api using bootstrap html css and javascript",
            lag: "HTML , CSS , JS Bootstrap ",
            link: "https://github.com/Anand6976/Weather-App"
        },
        // {
        //     name: "Calculator",
        //     img: reactRepo,
        //     des: "A Calculation ofthe all the functionalities like- addition , substraction, multipliction, division ",
        //     lag: " HTMl , css, javascript ",
        //     link: "https://github.com/Anand6976/Calculator"
        // },
        // {
        //     name: "Snake game ",
        //     img: snake,
        //     des: "memmory engancing user interactive game using HTML , CSS and JS",
        //     lag: "HTMl , CSS , JS",
        //     link: "https://github.com/Anand6976/Snake-Game"
        // },
    ];
    return (
        <div className='w-full sm:h-screen h-fit  text-custom-textColor p-4 '>
            <div className='w-full justify-center items-center flex flex-row text-5xl font-semibold'>
                <div>My</div>
                <div className='text-custom-linkActive px-2'>Projects</div>
            </div>
            <div className='w-full min-h-fit flex flex-row flex-wrap items-center justify-center'>
                {
                    projects.map((c, i) => (
                        <ProjectCard name={c.name} img={c.img} des={c.des} lag={c.lag} link={c.link} key={i}
                            darkMode={props.darkMode} >
                        </ProjectCard>
                    ))
                }
            </div>
        </div>
    );
}

export default Projects;
