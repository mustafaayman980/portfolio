import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../../src/animation/done.json";
import contactAnimation from "../../../src/animation/contact-us.json";
export default function Contact() {
  const [state, handleSubmit] = useForm("moqgeenp");
  // <Lottie style={{ height: 55 }} animationData={doneAnimation} />;
  // if (state.succeeded) {
  //   return <h1>your message has been sent successfully 👌</h1>;
  // }

  return (
    <section id="contact" className="contact-us">
      <h1 className="title">
        <span className="icon-envelope"></span>
        Contact-Us
      </h1>
      <p className="sub-title">
        Contact-Us for more information and get notified when I publish
        something new.
      </p>
      <div style={{ justifyContent: "space-between" }} className="flex">
        <form onSubmit={handleSubmit}>
          <div className="flex">
            <label htmlFor="Email">EmailAddress:</label>
            <input required name="email" type="email" id="Email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="Message">YourMessage:</label>
            <textarea required name="message" id="Message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button type="submit" disabled={state.submitting} className="submit">
            {state.submitting ? "submitting...." : "submit"}
          </button>
          {state.succeeded && (
            <p
            
              className="flex"
              style={{ fontSize: "18px", marginTop: "1.7rem",color:"rgb(21, 177, 160)"}}
            >
              <Lottie style={{ height: 55 }} animationData={doneAnimation} />
              your message has been sent successfully 👌
            </p>
          )}
        </form>

        <div className="animation section-right ">
          {" "}
          <Lottie
            className="contactAnimation"
            style={{ height: 350 }}
            animationData={contactAnimation}
          />
        </div>
      </div>
    </section>
  );
}
