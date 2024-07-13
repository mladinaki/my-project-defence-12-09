import * as request from "../lib/request";

const baseURL = "http://localhost:3030/data/comments";

export const getAll = async (shoseId) => {
    const query = new URLSearchParams({
        where: `shoseId="${shoseId}"`,
        load: `author=_ownerId:users`,
    })

    const result = await request.get(`${baseURL}?${query}`);
    return result
}

export const getOne = async (shoseId) => {
    const response = await request.get(`${baseURL}/${shoseId}`);
    return response;
};

export const create = async (shoseId, shoseData) => {
    const newComment = await request.post(baseURL, {
        shoseId,
        shoseData
    })
    return newComment;
}

export const edit = async (shoseId, shoseData) => {
    const result = await request.put(`${baseURL}/${shoseId}`, shoseData);
    return result
}
export const removeComment = async (shoseId) => {
    const res = await request.del(`${baseURL}/${shoseId}`);
    return res
}
