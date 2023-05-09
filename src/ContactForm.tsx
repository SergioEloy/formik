import React from "react";
import { useFormik } from "formik";

interface FormValues {
  name: string;
  phone: string;
  mail: string;
  phma: string;
  carrer: string;
  txta: string;
  yn: boolean;
}

const ContactForm = () => {
  const formik = useFormik<FormValues>({
    initialValues: {
      name: "",
      phone: "",
      mail: "",
      phma: "",
      carrer: "",
      txta: "",
      yn: false,
    },
    onSubmit: (values) => {
      console.log("Form data:", values);
      alert(JSON.stringify(values));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="ctcfrm">
      <fieldset className="vitInf">
        <label htmlFor="name">Full name:</label>
        <input
          type="text"
          name="name"
          className="nm"
          placeholder="Your name is"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <br />
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          name="phone"
          className="ph"
          placeholder="My phone number is"
          onChange={formik.handleChange}
          value={formik.values.phone}
        />
        <br />
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          name="mail"
          className="ml"
          placeholder="Your E-mail is"
          onChange={formik.handleChange}
          value={formik.values.mail}
        />
        <br />
      </fieldset>
      <fieldset className="qst">
        <p>Which is the best way to contact you?</p>
        <input
          type="radio"
          value="E-mail"
          className="email"
          name="phma"
          onChange={formik.handleChange}
          checked={formik.values.phma === "E-mail"}
        />
        <label htmlFor="email">E-mail</label>
        <input
          type="radio"
          value="Phone"
          className="phone"
          name="phma"
          onChange={formik.handleChange}
          checked={formik.values.phma === "Phone"}
        />
        <label htmlFor="phone">Phone</label>
      </fieldset>
      <fieldset className="carr">
        <p>Carrer of your choice</p>
        <select
          name="carrer"
          className="carrer"
          onChange={formik.handleChange}
          value={formik.values.carrer}
        >
          <option value="Gastronomy">Gastronomy</option>
          <option value="MBA">MBA</option>
          <option value="Civil Engineering">Civil Engineering</option>
          <option value="Software">Software</option>
        </select>
      </fieldset>
      <fieldset className="txt">
        <label htmlFor="txta">Comments</label>
        <br />
        <textarea
          className="txta"
          name="txta"
          onChange={formik.handleChange}
          value={formik.values.txta}
        ></textarea>
      </fieldset>
      <fieldset className="fb">
        <p>
          I want to take another survey for the possibility of a scholarship
        </p>
        <input
          type="checkbox"
          name="yn"
          className="y"
          onChange={formik.handleChange}
          checked={formik.values.yn}
        />
        <label htmlFor="y">Yes, I want a Schoolarship</label>
        <br />
      </fieldset>
      <fieldset className="si">
        <div>
          <button type="submit">Log in</button>{" "}
        </div>
      </fieldset>
    </form>
  );
};

export default ContactForm;
