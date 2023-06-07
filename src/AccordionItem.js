import React from 'react';
import { Accordion } from 'react-bootstrap';
import { RiAddFill, RiSubtractFill } from 'react-icons/ri';

const AccordionItem = ({ eventKey, question, answer, isOpen, toggleAccordion }) => {
  return (
    <Accordion.Item eventKey={eventKey}>
      <Accordion.Header onClick={toggleAccordion}>
        <span>{question}</span>
        <span className="accordion-icon">
          {isOpen ? <RiSubtractFill /> : <RiAddFill />}
        </span>
      </Accordion.Header>
      <Accordion.Body>{answer}</Accordion.Body>
    </Accordion.Item>
  );
};

export default AccordionItem;
