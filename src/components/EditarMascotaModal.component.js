import { useState } from "react"
import { Modal } from "react-bootstrap"

const getFechaActual = () => {
    const fecha = new Date()
    // Obtenemos la fecha con forma yyy-mm-dd
    return fecha.toISOString().split('T')[0]
}

const EditarMascotaModal = (props) => {

    /*
    * Variables de estado que almacenan valores de controles
    * del formulario.
    */
    const [nombreMascota, setNombreMascota] = useState(props.mascota == null ? "" : props.mascota.nombre)  
    const [tipoMascotaId, setTipoMascotaId] = useState("0") // <--Completar
    const [edadMascota, setEdadMascota] = useState(0) // <--Completar
    const [fechaNacimientoMascota, setFechaNacimientoMascota] = useState(getFechaActual()) // <--Completar

    /*
    * Funciones que se encargan de actualizar los valores de las
    * variables de estado segun los cambios en los controles.
    */
    const onNombreMascotaChange = (evt) => {
        setNombreMascota(evt.target.value)
    }
    const onTipoMascotaIdChange = (evt) => {
        setTipoMascotaId(evt.target.value)
    }
    const onEdadMascotaChange = (evt) => {
        setEdadMascota(evt.target.value)
    }
    const onFechaNacimientoMascotaChange = (evt) => {
        setFechaNacimientoMascota(evt.target.value)
    }

    const onBotonGuardarClick = (evt) => {
        const mascota = {
            nombre : nombreMascota,
            tipo : tipoMascotaId,
            edad : edadMascota,
            fechaNacimiento : fechaNacimientoMascota
        }
        props.guardarHandler(mascota)
    }


    return <Modal show={props.show} onHide={props.closeHandler}>
        <Modal.Header closeButton>
            <Modal.Title>Editar Mascota</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form>
                <div>
                    <label className="form-label">Nombre:</label>
                    <input className="form-control" type="text"
                        value={nombreMascota} onChange={onNombreMascotaChange} />
                </div>
                <div>
                    <label className="form-label">Tipo:</label>
                    <select className="form-select" value={tipoMascotaId}
                        onChange={onTipoMascotaIdChange}>
                        <option value={0}>Elegir una opción</option>
                        {
                            props.tiposMascota.map((tipo) => {
                                return <option key={tipo.id} value={tipo.id}>
                                    {tipo.nombre}
                                </option>
                            })
                        }
                    </select>
                </div>
                <div>
                    <label className="form-label">Edad:</label>
                    <input className="form-control" type="number"
                        value={edadMascota} onChange={onEdadMascotaChange}/>
                </div>
                <div>
                    <label className="form-label">Fecha Nacimiento:</label>
                    <input className="form-control" type="date"
                        value={fechaNacimientoMascota} onChange={onFechaNacimientoMascotaChange} />
                </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
            <button type="button" className="btn btn-secondary"
                onClick={props.closeHandler}>Cerrar</button>
            <button type="button" className="btn btn-primary"
                onClick={ onBotonGuardarClick }>
                Guardar
            </button>
        </Modal.Footer>
    </Modal>
}

export default EditarMascotaModal