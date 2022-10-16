const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.post('/api/v1/shipping',(req,res)=>{
    const body = req.body;
    //console.log(body[0].order);
    if (body[0].order.externalId=="1249462058715-01") {
        const correct = [
            {
                "externalId": "1039",
                "internalId": "f0e6dd6e-0295-11ed-b939-0242ac120002",
                "status": "PROCESSING"
            }
         ];
        return res.json(correct);
    }

    const error=[{
        "externalId": "It was not possible to calculate the value of the shipment",
        "internalId": "It was not possible to calculate the value of the shipment",
        "status": "ERROR",
        "error": "The internalId value does not exist or something went wrong, please contact support."
    }];
      
    return res.json(error);
});

app.get('/api/v1/shipping/:externalId',(req,res)=>{
    const { externalId } = req.params;
    if (externalId=="1249462058715-01") {
        const correct = {
            "shipment": "f0e6dd6e-0295-11ed-b939-0242ac120002",
            "carrier": "Dummy",
            "trackingNumber": "11111222223333",
            "trackingURL": "https://tracking.com/11111222223333",
            "labelPDF": "https://s3.aws/bucket/dummy/11111222223333.pdf",
            "labelZPL": "https://s3.aws/bucket/dummy/11111222223333.zpl",
            "updatedAt": "2022-08-20'T'07:45:32.457",
            "createdAt": "2022-08-20'T'06:24:41.658",
            "status": "PROCESSED",
            "errorMessage": null,
            "statusHistory": [
                {
                    "status": "DynamoDB-status",
                    "subStatus": "DynamoDB-sub-status",
                    "carrierUpdatedAt": "DynamoDB-carrier-updated-at",
                    "updatedAt": "DynamoDB-updated-at",
                    "description": "DynamoDB-description"
                },
                {
                    "status": "DynamoDB-status",
                    "subStatus": "DynamoDB-sub-status",
                    "carrierUpdatedAt": "DynamoDB-carrier-updated-at",
                    "updatedAt": "DynamoDB-updated-at",
                    "description": "DynamoDB-description"
                }
            ]
         };
        return res.json(correct);
    }
    const error={
        "shipment": "f0e6dd6e-0295-11ed-b939-0242ac120002",
        "carrier": "Dummy",
        "trackingNumber": "11111222223333",
        "trackingURL": "https://tracking.com/11111222223333",
        "labelPDF": null,
        "labelZPL": null,
        "updatedAt": "2022-08-20'T'07:45:32.457",
        "createdAt": "2022-08-20'T'06:24:41.658",
        "status": "ERROR",
        "errorMessage": "No se puede generar la etiqueta.",
        "statusHistory": []
    };     
    return res.json(error);
});

const PORT = process.env.PORT || 8080;

const server= app.listen(PORT,() => {
    console.log(`Servidor escuchando en puerto ${server.address().port}`);
});

server.on('error',error => console.log(`Error en servidor ${error}`));