/* eslint-disable */
import { uploadPhoto, createUser } from './utils.js';

export default async function asyncUploadUser(){
    let result = {};
    try {
        const photo = uploadPhoto();
        const user = createUser();
        result = {photo, user};
    } catch (error) {
        result = { photo: null, user: null};
    }
    return result;
}