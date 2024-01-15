import "./Contact.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
// import Swal from "sweetalert2";

import { FaLocationArrow } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [contentData, setdrugData] = useState([]);

  const [userId, setUserId] = useState();
  const [userMessages, setUserMessages] = useState([]);

  const fetchProtectedData = async () => {
    try {
      const token = localStorage.getItem("auth");
      if (token) {
        const response = await axios.get("http://localhost:5000/protected", {
          headers: {
            Authorization: token,
          },
        });

        setUserId(response.data.user.id);
        setUserMessages(response.data.user.message);
      }
    } catch (error) {
      console.error(error);
    } finally {
      console.log(false);
    }
  };

  useEffect(() => {
    if (localStorage.auth != null) {
      fetchProtectedData();
    }
  }, []);
        
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    var allConts = {
      patientName: name,
      patientGmail: email,
      phoneNumber: phone,
      patientMsg: message,
    };

    async function fetch() {
      try {
        const response = await axios.post(
          "http://localhost:8000/adminContact",
          allConts
        );
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  };
  return (
    <div>
      {/* Contact Start */}
      <div className="container-fluid pt-5" dir="rtl" lang="ar">
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: 500 }}>
            <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5">
              هل لديك أسئلة ؟
            </h4>
            <h1 className="display-4">لا تتردد في الاتصال بنا</h1>
          </div>
          <div className="row g-5 mb-5" dir="rtl">
            <div className="col-lg-4">
              <div
                className="bg-light rounded d-flex flex-column align-items-center justify-content-center text-center"
                style={{ height: " 200px" }}
              >
                <div
                  className="d-flex align-items-center justify-content-center bg-primary rounded-circle mb-4"
                  style={{
                    width: 100,
                    height: 70,
                    transform: "rotate(-15deg)",
                  }}
                >
                  <FaLocationArrow
                    className="fa fa-2x fa-phone text-white"
                    style={{ transform: "rotate(22deg)", fontSize: "32px" }}
                  />
                </div>
                <h6 className="mb-0">شارع الجامعه , عمان , الاردن</h6>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="bg-light rounded d-flex flex-column align-items-center justify-content-center text-center"
                style={{ height: 200 }}
              >
                <div
                  className="d-flex align-items-center justify-content-center bg-primary rounded-circle mb-4"
                  style={{
                    width: 100,
                    height: 70,
                    transform: "rotate(-15deg)",
                  }}
                >
                  <FaPhone
                    className="fa fa-2x fa-phone text-white"
                    style={{ transform: "rotate(22deg)", fontSize: "32px" }}
                  />
                </div>
                <h6 className="mb-0">+012 345 6789</h6>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="bg-light rounded d-flex flex-column align-items-center justify-content-center text-center"
                style={{ height: 200 }}
              >
                <div
                  className="d-flex align-items-center justify-content-center bg-primary rounded-circle mb-4"
                  style={{
                    width: 100,
                    height: 70,
                    transform: "rotate(-15deg)",
                  }}
                >
                  <FaEnvelope
                    className="fa fa-2x fa-envelope-open text-white"
                    style={{ transform: "rotate(22deg)", fontSize: "32px" }}
                  />
                </div>
                <h6 className="mb-0">info@example.com</h6>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12" style={{ height: 500 }}>
              <div className="position-relative h-100">
                <iframe
                  className="position-relative w-100 h-100"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                  frameBorder={0}
                  style={{ border: 0 }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex={0}
                />
              </div>
            </div>
          </div>
          <div
            className="row justify-content-center position-relative"
            style={{ marginTop: "-200px", zIndex: 1 }}
          >
            <div className="col-lg-8">
              <div className="bg-white rounded p-5 m-5 mb-0">
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    {localStorage.auth == null ? (
                      <>
                        <div className="col-12 col-sm-6">
                          <input
                            type="text"
                            className="form-control bg-light border-0"
                            placeholder="أدخل إسمك"
                            style={{ height: 55 }}
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            required
                          />
                        </div>
                        <div className="col-12 col-sm-6">
                          <input
                            type="email"
                            className="form-control bg-light border-0"
                            placeholder="إدخل بريدك الالكتروني"
                            style={{ height: 55 }}
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            required
                          />
                        </div>
                        <div className="col-12">
                          <input
                            type="text"
                            className="form-control bg-light border-0"
                            placeholder="أدخل رقم موبايلك "
                            style={{ height: 55 }}
                            value={phone}
                            onChange={(event) => setPhone(event.target.value)}
                            required
                          />
                        </div>
                      </>
                    ) : null}
                    <div className="col-12">
                      <textarea
                        className="form-control bg-light border-0"
                        rows={5}
                        placeholder="أدخل  رسالتك النصيه"
                        style={{ color: "#684024" }}
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                        required
                      />
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-primary w-100 py-3"
                        type="submit"
                        style={{ color: "#684024" }}
                      >
                        إرسال إستفسارك
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact End */}
    </div>
  );
};

export default Contact;
