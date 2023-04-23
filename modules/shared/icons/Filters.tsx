import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

export const FiltersIcon = () => {
  return (
    <Svg width={26} height={26} viewBox="0 0 26 26" fill="none">
      <G
        clipPath="url(#clip0_201_93)"
        stroke="#391608"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M15.069 8.862a2.069 2.069 0 100-4.138 2.069 2.069 0 000 4.138zM4.724 6.793H13M17.138 6.793h4.138M8.862 15.069a2.069 2.069 0 100-4.138 2.069 2.069 0 000 4.138zM4.724 13h2.07M10.931 13h10.345M18.172 21.276a2.069 2.069 0 100-4.138 2.069 2.069 0 000 4.138zM4.724 19.207h11.38M20.241 19.207h1.035" />
      </G>
      <Defs>
        <ClipPath id="clip0_201_93">
          <Path
            fill="#fff"
            transform="translate(.586 .586)"
            d="M0 0H24.8276V24.8276H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
