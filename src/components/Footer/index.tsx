import { StyledFooter, StyledFooterInner } from "./styled";
import Switch from "react-switch";
import Bottom from "./Bottom";

interface IFooter {
  toggleTheme: () => void;
  darkMode: boolean;
}

const Footer = ({ toggleTheme, darkMode }: IFooter) => {
  return (
    <StyledFooter>
      <StyledFooterInner>
        <Switch
          id="0"
          onChange={toggleTheme}
          checked={darkMode}
          checkedIcon={false}
          uncheckedIcon={false}
          height={11}
          width={39}
          handleDiameter={19}
          activeBoxShadow="transparent"
          offHandleColor="#888D9B"
          offColor="#C3C5CB"
          onHandleColor="#888D9B"
          onColor="#C3C5CB"
        />
        <Bottom />
      </StyledFooterInner>
    </StyledFooter>
  );
};
export default Footer;
