type HttpMethod = 'GET' | 'POST' | 'PUT' | 'POST' | 'DELETE'
interface detailType {
    method: HttpMethod,
    body?: Record<string, unknown>
}
async function request(url: string, details: detailType) {
    const method = details?.method
    try {
        const response = await fetch(`http://localhost:3001/api/${url}`, {
            method: (method || 'GET'),
            ...((method === 'POST' || method === 'PUT') ?
                {
                    body: details.body ? JSON.stringify(details.body) : undefined,
                }
                : {})
        })
        if (response) {
            return await response?.json();
        }
    }
    catch (err) {
        throw err;
    }
}
export { request }