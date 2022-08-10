import React, { useEffect } from "react";
import _ from "lodash";

//Components
import Form from "./Form/Form";
import TextAreadInput from "./Form/TextAreadInput";
import TextInput from "./Form/TextInput";
import Modal from "./Modal";

//Redux
import { useDispatch, useSelector } from "react-redux";
import {
  loadUserContactInfo,
  getUserContactInfo,
  sendUserContactMessage,
  shouldShowContactModal,
  showContactModal,
} from "../store/contact";

//Validation Library
import * as Yup from "yup";

const ContactModal = () => {
  const dispatch = useDispatch();
  const userContactInfo = useSelector(getUserContactInfo());
  const shouldShowModal = useSelector(showContactModal());

  const initialValues = { ...userContactInfo, message: "" };

  const contactSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .required("Required")
      .label("Email"),
    name: Yup.string().required("Required").label("Name"),
    phoneNumber: Yup.string(),
    message: Yup.string().required("Required").label("Message"),
  });

  const handleSetShouldShowModal = (value) => {
    dispatch(shouldShowContactModal(value));
  };

  const handleSubmit = (values) => {
    dispatch(
      sendUserContactMessage(_.pick(values, ["name", "email", "phoneNumber"]))
    );
    handleSetShouldShowModal(false);
  };

  useEffect(() => {
    dispatch(loadUserContactInfo());
  }, [userContactInfo]);

  return (
    <Modal
      title="Contact Us"
      showModal={shouldShowModal}
      setShowModal={handleSetShouldShowModal}
    >
      <Form
        enableReinitialize={true}
        initialValues={initialValues}
        validationSchema={contactSchema}
        handleSubmit={handleSubmit}
      >
        <TextInput
          name="name"
          label="Your Name (required)"
          type="text"
          delay={100}
        />
        <TextInput
          name="email"
          label="Your Email (required)"
          type="email"
          delay={300}
        />
        <TextInput
          name="phoneNumber"
          label="Phone Number"
          type="text"
          delay={500}
        />
        <TextAreadInput
          name="message"
          label="Your Message (required)"
          delay={700}
        />
      </Form>
    </Modal>
  );
};

export default ContactModal;
