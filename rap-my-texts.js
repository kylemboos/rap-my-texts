if (Meteor.isClient) {

  Meteor.methods({
    myMethod: function(){
      console.log("YOLO");
    }

  });
}
