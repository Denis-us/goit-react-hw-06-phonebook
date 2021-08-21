import Container from "./components/Container/Container";
import Input from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import PhonebookList from "./components/PhonebookList/PhonebookList";
import styles from "./App.module.css";

function App() {
  return (
    <Container>
      <h1 className={styles.title}>Phonebook</h1>
      <Input />
      <Filter />
      <PhonebookList title="Contacts" />
    </Container>
  );
}

export default App;
