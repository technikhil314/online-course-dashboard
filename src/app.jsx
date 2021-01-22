import "./app.module.scss";
import "./assets/styles/index.scss";
import NavigationBar from "./components/navigationBar";
import Sidebar from "./components/sidebar";
import Logo from "./components/Logo";
import Main from "./components/main";
function App() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <Logo></Logo>
      <Sidebar></Sidebar>
      <main>
        <Main></Main>
      </main>
    </>
  );
}

export default App;
