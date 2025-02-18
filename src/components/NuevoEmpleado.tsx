import { ChangeEvent, useState} from "react"
import { appsettings } from "../settings/appsettings";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { IEmpleado } from "../interfaces/IEmpleado";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";


export function NuevoEmpleado(){
    return(
        <h1>Nuevo empleado</h1>

    )}