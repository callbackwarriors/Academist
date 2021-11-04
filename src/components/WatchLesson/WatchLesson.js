import React from "react";
import { AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";
const WatchLesson = ({ watchVideo }) => {
  return (
    <AccordionItem key={watchVideo.title}>

<AccordionItemHeading>
      
      <AccordionItemButton>{watchVideo.title}</AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
    <div className="py-10">

      <div class="aspect-w-16 aspect-h-9">
        <iframe
          src={`https://www.youtube.com/embed/${watchVideo.link}`}
          frameborder="0"
          width="100%"
          height="500px"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    </AccordionItemPanel>
    </AccordionItem>
  );
};

export default WatchLesson;
