import * as React from "react";
import { images } from "../SideBar/SideBarStyles";

const StackedFloatingChip = ({ children }) => {
	return (
		<div style={{ alignItems: "center" }}>
			<div style={{ flex: 0 }}>
				{children.map((floatingChip, index) => {
					return (
						<div
							style={{
								flexDirection: "row",
								position: "absolute",
								flex: 0,
								left: (-10 + CHIP_METRICS) * index,
								zIndex: children.length - index,
                marginLeft: '5%',
                marginTop: '5%'
							}}
						>
							{floatingChip}
						</div>
					);
				})}
			</div>
		</div>
	);
};

const FloatingChip = ({ imageUrl }) => {
	return (
		<img
			style={{
				width: CHIP_METRICS,
				height: CHIP_METRICS,
				borderRadius: CHIP_METRICS / 2,
				border: "2px solid #cccfcd",
			}}
			src={imageUrl}
		/>
	);
};

function FloatingImages() {
	const chips = images.map((imageUrl) => (
		<FloatingChip imageUrl={imageUrl} />
	));

	return (
		<div style={{ flex: 1, justifyContent: "center" }}>
			<StackedFloatingChip>{chips}</StackedFloatingChip>
		</div>
	);
}
const CHIP_METRICS = 40;

export default FloatingImages;
