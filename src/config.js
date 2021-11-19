const mongoose = require('mongoose')
const { Schema, model } = mongoose

module.exports = {
    fileSystem:{
        path: 'DB'
    },
    atlas: {
        url:"mongodb+srv://Maxo:12345@cluster0.ujcyq.mongodb.net/coderBack", 
        carrito:new Schema({
            name:{
                type:String,
                unique:true,
            },
            price: {
                type:Number,
            },
            thumbnail:{
                type:String,
                require:true
            }
        }),
        productos:new Schema({
            name:{
                type:String,
                unique:true,
                required:true
            },
            price: {
                type:Number,
            },
            thumbnail:{
                type:String
            }
        }),
    },
    firebase:{
            "type": "service_account",
            "project_id": "coderback-5ac93",
            "private_key_id": "e89511e23febe70d29d3c1cb965bd35bcc1c4267",
            "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDHNf6Ihpdf8UXC\nfMi62W+IMbaMV2ebbLCE0cwTepvTd/eLTcgnSZYb90dfTUo4/kyViky2in/tWC1R\nKCln6dzSgikqKcy65gFnX1Cw01WvqKJNjq9hPCAH1Hd4wP4ZmJzXNb1z66/wvAxP\na3c07bSfCg+o9h+06lv6di8XyZKpURn1jMN8sbi4GW6UrEfwEdByIw4nekU+u6a/\ndNqmCbUtO0uGhmURee8DWlGaldZjt8o6enWvHUwGM4uzWtu5wP7vbTWGz3f+zLR5\ngmikFpGhhlb135fWY+HU66R6QlU3XqEc73wdhTJ3QYTXjLtK+hEn09UwrrRPo+KF\nFev+GjVdAgMBAAECggEAAbbhPeOKofS9mPLh91mvsAhdfc+ywI+q5Tm4++HuPV+m\n7bf5pPzpIcx6/ML5hIwLtK3AA0Il37EGktA5qv9EOzuLhyVc8a7RDEaxtxPahOx6\nmRhFQhz2WZrmfE+M4EOD9gYsXzcECJpVsMlH+ViiWUwI3ndfxnrN19X0icveSz63\ni1OLWWC1qPwBoaAwtAagpoTlimb8A+O9y0OgHbX9cQIMoowE5dUdRudw5/0NOJ8b\neIBAWbR/P6VSIcfmZXKd+hAh0AnLCBFDKs+aTKhYXUDPsANfsnXPd21sjL/GYlvD\nVqGRImcVgChPU/3oqnFl2J5mAq8/LUxNwWtmW8R8AQKBgQDk/WFTTHOazLlKwD+P\n/vVvbjVEdLJPd8uxdzy4cfY94yYXMISRCtxs6qJCVgh1D/8V4YiktHSolCo93c9B\ncqV7kIBK0UATiLx1tQrZGyUYIy7bO0aglKgXwxWo8qdYk5DREIY8Z6fJGjRdCKKx\n1Rgvs3Pz3q27AxupnF1x4dKjQQKBgQDetWf0TxTLcsoSv6BQWrg2vGsJkAvbDds4\n6Snj3clpOChuKiLC2E/Xa+kqwsF7zTfBPAVmyUC3WizPJlM9Ef65h7oi6mQ9fTFF\n/x/oYZ1+Nv/oSnTJCMP+KQjUamiLGqi6/XmyG3CE8Rvp8Nll5YNWja6SwgAg/rJp\nJe068Tr3HQKBgBEtQIOzFGjkOnH1Ac+XXGnDZpN//XAgmFLzksZzJfl2dIEAzrDi\nk65H22wGcBP34zaM+GcCck3C73g8jzNlmiwuprD2CUxt0VUzA2FNu/aXjQg85gtd\nm05M/+7wZMUsLIzCJI+bZuaa5Jql7y5PwcSyPVxps7Z3gTez1v6X5ekBAoGBAJby\n1dbdkvaigxxaDcro8lsHMnV00NRUe/YC84Wi2dUbXyvsG0t9WgBk/9Ef2AyVd+jd\nSbv1RIwB7sUo8No/zCrsN9lajT6wECmlVncnUpwtox5K+QUZj95A6d8vkFRYaWz0\nSPvTZVx2H7lcqb1K5s5PkbefDn9OopZqQnTk9FZxAoGBAN1fUv8lXOLiB/eaPC8j\nxaC2EGgad0wLgRsqm0+fa04Lng1VCMWTCxwY5JCKguBby/J7Zzi8Who3pAK6cK3Y\nrjqZSQ1aeEqH6GwcGOM2BlDitM1I/GAb9BHQz75DIIvn3hSEp6nLGpZO9PrQL3rt\nV1Vceyb1SXpwAGMl96GWf2wo\n-----END PRIVATE KEY-----\n",
            "client_email": "firebase-adminsdk-110z2@coderback-5ac93.iam.gserviceaccount.com",
            "client_id": "112925271899644527873",
            "auth_uri": "https://accounts.google.com/o/oauth2/auth",
            "token_uri": "https://oauth2.googleapis.com/token",
            "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
            "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-110z2%40coderback-5ac93.iam.gserviceaccount.com"
        
    }
      
}

