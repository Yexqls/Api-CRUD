import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Lista } from "./components/Lista"
import { NuevoEmpleado } from "./components/NuevoEmpleado"
import { EditarEmpleado } from "./components/EditarEmpleado"



//Se raliza la configuracion de las rutas
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Lista/>} />
      <Route path="/nuevoempleado" element = {<NuevoEmpleado/>}/>
      <Route path="/editarempleado/:id"  element = {<EditarEmpleado/>}/>

    </Routes>
    </BrowserRouter>

  )
}

export default App
