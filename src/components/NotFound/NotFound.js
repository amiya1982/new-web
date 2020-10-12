import React from "react";

import {
  NotFoundWrapper,
  NotFoundContainer,
  TitleBig,
  TitleSmall,
  NotFoundContent,
} from "./NotFound.elements";

export const NotFound = () => {
  return (
    <NotFoundWrapper>
      <NotFoundContainer>
        <NotFoundContent>
          <TitleBig>
            <h1>Oops!</h1>
          </TitleBig>
          <TitleSmall>404 Not Found</TitleSmall>
          <p>Sorry, an error has occured, Requested page not found!</p>
        </NotFoundContent>
      </NotFoundContainer>
    </NotFoundWrapper>
  );
};

export default NotFound;
