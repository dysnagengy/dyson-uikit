import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ ...props }) => {
  return (
    <Svg viewBox="0 0 415 120" {...props}>
      <image width="500" height="120" href='/logo_nav.png'/>
    </Svg>
  )
};

export default Logo;
