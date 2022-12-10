import React, { useState } from "react";
import "./new.scss";
import SideBar from "../../component/sidebar/Sidebar";
import NavBar from "../../component/navbar/Navbar";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {
  doc,
  setDoc,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { auth, db } from "../../firebase";
const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [data, setData] = useState({});
  console.log(data);
  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setData({ ...data, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      await setDoc(doc(db, "users", res.user.uid), {
        ...data,
        timeStamp: serverTimestamp(),
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="new">
      <SideBar />
      <div className="newContainer">
        <NavBar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form onSubmit={handleSubmit}>
              <div className="formInput">
                <label htmlFor="file">
                  Image:
                  <DriveFolderUploadIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                    onChange={handleInput}
                  />
                </div>
              ))}

              <button type="submit">send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
