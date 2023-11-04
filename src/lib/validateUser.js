import axios from "axios";
export const validateUser = async (email, userName) => {
    const res = await axios.post('/validate-user.php', {
        userName,
        email
    });
    if(res.data.status === "valid")
        return true;

    return false;
}