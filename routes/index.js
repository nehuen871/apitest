var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    "count": 1,
    "next": null,
    "previous": null,
    "results": [
        {
            "id": 1,
            "anexos_socioproductivos": [
                {
                    "id": 1,
                    "juridica": {
                        "id": 1,
                        "provincia": "asdasd",
                        "proyecto_rubro": "Comercio al por mayor",
                        "proyecto_objetivo": "Ampliar la producción y escala",
                        "tipo": "Fundacion",
                        "proyecto_tipo_actividad": "Comercio",
                        "direccion": "asd",
                        "localidad": "asd",
                        "codigo_postal": 233,
                        "proyecto_nombre": "asdasd",
                        "proyecto_costo": 2324,
                        "proyecto_pertenece_comunidad_indigena": false,
                        "proyecto_comunidad_indigena": null,
                        "proyecto_practicas_regenerativas": false,
                        "nombre": "asd",
                        "fecha_creacion": "2024-11-08",
                        "numero_personeria_juridica": "asd",
                        "fecha_otorgamiento": "2024-11-08",
                        "cuit": 323,
                        "domicilio_legal": "asd",
                        "autoridad_nombre_completo": "asd",
                        "autoridad_dni": 324,
                        "autoridad_cuit": 12,
                        "autoridad_rol": "asd"
                    },
                    "fisica": null,
                    "linea_de_accion": {
                        "id": 1,
                        "presupuestos": [
                            {
                                "id": 1,
                                "tipo_actividad": "asd",
                                "tipo_producto": "asda",
                                "nombre_producto": "sadas",
                                "cantidad_producto": 213,
                                "costo_unitario": 231,
                                "linea_de_accion": 1
                            }
                        ],
                        "produccion_apoyo_tecnico": false,
                        "produccion_maquinaria": false,
                        "produccion_tecnologias": false,
                        "produccion_entrega": false,
                        "comercializacion_fortalecimiento_institucional": false,
                        "comercializacion_apoyo_tecnologico": false,
                        "comercializacion_habilidades_blandas": false,
                        "comercializacion_fortalecimiento_unidades": false,
                        "circular_fortalecimiento": false,
                        "circular_practicas_sostenibles": false,
                        "circular_materiales_reciclados": false,
                        "circular_reduccion_residuos": false,
                        "fundamentacion": "asdasdas",
                        "destinatarios_directos": "http://localhost:8001/media/destinatarios_directos/9416C9FE-E6E8-44FC-B04E-C07B4493D0AB.pdf",
                        "destinatarios_indirectos": 32
                    },
                    "diagnostico_juridica": {
                        "id": 1,
                        "rubro": "Comercio al por menor",
                        "tipo_inmueble": "Propietario",
                        "comprador": "Consumidor final",
                        "cantidad_clientes": "Pocos (de 2 a 10)",
                        "lugar_comercializacion": "En forma ambulante",
                        "modalidad_comercializacion": "Solo produce y vende a pedido del cliente",
                        "fijacion_precios": "El cliente fija el precio de venta",
                        "cantidad_competidores": "de 1 a 5",
                        "conocimiento_competidores": "No los conozco",
                        "interactua_compentidores": "Para comprar en forma conjunta",
                        "modalidad_compras": "Cada vez que necesita (no tiene stock)",
                        "plazo_compra_credito": "Boleta contra boleta",
                        "medio_planificacion": "Usa un sistema de gestión informático",
                        "modalidad_ciclo_productivo": "Linear",
                        "cantidad_integrantes": "Igual o menos de 30",
                        "genero_mayoria": "Hombres",
                        "tipo_actividad": [
                            "Comercio"
                        ],
                        "tipo_dispositivos_moviles": [
                            "Otro"
                        ],
                        "plataforma_comunicacion": [
                            "Otro"
                        ],
                        "redes_sociales": [
                            "TikTok"
                        ],
                        "canales_ventas": [
                            "Tienda online"
                        ],
                        "destino_materiales_recuperados": [
                            "Integración a la producción local"
                        ],
                        "tipo_comunidad": [
                            "Rural"
                        ],
                        "banco": false,
                        "banco_nombre": null,
                        "cuenta_digital": false,
                        "financiamiento": false,
                        "financiamiento_nombre": null,
                        "ingresos_mensuales": 132,
                        "egresos_mensuales": 12,
                        "ganancias_mensuales": 12,
                        "internet": false,
                        "dispositivos_conectados": null,
                        "ventas_destinadas_turismo": false,
                        "recicladores_urbanos": false,
                        "recicladores_equipados": false,
                        "clasificacion_residuos": false,
                        "optimizacion_recursos": false,
                        "financiamiento_sostenible": false,
                        "estrategia_comercializacion": false,
                        "tecnologias_mejorar_eficiencia": false,
                        "tecnologias_cuales": null,
                        "mision_vision": "dfs",
                        "composicion_equipo": "werwer",
                        "tipo_internet": null
                    },
                    "diagnostico_fisica": null,
                    "personeria": "JURIDICA",
                    "acta_constitutiva": "http://localhost:8001/media/anexos/socioproductivos/actas_constitutivas/pareja_recibos_y_dni.pdf",
                    "estatuto": "http://localhost:8001/media/anexos/socioproductivos/estatutos/pareja_recibos_y_dni.pdf",
                    "personeria_juridica": "http://localhost:8001/media/anexos/socioproductivos/personerias_juridicas/octubre.pdf",
                    "designacion_autoridades": "http://localhost:8001/media/anexos/socioproductivos/designaciones_autoridades/pareja_recibos_y_dni.pdf",
                    "autorizacion_gestionar": "http://localhost:8001/media/anexos/socioproductivos/autorizaciones_gestionar/pareja_recibos_y_dni.pdf",
                    "designacion_intendente": "http://localhost:8001/media/anexos/socioproductivos/designaciones_indentendes/octubre.pdf",
                    "media": "http://localhost:8001/media/anexos/socioproductivos/77b88235-26ff-40e2-861e-1bccda4cd846.jpeg",
                    "proyecto": 1
                }
            ],
            "anexos_formaciones": [],
            "fecha_creacion": "2024-11-08T15:36:07.946861-03:00",
            "fecha_modificacion": "2024-11-08T15:36:07.946919-03:00",
            "estado": "Pendiente",
            "nombre": "asdas",
            "tipo_anexo": "SOCIO_PRODUCTIVO",
            "creador": 1,
            "modificador": 1
        }
    ]
  });
});

router.get('/detalle', function(req, res, next) {
    res.json({
        "id": 1,
        "anexos_socioproductivos": [
            {
                "id": 1,
                "juridica": {
                    "id": 1,
                    "provincia": "asdasd",
                    "proyecto_rubro": "Comercio al por mayor",
                    "proyecto_objetivo": "Ampliar la producción y escala",
                    "tipo": "Fundacion",
                    "proyecto_tipo_actividad": "Comercio",
                    "direccion": "asd",
                    "localidad": "asd",
                    "codigo_postal": 233,
                    "proyecto_nombre": "asdasd",
                    "proyecto_costo": 2324,
                    "proyecto_pertenece_comunidad_indigena": false,
                    "proyecto_comunidad_indigena": null,
                    "proyecto_practicas_regenerativas": false,
                    "nombre": "asd",
                    "fecha_creacion": "2024-11-08",
                    "numero_personeria_juridica": "asd",
                    "fecha_otorgamiento": "2024-11-08",
                    "cuit": 323,
                    "domicilio_legal": "asd",
                    "autoridad_nombre_completo": "asd",
                    "autoridad_dni": 324,
                    "autoridad_cuit": 12,
                    "autoridad_rol": "asd"
                },
                "fisica": null,
                "linea_de_accion": {
                    "id": 1,
                    "presupuestos": [
                        {
                            "id": 1,
                            "tipo_actividad": "asd",
                            "tipo_producto": "asda",
                            "nombre_producto": "sadas",
                            "cantidad_producto": 213,
                            "costo_unitario": 231,
                            "linea_de_accion": 1
                        }
                    ],
                    "produccion_apoyo_tecnico": false,
                    "produccion_maquinaria": false,
                    "produccion_tecnologias": false,
                    "produccion_entrega": false,
                    "comercializacion_fortalecimiento_institucional": false,
                    "comercializacion_apoyo_tecnologico": false,
                    "comercializacion_habilidades_blandas": false,
                    "comercializacion_fortalecimiento_unidades": false,
                    "circular_fortalecimiento": false,
                    "circular_practicas_sostenibles": false,
                    "circular_materiales_reciclados": false,
                    "circular_reduccion_residuos": false,
                    "fundamentacion": "asdasdas",
                    "destinatarios_directos": "http://localhost:8001/media/destinatarios_directos/9416C9FE-E6E8-44FC-B04E-C07B4493D0AB.pdf",
                    "destinatarios_indirectos": 32
                },
                "diagnostico_juridica": {
                    "id": 1,
                    "rubro": "Comercio al por menor",
                    "tipo_inmueble": "Propietario",
                    "comprador": "Consumidor final",
                    "cantidad_clientes": "Pocos (de 2 a 10)",
                    "lugar_comercializacion": "En forma ambulante",
                    "modalidad_comercializacion": "Solo produce y vende a pedido del cliente",
                    "fijacion_precios": "El cliente fija el precio de venta",
                    "cantidad_competidores": "de 1 a 5",
                    "conocimiento_competidores": "No los conozco",
                    "interactua_compentidores": "Para comprar en forma conjunta",
                    "modalidad_compras": "Cada vez que necesita (no tiene stock)",
                    "plazo_compra_credito": "Boleta contra boleta",
                    "medio_planificacion": "Usa un sistema de gestión informático",
                    "modalidad_ciclo_productivo": "Linear",
                    "cantidad_integrantes": "Igual o menos de 30",
                    "genero_mayoria": "Hombres",
                    "tipo_actividad": [
                        "Comercio"
                    ],
                    "tipo_dispositivos_moviles": [
                        "Otro"
                    ],
                    "plataforma_comunicacion": [
                        "Otro"
                    ],
                    "redes_sociales": [
                        "TikTok"
                    ],
                    "canales_ventas": [
                        "Tienda online"
                    ],
                    "destino_materiales_recuperados": [
                        "Integración a la producción local"
                    ],
                    "tipo_comunidad": [
                        "Rural"
                    ],
                    "banco": false,
                    "banco_nombre": null,
                    "cuenta_digital": false,
                    "financiamiento": false,
                    "financiamiento_nombre": null,
                    "ingresos_mensuales": 132,
                    "egresos_mensuales": 12,
                    "ganancias_mensuales": 12,
                    "internet": false,
                    "dispositivos_conectados": null,
                    "ventas_destinadas_turismo": false,
                    "recicladores_urbanos": false,
                    "recicladores_equipados": false,
                    "clasificacion_residuos": false,
                    "optimizacion_recursos": false,
                    "financiamiento_sostenible": false,
                    "estrategia_comercializacion": false,
                    "tecnologias_mejorar_eficiencia": false,
                    "tecnologias_cuales": null,
                    "mision_vision": "dfs",
                    "composicion_equipo": "werwer",
                    "tipo_internet": null
                },
                "diagnostico_fisica": null,
                "personeria": "JURIDICA",
                "acta_constitutiva": "http://localhost:8001/media/anexos/socioproductivos/actas_constitutivas/pareja_recibos_y_dni.pdf",
                "estatuto": "http://localhost:8001/media/anexos/socioproductivos/estatutos/pareja_recibos_y_dni.pdf",
                "personeria_juridica": "http://localhost:8001/media/anexos/socioproductivos/personerias_juridicas/octubre.pdf",
                "designacion_autoridades": "http://localhost:8001/media/anexos/socioproductivos/designaciones_autoridades/pareja_recibos_y_dni.pdf",
                "autorizacion_gestionar": "http://localhost:8001/media/anexos/socioproductivos/autorizaciones_gestionar/pareja_recibos_y_dni.pdf",
                "designacion_intendente": "http://localhost:8001/media/anexos/socioproductivos/designaciones_indentendes/octubre.pdf",
                "media": "http://localhost:8001/media/anexos/socioproductivos/77b88235-26ff-40e2-861e-1bccda4cd846.jpeg",
                "proyecto": 1
            }
        ],
        "anexos_formaciones": [],
        "fecha_creacion": "2024-11-08T15:36:07.946861-03:00",
        "fecha_modificacion": "2024-11-08T15:36:07.946919-03:00",
        "estado": "Pendiente",
        "nombre": "asdas",
        "tipo_anexo": "SOCIO_PRODUCTIVO",
        "creador": 1,
        "modificador": 1
    });
});
module.exports = router;
