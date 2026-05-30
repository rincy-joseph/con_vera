import { request } from "@/utils/helper/request"

export const GetMessageList = async () => {

    try {
        const result = await request('GetMessageList', { method: 'GET' })
        if (result?.data?.length) {
            return result?.data;
        }
    }
    catch (err) {
        throw (err)
    }
}