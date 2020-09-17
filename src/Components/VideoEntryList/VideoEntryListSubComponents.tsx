import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  overflow-y: scroll;
  `;

export const ListWrapper = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: 20px 20px 0 20px;
  margin-top: 85px;
  
  list-style: none;
  background-color: ${props => props.theme.color.primary.lighter};
`;

export const ErrorMessage = styled.p`
  text-align: center;
`;

export const MoreEntriesCircularProgress = styled(CircularProgress).attrs(() => ({
  size: 70
}))`
`;