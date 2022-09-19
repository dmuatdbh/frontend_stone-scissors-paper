export class ResouceService {

    private static readonly REST_API_URL= "http://localhost:8180/";

    protected static async call(servicePath: string, httpMethod: "GET" | "PATCH" | "PUT") {
        return ResouceService.callServer(this.REST_API_URL + servicePath, httpMethod);
    }

    private static async callServer(url: string, method: "GET" | "PATCH" | "PUT") {
        const headers: Headers = new Headers({
            "Accept": "application/json, text/plain, */*",
        });
        try {
            const response = await fetch(url, {
                headers,
                method,
            });
            if (response && response.headers) {
                if (response.ok) {
                    let data;
                    data = await response.json();
                    if (data) {
                        return data;
                    }
                    return response;
                }
                throw new Error(`Bad Response: ${response.status} ${response.statusText}`);
            }
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        } catch (error: any) {
            // Logging
        }
    }
}
