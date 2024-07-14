import React, { useState, useEffect } from "react";
import imgtrash from '../styles/images/trash-regular-24.png'
import { useHistory } from 'react-router-dom';

const Form3 = () => {

    const [dataForm3, setdataForm3] = useState({
        puesto_trabajo: '',
        dep_Area: '',
        fecha_Ingreso: '',
        tipo_contrato: '',
        jornada_laboral: '',
        salario: '',
        meses_experiencia: '',
        exp_otras_empresas: [],
        habilidades_competencias: [],
        idiomas: [],
        eps: '',
        fondo_de_pensiones: '',
        cesantias: '',
    });
    const history = useHistory();

    const [currentExperience, setCurrentExperience] = useState({
        empresa: '',
        cargo: '',
        duracion: ''
    });

    const [currentIdiomas, setcurrentIdiomas] = useState({
        idioma: '',
    })

    const [currentHabiliComp, setcurrentHabiliComp] = useState({
        habilidad_o_competencia: '',
    })
    /*--------------------------------------------------------------------------------------------*/

    const handleDateInputform3 = (e) => {
        const input = e.target.value;
        const formattedInput = input
            .replace(/\D/g, '')
            .match(/(\d{0,2})(\d{0,2})(\d{0,4})/)
            .slice(1)
            .filter(part => part)
            .join('-');

        e.target.value = formattedInput;
    };


    const handleSelectChangeform3 = (e) => {
        const { name, value } = e.target;
        setdataForm3((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    const handleChangeform3 = (e) => {
        const { name, value } = e.target;
        setdataForm3((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmitforms3 = async (e) => {
        e.preventDefault();
      };

    const handleSubmitform3 = async (e) => {
        e.preventDefault();
        const storedFormData = JSON.parse(localStorage.getItem('combinedData'));
        localStorage.setItem('combinedDataform3', JSON.stringify({ ...storedFormData, ...dataForm3 }));
        history.push('/Form4');
    };

    /*--------------------------------------------------------------------------------------------*/
    const [addExperienceTrigger, setAddExperienceTrigger] = useState(false);
    const [addIdiomaTrigger, setAddIdiomaTrigger] = useState(false);
    const [addHabiliCompTrigger, setaddHabiliCompTrigger] = useState(false);
    /*--------------------------------------------------------------------------------------------*/


    const handleChangeExperience = (e) => {
        const { name, value } = e.target;
        setCurrentExperience({
            ...currentExperience,
            [name]: value
        });
    };

    const handleChangeIdioma = (e) => {
        const { name, value } = e.target;
        setcurrentIdiomas({
            ...currentIdiomas,
            [name]: value
        });
    };

    const handleChangeHabilicomp = (e) => {
        const { name, value } = e.target;
        setcurrentHabiliComp({
            ...currentHabiliComp,
            [name]: value
        });
    };
    /*--------------------------------------------------------------------------------------------*/

    const handleAddExperience = () => {
        setAddExperienceTrigger(true);
    };

    const handleAddIdioma = () => {
        setAddIdiomaTrigger(true);
    };

    const handleAddHabilicomp = () => {
        setaddHabiliCompTrigger(true)
    }
    /*--------------------------------------------------------------------------------------------*/

    useEffect(() => {
        if (addExperienceTrigger) {
            setdataForm3((prevData) => ({
                ...prevData,
                exp_otras_empresas: [...prevData.exp_otras_empresas, currentExperience]
            }));
            setCurrentExperience({ empresa: '', cargo: '', duracion: '' });
            setAddExperienceTrigger(false);
        }
    }, [addExperienceTrigger, currentExperience]);


    useEffect(() => {
        if (addIdiomaTrigger) {
            setdataForm3((prevData) => ({
                ...prevData,
                idiomas: [...prevData.idiomas, currentIdiomas]
            }));
            setcurrentIdiomas({ idioma: '', });
            setAddIdiomaTrigger(false);
        }
    }, [addIdiomaTrigger, currentIdiomas]);


    useEffect(() => {
        if (addHabiliCompTrigger) {
            setdataForm3((prevData) => ({
                ...prevData,
                habilidades_competencias: [...prevData.habilidades_competencias, currentHabiliComp]
            }));
            setcurrentHabiliComp({ habilidad_o_competencia: '', })
            setaddHabiliCompTrigger(false);
        }
    }, [addHabiliCompTrigger, currentHabiliComp]);
    /*--------------------------------------------------------------------------------------------*/


    const handleDeleteItem = (index) => {
        const newData = { ...dataForm3 };
        newData.exp_otras_empresas.splice(index, 1);
        setdataForm3({
            ...newData,
            exp_otras_empresas: newData.exp_otras_empresas,
        });
    };

    const handleDeleteItemidioma = (index) => {
        const newData = { ...dataForm3 };
        newData.idiomas.splice(index, 1);
        setdataForm3({
            ...newData,
            idiomas: newData.idiomas,
        });
    };

    const handelDeleteItemHabiliComp = (index) => {
        const newData = { ...dataForm3 };
        newData.habilidades_competencias.splice(index, 1);
        setdataForm3({
            ...newData,
            habilidades_competencias: newData.habilidades_competencias,
        });
    };
    /*--------------------------------------------------------------------------------------------*/


    return (
        <div>
            <form className="formulario" onSubmit={handleSubmitforms3}>
                <div>
                    <div className='container_title_form'>
                        <label className='Title_form' htmlFor="Form1">EXPERIENCIA LABORAL</label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="empresa">Empresa:</label>
                        <input
                            type="text"
                            id="empresa"
                            name="empresa"
                            value={currentExperience.empresa}
                            onChange={handleChangeExperience}
                            autoComplete="off"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cargo">Cargo:</label>
                        <input
                            type="text"
                            id="cargo"
                            name="cargo"
                            value={currentExperience.cargo}
                            onChange={handleChangeExperience}
                            autoComplete="off"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="duracion">Duración:</label>
                        <input
                            type="text"
                            id="duracion"
                            name="duracion"
                            value={currentExperience.duracion}
                            onChange={handleChangeExperience}
                            autoComplete="off"
                        />
                    </div>
                    <button className='sig_btn' onClick={handleAddExperience} type="button">Añadir</button>
                </div>
                <div className="table-container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Empresa</th>
                                <th>Cargo</th>
                                <th>Duración</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody >
                            {dataForm3.exp_otras_empresas.map((experience, index) => (
                                <tr key={index}>
                                    <td>{experience.empresa}</td>
                                    <td>{experience.cargo}</td>
                                    <td>{experience.duracion}</td>
                                    <td>
                                        <button onClick={() => handleDeleteItem(index)}><img src={imgtrash} alt="My SVG" /></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </form>
            <form className="formulario" onSubmit={handleSubmitforms3}>
                <div>
                    <div className='container_title_form'>
                        <label className='Title_form' htmlFor="Form1">HABILIDADES Y COMPETENCIA</label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="habilidad_o_competencia">Habilidad o competencia:</label>
                        <input
                            type="habilidad_o_competencia"
                            id="habilidad_o_competencia"
                            name="habilidad_o_competencia"
                            value={currentHabiliComp.habilidad_o_competencia}
                            onChange={handleChangeHabilicomp}
                            autoComplete="off"
                        />
                    </div>
                    <button className='sig_btn' onClick={handleAddHabilicomp} type="button">Añadir</button>
                </div>
                <div className="table-container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Habilidad o competenecia</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody >
                            {dataForm3.habilidades_competencias.map((habilidades_competencias, index) => (
                                <tr key={index}>
                                    <td>{habilidades_competencias.habilidad_o_competencia}</td>
                                    <td>
                                        <button onClick={() => handelDeleteItemHabiliComp(index)}><img src={imgtrash} alt="My SVG" /></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </form>
            <form className="formulario" onSubmit={handleSubmitforms3}>
                <div>
                    <div className='container_title_form'>
                        <label className='Title_form' htmlFor="Form1">¿QUE IDIOMAS HABLAS?</label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="idioma">Idioma:</label>
                        <input
                            type="text"
                            id="idioma"
                            name="idioma"
                            value={currentIdiomas.idioma}
                            onChange={handleChangeIdioma}
                            autoComplete="off"
                        />
                    </div>
                    <button className='sig_btn' onClick={handleAddIdioma} type="button">Añadir</button>
                </div>
                <div className="table-container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Idioma</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody >
                            {dataForm3.idiomas.map((idiomas, index) => (
                                <tr key={index}>
                                    <td>{idiomas.idioma}</td>
                                    <td>
                                        <button onClick={() => handleDeleteItemidioma(index)}><img src={imgtrash} alt="My SVG" /></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </form>
            <form className="formulario" onSubmit={handleSubmitform3}>
                <div className='container_title_form'>
                    <label className='Title_form' htmlFor="Form1">INFORMACIÓN LABORAL</label>
                </div>
                <div className="form-group">
                    <label htmlFor="puesto_trabajo">Cargo:</label>
                    <input
                        type="text"
                        id="puesto_trabajo"
                        name="puesto_trabajo"
                        value={dataForm3.puesto_trabajo}
                        onChange={handleChangeform3}
                        required
                        autoComplete="off"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="dep_Area">Departamento/Área:</label>
                    <input
                        type="text"
                        id="dep_Area"
                        name="dep_Area"
                        value={dataForm3.dep_Area}
                        onChange={handleChangeform3}
                        required
                        autoComplete="off"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="fecha_Ingreso">Fecha de ingreso a la empresa:</label>
                    <input
                        placeholder='DD/MM/AAAA'
                        type="text"
                        id="fecha_Ingreso"
                        name="fecha_Ingreso"
                        value={dataForm3.fecha_Ingreso}
                        onChange={handleChangeform3}
                        onInput={handleDateInputform3}
                        required
                        autoComplete="off"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="tipo_contrato">Tipo de contrato:</label>
                    <select
                        id="tipo_contrato"
                        name="tipo_contrato"
                        value={dataForm3.tipo_contrato}
                        onChange={handleSelectChangeform3}
                        required
                        autoComplete="off"
                    >
                        <option value="" disabled hidden>Seleccione</option>
                        <option value="Temporal">Temporal</option>
                        <option value="Indefinido">Indefinido</option>
                        <option value="Por obra">Por obra</option>
                        <option value="Fijo">Fijo</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="jornada_laboral">Jornada Laboral:</label>
                    <select
                        id="jornada_laboral"
                        name="jornada_laboral"
                        value={dataForm3.jornada_laboral}
                        onChange={handleSelectChangeform3}
                        required
                        autoComplete="off"
                    >
                        <option value="" disabled hidden>Seleccione</option>
                        <option value="Completa">Completa</option>
                        <option value="Parcial">Parcial</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="salario">Salario:</label>
                    <input
                        placeholder="$:"
                        type="text"
                        id="salario"
                        name="salario"
                        value={dataForm3.salario}
                        onChange={handleChangeform3}
                        required
                        onInput={(e) => {
                            e.target.value = e.target.value.replace(/\D/g, '');
                        }}
                        pattern="\d*"
                        autoComplete="off"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="meses_experiencia">Años de experiencia:</label>
                    <input
                        type="tel"
                        id="meses_experiencia"
                        name="meses_experiencia"
                        value={dataForm3.meses_experiencia}
                        onChange={handleChangeform3}
                        required
                        onInput={(e) => {
                            e.target.value = e.target.value.replace(/\D/g, '');
                        }}
                        pattern="\d*"
                        autoComplete="off"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="eps">EPS:</label>
                    <input
                        type="text"
                        id="eps"
                        name="eps"
                        value={dataForm3.eps}
                        onChange={handleChangeform3}
                        required
                        autoComplete="off"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="fondo_de_pensiones">Fondo de pensiones:</label>
                    <input
                        type="text"
                        id="fondo_de_pensiones"
                        name="fondo_de_pensiones"
                        value={dataForm3.fondo_de_pensiones}
                        onChange={handleChangeform3}
                        required
                        autoComplete="off"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="cesantias">Cesantias:</label>
                    <input
                        type="text"
                        id="cesantias"
                        name="cesantias"
                        value={dataForm3.cesantias}
                        onChange={handleChangeform3}
                        required
                        autoComplete="off"
                    />
                </div>
                <div className='button-container'>
                    <button type='submit' className='sig_btn'>Siguiente</button>
                </div>
            </form>
        </div>
    );
}

export default Form3;
