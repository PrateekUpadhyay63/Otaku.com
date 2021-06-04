// import React, { useState } from 'react';
// import AsyncSelect from 'react-select/async';



// function Drop() {
//     const [inputValue, setValue] = useState('');
//     const [selectedValue, setSelectedValue] = useState(null);
   
//     // handle input change event
//     const handleInputChange = value => {
//       setValue(value);
//     };
   
//     // handle selection
//     const handleChange = value => {
//       setSelectedValue(value);
//     }
   
//     // load options using API call
//     const loadOptions = (inputValue) => {
//       return fetch(`https://api.jikan.moe/v3/search/anime?type=${inputValue}`).then(res => res.json() );
      
//     };
   
//     return (
//       <div className="Drop">
//         <h3>React-Select Async Dropdown -</h3>
//         <pre>Input Value: "{inputValue}"</pre>
        
//         <AsyncSelect
//           cacheOptions
//           defaultOptions
//           value={selectedValue}
//           getOptionLabel={e => e.title}
//           getOptionValue={e => e.type}
//           loadOptions={loadOptions}
//           onInputChange={handleInputChange}
//           onChange={handleChange}
//         />
//         <pre>Selected Value: {JSON.stringify(selectedValue || {}, null, 2)}</pre>
//       </div>
//     );
//   }
   
//   export default Drop;
import React, {useEffect, useState} from "react";
import axios from "axios";

const Data = () => {
	const [num, setnum] = useState();

	useEffect(() => {
		async function getData() {
			const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);

			console.log(res);
		}
		getData();
	});

	return (
		<div>
			<h1> you choose {num} </h1>
			<select
				value={num}
				onchange={event => {
					setnum(event.target.value);
          console.log(num);
				}}
			>
				<option value=" 1">1 </option>
				<option value=" 2">2 </option>
				<option value=" 3">3 </option>
				<option value=" 4">4 </option>
				<option value=" 5">5 </option>
			</select>
		</div>
	);
};

export default Data;