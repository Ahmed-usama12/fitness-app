import axios from "axios";
import type { ChangePasswordFields } from "../schema/auth.schema";
import type { ChangePassword } from "../types/auth";

//Edit profile
export async function editProfile(values: any, token: string) {
    const { data } = await axios.put(`${import.meta.env.VITE_API}/auth/editProfile`, values, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return data;
}

//Change password
export async function changePassword(values: ChangePasswordFields, token: string): Promise<APIResponse<ChangePassword
>> {
    const { data } = await axios.patch(`${import.meta.env.VITE_API}/auth/change-password`, values,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );
    return data
}