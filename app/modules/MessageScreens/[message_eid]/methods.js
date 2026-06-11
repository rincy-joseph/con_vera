import { request } from "@/utils/helper/request"

export const GetMessageDetails = async (id) => {

    try {
        const result = await request('GetMessagedetails/id=' + id, { method: 'GET' })
        if (result?.data?.length) {
            return result?.data;
        }
    }
    catch (err) {
        throw (err)
    }
}