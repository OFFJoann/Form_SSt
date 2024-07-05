const ApiURLGET = 'http://192.168.7.185:8080/api/personas/1090481799';

export const Obtenerdatos = async () => {
    try {
        const response = await fetch(ApiURLGET);
        if (!response.ok) {
            throw new Error(`Error al obtener datos: ${response.statusText}`);
        }
        const datosJson = await response.json();
        return datosJson;
    } catch (error) {
        console.error('No se pudo obtener data de la API:', error);
        throw error;
    }
};


const ApiURL = 'http://192.168.7.185:8080/api/personas';

export const EnviarDatos = async (data, headers) => {
    try {
        const response = await fetch(ApiURL, {
            method: 'POST',
            headers: {
                ...headers,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        console.log('Estatus', response.status);

        if (!response.ok) {
            throw new Error(`Error al enviar datos: ${response.statusText}`);
        }

 new Error('Respuesta vacía del servidor');
    } catch (error) {
        console.error('No se pudo enviar data a la API:', error);
        throw error;
    }
};