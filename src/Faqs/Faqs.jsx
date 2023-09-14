import React, { useState } from "react";
import "./faqs.css";
import { FiChevronDown } from "react-icons/fi";

const Faqs = () => {
  const [show, setShow] = useState(null);
  const faqs = [
    {
      Question: "What is Apliqa?",
      Answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      Question: "What is Apliqa used for?",
      Answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      Question: "How is Apliqa different from ChatGPT by Open AI?",
      Answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      Question: "Does Apliqa help with giving out the latest trends and news?",
      Answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      Question: "Is Apliqa free to use?",
      Answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
    {
      Question: "Is Apliqa - ChatGPT alternative GPT-4 powered?",
      Answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },
  ];

  const handleToggle = (index) => {
    setShow((prev) => (prev == index ? null : index));
  };
  return (
    <div>
      <div className="Faqs ">
        <h1 className="Faqs_title">Frequently Asked Questions</h1>
        <div className="d-flex flex-column gap-3">
          {faqs.map((val, i) => {
            return (
              <div className="Faq_container_P" key={i}>
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
