import React from 'react';
import MatrixCard from './index.js';

const MatrixBackground = () => {
	return (
		<div style={{
			position: "fixed",
            zIndex: '-1'
		}}>
			<div>
				<MatrixCard
					id={"my-id-1"}
					matrixText={"MATRIX HAS YOU"}
					delay={40}
					backgroundColor={"rgba(0, 0, 0, 0.2)"}
					textFontSize={"16"}
					textMainColor={"#1cd119"}
                    textAlternateColorRatio={0.1}
					textAlternateColorList={["#00F000", "#00EA00", "#00E000", "#00D600"]}
				>
				</MatrixCard>
			</div>
      </div>
  )}

export default MatrixBackground;