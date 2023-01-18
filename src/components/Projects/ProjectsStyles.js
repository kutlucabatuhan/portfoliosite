import styled from 'styled-components';

export const Img = styled.img`
  width:100%;
  object-fit: cover;
  overflow: hidden;
`

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding: 3rem;
place-items: center;
column-gap: 2rem;
row-gap: 3rem;
margin-bottom: 10rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
  margin-bottom: 3rem;
}

`
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 0px 0px 20px #eb1d36;
  text-align: center;
  width: 400px;
  margin-bottom: 2rem;
  transition: 0.4s;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    padding: 0 1.5rem;
  }&:hover{
    box-shadow: 0px 0px 40px #eb1d36;
    width: 403px;
    display:block;
    @media ${(props) => props.theme.breakpoints.sm} {
      width: 102%;
    }
}
`;
export const TitleContent = styled.div`
  text-align: left;
  margin-left: 2rem;
  z-index: 20;
  width: 100%;
  height: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-left: 0;
  }
`;


export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #eaeaea;
  padding-top: 2rem;
  padding-bottom:1rem;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
  @media ${(props) => props.theme.breakpoints.sm} {
    text-align: center;
  }
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #eaeaea;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 8px 25px;
  padding-bottom: 0;
  color: #eaeaea;
  font-style: 2.5rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.3rem
}
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
color:#eaeaea;
font-weight: 200;
font-size: 19px;
margin-bottom: .3rem;
padding: .6rem 1.5rem;
background: #eb1d36;
border-radius: 5px;
&:hover{
  font-weight: 400;
}
`;

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: 2rem;
`
export const Tag = styled.li`
color: #d8bfbf;
font-size: 1.5rem;
`

export const P = styled.p`
  margin-left: 2rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-left: 0rem;
  }
`
