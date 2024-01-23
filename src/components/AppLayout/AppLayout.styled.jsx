import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  max-width: 1360px;
  margin: 0 auto;
  padding: 0 15px;
`;

export const Header = styled.header`
  background-color: #e89cfd; 
  border-radius: 4px;
  box-shadow: 0 4px 8px rgb(127, 10, 133);
`

export const NavList = styled.ul`
    display: flex;
    gap: 20px;
    margin: 20px;
`;

export const StyledLink = styled(NavLink)`

  border-radius: 50px;
  background-color: #fcd7ff;
  box-shadow: 0 4px 8px rgb(127, 10, 133);
  padding: 10px;
  color: black;
  font-size: 24px;

  &.active {
    color: #1100ff;
  }
`;