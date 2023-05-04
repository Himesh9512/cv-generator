import { PersonalDetails } from "../../../interfaces/cv_interface";
import SectionWrapper from "../SectionWrapper";

import TextField from "@mui/material/TextField";

interface PersonalDetailsProps {
	personalDetails: PersonalDetails;
}

const PersonalDetailsSection = ({ personalDetails }: PersonalDetailsProps) => {
	const { firstName, lastName, title, email, phone, summary }: PersonalDetails = personalDetails;
	return (
		<SectionWrapper title="Personal Details">
			<TextField
				fullWidth
				id="firstName"
				label="FirstName"
				variant="outlined"
				size="small"
				placeholder="Himesh"
				margin="dense"
				type="text"
				value={firstName}
			/>
			<TextField
				fullWidth
				id="lastName"
				label="LastName"
				variant="outlined"
				size="small"
				placeholder="Suthar"
				margin="dense"
				type="text"
				value={lastName}
			/>
			<TextField
				fullWidth
				id="title"
				label="Job Title"
				variant="outlined"
				size="small"
				placeholder="Software Engineer"
				margin="dense"
				type="text"
				value={title}
			/>
			<TextField
				fullWidth
				id="email"
				label="E-mail"
				variant="outlined"
				size="small"
				placeholder="himesh@example.com"
				margin="dense"
				type="email"
				value={email}
			/>
			<TextField
				fullWidth
				id="phone"
				label="Phone"
				variant="outlined"
				size="small"
				placeholder="12345-67890"
				margin="dense"
				type="tel"
				value={phone}
			/>
			<TextField
				multiline
				fullWidth
				id="summary"
				label="Summary"
				variant="outlined"
				size="small"
				placeholder="12345-67890"
				margin="dense"
				value={summary}
			/>
		</SectionWrapper>
	);
};

export default PersonalDetailsSection;
