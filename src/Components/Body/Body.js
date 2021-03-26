import React from "react";
import { BodyWrapper, NewsList, NewsItem } from "./BodyStyles";

export default function Body() {
  return (
      <BodyWrapper>
          {/* <p className="Body-start-text">choose a topic to look for </p> */}
          <NewsList>
            <NewsItem>
                  <div className="section-topic">
                      <div className="topic">
                          <h3>topic</h3>
                      </div>
                      <div className="date">
                          <h3>publish on 29th of March 2021</h3>
                      </div>
                  </div>

                  <div className="section-description">
                      <h2 className="title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, animi iste.
                      Repellendus, consequuntur doloribus similique cum minima praesentium, nam dolore ipsam quam alias
                       quidem nobis nulla, maxime earum modi ad.</h2>
                  </div>

                  <div className="section-author">
                      <h3 className="author">author</h3>
                  </div>
            </NewsItem>
          </NewsList>
    </BodyWrapper>
  );
}


