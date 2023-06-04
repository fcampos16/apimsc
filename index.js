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

app.get('/orders/:id',(req,res)=>{
    const { id } = req.params;
    let correct=null;
    correct = {
        "id": 2000005768964120,
        "date_created": "2023-06-02T05:38:45.000-04:00",
        "last_updated": "2023-06-02T05:41:19.000-04:00",
        "expiration_date": "2023-06-30T05:39:31.000-04:00",
        "date_closed": "2023-06-02T05:39:31.000-04:00",
        "comment": null,
        "pack_id": 2000004503068057,
        "pickup_id": null,
        "fulfilled": null,
        "hidden_for_seller": null,
        "buying_mode": "buy_equals_pay",
        "shipping_cost": null,
        "application_id": null,
        "mediations": [],
        "total_amount": 3837.00,
        "paid_amount": 3837.00,
        "coupon": {
            "amount": 0.00,
            "id": null
        },
        "order_items": [
            {
                "item": {
                    "id": "MLA725484167",
                    "title": "Cafayate Reserve Cabernet Sauvignon Botella De 750 Ml",
                    "category_id": "MLA1404",
                    "variation_id": null,
                    "seller_custom_field": "7790093095238",
                    "variation_attributes": [],
                    "warranty": "De la marca",
                    "condition": "new",
                    "seller_sku": "7790093095238",
                    "global_price": null,
                    "net_weight": null
                },
                "quantity": 3,
                "requested_quantity": {
                    "value": 3,
                    "measure": "unit"
                },
                "picked_quantity": null,
                "unit_price": 1279.00,
                "full_unit_price": 1676.00,
                "currency_id": "ARS",
                "manufacturing_days": null,
                "sale_fee": 179.06,
                "listing_type_id": "gold_special",
                "base_exchange_rate": null,
                "base_currency_id": null,
                "element_id": null,
                "discounts": null,
                "bundle": null
            }
        ],
        "currency_id": "ARS",
        "payments": [],
        "shipping": {
            "id": 42321471080
        },
        "status": "paid",
        "status_detail": null,
        "tags": [
            "supermarket",
            "pack_order",
            "splitted_order",
            "paid",
            "not_delivered"
        ],
        "internal_tags": [],
        "feedback": {
            "seller": null,
            "buyer": null
        },
        "context": {
            "channel": "marketplace",
            "site": "MLA",
            "flows": [
                "supermarket"
            ],
            "application": null,
            "product_id": null,
            "store_id": null
        },
        "seller": {
            "id": 309657858
        },
        "buyer": {
            "id": 799262,
            "nickname": "CLAP_CYCLING_PRODUCTS",
            "first_name": "Claudio Ignacio Pertile",
            "last_name": "Claudio Ignacio Pertile"
        },
        "taxes": {
            "amount": null,
            "currency_id": null,
            "id": null
        },
        "cancel_detail": null,
        "manufacturing_ending_date": null,
        "order_request": {
            "change": null,
            "return": null
        }
    };
    return res.json(correct);
});

/*app.get('/api/v1/shipping/:id',(req,res)=>{
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
                    "description": "fernanda prueba.",
                    "sub_status": "routing",
                    "carrier_updated_at": "2023-01-20T11:20:10.000",
                    "updated_at": "2023-01-20T14:12:55.213"
                },
                {
                    "status": "in_transit",
                    "description": "cuando algo inesperado sucede durante la vida de un envío. Incluye una descripción de la incidencia.",
                    "sub_status": "1st_visit",
                    "carrier_updated_at": "2023-01-20T11:30:10.000",
                    "updated_at": "2023-01-20T14:16:26.435"
                },
                {
                    "status": "in_transit",
                    "description": "el envío fue devuelto a su lugar de origen.",
                    "sub_status": "2nd_visit",
                    "carrier_updated_at": "2023-01-20T11:45:10.000",
                    "updated_at": "2023-01-20T14:18:15.156"
                },
                {
                    "status": "in_transit",
                    "description": "el envío fue devuelto a su lugar de origen.",
                    "sub_status": "3rd_visit",
                    "carrier_updated_at": "2023-01-20T12:00:10.000",
                    "updated_at": "2023-01-20T14:20:15.156"
                },
                {
                    "status": "in_transit",
                    "description": "el envío fue devuelto a su lugar de origen.",
                    "sub_status": "distributing",
                    "carrier_updated_at": "2023-01-20T12:20:10.000",
                    "updated_at": "2023-01-20T14:22:15.156"
                },
                {
                    "status": "delivered",
                    "description": "el envío fue devuelto a su lugar de origen.",
                    "sub_status": "delivered",
                    "carrier_updated_at": "2023-01-20T12:30:10.000",
                    "updated_at": "2023-01-20T14:24:15.156"
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
                    "sub_status": "routing",
                    "carrier_updated_at": "2023-01-20T11:20:10.000",
                    "updated_at": "2023-01-20T14:12:55.213"
                },
                {
                    "status": "in_transit",
                    "description": "cuando algo inesperado sucede durante la vida de un envío. Incluye una descripción de la incidencia.",
                    "sub_status": "routing_issues",
                    "carrier_updated_at": "2023-01-20T11:30:10.000",
                    "updated_at": "2023-01-20T14:16:26.435"
                },
                {
                    "status": "in_transit",
                    "description": "el envío fue devuelto a su lugar de origen.",
                    "sub_status": "address_issues",
                    "carrier_updated_at": "2023-01-20T11:45:10.000",
                    "updated_at": "2023-01-20T14:18:15.156"
                },
                {
                    "status": "in_transit",
                    "description": "el envío fue devuelto a su lugar de origen.",
                    "sub_status": "ready_to_pickup",
                    "carrier_updated_at": "2023-01-20T12:45:10.000",
                    "updated_at": "2023-01-20T14:20:15.156"
                },
                {
                    "status": "not_delivered",
                    "description": "el envío fue devuelto a su lugar de origen.",
                    "sub_status": "pickup_expired",
                    "carrier_updated_at": "2023-01-20T13:00:10.000",
                    "updated_at": "2023-01-20T14:22:15.156"
                },
                {
                    "status": "not_delivered",
                    "description": "el envío fue devuelto a su lugar de origen.",
                    "sub_status": "returning_to_sender",
                    "carrier_updated_at": "2023-01-20T13:15:10.000",
                    "updated_at": "2023-01-20T14:25:15.156"
                },
                {
                    "status": "not_delivered",
                    "description": "el envío fue devuelto a su lugar de origen.",
                    "sub_status": "lost",
                    "carrier_updated_at": "2023-01-20T13:30:10.000",
                    "updated_at": "2023-01-20T14:30:15.156"
                }
            ]
         };
        return res.json(correct);
        break;
        case "8689f620-1945-4804-aa9f-3cb38e4dbf71":
        correct = {
            "shipment": "8689f620-1945-4804-aa9f-3cb38e4dbf71",
            "external_id": "1063511",
            "status_history": [
                {
                    "status": "pending",
                    "description": "Prueba MIa.",
                    "sub_status": "pending",
                    "carrier_updated_at": "2023-01-20T11:08:10.000",
                    "updated_at": "2023-01-20T14:10:10.313"
                },
                {
                    "status": "pending",
                    "description": "envío asignado a un moover (es el mensajero que realiza el envío).",
                    "sub_status": "ready_for_dropoff",
                    "carrier_updated_at": "2023-01-20T11:20:10.000",
                    "updated_at": "2023-01-20T14:12:55.213"
                },
                {
                    "status": "pending",
                    "description": "cuando algo inesperado sucede durante la vida de un envío. Incluye una descripción de la incidencia.",
                    "sub_status": "dropoff_expired",
                    "carrier_updated_at": "2023-01-20T11:30:10.000",
                    "updated_at": "2023-01-20T14:16:26.435"
                },
                {
                    "status": "processing",
                    "description": "el envío fue devuelto a su lugar de origen.",
                    "sub_status": "routing_issues",
                    "carrier_updated_at": "2023-01-20T11:45:10.000",
                    "updated_at": "2023-01-20T14:18:15.156"
                },
                {
                    "status": "processing",
                    "description": "el envío fue devuelto a su lugar de origen.",
                    "sub_status": "address_issues",
                    "carrier_updated_at": "2023-01-20T12:00:10.000",
                    "updated_at": "2023-01-20T14:20:15.156"
                },
                {
                    "status": "processing",
                    "description": "el envío fue devuelto a su lugar de origen.",
                    "sub_status": "ready_for_pickup",
                    "carrier_updated_at": "2023-01-20T12:15:10.000",
                    "updated_at": "2023-01-20T14:22:15.156"
                },
                {
                    "status": "processing",
                    "description": "el envío fue devuelto a su lugar de origen.",
                    "sub_status": "1st_visit",
                    "carrier_updated_at": "2023-01-20T12:30:10.000",
                    "updated_at": "2023-01-20T14:24:15.156"
                },
                {
                    "status": "processing",
                    "description": "el envío fue devuelto a su lugar de origen.",
                    "sub_status": "2nd_visit",
                    "carrier_updated_at": "2023-01-20T12:45:10.000",
                    "updated_at": "2023-01-20T14:26:15.156"
                },
                {
                    "status": "processing",
                    "description": "el envío fue devuelto a su lugar de origen.",
                    "sub_status": "3rd_visit",
                    "carrier_updated_at": "2023-01-20T13:00:10.000",
                    "updated_at": "2023-01-20T14:28:15.156"
                },
                {
                    "status": "processing",
                    "description": "el envío fue devuelto a su lugar de origen.",
                    "sub_status": "not_collected",
                    "carrier_updated_at": "2023-01-20T13:15:10.000",
                    "updated_at": "2023-01-20T14:30:15.156"
                },
                {
                    "status": "in_transit",
                    "description": "el envío fue devuelto a su lugar de origen.",
                    "sub_status": "collected",
                    "carrier_updated_at": "2023-01-20T13:30:10.000",
                    "updated_at": "2023-01-20T14:32:15.156"
                },
                {
                    "status": "not_delivered",
                    "description": "el envío fue devuelto a su lugar de origen.",
                    "sub_status": "lost",
                    "carrier_updated_at": "2023-01-20T13:45:10.000",
                    "updated_at": "2023-01-20T14:34:15.156"
                },
                {
                    "status": "on_hold",
                    "description": "el envío fue devuelto a su lugar de origen.",
                    "sub_status": "assumed_lost",
                    "carrier_updated_at": "2023-01-20T14:15:10.000",
                    "updated_at": "2023-01-20T14:36:15.156"
                },
                {
                    "status": "delivered",
                    "description": "el envío fue devuelto a su lugar de origen.",
                    "sub_status": "delivered",
                    "carrier_updated_at": "2023-01-20T14:35:10.000",
                    "updated_at": "2023-01-20T14:38:15.156"
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
});*/

const PORT = process.env.PORT || 8080;

const server= app.listen(PORT,() => {
    console.log(`Servidor escuchando en puerto ${server.address().port}`);
});

server.on('error',error => console.log(`Error en servidor ${error}`));