import library1 from './library1.jpg';
import library2 from './library2.jpg';
import library3 from './library3.jpg';
import physicslabs1 from './physicslabs1.jpg';
import physicslab2 from './physicslab2.jpg';
import physicslabs3 from './physicslabs3.jpg';
import chemistrylab1 from './chemistrylab1.jpg';
import chemistrylab2 from './chemistrylab2.jpg';
import chemistrylab3 from './chemistrylab3.jpg';
import sports1 from './sports1.jpg';
import sports2 from './sports2.jpg';
import sports3 from './sports3.jpg';
import cultural1 from './cultural1.jpg';
import cultural2 from './cultural2.jpg';
import cultural3 from './cultural3.jpg';
import medical1 from './medical1.jpg';
import medical2 from './medical2.jpg';
import medical3 from './medical3.jpg';



export default function Facilities() {
    return(
        <>
            <div>
                <h2 className="h2-facilities">Library:</h2>
                <img src={library1} alt="Library1" className="library" />
                <img src={library2} alt="Library2" className="library" />
                <img src={library3} alt="Library3" className="library" />
            </div>

            <div>
                <h2 className="h2-facilities">Physics Lab:</h2>
                <img src={physicslabs1} alt="physicslabs1" className="library" />
                <img src={physicslab2} alt="physicslab2" className="library" />
                <img src={physicslabs3} alt="physicslabs3" className="library" />
            </div>
            
            <div>
                <h2 className="h2-facilities">Chemistry Lab:</h2>
                <img src={chemistrylab1} alt="chemistrylab1" className="library" />
                <img src={chemistrylab2} alt="chemistrylab2" className="library" />
                <img src={chemistrylab3} alt="chemistrylab3" className="library" />
            </div>

            <div>
                <h2 className="h2-facilities">Sports Activity:</h2>
                <img src={sports1} alt="sports1" className="library" />
                <img src={sports2} alt="sports2" className="library" />
                <img src={sports3} alt="sports3" className="library" />
            </div>

            <div>
                <h2 className="h2-facilities">Cultural Activity:</h2>
                <img src={cultural1} alt="cultural1" className="library" />
                <img src={cultural2} alt="cultural2" className="library" />
                <img src={cultural3} alt="cultural3" className="library" />
            </div>

            <div>
                <h2 className="h2-facilities">Medical Facility:</h2>
                <img src={medical1} alt="medical1" className="library" />
                <img src={medical2} alt="medical2" className="library" />
                <img src={medical3} alt="medical3" className="library" />
            </div>
        </>
    )
}