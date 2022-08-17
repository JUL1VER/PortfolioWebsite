import React from 'react'
import MatrixCard from 'matrix-card'

const BackgroundCanvas = () => {
	return (
		<div style={{
			position: "fixed",
            zIndex: '-1'
		}}>
            <MatrixCard
                id={"matrix-1"}
                matrixText={"ANIMATE ME"}
                delay={40}
                backgroundColor={"rgba(34, 34, 34, 0.2)"}
                textFontSize={"16"}
                textMainColor={"#1cd119"}
                // textMainColor={"#A9A9A9"}
                textAlternateColorRatio={0.1}
                textAlternateColorList={["#00F000", "#00EA00", "#00E000", "#00D600"]}
                // textAlternateColorList={["#808080", "#989898", "#A9A9A9", "#C0C0C0"]}
                styleOverrideForChildrenDiv={{display: "none"}}
            >
            </MatrixCard>
		</div>
	)
}
export default BackgroundCanvas;