import config from '../../config/env.config.js';

class datas{
 constructor(brand,messageType, recEmail,data)
{
       this.brand= config[`${brand}_brand`];
        this.eventId= config[`${messageType}_eventId`];
        this.recipientId= config[`${messageType}_recipientId`];
        this.profile=config['profile'];
        this.profile.email=recEmail;
        this.data=data;
        this.override= {
        };
      
}

returnObj(){

     var datases={
         brand:this.brand,
         eventId:this.eventId,
         recipientId:this.recipientId,
         profile:this.profile,
         data:this.data,
         override:this.override

     };
     return datases;
}


}

export default datas;