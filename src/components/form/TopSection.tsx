import SectionWrapper from "./SectionWrapper";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

interface TopSectionProps {
	handleResetCv: () => void;
	handleLoadExample: () => void;
	handlePrint: () => void;
}

const TopSection = ({ handleResetCv, handleLoadExample, handlePrint }: TopSectionProps) => {
	return (
		<SectionWrapper title="CV GENERATOR">
			<Box display="flex" justifyContent="space-around" width="100%">
				<Button variant="contained" onClick={handleResetCv}>
					RESET
				</Button>
				<Button variant="contained" onClick={handleLoadExample}>
					EXAMPLE
				</Button>
				<Button variant="contained" onClick={handlePrint}>
					PRINT
				</Button>
			</Box>
		</SectionWrapper>
	);
};

export default TopSection;
