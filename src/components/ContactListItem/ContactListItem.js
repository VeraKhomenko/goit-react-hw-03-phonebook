import React from 'react';
import style from './ContactListItem.module.css';
import shortid from 'shortid';

const ContactListItem = ({ id, listItem, onDeleteContact }) => (
	<li className={style.item}>
		{listItem.map(value => (
			<span className={style.text} key={shortid.generate()}>
				{value}
			</span>
		))}
		<button
			type="button"
			className={style.button}
			onClick={() => onDeleteContact(id)}
		>
			<p>Delete</p>
		</button>
	</li>

);
export default ContactListItem;
