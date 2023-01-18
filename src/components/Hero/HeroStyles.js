import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
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
    top: 285px;
    text-align: center;
  }
`;

export const RightSection = styled.div`
  width: 100%;
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
    top: -185px;
  }
`;


export const NavLink = styled.a`
  color: #eaeaea;
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
  text-align: center;
  margin: auto;
  @media ${(props) => props.theme.breakpoints.md} {
    margin-bottom: 2rem;
    width: 100%;
  }
`;

export const A = styled.a`
  padding-top: 1.2rem;
  text-align: center;
  width: ${({ alt }) => alt ? '100px' : '175px'};
  height: ${({ alt }) => alt ? '52px' : '55px'};
  @media ${(props) => props.theme.breakpoints.sm} {
    width: ${({ alt }) => alt ? '190px' : '250px'};
  }
`
