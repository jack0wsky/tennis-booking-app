import { Path, Svg } from "react-native-svg";
import { IconProps } from "./props";

export const SearchIcon = ({ size = 20 }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 29 28" fill="none">
    <Path
      d="M18.583 18.083l4.084 4.084M6.333 12.833a7 7 0 1014 0 7 7 0 00-14 0v0z"
      stroke="#000"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
