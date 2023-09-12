import { Component } from 'react';
import AddContactForm from '../AddContactForm/AddContactForm';
import { Сentralizer } from './App.styled';
import { ContactsList } from 'components/ContactsList/ContactsList';

import Section from 'components/Section';
import { Filter } from 'components/Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  AddContact = (name, number, id) => {
    this.setState(prevState => {
      if (
        prevState.contacts.some(e => {
          return e.name.toLowerCase() === name.toLowerCase();
        })
      ) {
        alert(`${name} is already in contacts`);
        return;
      }
      return {
        contacts: [...prevState.contacts, { name, id, number }],
      };
    });
  };

  deleteContact = id => {
    // const clickId = event.target.id;
    // const contactsWithoutOne = this.state.contacts.filter(
    //   ({ id }) => clickId !== id
    // );
    // this.setState({ contacts: contactsWithoutOne });
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  InputHandle = event => {
    if (event.currentTarget.name === 'filter') {
      this.setState({ filter: event.currentTarget.value });
    }
  };

  filterByName = () => {
    const { contacts, filter } = this.state;
    return filter
      ? contacts.filter(({ name }) =>
          name.toLowerCase().includes(filter.toLowerCase())
        )
      : contacts;
  };

  render() {
    return (
      <Сentralizer>
        <Section title="Phonebook">
          <AddContactForm AddContact={this.AddContact} />
        </Section>
        <Section title="Contacts">
          <Filter state={this.state} InputChange={this.InputHandle} />
          <ContactsList
            contacts={this.filterByName()}
            onClick={this.deleteContact}
          />
        </Section>
      </Сentralizer>
    );
  }
}

export default App;
