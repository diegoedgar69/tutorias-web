export default async function apiCall({
                                          url,
                                          method = 'post',
                                          body = {},
                                          headers = {'Content-Type': 'application/json'},
                                          sii = false
                                      }) {
    try {
        let server = sii ? "https://tutorias-api-3de1b22a4dd7.herokuapp.com/tutorias/v1/" : "https://tutorias-api-3de1b22a4dd7.herokuapp.com/tutorias/v1/";
        let result = await fetch(server + url, {
            method: method, headers: headers, body: JSON.stringify(body)
        })
        if (result.status === 200 || result.status === 201) {
            let resp = await result.json()
            return await resp["respuesta"]
        } else {
            return null;
        }
    } catch (error) {
        return null
    }
}