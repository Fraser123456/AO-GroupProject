import React from "react";

//Custom Components
import { Navbar, Footer } from "./components";

//Home Screen
import Home from "./screens/Home";

//Styles
import "./App.css";

//Redux
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";

function App() {
  const store = configureStore();

  return (
    <Provider store={store}>
      <Navbar />
      <main>
        <Home />
        {/* <Modal
          title="Contact Us"
          showModal={showModal}
          setShowModal={setShowModal}
        >
          <Form
            inputs={inputs}
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
        </Modal> */}
      </main>
      <Footer />
    </Provider>
  );
}

export default App;
