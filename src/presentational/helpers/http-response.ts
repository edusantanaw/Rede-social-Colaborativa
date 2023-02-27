
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

export {
    badRequest,
    created
}