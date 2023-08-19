import mongose from 'mongoose';

let isConnected = false;

export const connectToDB = async ()=>{
    mongose.set('strictQuery',true);

    if(isConnected){
        console.log('Mongodb is already connected');
        return;
    }

    try {
        await mongose.connect(process.env.MONGODB_URI,{
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isConnected = true;
        console.log("Mongodb connected")
    } catch (error) {
     console.log(error);   
    }
}