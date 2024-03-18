import Header from "../components/Header";
import Textbox from "../components/Textbox";

export default function About() {
    return (
        <div>
            <Header pageTitle={"About Me"} />
            <img src="../public/images/Camille_Bagnani_Profile_pic.jpeg" alt="Headshot of Camille wearing a black blazer" className="profile-pic" />
            <div className="about-textbox">
            <Textbox>
                <p>Hi! My name is Camille and I'm on my way to becoming a full-stack developer!
                    I have a Bachelor of Science in Marketing and a minor in Documentary Studies from the University of Utah. 
                    I've spent two and a half years working in the music industry. 
                    I see a lot of synergies between music and tech,
                    so I am excited to expand my skill set in the world of coding.
                    I enjoy traveling, all things crafting, going to concerts and cooking! Food is my love language! 🍰
                </p>
            </Textbox>
            <Textbox>
                <p>
                    I'm passionate about creating applications that align with my interests. My skills include.
                </p>
            </Textbox>
            </div>
        </div>
    )
}