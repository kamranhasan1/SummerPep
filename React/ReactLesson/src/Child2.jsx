import React from 'react';

const Child2 = () => {
	function handleClick(Salariya){
		alert("Thankyou for boosting the your fav F1",Salariya)
	}
	return (
		<div>

			<h1>this is child 2.jsx</h1>

			<button onClick={()=> handleClick('salariya')}>Click here to boost the Aryan </button>
			
		</div>
	);
};

export default Child2;