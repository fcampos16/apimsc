const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

/*app.post('/api/v1/shipping',(req,res)=>{
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
});*/

app.get('/api/v1/shipping/:id',(req,res)=>{
    const { id } = req.params;
    if (id=="732d010e-26fb-4ac8-9c77-84f7bb51fbd7") {
        const correct = {
            "shipment": "732d010e-26fb-4ac8-9c77-84f7bb51fbd7",
            "status_history": [
                {
                    "status": "pending",
                    "description": "El envío esta listo para procesar.",
                    "sub_status": "preparacion / no recogido",
                    "carrier_updated_at": "2023-01-20T11:08:10.000",
                    "updated_at": "2023-01-20T14:10:10.313"
                },
                {
                    "status": "processing",
                    "description": "envío asignado a un moover (es el mensajero que realiza el envío).",
                    "sub_status": "admitted",
                    "carrier_updated_at": "2023-01-20T11:20:10.000",
                    "updated_at": "2023-01-20T14:12:55.213"
                },
                {
                    "status": "on_hold",
                    "description": "cuando algo inesperado sucede durante la vida de un envío. Incluye una descripción de la incidencia.",
                    "sub_status": "assumed_lost",
                    "carrier_updated_at": "2023-01-20T11:30:10.000",
                    "updated_at": "2023-01-20T14:16:26.435"
                },
                {
                    "status": "not_delivered",
                    "description": "el envío fue devuelto a su lugar de origen.",
                    "sub_status": "returned",
                    "carrier_updated_at": "2023-01-20T11:45:10.000",
                    "updated_at": "2023-01-20T14:18:15.156"
                }
            ]
         };
        return res.json(correct);
    }
        
    const error={
        "shipment": "9558e7af-96a3-4d14-8590-ec923b653e11",
        "carrier": "moova",
        "country": "ARG",
        "external_id": "1063431",
        "status": "error",
        "status_change": false,
        "tracking_url": "https://dev.moova.io/external?id=",
        "updated_at": "2023-01-18T14:04:06.966",
        "created_at": "2023-01-18T14:03:43.695",
    };     
    return res.json(error);
});

const PORT = process.env.PORT || 8080;

const server= app.listen(PORT,() => {
    console.log(`Servidor escuchando en puerto ${server.address().port}`);
});

server.on('error',error => console.log(`Error en servidor ${error}`));