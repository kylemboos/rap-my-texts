Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    tasks: function () {
      return Tasks.find({});
    }
  });

  // counter starts at 0
  Session.setDefault('counter', 0);

  Meteor.methods({
    myMethod: function(){
      console.log("YOLO");
    }


if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
