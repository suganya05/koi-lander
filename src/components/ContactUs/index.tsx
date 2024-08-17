import React, { useEffect, useState } from "react";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";
import { ReactComponent as ChevronDown } from "../../assets/icons/chevronDown.svg";
import { Form, Formik, Field, ErrorMessage } from "formik";
import emailjs from "@emailjs/browser";
import * as Yup from "yup";
import "./ContactUs.scss";

const initialValues = {
  name: "",
  email: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
});

interface IContactUs {
  setActive: (active: boolean) => void;
}

const ContactUs: React.FC<IContactUs> = ({ setActive }) => {
  const [isActive, setIsActive] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState("");
  const [startAnimation, setStartAnimation] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  console.log("selectedSubject", selectedSubject);

  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStartAnimation(true);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const handleSubmit = async (values: typeof initialValues) => {
    console.log("selectedSubject", selectedSubject);

    try {
      setIsSubmitting(true);
      const emailParams = {
        to_email: "samdezero.official@gmail.com",
        subject: "Logged user details",
        message: `${values.name}, 
          ${values.email},
           subject:${selectedSubject}`,
        from_name: values.name,
        to_name: "sam",
      };

      const response = await emailjs.send(
        "service_7nhbz4t",
        "template_99oh9j8",
        emailParams,
        "pqtVAdxhIAV80mS2m"
      );
      console.log("Email sent", response);
      setIsSubmitting(false);
      console.log(values);
      setActive(false);
    } catch (error) {
      console.log(error);
      setActive(false);
      setIsSubmitting(false);
    }
  };

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const handleSubjectSelect = (subject: any) => {
    setSelectedSubject(subject);
    setIsActive(false);
  };

  return (
    <div className="modal-wrapper">
      <div className="modal-overlay" />
      <div className="modal-container">
        <div className={startAnimation ? "contact-us active" : "contact-us"}>
          <div className="contact-us-container">
            <div
              className="close-icon"
              onClick={() => {
                setStartAnimation(false);
                setTimeout(() => {
                  setActive(false);
                }, 1000);
              }}
            >
              <CloseIcon />
            </div>

            <div className="contact-us-content">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {() => (
                  <Form>
                    <div className="grid-item">
                      <div>
                        <Field name="name" placeholder="Name" type="text" />
                      </div>
                      <div>
                        <Field name="email" placeholder="E-mail" type="email" />
                        <ErrorMessage
                          className="errorMsg"
                          component="div"
                          name="email"
                        />
                      </div>
                    </div>
                    <div className="drop-down-wrapper">
                      <div className="flex-item" onClick={handleToggle}>
                        <p style={{ color: selectedSubject ? "#fff" : "#444" }}>
                          {selectedSubject ? selectedSubject : "Subject"}
                        </p>
                        <ChevronDown
                          className={`drop-down-icon ${
                            isActive ? "rotate" : ""
                          }`}
                          onClick={handleToggle}
                        />
                      </div>
                      {isActive && (
                        <div className="select-drop-down">
                          <p
                            onClick={() =>
                              handleSubjectSelect("Partnership related")
                            }
                          >
                            Partnership related
                          </p>
                          <p
                            onClick={() =>
                              handleSubjectSelect("Recruitment related")
                            }
                          >
                            Recruitment related
                          </p>
                          <p
                            onClick={() =>
                              handleSubjectSelect("Investment related")
                            }
                          >
                            Investment related
                          </p>
                          <p onClick={() => handleSubjectSelect("Others")}>
                            Others
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="textarea-input">
                      <Field
                        as="textarea"
                        name="message"
                        placeholder="Message"
                      />
                    </div>
                    <div className="submit-btn">
                      <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Submit"}
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
