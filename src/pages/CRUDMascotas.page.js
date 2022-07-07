import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import EditarMascotaModal from "../components/EditarMascotaModal.component";

const CRUDMascotasPage = () => {
    const listaTiposMascota = [
        { id : "1", nombre : "Perro"},
        { id : "2", nombre : "Gato"},
    ]

    const [showMascotaForm, setShowMascotaForm] = useState(false)
    const [selectedMascota, setSelectedMascota] = useState(null)
 
    const onRegistrarMascota = () => {
        setShowMascotaForm(true)
    }

    const onCloseFormModal = () => {
        setShowMascotaForm(false)
    }

    const onEditarMascota = (mascota) => {
        setShowMascotaForm(true)
    }

    return <div className="container">
        <h1>Mantenimiento de Mascotas</h1>
        <button className="btn btn-primary" type="button" onClick={onRegistrarMascota} data-bs-toggle="modal" data-bs-target="#myModal">Agregar</button>
        <table className="table">
            <thead>
                <tr>
                    <th>Cod.</th>
                    <th>Nombre</th>
                    <th>Tipo Mascota</th>
                    <th>Edad</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Pipo</td>
                    <td>Perro</td>
                    <td>10</td>
                    <td>
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-primary"
                                onClick={ () => {}}>Editar</button>
                            <button type="button" className="btn btn-primary">Eliminar</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <EditarMascotaModal show={showMascotaForm} 
            closeHandler={onCloseFormModal} 
            mascota={selectedMascota}
            tiposMascota={listaTiposMascota}/>
    </div>
}

export default CRUDMascotasPage