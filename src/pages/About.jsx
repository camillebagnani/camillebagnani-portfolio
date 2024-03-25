import Header from "../components/Header";
import Textbox from "../components/Textbox";
import profilePic from "../../public/images/Camille_Bagnani_Profile_pic.jpeg"

export default function About() {
    return (
        <div className="about-page">
            <Header pageTitle={"About Me"} />
            <div className="about-contents-container">
                <div className="profile-pic-container">
                    <img src={profilePic} alt="Headshot of Camille wearing a black blazer" className="profile-pic" />
                </div>
                <div className="about-textbox">
                    <Textbox className="about-text">
                        Hi! My name is Camille and I'm a full stack developer!
                        I have a Bachelor of Science in Marketing and a minor in Documentary Studies from the University of Utah.
                        I've spent two and a half years working in the music industry. I'm passionate about creating applications that align with my interests.
                        I see a lot of synergies between music and tech,
                        so I am excited to expand my skill set in the world of coding.
                        I enjoy traveling, all things crafting, going to concerts and cooking!
                    </Textbox>
                </div>
            </div>
        </div>
    )
}