export const checkRequest = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(res);
};