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
    let correct=null;
    switch(id) {
        case "92468286-0419-4562-905e-d257c0bc2d4a":
        correct = {
            "shipment": "92468286-0419-4562-905e-d257c0bc2d4a",
            "external_id": "1063437",
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
        break;
        case "9bff6704-11c2-48e6-8b53-e9ea18966088":
        correct = {
            "shipment": "9bff6704-11c2-48e6-8b53-e9ea18966088",
            "external_id": "1063438",
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
        break;
        case "c7c8d7eb-e43c-442f-9fe0-651716d9a488":
        correct = {
            "shipment": "c7c8d7eb-e43c-442f-9fe0-651716d9a488",
            "external_id": "1063439",
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
        break;
        case "065a7e34-d9e4-4cce-abea-4fae728265a3":
        correct = {
            "shipment": "065a7e34-d9e4-4cce-abea-4fae728265a3",
            "external_id": "1063440",
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
        break;
        case "b1c12e68-8be7-4826-8da2-ebef63e9eb33":
        correct = {
            "shipment": "b1c12e68-8be7-4826-8da2-ebef63e9eb33",
            "external_id": "1063441",
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
        break;
        case "aa71c2cd-b4bb-4b7b-8b5a-fdb46b62d1ce":
        correct = {
            "shipment": "aa71c2cd-b4bb-4b7b-8b5a-fdb46b62d1ce",
            "external_id": "1063491",
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
        break;
        case "5c4417ab-316d-4f00-95b1-472bfe914b68":
        correct = {
            "shipment": "5c4417ab-316d-4f00-95b1-472bfe914b68",
            "external_id": "1063492",
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
        break;
        case "3d71698a-4789-4130-ad5a-a0abd61b258e":
        correct = {
            "shipment": "3d71698a-4789-4130-ad5a-a0abd61b258e",
            "external_id": "1063493",
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
        break;
        case "74fa70fb-2ff5-4bbf-aa6b-c36c5355c133":
        correct = {
            "shipment": "74fa70fb-2ff5-4bbf-aa6b-c36c5355c133",
            "external_id": "1063494",
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
        break;
        case "2260b538-9efe-45e7-b86c-973362c35fb9":
        correct = {
            "shipment": "2260b538-9efe-45e7-b86c-973362c35fb9",
            "external_id": "1063495",
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
        break;
        case "f5538e57-16ac-416d-95fe-f84675c4d639":
        correct = {
            "shipment": "f5538e57-16ac-416d-95fe-f84675c4d639",
            "external_id": "1063496",
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
        break;
        case "f0ad8b97-1424-45e6-a76d-838f4d8a7438":
        correct = {
            "shipment": "f0ad8b97-1424-45e6-a76d-838f4d8a7438",
            "external_id": "1063497",
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
        break;
        case "858e0635-6913-46f4-93cc-e9e316db2c91":
        correct = {
            "shipment": "858e0635-6913-46f4-93cc-e9e316db2c91",
            "external_id": "1063498",
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
        break;
    }
        
    const error={
        "shipment": "error",
        "carrier": "moova",
        "country": "ARG",
        "external_id": "",
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