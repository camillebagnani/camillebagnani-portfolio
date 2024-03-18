import Header from "../components/Header";
import Project from "../components/Project";

export default function Portfolio() {
    return (
        <div>
            <Header pageTitle={"Portfolio"} />
            <div className="projects-container">

                <Project
                    title='Weather Dashboard'
                    imageLink='../public/images/weather-dashboard.png'
                    deployedApp='https://camillebagnani.github.io/weather-dashboard/'
                    repo='https://github.com/camillebagnani/weather-dashboard'
                />

                <Project
                    title='Tech Blog'
                    imageLink='../public/images/techblog.png'
                    deployedApp='https://obscure-hollows-81993-50a0068ee144.herokuapp.com/login'
                    repo='https://github.com/camillebagnani/tech_blog'
                />

                <Project
                    title='Gym Personal Record Tracker'
                    imageLink='../public/images/hellsgatedashboard.png'
                    deployedApp='https://github.com/camillebagnani/Hells-Gate-PR'
                    repo='https://github.com/camillebagnani/Hells-Gate-PR'
                />

                <Project
                    title='NoSQL Social Network API'
                    imageLink='../public/images/nosql-insomnia-routes.png'
                    deployedApp='https://github.com/camillebagnani/nosql-social-network-api'
                    repo='https://github.com/camillebagnani/nosql-social-network-api'
                />

                <Project
                    title='Work Day Scheduler'
                    imageLink='../public/images/workdayscheduler.png'
                    deployedApp='https://camillebagnani.github.io/work-day-scheduler/'
                    repo='https://github.com/camillebagnani/work-day-scheduler'
                />

                <Project
                    title='Employee Tracker'
                    imageLink='../public/images/applicationoptions.png'
                    deployedApp='https://github.com/camillebagnani/employee_tracker'
                    repo='https://github.com/camillebagnani/employee_tracker'
                />

            </div>
            {/* <Project props={{title: 'Weather Dashboard', imageLink:'../src/public/images/weather-dashboard.png', deployedApp: 'https://camillebagnani.github.io/weather-dashboard/', repo: 'https://github.com/camillebagnani/weather-dashboard'}} /> */}
        </div>
    )
}