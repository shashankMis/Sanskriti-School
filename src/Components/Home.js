import Schools from "./Schools";
import college5 from "./college5.jpg";
import college6 from "./college6.jpg";
import college7 from "./college7.jpg";
import schools from "./data.json";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div>
        <div
          id="carouselExampleInterval"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
              <img
                src={college5}
                class="d-block w-100"
                alt="Image 1"
                className="carausel-image"
              />
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img
                src={college6}
                class="d-block w-100"
                alt="Image 2"
                className="carausel-image"
              />
            </div>
            <div class="carousel-item">
              <img
                src={college7}
                class="d-block w-100"
                alt="Image 3"
                className="carausel-image"
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <p className="p-home">
          The school was established in the year 1976 by the sisters of the
          Queen of the Apostles from Varanasi. The school is dedicated to Mother
          Mary who is the embodiment of wisdom and enlightenment. The first
          headmistress of the school was Sr. Sushila Kiro. In the year 2006 Amar
          Jyoti Registered Society Ranchi (Registration No.203/ 30.01.2006) has
          taken the ownership of this school for the smooth running and its
          better functioning.
        </p>
      </div>
      <h1 className="h1-home-1">SECTIONS OF WEBSITES:</h1>
      <div className="main">
              {schools.map((element, index) => {
                return (
                  <>
                  <Schools
                    key={index}
                    title={<Link to={element.link}> {element.Title}</Link>}
                    message={element.Message}
                    img={element.Poster}
                  />
                  </>
                );
              })}
      </div>

    </>
  );
}
