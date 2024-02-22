import * as request from "../lib/request";

const baseURL = "http://localhost:3030/jsonstore/comments";

export const getAllComment = async () => {
    const result = await request.get(baseURL)
    return Object.values(result)
}

export const createComments = async (shoseId, username, text) => {
    const newComment = await request.post(baseURL, {
        shoseId,
        username,
        text
    })
    return newComment

}


