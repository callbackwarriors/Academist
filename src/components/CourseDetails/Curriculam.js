import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
<<<<<<< HEAD
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
=======
  AccordionItemPanel
} from "react-accessible-accordion";
>>>>>>> develop
const Curriculam = ({ listItem }) => {

  return (
    <Accordion >
      <AccordionItem key={listItem.title}>
        <AccordionItemHeading>
          <AccordionItemButton>{listItem.title}</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p class="aspect-w-16 aspect-h-9">
            <iframe
              src={`https://www.youtube.com/embed/${listItem.link}`}
              frameborder="0"
              width="100%"
              height="360"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </p>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default Curriculam;
