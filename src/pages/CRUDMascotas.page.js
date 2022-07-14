import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import EditarMascotaModal from "../components/EditarMascotaModal.component";

const CRUDMascotasPage = () => {
    const [showMascotaForm, setShowMascotaForm] = useState(false)
    const [selectedMascota, setSelectedMascota] = useState(null)
    const [listaMascotas, setListaMascotas] = useState([])
    const [listaTipoMascotas, setListaTipoMascotas] = useState([])

    useEffect(() => {
        const dataFetch = async() => {
            const url = `http://veterinariaul.herokuapp.com/mascotas`
            const resp = await fetch(url)
            const data = await resp.json()
            setListaMascotas(data)
        }

        const dataTipoMascotasFetch = async () => {
            const url = `${process.env.BACKEND_URL}/tipomascotas`
            const resp = await fetch(url)
            const data = await resp.json()
            setListaTipoMascotas(data)
        }

        dataFetch()
        dataTipoMascotasFetch()
    }, [])
 
    const onRegistrarMascota = () => {
        setShowMascotaForm(true)
    }

    const onCloseFormModal = () => {
        setShowMascotaForm(false)
    }

    const onEditarMascota = (mascota) => {
        setShowMascotaForm(true)
    }

    const guardarNuevaMascota = (mascota) => {
        console.log("Se guardara mascota ", mascota)
    }

    return <div className="container">
        <h1>Mantenimiento de Mascotas</h1>
        <button className="btn btn-primary" type="button" 
            onClick={onRegistrarMascota} 
            data-bs-toggle="modal" data-bs-target="#myModal">Agregar</button>
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
                {
                    listaMascotas.map((mascota) => {
                        return <tr key={mascota.id}>
                            <td>{ mascota.id }</td>
                            <td>{ mascota.nombre }</td>
                            <td>{ mascota.tipo.nombre }</td>
                            <td>{ mascota.edad }</td>
                            <td>
                                <div className="btn-group" role="group">
                                    <button type="button" className="btn btn-primary"
                                        onClick={ () => {}}>Editar</button>
                                    <button type="button" className="btn btn-primary">Eliminar</button>
                                </div>
                            </td>
                        </tr>
                    })
                }
                
            </tbody>
        </table>
        <EditarMascotaModal show={showMascotaForm} 
            closeHandler={onCloseFormModal} 
            mascota={selectedMascota}
            tiposMascota={listaTipoMascotas}
            guardarHandler={ guardarNuevaMascota }/>
    </div>
}

export default CRUDMascotasPage