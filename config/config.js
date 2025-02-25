const config = {
    local: {
     DB: {
            HOST: "127.0.0.1",
            PORT: "27017",
            DATABASE: "Portaldb",
            UserName: "",
            Password: "",
        },
    //   DB: {
    //         HOST: "54.190.192.105",
    //         PORT: "27017",
    //         DATABASE: "Psalm",
    //         UserName: "Psalm",
    //         Password: "SERFBf234rfS"
    //     },
        PORTS: {
            EMAIL_PORT: 4200,
            API_PORT: 4000,
            APIHOST: "http://localhost",
            EMAILHOST: "http://localhost:4200/"
        },
        EMAIL: {
            host: "smtp.gmail.com",
            // user: "properylistingservice@gmail.com", 
            // password: "hqujjsphdpjrsztn",
            // user:"support@pxalm.com", 
            // password:"Donjazz1$"
            user: "pxalm.app@gmail.com",
            password: "airrbngbuvwpyuqi",
        },
        secret: {
            jwt: "Psalmtestaccount"
        },
        SERVERKEY:"AAAAhklXvgU:APA91bHrQShBDxqZL33EsT-k6Z16Ef_SJ3NCmWCx8g56wPcCTTOFiTLtCBofFB_gBT9SXPBDoi6mr_0gViSOJOB-wy-iYwgP5tCu0BcQDT1DL_-g34WB8GBWzkIkVthmKefvC1PXUaPJ"
        //  SERVERKEY:"AIzaSyC_I2d8YHnmGosg-7_Js3v83y9jRbLPL3c" // client map key
    },

    staging: {
        DB: {
            HOST: "54.190.192.105",
            PORT: "27017",
            DATABASE: "Psalm",
            UserName: "Psalm",
            Password: "SERFBf234rfS"
        },
        PORTS: {
            EMAIL_PORT: 9193,
            API_PORT: 9192,
            APIHOST: "http://54.190.192.105",
            EMAILHOST: "https://mean.stagingsdei.com:9193"
        },
        EMAIL: {
            host: "smtp-mail.outlook.com",
            user: "support@pxalm.com",
            password: "Donjazz1$",
        },
        secret: {
            jwt: "Psalmtestaccount"
        },
        SERVERKEY: "AAAAhklXvgU:APA91bHrQShBDxqZL33EsT-k6Z16Ef_SJ3NCmWCx8g56wPcCTTOFiTLtCBofFB_gBT9SXPBDoi6mr_0gViSOJOB-wy-iYwgP5tCu0BcQDT1DL_-g34WB8GBWzkIkVthmKefvC1PXUaPJ" // smartdata test key 
        //SERVERKEY:"BLUn1vXS_3ngLXcpCaymgm1lWmqrcOxcKV1X45eDH_qTxBoNhWOB7F_2bkfXaAyagms84vxhVaaA_OWFLGCr5k4"
    },

    production: {
        DB: {
            HOST: "3.221.59.158",
            PORT: "27017",
            DATABASE: "Pxalm",
            UserName: "Pxalm",
            Password: "SERFBf234rfS",
        },
        PORTS: {
            EMAIL_PORT: 9193,
             API_PORT: 9192,
            APIHOST: "http://pxalm.com/",
            EMAILHOST: "https://pxalm.com"
        },
        EMAIL: {
            host: "smtp-mail.outlook.com",
            user: "support@pxalm.com",
            password: "Donjazz1$",
        },
        secret: {
            jwt: "Psalmtestaccount"
        },
        SERVERKEY: "AAAAhklXvgU:APA91bHrQShBDxqZL33EsT-k6Z16Ef_SJ3NCmWCx8g56wPcCTTOFiTLtCBofFB_gBT9SXPBDoi6mr_0gViSOJOB-wy-iYwgP5tCu0BcQDT1DL_-g34WB8GBWzkIkVthmKefvC1PXUaPJ" // smartdata test key 
         //SERVERKEY:"BLUn1vXS_3ngLXcpCaymgm1lWmqrcOxcKV1X45eDH_qTxBoNhWOB7F_2bkfXaAyagms84vxhVaaA_OWFLGCr5k4"
    }

}
module.exports.get = function get(env) {
    return config[env];
};