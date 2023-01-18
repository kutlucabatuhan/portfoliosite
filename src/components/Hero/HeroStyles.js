import styled from 'styled-components';

export const LeftSection = styled.div`
  margin-left: 2rem;
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
    padding-top: 1.5rem;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 1.5rem auto;
    position: relative;
    top: 290px;
    text-align: center;
  }
`;

export const RightSection = styled.div`
  text-align: center;
  width: 700px;
  margin-bottom: 15rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding-top: 1.5rem;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 1.5rem auto;
    position: relative;
    top: -190px;
  }
`;

export const NavLink = styled.a`
  color: #eaeaea;
  padding-top: 1.2rem;
  text-align: center;
  width: 100%;
  height: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    height: 100%;
  }
`;

export const Hr = styled.hr`
  border-top: 1px solid #eaeaea;
  border-bottom: 0px;
  margin-bottom: 15rem;
  @media ${(props) => props.theme.breakpoints.md} {
    margin-bottom: 0rem;
    margin-top: -7rem;
  }
`;

export const Thin = styled.span`
  font-weight: 200;
`;

export const Bold = styled.span`
  font-weight: 500;
`;

export const Img = styled.img`
  width: 270px;
  text-align: center;
  margin: auto;
  @media ${(props) => props.theme.breakpoints.md} {
    margin-bottom: 2rem;
    width: 210px;
  }
`;
