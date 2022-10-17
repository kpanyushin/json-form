import Container from "react-bootstrap/Container";

import { Tabs } from "./components/Tabs/Tabs";

import styles from "./App.module.css";

function App() {
  return (
    <Container className={styles.wrapper}>
      <Tabs />
    </Container>
  );
}

export default App;
