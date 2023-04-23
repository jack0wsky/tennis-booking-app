import { Path, Svg } from "react-native-svg";
import { IconProps } from "./props";

export const StarIcon = ({ size = 20 }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 22 22" fill="none">
    <Path
      d="M7.871 7.55l2.382-4.796a.836.836 0 011.494 0L14.13 7.55l5.324.773a.827.827 0 01.46 1.414l-3.851 3.73.91 5.271c.116.677-.6 1.192-1.21.873L11 17.121l-4.762 2.49c-.61.32-1.326-.196-1.21-.873l.91-5.271-3.852-3.731a.827.827 0 01.461-1.412l5.324-.774z"
      fill="#FF9F1C"
    />
  </Svg>
);
