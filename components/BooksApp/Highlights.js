import React from "react";
import styled from "styled-components";
import { HighlightsArea, AreaTitle, AreaContent } from "./BookAppStyles";

const HighlightsWrapper = styled.div`
  padding: var(--spacing-lg) var(--spacing-lg);
`;

const BookHeading = styled.div`
  margin-bottom: var(--spacing-2xl);
`;

const BookTitle = styled.h1`
  margin: 0;
  font-size: var(--text-xl);
`;
const BookAuthors = styled.div`
  margin-top: var(--spacing-sm);
`;

const Section = styled.div`
  margin-bottom: var(--spacing-2xl);
`;
const SectionTitle = styled.h2`
  margin: 0;
  font-size: var(--text-lg);
  position: sticky;
  top: 0;
  background: var(--background-color);
  padding: var(--spacing-md) 0;
`;
const HighlightsList = styled.div``;

const Highlight = styled.div`
  margin-bottom: var(--spacing-lg);
`;
const HighlightContent = styled.p`
  margin-bottom: 0;
`;
const HighlightMeta = styled.div`
  margin-top: var(--spacing-2xs);
  color: var(--light-text-color);

  span {
    margin-right: var(--spacing-sm);
  }
`;

export const Highlights = ({ book }) => {
  const bookNotes = book.sections.map((section, i) => {
    const highlights = section.highlights.map((highlight, i) => {
      return (
        <Highlight key={`hl-${i}`}>
          <HighlightContent>{highlight.content}</HighlightContent>
          <HighlightMeta>
            <span>{highlight.type}</span>
            {highlight.page && <span>Page: {highlight.page}</span>}
            {highlight.location && <span>Location: {highlight.location}</span>}
          </HighlightMeta>
        </Highlight>
      );
    });

    return (
      <Section key={`s-${i}`}>
        <SectionTitle>{section.title}</SectionTitle>
        {highlights}
      </Section>
    );
  });

  return (
    <HighlightsArea>
      <AreaTitle>Plain text</AreaTitle>
      <AreaContent>
        <HighlightsWrapper>
          <BookHeading>
            <BookTitle>{book.title}</BookTitle>
            <BookAuthors>{book.authors}</BookAuthors>
          </BookHeading>

          <HighlightsList>{bookNotes}</HighlightsList>
        </HighlightsWrapper>
      </AreaContent>
    </HighlightsArea>
  );
};
