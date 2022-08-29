import { Fragment } from "react";
import { createGlobalStyle } from "styled-components";
import Footer from "./components/Footer/Footer";
import WelcomePage from "./components/intro/WelcomePage";
import Plans from "./components/plans/Plans";
import Programs from "./components/programs/Programs";
import Services from "./components/services/Services";
import Testimonials from "./components/testimonials/Testimonials";
import { device } from "./styles/theme";

const GlobalStyle = createGlobalStyle`
  html{
    font-size:66%;
    scroll-behavior:smooth;
    overflow-x:hidden;


     @media ${device.mobile} {
      font-size:43%;
}
    @media ${device.tablet} {
      font-size:50%;
}
  }

  body {
    padding:0 0 0 2rem;
  background-image: ${({ theme }) => theme.background};
  background-color: ${({ theme }) => theme.colors.darkGrey};
  @media ${device.mobile} {
      padding:0 2rem;
}
}

  ::-webkit-scrollbar
{
  display: none;
}
`;
function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <WelcomePage></WelcomePage>
      <Programs></Programs>
      <Services></Services>
      <Plans></Plans>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </Fragment>
  );
}

export default App;
