import {Routes, Route} from 'react-router-dom';
import Login from "./components/Login/Login";
import {Layout} from './components/Layout/Layout';
import RealEstate from "./pages/RealEstate/RealEstate";
import IdRealEstate from "./pages/RealEstate/IdRealEstate";
import AddRealEstate from "./pages/RealEstate/AddRealEstate";
import Requests from "./pages/Requests/Requests";
import ContractsOwners from "./pages/ContractsOwners/ContractsOwners";
import Contracts from "./pages/Contracts/Contracts";
import Clients from "./pages/Clients/Clients";
import Owners from "./pages/Owners/Owners";
import Employees from "./pages/Employees/Employees";

import './App.css'
import './Table.css'

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='login' element={<Login />} />
        <Route path='/' element={<Layout />}>
          <Route index element={<RealEstate />} />
          <Route path='/:id' element={<IdRealEstate />} />
          <Route path='addRealEstate' element={<AddRealEstate />} />
          <Route path='requests' element={<Requests />} />
          <Route path='contracts_owners' element={<ContractsOwners />} />
          <Route path='contracts' element={<Contracts />} />
          <Route path='clients' element={<Clients />} />
          <Route path='owners' element={<Owners />} />
          <Route path='employees' element={<Employees />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
