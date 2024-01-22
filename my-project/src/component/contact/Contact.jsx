import style from "../contact/Contact.module.css";

const Contact = () => {
  return (
    <div id="templatemo-main-contact">
      <div id="content" className={style["contact-content"]}>

        <form method="post" name="contact" action="#">
          <h1>Contact Us</h1>
          <label htmlFor="author" className={style["label-login"]}>
            Name:
          </label>{" "}
          <input
            type="text"
            id="author"
            name="name"
            className="required input_field"
          />
          <div className="cleaner h10"></div>
          <label htmlFor="email" className={style["label-login"]}>
            Surname:
          </label>{" "}
          <input
            type="text"
            id="email"
            name="surname"
            className="validate-email required input_field"
          />
          <div className="cleaner h10"></div>
          <label htmlFor="phone" className={style["label-login"]}>
            Email:
          </label>{" "}
          <input
            type="text"
            name="email"
            id="phone"
            className="input_field"
          />
          <div className="cleaner h10"></div>
          <label htmlFor="phone" className={style["label-login"]}>
            Phone number:
          </label>{" "}
          <input
            type="text"
            name="phone"
            id="phone"
            className="input_field"
          />
          <div className="cleaner h10"></div>
          <label htmlFor="text" className={style["label-login"]}>
            Message:
          </label>{" "}
          <textarea id="text" name="text" className="required"></textarea>
          <div className="cleaner h10"></div>
          <button
            type="submit"
            className={style["btn"]}
            name="submit"
            id="submit"
            value="Send"
          >
            Submit
          </button>
        </form>

        <div className={style["content-office"]}>
          <h5>Primary Office</h5>
          660-110 Quisque diam at ligula, <br />
          Etiam dictum lectus quis, 11220
          <br />
          Sed mattis mi at sapien
          <br />
          <br />
          Phone: 010-010-6600
          <br />
          Email:{" "}
          <a href="mailto:info@yourcompany.com">info@yourcompany.com</a>
          <br />
          <div className="cleaner h40"></div>
          <h5>Secondary Office</h5>
          120-360 Cras ac nunc laoreet,
          <br />
          Nulla vitae leo ac dui, 10680
          <br />
          Cras id sem nulla
          <br />
          <br />
          Phone: 030-030-0220
          <br />
          Email:{" "}
          <a href="mailto:contact@yourcompany.com">contact@yourcompany.com</a>
          <br />
          <br />
          Validate{" "}
          <a href="http://validator.w3.org/check?uri=referer" rel="nofollow">
            XHTML
          </a>{" "}
          &amp;{" "}
          <a
            href="http://jigsaw.w3.org/css-validator/check/referer"
            rel="nofollow"
          >
            CSS
          </a>
        </div>

      </div>
    </div>
  );
};
export default Contact;
