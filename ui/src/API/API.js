const url = `http://192.168.43.253:49843/api`

export const API = {
    async getData(to) {
        const response = await fetch(`${url}${to}`);
        const data = await response.json();
        return data;
    }
}
