import React, { useState } from "react";

const Form4 = () => {

    const [dataForm4, setdataForm4] = useState({
        enfermedad: '',
        espicifique_enfermedad: '',
        tratamiento: '',
        medicamento: '',
        controlMedico: '',
        alergia_medicamento: '',
        cualalergia_medicamento: '',
    });

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
        const storedFormData = JSON.parse(localStorage.getItem('combinedDataform3'));
        localStorage.setItem('combinedDataform4', JSON.stringify({ ...storedFormData, ...dataForm4 }));
    };

    return (
        <div>
            <form className="formulario" onSubmit={handleSubmitform4}>
                <div className='container_title_form'>
                    <label className='Title_form' htmlFor="Form1">CONDICIONES DE SALUD</label>
                </div>
                <div className="form-group">
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
                <div className="form-group">
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
                <div className='button-container'>
                    <button type='submit' className='sig_btn'>Siguiente</button>
                </div>
            </form>

        </div>
    )
}

export default Form4