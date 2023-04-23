import { Svg, Path } from "react-native-svg";
import { IconProps } from "./props";

export const HomeIcon = ({ size = 20 }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 28 28" fill="none">
    <Path
      d="M3.5 11.083L14 4.667l10.5 6.416m-2.333 4.084v7.466a.7.7 0 01-.7.7H6.533a.7.7 0 01-.7-.7v-7.466"
      stroke="#000"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
