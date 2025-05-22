import User from "../models/user.model.js"
import UrlModel from "../models/short_url.model.js"


export const findUserByEmail = async (email) => {
    return await User.findOne({email})
}
