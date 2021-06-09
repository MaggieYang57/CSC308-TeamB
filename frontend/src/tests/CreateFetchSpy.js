export default function createFetchSpy(fetchRes = {}, jsonRes = {}) {
    const fetchSpy = jest.spyOn(window, 'fetch')
    // spyOn returns Promise<Response> based off of the return value of fetch, 
    const jsonSpy = jest.fn();
    
    fetchSpy.mockReturnValue(new Promise((resolve, reject) => {
      resolve({
        ok: true,
        status: 200,
        json: jsonSpy, // this is the mock of the json property that a response of a Promise would usually return
        ...fetchRes
      });
    }))

    jsonSpy.mockReturnValue(new Promise((resolve, reject) => {
      resolve(jsonRes);
    }))

    return [fetchSpy, jsonSpy];
}
