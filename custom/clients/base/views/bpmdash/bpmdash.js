({
     plugins: ['Dashlet','CssLoader'],
     css: ['/custom/include/css/bpmdash.css'],



     _retrieveData: function() {
           let cntrlr = this;
	   
	   let recordID = this.model.get('id');

           let url = App.api.buildURL("pmse_Inbox/casesList?max_num=500i&order_by=cas_id%3Adesc&module_list=all", null, {});


           App.api.call('read', url, null, {
               success: _.bind(function(response) {
                   // here is your success code
                   let result = response.records.filter(function(record) {
                       return record.cas_sugar_object_id === recordID;
                   });
                   cntrlr.schools = result;

                   _.extend(cntrlr, cntrlr.schools);
                   cntrlr.render();


               }, this),
               error: _.bind(function(error) {
                   // here is your error code
                   console.log("Error", error)
               }, this),
           });

     },


     initialize: function(options) {
          this.schools = [];
          // call the parent's (View's) initialize function
          // passing options as an array
          this._super('initialize', [options]);
          this._retrieveData();
     },
})


