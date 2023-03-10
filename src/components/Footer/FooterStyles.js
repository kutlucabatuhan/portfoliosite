import styled from "styled-components"

export const FooterWrapper = styled.section`
  width: calc(100vw - 96px);
  max-width: 1040px;
  padding: 2rem 48px 40px;
  margin: 1rem auto;
  box-sizing: content-box;


  @media ${props => props.theme.breakpoints.md} {
    padding: 0 16px 48px;
    width: calc(100vw - 32px);
  }
`
export const Hr = styled.hr`
  border-top: 1px solid #eaeaea;
  border-bottom: 0px;
  @media ${props => props.theme.breakpoints.md}{
    margin-top: 5rem;
  }
`;


export const LinkItem = styled.a`
	font-size: 20px;
	line-height: 30px;
	color: rgba(255, 255, 255, 0.75);
	margin-bottom: 16px;
	transition: .3s ease;
	position: relative;
	left: 0;

	&:hover {
		color: #fff;
		left: 6px;
	}

	@media ${props => props.theme.breakpoints.md} {
		font-size: 14px;
		line-height: 14px;
		margin-bottom: 8px;
		display: flex;
		align-items: center;
	}
`

export const SocialIconsContainer = styled.div`
padding-top: 8rem;
max-width: 1040px;
display: flex;
justify-content: space-between;

@media ${props => props.theme.breakpoints.md}{
  display: flex;
  width: 100%;
  flex-direction: column;
}
`

export const CompanyContainer = styled.div`
  	display: flex;
	align-items:baseline;
	flex-wrap: wrap;
	margin-right: auto;

	@media ${props => props.theme.breakpoints.md}{
		display: flex;
		flex-direction: column;
		margin: 0 0 32px;
		align-items: center;
	}
`


export const Slogan = styled.a`
	margin-top: 2rem;
	color: rgba(255, 255, 255, 0.5);
	font-size: 18px;
	display: block;
	text-align: center;

	@media ${props => props.theme.breakpoints.md}{
		line-height: 22px;
		font-size: 14px;
		min-width: 100px;
	}
`

export const A = styled.a`
&:hover{
		font-weight: 300;
	}
`

export const SocialContainer = styled.div`
  	align-items: center;
	margin: auto;
	text-align: center;
	@media ${props => props.theme.breakpoints.md}{
		justify-content: center;
		flex-wrap: wrap;
	}
`


export const LinkList = styled.ul`
  	display: flex;
	grid-template-columns: repeat(3, minmax(85px, 220px));
	gap: 40px;
  	padding: 25px 100px 78px;
	margin: auto;
	@media ${props => props.theme.breakpoints.md} {
		width: 100%;
		padding: 32px 4px 16px;
		gap: 16px;
	}
`

export const LinkColumn = styled.div`
	display: inline-block;
	margin: auto;
`
export const LinkTitle = styled.h4`
	font-style: normal;
	font-weight: 600;
	font-size: 16px;
	line-height: 24px;
	text-transform: uppercase;
	color: rgba(255, 255, 255, 0.4);
	margin-bottom: 16px;

	@media ${props => props.theme.breakpoints.md} {
		font-size: 14px;
		line-height: 12px;
		margin-bottom: 8px;
	}
`
