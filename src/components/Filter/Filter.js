import React from 'react';
import style from './Filter.module.css';

const Filter = ({ value, onChange }) => (
	<div className={style.form} >
		<label className={style.label} htmlFor="">
			<p className={style.text}>Find contacts by name:</p>
			<input
				className={style.input}
				type="text"
				value={value}
				onChange={onChange}
			/>
		</label>
	</div>

);

export default Filter;
