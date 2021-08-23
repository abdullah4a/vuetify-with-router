import * as axios from "axios";
import { API } from "./config";
// Configures Users
const fetchUser = async function() {
        try {
            const responce = await axios.get(`${API}/users.json`);
            let data = parselist(responce);
            const users = data;
            return users;
        } catch (error) {
            console.error(`There is an Error ${error}`);
            return [];
        }
    }
    // parsing a Response for User and Cheking Status..
const parselist = response => {
    if (response.status != 200) throw Error(response.message);
    if (!response.data) return [];
    let list = response.data;
    if (typeof list != "object") {
        list = [];
    }
    return list;
};
export const login = {
    fetchUser,
}