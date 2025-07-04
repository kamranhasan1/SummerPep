import React from 'react';
import './Child.css';
const Child = () => {
	let name = "Aryan";
	let designation = "hardCore F1, and I know you gonna see this F1";
	let skills = ["Crazy Driving,"," of course F1,"," and yamaaaal"];
	return (
		<div>
			
			<h1>Introduction</h1>
			<div className="intro">
				<span>Name </span>{name}
			</div>
			<div className='des'>
				<span>Designation  </span>{designation}
			</div>
			<div className='skills'>
				<span>Skills: </span>{skills[0]}{skills[1]}{skills[2]}
			</div>
		</div>
	);
};

export default Child;