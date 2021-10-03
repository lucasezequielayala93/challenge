export default (axios) => {
    return {
        fetch(userId) {
            return axios.get(`${process.env.VUE_APP_API_URL}/posts?userId=${userId}`);
        },
        fetchAll() {
            return axios.get(`${process.env.VUE_APP_API_URL}/posts`);
        }
    }
}