import style from "../contact/Contact.module.css";

const Contact = () => {
  return (
      <div id="templatemo-main-contact">
        <div id="content" className={style["contact-content"]}>
          <h1>Contact Us</h1>
          <div className="content_half float_l">
            <div id="contact_htmlFor">
              <form method="post" name="contact" action="#">
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
            </div>
          </div>
          <div className="content_half float_r">
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

          <div className="cleaner h40"></div>

          <iframe src="http://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Central+Park,+New+York,+NY,+USA&amp;aq=0&amp;sll=14.093957,1.318359&amp;sspn=69.699334,135.263672&amp;vpsrc=6&amp;ie=UTF8&amp;hq=Central+Park,+New+York,+NY,+USA&amp;ll=40.778265,-73.96988&amp;spn=0.033797,0.06403&amp;t=m&amp;output=embed"></iframe>
          {/* <div className="cleaner"></div> */}
        </div>
      </div>
  );
};
export default Contact;
