import React from 'react';
import style from './ContactList.module.css';
import ContactListItem from '../ContactListItem'

const ContactList = ({ contactList, onDeleteContact }) => (
	<ul className={style.form}>
		{contactList.map(({ id, ...dataContact }) => (
			<ContactListItem
				key={id}
				id={id}
				listItem={Object.values(dataContact)}
				onDeleteContact={onDeleteContact}
			/>
		))}
	</ul>

);

export default ContactList;
