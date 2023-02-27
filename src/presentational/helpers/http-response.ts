
function badRequest(message: string){
    return {
        statusCode: 400,
        body: message
    }
}

function created(data: unknown){
    return {
        statusCode: 200,
        body: data
    }
}

function error(error: unknown){
    return {
        statusCode: 400,
        body: error
    }
}

export {
    badRequest,
    created,
    error
}