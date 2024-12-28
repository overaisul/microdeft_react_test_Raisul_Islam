import { useEffect, useState } from "react";
import icon from "../assets/images/icons8-administrator-male-32.png";
import "../css/Card.css";
import Button from "../component/Button/Button";
import { Link, useNavigate } from "react-router-dom";

function Course() {
  const [value, setValue] = useState([]);
  const navigator = useNavigate();

  async function apifetch() {
    const token = localStorage.getItem("authToken");
    try {
      const response = await fetch(
        "https://react-interview.crd4lc.easypanel.host/api/course",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        navigator("/");
        throw new Error("Failed");
      }

      const data = await response.json();
      console.log("Fetched:", data.data.data);
      setValue(data.data.data);
    } catch (error) {
      navigator("/");
      console.error("Error fetching:", error.message);
    }
  }

  useEffect(() => {
    apifetch();
  }, []);

  useEffect(() => {
    console.log("state value:", value);
  }, [value]);

  return (
    <div className="background">
      <h1 className="header">Microdeft Courses</h1>
      <div className="container">
        {value.length > 0 ? (
          value.map((item) => (
            <div key={item.id} className="card-container">
              <div
                className="card-badge"
                style={{ backgroundColor: item.badge_color }}
              >
                {item.badge_text}
              </div>
              <div className="card-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="card-content">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <div className="instructor">
                  <img src={icon} alt="instructor" />
                  <h2>{item.instructor_name}</h2>
                </div>
                <button className="button">Enroll Now </button>
              </div>
            </div>
          ))
        ) : (
          <h1 className="header">Loading courses...</h1>
        )}
      </div>
      <div className="flex flex-col items-center">
        <Link to="/AddCourse">
          <Button
            inputType={"Add Course"}
            className="bg-blue-500 rounded-lg text-white p-2 w-56 hover:bg-blue-600"
          />
        </Link>
      </div>
    </div>
  );
}

export default Course;
