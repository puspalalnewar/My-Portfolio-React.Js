import React from 'react'
import ProjectCard from './ProjectCard'

// Projects Images
import ageCal from '../Assets/age-calculator.png';
import currencyConverter from '../Assets/currency-converter.png'
import dictionary from '../Assets/dictionary.png'
import expenseTracker from '../Assets/expense-tracker.png'
import powCal from '../Assets/power-calculator.png'
import quote from'../Assets/quote-app.png'


import html from '../Assets/html.png'
import css3 from '../Assets/css3.svg'
import js from '../Assets/javascript.svg'
// import react from '../Assets/react.svg'
// import tailwindcss from '../Assets/tailwindcss.svg'



const data = [
    {
        id : 1,
        projectName : "Currency Converter",
        projectImg: currencyConverter,
        tools : [html, css3, js],
        githubLink : "https://github.com/puspalalnewar/currency-converter",
        netlifyLink : "https://pn-currency-converter.netlify.app",
    },
    {
        id : 2,
        projectName : "Age Calculator",
        projectImg: ageCal,
        tools : [html, css3, js],
        githubLink : "https://github.com/puspalalnewar/Age-Calculator",
        netlifyLink : "https://pn-age-calculator.netlify.app",
    },
    {
        id : 3,
        projectName : "Dictionary Web App",
        projectImg: dictionary,
        tools : [html, css3, js],
        githubLink : "https://github.com/puspalalnewar/English-Dictionary",
        netlifyLink : "https://pn-eng-dictionary.netlify.app",
    },
    {
        id : 4,
        projectName : "Power Calculator",
        projectImg: powCal,
        tools : [html, css3, js],
        githubLink : "https://github.com/puspalalnewar/Power-Calculator",
        netlifyLink : "https://newar-power-calculator.netlify.app",
    },
    {
        id : 5,
        projectName : "Expense Tracker",
        projectImg: expenseTracker,
        tools : [html, css3, js],
        githubLink : "https://github.com/puspalalnewar/Expense-Tracker",
        netlifyLink : "https://pn-expense-tracker.netlify.app",
    },
    {
        id : 6,
        projectName : "Random Quote Generator",
        projectImg: quote,
        tools : [html, css3, js],
        githubLink : "https://github.com/puspalalnewar/random-quote-generator",
        netlifyLink : "https://pn-quote-generator.netlify.app",
    },
]

const Projects = () => {
    return (
        <div className='max-w-screen-lg m-auto mt-20'>
            <p className='text-[2rem] font-medium'>My Portfolio Highlights</p>
            <div className="box flex gap-[1rem] flex-wrap justify-center mt-[1rem] p-4">
                
                {
                    data.map((val)=>{
                        return (
                            <div key = {val.id}>
                                <ProjectCard {...val}/>
                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}

export default Projects
