import urlSchema from "../models/short_url.model.js";
import { ConflictError } from "../utils/errorHandler.js";



export const saveShortUrl = async (shortUrl, longUrl, userId) => {
    try{
        const newUrl = new urlSchema({
            full_url:longUrl,
            short_url:shortUrl
        })