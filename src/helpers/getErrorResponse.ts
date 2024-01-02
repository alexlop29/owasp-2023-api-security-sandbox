import { DocumentError } from "../types"

const getErrorResponse: any(error: unknown): DocumentError => {
    if (error instanceof String && error.includes('not found')){
        return { Status: 404, Message: "File Not Found" };
    } else if (error instanceof DocumentError && error["Status"] == 401){
        return { Status: 401, Message: "Unauthorized" };
    }
    else {
        return { Status: 500, Message: "Internal Server Error" }
    }
}

export { getErrorResponse };
