export default (axios) => {
    return {
        fetch(id) {
            return axios.get(`${process.env.VUE_APP_API_URL}/users/${id}`);
        },
        fetchAll() {
            return axios.get(`${process.env.VUE_APP_API_URL}/users`);
        },
        update(id, data) {
            return axios.put(`${process.env.VUE_APP_API_URL}/users/${id}`, data);
        },
        delete(id) {
            return axios.delete(`${process.env.VUE_APP_API_URL}/users/${id}`);
        }
    }
}