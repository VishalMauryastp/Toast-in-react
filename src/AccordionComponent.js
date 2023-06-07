import React, { useState } from 'react';
import { Accordion } from 'react-bootstrap';
import AccordionItem from './AccordionItem';

const AccordionComponent = () => {
  const [activeKey, setActiveKey] = useState(null);

  const toggleAccordion = (eventKey) => {
    setActiveKey(activeKey === eventKey ? null : eventKey);
  };

  return (
    <Accordion activeKey={activeKey}>
      <AccordionItem
        eventKey="1"
        question="Question 1"
        answer="Answer 1"
        isOpen={activeKey === '1'}
        toggleAccordion={() => toggleAccordion('1')}
      />
      <AccordionItem
        eventKey="2"
        question="Question 2"
        answer="Answer 2"
        isOpen={activeKey === '2'}
        toggleAccordion={() => toggleAccordion('2')}
      />
      <AccordionItem
        eventKey="3"
        question="Question 3"
        answer="Answer 3"
        isOpen={activeKey === '3'}
        toggleAccordion={() => toggleAccordion('3')}
      />
    </Accordion>
  );
};

export default AccordionComponent;
