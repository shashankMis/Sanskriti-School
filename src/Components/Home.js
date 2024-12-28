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
            <div class="carousel-item active" data-bs-interval="1700">
              <img
                src={college5}
                class="d-block w-100"
                alt="Image 1"
                className="carausel-image"
              />
            </div>
            <div class="carousel-item" data-bs-interval="1700">
              <img
                src={college6}
                class="d-block w-100"
                alt="Image 2"
                className="carausel-image"
              />
            </div>
            <div class="carousel-item" data-bs-interval="1700">
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
          The school was established in the year 2012 by Mr. Brajesh Kumar
          Mishra. The name of the school is dedicated to Shiv Dutt
          Mishra who was the grandfather of Brajesh Kumar Mishra. First          
          headmaster of this school was Mr. Suresh Manas. In the year 2013, Shri
          Brajesh Kumar Mishra assumed that post. Students upto class 10 are
          taught in this school. There are total 20 teachers and 5 school
          workers. The school also provides its own auto or bus facilities. The
          aim of this school is to provide good education to as many
          students as possible or to make their future in extra activity
          also.Till now many students from this school are studying in reputed
          Institute and some are even working in good posts.
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
