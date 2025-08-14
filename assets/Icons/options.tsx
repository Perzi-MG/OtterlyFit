import Svg, { Path } from "react-native-svg"
import type { SvgProps } from "react-native-svg";
interface OptionsSVGProps extends SvgProps {}

export const OptionsSVG = (props: OptionsSVGProps) => (
    <Svg viewBox="0 -1 28 28" {...props}>
        <Path
            fill={props.color || "#000"} // Usa el color recibido o negro por defecto
            fillRule="evenodd"
            d="M27 16H1a1 1 0 1 0 0 2h26a1 1 0 1 0 0-2Zm-11 8H1a1 1 0 1 0 0 2h15a1 1 0 1 0 0-2ZM1 2h26a1 1 0 1 0 0-2H1a1 1 0 1 0 0 2Zm0 8h18a1 1 0 1 0 0-2H1a1 1 0 1 0 0 2Z"
        />
    </Svg>
)