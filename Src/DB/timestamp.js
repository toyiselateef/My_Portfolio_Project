 var timestamp = function timestamp(schema) {

    // Add the two fields to the schema
    schema.add({ 
      createDate: Date,
      
    })
  
    // Create a pre-save hook
    schema.pre('save', function (next) {
      let now = Date.now()
     
      this.date = now
      // Set a value for createdAt only if it is null
    
     // Call the next function in the pre-save chain
     next();
    });
  };
  export default timestamp;