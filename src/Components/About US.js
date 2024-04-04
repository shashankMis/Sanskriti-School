import study1 from './study1.jpg';
import college4 from './college4.jpg';
import shashank from './shashank.jpg';

export default function AboutUS() {
    return(
        <>
            <div>
                <img src={study1} alt="Study Photo" className="study-material" />
            </div>
            <div>
                <img src={college4} alt="College" className='about-image' />
                <p className='about-p'>The school was established in the year 1976 by the sisters of the Queen of the Apostles from Varanasi. The school is dedicated to Mother Mary who is the embodiment of wisdom and enlightenment. The first headmistress of the school was Sr. Sushila Kiro. In the year 2006 Amar Jyoti Registered Society Ranchi (Registration No.203/ 30.01.2006) has taken the ownership of this school for the smooth running and its better functioning. The society aims at enhancing the highest standards of education and prepares individuals with great ethos and values. It’s prime motive is to nurture, groom and guide student through all stages of development with a vision of forming human beings with dynamic excellence and aptness to live in the modern society. We give best opportunities to students for advanced learning and enhance environmental concerns, nationalism and communal harmony. We understand the contemporary challenges of education today and commit ourselves to fabricate hope and unfurl their future dreams. The society is well supported by an ingenious management, supportive parents and a committed principal & staff.</p>

                <h3 className='about-vision'>Vision</h3>
                <p className='about-p2'>We envision an advanced learning and achieving self-confidence with spiritual, intellectual, emotional, psychological and social transformation.</p>

                <h3 className='about-vision'>Mission</h3>
                <p className='about-p2'>Our mission is to provide academic excellence, spiritual escalation and a compassionate pursuit of social justice rooted in God and relating to the entire creation.</p>
                
            </div>

            <div>
                <h3 className='about-vision'>DIRECTOR MESSAGE:</h3>
                <img src={shashank} alt="Shashank Photo" className="about-image"/>
                <p className='about-p'>I am very fortunate to work with extremely dedicated, innovative and caring staff, parents and students of Shanti Niwas High School Garhwa. I find each day enthused and filled with new experiences, learning and enhance constantly to widen my horizons in the field of education and empowering the society. In every child, there is a world waiting to be explored, enhanced and esteemed. We are committed to inculcate values, discipline, knowledge and skills in every child and ensure their expectant future. Since its inception, Shanti Niwas High School has been meticulous to transcend students for carrier based education. With pride we acknowledge that our former student Miss. Namrata Choubey became the 73 rd Rank holder of India’s Civil Service Exam 2022. We are devoted to set benchmarks in nurturing children to grow into strong, matured, compassionate and intelligent human being who will spot light their ideas and be decisive in action. Mahatma Gandhi rightly said “The best way to find yourself is to lose yourself in the service of others.” We believe in holistic education policy that encompasses excellent education, co-curricular activities, sports and fostering life-skills. As we venture ahead and spread our wings to expand the platforms of educational and cultural heritage, we ensure building noble humanity through each child and their parents.</p>
                <p className='about-p3'>With best wishes!<br></br><br></br>Shashank Mishra<br></br>President<br></br>SANSKRITI School,Jharkhand</p>
            </div>
        </>
    )
}