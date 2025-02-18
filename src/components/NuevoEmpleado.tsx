import { ChangeEvent, useState } from "react";
import { appsettings } from "../settings/appsettings";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { IEmpleado } from "../interfaces/IEmpleado";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";

//inicializar empeleado con los parametros puestos en IEmpleado
const initialEmpleado = {
  nombre: "",
  correo: "",
  sueldo: 0,
};

export function NuevoEmpleado() {
  //crear estado
  const [empleado, setEmpleado] = useState<IEmpleado>(initialEmpleado);
  const navigate = useNavigate();

  //crear metodo para actualizar porpiedades en cajas de texto
  const inputChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    //console.log(inputName, ":", inputValue);

    setEmpleado({ ...empleado, [inputName]: inputValue });
  };

  const guardar =async()=>{
    const response = await fetch(`${appsettings.apiUrl}Empleado/Nuevo`,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(empleado)
    })
    if (response.ok) {
        navigate("/")

    }else{
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "No se puedo guardar el empleado",
          });
    }
  }

  const volver = ()=>{
    navigate("/")
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col sm={{ size: 8, offset: 2 }}>
          <h4>Nuevo Empleado</h4>
          <hr />
          <Form>
            <FormGroup>
              <Label>Nombre</Label>
              <Input
                type="text"
                name="nombre"
                onChange={inputChangeValue}
                value={empleado.nombre}
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label>Correo</Label>
              <Input
                type="text"
                name="correo"
                onChange={inputChangeValue}
                value={empleado.correo}
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label>Sueldo</Label>
              <Input
                type="number"
                name="sueldo"
                onChange={inputChangeValue}
                value={empleado.sueldo}
              ></Input>
            </FormGroup>
          </Form>
          <Button color="primary" className="me-4" onClick={guardar}>
            Guardar
          </Button>
          <Button color="secondary" className="me-4" onClick={volver}>
            Volver
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
