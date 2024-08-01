
const ApiURL = 'http://192.168.7.185:2375/api/personas/createOrUpdate';

function encodeBase64(str) {
    return btoa(str);
}

export const EnviarDatos = async (data, headers) => {
    const username = "INT3GR4C10N";
    const password = "sIB13h6}VMYBVUTuv5ILm";
    const credentials = encodeBase64(`${username}:${password}`);

    try {
        const response = await fetch(ApiURL, {
            method: 'POST',
            headers: {
                ...headers,
                'Content-Type': 'application/json',
                'Authorization': `Basic ${credentials}`
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            console.log("Datos enviados exitosamente");
            return; 
        } else {
            throw new Error(`Error al enviar datos: ${response.status} ${response.statusText}`);
        }
    } catch (error) {
        console.error("Error en EnviarDatos:", error); 
        throw error;  
    }
};