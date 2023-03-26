import {Link as ScrollLink} from "react-scroll";
import Navbar from "../../components/Navbar";
import SkillWrapper from "../../components/Skills/SkillWrapper";
import "./home.scss";

const Home = () => {
    return (
        <div id="home" name="home">
            <Navbar/>
            <div className="main_section">
                <div className="main_section__presentation">
                    <div>
                        <div className="presentation__sub-header">Fullstack developer</div>
                        <div className="presentation__header">Ibai Farina</div>
                        <p className="presentation__description">
                            Hi! I'm Ibai Farina. I'm a full stack web developer from Barcelona, Spain. I have years of
                            experience working with Python and I've also completed several web projects.
                        </p>
                        <ScrollLink to="projects" duration={500} smooth={true}>
                            <button className="btn sm:w-fit mt-5">My work</button>
                        </ScrollLink>
                    </div>
                    <SkillWrapper/>
                </div>
            </div>
        </div>
    );
};

export default Home;