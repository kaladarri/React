export default function cliente(req, res){
    if(req.method == "GET"){
        handleGET(req,res)
    }else{
        res.status(405).send();
    }
    
}

function handleGET(req,res){
    res.status(200).json({
        cliente:'123'
    })
}