import * as request from "../lib/request";

const baseURL = "http://localhost:3030/data/comments";

export const getAll = async (shoseId) => {
    const query = new URLSearchParams({
        where: `shoseId="${shoseId}"`,
        load: `owner=_ownerId:users`,
    })

    const result = await request.get(`${baseURL}?${query.toString()}`)
    return result
}

export const create = async (shoseId, username, text) => {
    const newComment = await request.post(baseURL, {
        shoseId,
        username,
        text
    })
    return newComment

}


