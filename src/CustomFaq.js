import React, { useState } from "react";
import "./faqs.css";
import { FiChevronDown } from "react-icons/fi";

const Faqs = ({ faqs }) => {
  const [show, setShow] = useState(null);

  const handleToggle = (index) => {
    setShow((prev) => (prev == index ? null : index));
    console.log("sca");
  };
  return (
    <div>
      <div className="Faqs b">
        <h1 className="">Frequently Asked Questions</h1>
        <div className="">
          {faqs.map((val, i) => {
            return (
              <div className="b" key={i}>
                <div className="Faq_container   ">
                  <div
                    className=" Faq_q d-flex justify-content-between"
                    onClick={() => {
                      handleToggle(i);
                    }}
                  >
                    <div>{val.Question}</div>

                    <div>
                      <FiChevronDown />
                    </div>
                  </div>
                  <div
                    className={`Faq_a ${
                      show == i ? "grid-template-rows1" : ""
                    }`}
                  >
                    <div className="Faq_a_a">
                      <div>{val.Answer} </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
