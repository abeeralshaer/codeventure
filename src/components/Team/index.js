import React from "react";
import { Col, Row } from "antd";
import styled from "styled-components";
import TeamMemberCard from "./TeamMemberCard";
import { teamMembersList } from "../../utils";

import { SectionTitle } from "../../common/Texts/Headings";
import { SectionContainer as Container } from "../../common/Containers";

const ListContainer = styled(Row)`
  display: flex;
  align-item: center;
  justify-content: center
  flex-flow: row wrap;
  width: 100vw;
`;

export default () => (
  <Container>
    <SectionTitle>Team</SectionTitle>
    <ListContainer>
      {teamMembersList.map((member, key) => (
        <TeamMemberCard key={key} member={member} />
      ))}
    </ListContainer>
  </Container>
);
