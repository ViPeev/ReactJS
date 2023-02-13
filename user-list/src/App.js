import "./App.css";
import { AddButton } from "./components/addComponent/addButton";
import Footer from "./components/footer/Footer";
import { FormSwitch } from "./components/formComponents/FormSwitch";
import Header from "./components/header/Header";
import Search from "./components/search/Search";
import UserList from "./components/users/UserList";
import { ViewProvider } from "./contexts/viewContext";
import { DataProvider } from "./contexts/dataContext";
import Pagination from "./components/pagination/Pagination";

function App() {
  return (
    <ViewProvider>
      <div className="App">
        <DataProvider>
        <FormSwitch />
        <Header />
        <main className="main">
          <section className="card users-container">
            <Search />
            <UserList />
            <AddButton />
          </section>
        </main>
        <Pagination />
        </DataProvider>
        <Footer />
      </div>
    </ViewProvider>
  );
}

export default App;
