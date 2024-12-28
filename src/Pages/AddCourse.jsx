import { useState } from "react";
import InputType from "../component/InputType/InputType";
import Button from "../component/Button/Button";
import AddImage from "../assets/images/undraw_online-learning_tgmv.svg";
import { useNavigate } from "react-router-dom";

function AddCourse() {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [badgeText, setBadgeText] = useState();
  const [badgeColor, setBadgeColor] = useState();
  const [instructor, setInstructor] = useState();
  const [error, setError] = useState();

  const navigator = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const token = localStorage.getItem("authToken");

    if (!token) {
      setError("Authentication token is missing, Please login to add course");
      return;
    }

    const course = {
      title,
      description,
      instructor_name: instructor,
      badge_text: badgeText,
      badge_color: badgeColor,
    };

    fetch("https://react-interview.crd4lc.easypanel.host/api/course", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(course),
    })
      .then((response) => {
        if (!response.ok) {
          console.error("Error");
          throw new Error("Failed to add course");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Course Added:", data);
        alert("Course Added Successfully");
        navigator("/courses");
      })
      .catch((err) => {
        console.error("Error:", err.message);
      });
  }

  return (
    <>
      <div className="relative">
        <img
          src={AddImage}
          alt="Add Course"
          className="h-screen w-screen opacity-50"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/70 backdrop-blur-md p-8 rounded-lg shadow-md w-96">
            <form>
              <div className="flex flex-col">
                <label
                  htmlFor="courseName"
                  className="text-sm font-medium mb-2 text-gray-700"
                >
                  Course Name
                </label>
                <InputType
                  type="text"
                  placeholder="Enter course title"
                  changeHandler={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="Description"
                  className="text-sm font-medium mb-2 text-gray-700"
                >
                  Description
                </label>
                <textarea
                  id="courseDescription"
                  rows="3"
                  placeholder="Enter course description"
                  className="border-2 border-gray-200 p-3 rounded mb-2"
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="BatchText"
                  className="text-sm font-medium mb-2 text-gray-700"
                >
                  Batch Text
                </label>
                <InputType
                  type="text"
                  placeholder="Enter batch text"
                  changeHandler={(e) => setBadgeText(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="BatchColor"
                  className="text-sm font-medium mb-2 text-gray-700"
                >
                  Batch Color
                </label>
                <InputType
                  type="text"
                  placeholder="Enter batch color"
                  changeHandler={(e) => setBadgeColor(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="instructorname"
                  className="text-sm font-medium mb-2 text-gray-700"
                >
                  Instructor Name
                </label>
                <InputType
                  type="text"
                  placeholder="Enter instructor name"
                  changeHandler={(e) => setInstructor(e.target.value)}
                />
              </div>
              {error && <p className="text-red-500 text-center">{error}</p>}
              <Button
                inputType="Add Course"
                className="bg-blue-500 rounded-lg text-white p-2 w-full hover:bg-blue-600"
                type="submit"
                onClickHandler={handleSubmit}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddCourse;
