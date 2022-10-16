const express = require('express');

const app = express();

app.post('/api/v1/shipping',(req,res)=>{
    const error={
        "externalId": "It was not possible to calculate the value of the shipment",
        "internalId": "It was not possible to calculate the value of the shipment",
        "status": "ERROR",
        "error": "The internalId value does not exist or something went wrong, please contact support."
    }
      
    res.json(error);
});

app.get('/api/v1/shipping/:externalId',(req,res)=>{
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
    }     
    res.json(error);
});

const PORT = process.env.PORT || 8080;

const server= app.listen(PORT,() => {
    console.log(`Servidor escuchando en puerto ${server.address().port}`);
});

server.on('error',error => console.log(`Error en servidor ${error}`));