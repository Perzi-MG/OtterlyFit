import Svg, { Path, Circle } from "react-native-svg"
import type { SvgProps } from "react-native-svg";
interface OptionsSVGProps extends SvgProps {}


export const SearchIcon = (props: OptionsSVGProps) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="lucide lucide-search-icon lucide-search"
    {...props}
  >
    <Path d="m21 21-4.34-4.34" />
    <Circle cx={11} cy={11} r={8} />
  </Svg>
)