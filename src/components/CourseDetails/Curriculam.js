import React from "react";
import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel
} from "react-accessible-accordion";
const Curriculam = ({ listItem }) => {

  return (

      <AccordionItem key={listItem.title}>
        <AccordionItemHeading>
          <AccordionItemButton>{listItem.title}</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <div className="aspect-w-16 aspect-h-9">
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

  );
};

export default Curriculam;
