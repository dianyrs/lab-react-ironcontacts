import React, { Component } from 'react';
import './App.css';
import Contacts from './contacts.json';
import FirstCelebs from './Components/FirstCelebs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: Contacts.filter((celeb, index) => index <= 4),
      allContacts: Contacts,
    };
    this.addRandomCeleb = this.addRandomCeleb.bind(this);
    this.sortByName = this.sortByName.bind(this);
    this.sortByPopularity = this.sortByPopularity.bind(this);
    this.getAllCelebrities = this.getAllCelebrities.bind(this);
  }

// Interaction 1
  getAllCelebrities() {
    const allContactsCopy = [...this.state.allContacts];
    this.setState({
      contacts: allContactsCopy,
    });
  }
  defineCelebNumber() {
    return Math.floor(Math.random() * this.state.allContacts.length);
  }

//Interaction 2
  addRandomCeleb() {
    const allContactsCopy = [...this.state.allContacts];
    const contactsCopy = [...this.state.contacts];
    const randomIndex = this.defineCelebNumber();
    let randomCelebrity = allContactsCopy[randomIndex];
    while (contactsCopy.indexOf(randomCelebrity) !== -1) {
      randomCelebrity = allContactsCopy[randomIndex];
    }
    contactsCopy.push(randomCelebrity);
    this.setState({
      contacts: contactsCopy,
    });
  }

//Interaction 3
  sortByName() {
    const contactsCopy = [...this.state.contacts];
    const sortedByNameCelebs = contactsCopy.sort((a, b) => a.name.localeCompare(b.name));
    this.setState({
      contacts: sortedByNameCelebs,
    });
  }
  sortByPopularity() {
    const contactsCopy = [...this.state.contacts];
    const sortedByPopularityCelebs = contactsCopy.sort((a, b) => b.popularity - a.popularity);
    this.setState({
      contacts: sortedByPopularityCelebs,
    });
  }

//Interation 4
  deleteCelebrity(index) {
    const contactsCopy = [...this.state.contacts];
    contactsCopy.splice(index, 1);
    this.setState({
      contacts: contactsCopy,
    });
  }

  render(){
    return (
        <div className="App">
          <header className="App-header">
          </header>
          <p className="App-intro"></p>
          <section className="button-section">
            <button type="submit" className="button is-black is-rounded buttons-adjust" onClick={this.addRandomCelebs}>Add Random Celebrity</button>
            <button type="submit" className="button is-dark is-rounded buttons-adjust" onClick={this.sortByName}>Sort By Name</button>
            <button type="submit" className="button is-light is-rounded buttons-adjust" onClick={this.sortByPopularity}>Sort By Popularity</button>
            <button type="submit" className="button is-info is-rounded buttons-adjust" onClick={this.getAllCelebrities}>All Celebrities!</button>
          </section>
          <table className="table is-striped table-adjust">
            <thead>
            <tr>
              <th>Picture</th>
              <th className="th-adjust">Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {
              this.state.contacts.map((celeb, index) => {
                return <FirstCelebs key={index} {...celeb} clickToDelete={() => this.deleteCelebrity(index)} />;
              })
            }
            </tbody>
          </table>
        </div>
    );
  }
}
export default App;