import Header from "../components/Header";
import Project from "../components/Project";
import weatherDashboard from "../../public/images/weatherdashboard.gif"
import techBlog from "../../public/images/thetechblog.gif"
import hellsgatepr from "../../public/images/hellsgatepr.gif"
import socialnetworkapi from "../../public/images/socialnetworkapi.gif"
import workdayscheduler from "../../public/images/workdayscheduler.gif"
import ecommercebackend from "../../public/images/ecommercebackend.gif"

export default function Portfolio() {
    return (
        <div>
            <Header pageTitle={"Portfolio"} />
            <div className="projects-container">

                <Project
                    title='Weather Dashboard'
                    imageLink={weatherDashboard}
                    highlights='Third-party APIs, Bootstrap, jQuery'
                    deployedApp='https://camillebagnani.github.io/weather-dashboard/'
                    repo='https://github.com/camillebagnani/weather-dashboard'
                />

                <Project
                    title='Tech Blog'
                    imageLink={techBlog}
                    highlights='Node, Express, MySQL, Sequelize, Bcrypt'
                    deployedApp='https://obscure-hollows-81993-50a0068ee144.herokuapp.com/'
                    repo='https://github.com/camillebagnani/tech_blog'
                />

                <Project
                    title='Gym Lift Tracker'
                    imageLink={hellsgatepr}
                    highlights='Node, Express, MySQL, Sequelize, Bcrypt, Chart.js'
                    deployedApp='https://secret-spire-07174-9e0cafb948bb.herokuapp.com/'
                    repo='https://github.com/camillebagnani/Hells-Gate-PR'
                />

                <Project
                    title='Social Network API'
                    imageLink={socialnetworkapi}
                    highlights='Node, Express, NoSQL, MongoDB, Mongoose'
                    repo='https://github.com/camillebagnani/nosql-social-network-api'
                />

                <Project
                    title='Work Day Scheduler'
                    imageLink={workdayscheduler}
                    highlights='Third-party APIs, Day.js, jQuery'
                    deployedApp='https://camillebagnani.github.io/work-day-scheduler/'
                    repo='https://github.com/camillebagnani/work-day-scheduler'
                />

                <Project
                    title='E-Commerce Back End'
                    imageLink={ecommercebackend}
                    highlights='Node, Express, MySQL, Sequelize, dotenv'
                    repo='https://github.com/camillebagnani/e-commerce_back_end'
                />

            </div>
        </div>
    )
}