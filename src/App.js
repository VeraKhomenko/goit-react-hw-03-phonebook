import React, { Component } from 'react';

import Container from './components/Container';
import ContactList from './components/ContactList';
import Form from './components/Form';
import Filter from './components/Filter';

import shortid from 'shortid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }
  addFilterContact = data => {
    if (this.state.contacts.find(contact => contact.name === data.name)) {
      alert(`${data.name} is already in contacts`);
      return;
    }

    const newContact = {
      id: shortid.generate(),
      name: data.name,
      number: data.number,

    };
    this.setState(prevState => ({
      contacts: [ ...prevState.contacts, newContact ],
    }));
  }
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  handleDeleteContact = idContact => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== idContact),
    }));
  };


  getVisibleContacts = () => {
    const { filter, contacts } = this.state;

    const normalizedContactName = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedContactName),
    );

  };

  componentDidMount() {
    console.log('Add componentDidMount');
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }

  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Add componentDidUpdate');
    if (this.state.contacts !== prevState.contacts) {
      console.log('Обновилось поле контактов');

      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <Container>
        <h1>Phonebook</h1>
        <Form onSubmit={this.addFilterContact} />
        <h2>Contacts</h2>
        <Filter value={filter}
          onChange={this.changeFilter}
        />
        <ContactList
          contactList={visibleContacts}
          onDeleteContact={this.handleDeleteContact}
        />
      </Container>
    )
  }
};
export default App;

// componentDidUpdate - не использовать в стрелочной ф-ции,
// componentDidUpdate - вызывается после каждого обновления
//  ! componentDidUpdate если в нем делаем setState использовать условие что бы не зациклить компонент
// componentDidMount - для того что бы взять какие-то начальные данные
