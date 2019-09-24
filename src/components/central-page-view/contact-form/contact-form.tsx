import React from "react";
import { InputComponent } from "../components/input/input";
import { TextareaComponent } from "../components/textarea/textarea";
import { Form, Field, Formik } from "formik";
import { Button } from "../../button/button";
import { validateForm } from "../validators/form-validators";
import axios from "axios";
import { Checkbox } from "../../checkbox/checkbox";
import "./contact-form.scss";

const handleSubmit = (formData: any) => {
  axios
    .post("../../../index.php", formData)
    .then(response => console.log(response))
    .catch(error => console.warn(error));
};

export const ContactForm = () => {
  return (
    <div className="message-section">
      <p className="contact-question">Nie znalazłeś odpowiedniego kontaktu?</p>
      <p className="form-proposal-text">Skorzystaj z formularza.</p>

      <Formik
        initialValues={{ name: "", surname: "", email: "", message: "" }}
        onSubmit={handleSubmit}
        validate={validateForm}
      >
        {() => (
          <Form>
            <div className="form-row">
              <Field
                name="name"
                placeholder="imię"
                component={InputComponent}
              />
              <Field
                name="surname"
                placeholder="nazwisko"
                component={InputComponent}
              />
            </div>
            <Field
              longer
              name="email"
              placeholder="Adres e-mail"
              component={InputComponent}
            />
            <Field
              name="message"
              placeholder="Treść wiadomości"
              component={TextareaComponent}
            />

            <div className="checkbox-row">
              <Checkbox />
              <label htmlFor="checkbox" className="checkbox-row__message">
                Wyrażam zgodę na przetwarzanie moich danych osobowych w
                rozumieniu ustawy z dnia 29 sierpnia 1997 roku o ochronie danych
                osobowych oraz ustawy z dnia 16 lipca 2004 roku Prawo
                telekomunikacyjne w celach marketingowych przez Collegium Da
                Vinci i oświadczam, iż podanie przeze mnie danych osobowych jest
                dobrowolne oraz iż zostałem poinformowany o prawie żądania
                dostępu do moich danych osobowych, ich zmiany oraz usunięcia.
              </label>
            </div>
            <div className="form-row__button">
              <Button type="blue" onClick={() => {}}>
                WYŚLIJ
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
