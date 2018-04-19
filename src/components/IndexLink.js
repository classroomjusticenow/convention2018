import React from 'react';
import styled from 'styled-components';
import UnstyledLink from './UnstyledLink';

import { red } from './colors';

const Number = styled.span`
  font-weight: 700;
  color: ${red};
  margin: 0 24px;
`;

const IndentedNumber = styled(Number)`
  padding-left: 24px;
`;

const Wrapper = styled.div`
  display: flex;
  align-ttems: center;
  min-height: 30px;
  margin-bottom: 5px;

  font-size: 24px;
  text-transform: uppercase;

  &:hover {
    color: ${red};
  }
`;

function IndexLink(props) {
  return (
    <UnstyledLink to={props.to} onClick={props.onClick}>
      <Wrapper>
        {props.indent ? (
          <IndentedNumber>{props.number}</IndentedNumber>
        ) : (
          <Number>{props.number}</Number>
        )}
        <span>{props.label}</span>
      </Wrapper>
    </UnstyledLink>
  );
}

export default IndexLink;
