import React, { useState } from "react";
import { useHistory } from 'react-router-dom';


const Form4 = () => {

    const [dataForm4, setdataForm4] = useState({
        enfermedad: '',
        espicifique_enfermedad: '',
        tratamiento: '',
        medicamento: '',
        controlMedico: '',
        alergia_medicamento: '',
        cualalergia_medicamento: '',
        medioTrans: '',
        tiempoTrans: '',
        nomEmg: '',
        parentEmg: '',
        celEmg: '',
    });

    const history = useHistory();

    const handleSelectChangeform4 = (e) => {
        const { name, value } = e.target;
        setdataForm4((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleChangeform4 = (e) => {
        const { name, value } = e.target;
        setdataForm4((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmitform4 = async (e) => {
        e.preventDefault();
        const storedFormData = JSON.parse(localStorage.getItem('combinedDataform3')) || {};
        
        console.log(storedFormData);
    
    };

    const buttonatras = async (e) => {
        history.push("/form3")
      }

    return (
        <div>
            <form className="formulario">
                <div className='container_title_form'>
                    <label className='Title_form' htmlFor="Form1">CONDICIONES DE SALUD</label>
                </div>
                <div className="form-groupll">
                    <label htmlFor="enfermedad">¿Parece de alguna enfermedad?:</label>
                    <select
                        id="enfermedad"
                        name="enfermedad"
                        value={dataForm4.enfermedad}
                        onChange={handleSelectChangeform4}
                        required
                        autoComplete="off"
                    >
                        <option value="" disabled hidden>Seleccione</option>
                        <option value="Diabetes">Diabetes</option>
                        <option value="Hipertensión">Hipertensión</option>
                        <option value="Hipoglicemia">Hipoglicemia</option>
                        <option value="Migraña Aguda">Migraña Aguda</option>
                        <option value="Trastorno Mental">Trastorno Mental</option>
                        <option value="Otros">Otros</option>
                    </select>
                </div>
                <div className="form-groupll">
                    <label htmlFor="espicifique_enfermedad">Especifique cual:</label>
                    <input
                        type="text"
                        id="espicifique_enfermedad"
                        name="espicifique_enfermedad"
                        value={dataForm4.espicifique_enfermedad}
                        onChange={handleChangeform4}
                        autoComplete="off"
                    />
                </div>
                <div className="form-groupll">
                    <label htmlFor="enfermedad">¿Esta bajo tratamiento?:</label>
                    <select
                        id="tratamiento"
                        name="tratamiento"
                        value={dataForm4.tratamiento}
                        onChange={handleSelectChangeform4}
                        required
                        autoComplete="off"
                    >
                        <option value="" disabled hidden>Seleccione</option>
                        <option value="Si">Si</option>
                        <option value="No">No</option>
                    </select>
                </div>
                <div className="form-groupll">
                    <label htmlFor="medicamento">¿Estás tomando algún medicamento recetado actualmente?:</label>
                    <select
                        id="medicamento"
                        name="medicamento"
                        value={dataForm4.medicamento}
                        onChange={handleSelectChangeform4}
                        required
                        autoComplete="off"
                    >
                        <option value="" disabled hidden>Seleccione</option>
                        <option value="Si">Si</option>
                        <option value="No">No</option>
                    </select>
                </div>
                <div className="form-groupll">
                    <label htmlFor="controlMedico">¿Se encuentra tomando algún tipo de medicamento sin control médico?:</label>
                    <select
                        id="controlMedico"
                        name="controlMedico"
                        value={dataForm4.controlMedico}
                        onChange={handleSelectChangeform4}
                        required
                        autoComplete="off"
                    >
                        <option value="" disabled hidden>Seleccione</option>
                        <option value="Si">Si</option>
                        <option value="No">No</option>
                    </select>
                </div>
                <div className="form-groupll">
                    <label htmlFor="alergia_medicamento">¿Es alérgico algún medicamento, alimento, elemento o picadura de algún animal?:</label>
                    <select
                        id="alergia_medicamento"
                        name="alergia_medicamento"
                        value={dataForm4.alergia_medicamento}
                        onChange={handleSelectChangeform4}
                        required
                        autoComplete="off"
                    >
                        <option value="" disabled hidden>Seleccione</option>
                        <option value="Si">Si</option>
                        <option value="No">No</option>
                    </select>
                </div>
                <div className="form-groupll">
                    <label htmlFor="cualalergia_medicamento">Cual o Cuales:</label>
                    <input
                        type="text"
                        id="cualalergia_medicamento"
                        name="cualalergia_medicamento"
                        value={dataForm4.cualalergia_medicamento}
                        onChange={handleChangeform4}
                        autoComplete="off"
                    />
                </div>
            </form>
            <form className="formulario">
                <div className='container_title_form'>
                    <label className='Title_form' htmlFor="Form1">MEDIOS DE TRANSPORTE</label>
                </div>
                <div className="form-groupll">
                    <label htmlFor="medioTrans">¿Qué medio de transporte utiliza para desplazarse a la empresa?:</label>
                    <select
                        id="medioTrans"
                        name="medioTrans"
                        value={dataForm4.medioTrans}
                        onChange={handleSelectChangeform4}
                        required
                        autoComplete="off"
                    >
                        <option value="" disabled hidden>Seleccione</option>
                        <option value="Automóvil">Automóvil</option>
                        <option value="Bicicleta">Bicicleta</option>
                        <option value="Caminando">Caminando</option>
                        <option value="Motocicleta">Motocicleta</option>
                        <option value="Transporte público">Transporte público</option>
                        <option value="Otro">Otro</option>
                    </select>
                </div>
                <div className="form-groupll">
                    <label htmlFor="tiempoTrans">¿Cuánto tiempo se demora desplazándose de su casa al trabajo?:</label>
                    <select
                        id="tiempoTrans"
                        name="tiempoTrans"
                        value={dataForm4.tiempoTrans}
                        onChange={handleSelectChangeform4}
                        required
                        autoComplete="off"
                    >
                        <option value="" disabled hidden>Seleccione</option>
                        <option value="30 Min">30 Min</option>
                        <option value="45 Min">45 Min</option>
                        <option value="1 Hora">1 Hora</option>
                        <option value="1 Hora y media">1 Hora y media</option>
                        <option value="Otros">Otros</option>
                    </select>
                </div>
            </form>
            <form className="formulario" onSubmit={handleSubmitform4}>
                <div className='container_title_form'>
                    <label className='Title_form' htmlFor="Form1">CONTACTO DE EMERGENCIA</label>
                </div>
                <div className="form-groupll">
                    <label htmlFor="nomEmg">Nombre completo:</label>
                    <input
                        type="text"
                        id="nomEmg"
                        name="nomEmg"
                        value={dataForm4.nomEmg}
                        onChange={handleChangeform4}
                        autoComplete="off"
                    />
                </div>
                <div className="form-groupll">
                    <label htmlFor="parentEmg">Parentesco:</label>
                    <input
                        type="text"
                        id="parentEmg"
                        name="parentEmg"
                        value={dataForm4.parentEmg}
                        onChange={handleChangeform4}
                        autoComplete="off"
                    />
                </div>
                <div className="form-groupll">
                    <label htmlFor="celEmg">Número de contacto:</label>
                    <input
                        type="text"
                        id="celEmg"
                        name="celEmg"
                        value={dataForm4.celEmg}
                        onChange={handleChangeform4}
                        autoComplete="off"
                    />
                </div>
                <div className='button-container'>
                    <button type='submit' className='sig_btn' onClick={buttonatras}>Atras</button>
                    <button type='submit' className='sig_btn'>Terminar</button>
                </div>
            </form>

        </div>
    )
}

export default Form4