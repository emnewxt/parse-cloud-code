// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:

/*
function connectAsAdmin(callback)
{
  Parse.initialize("w9aD3lAJFPcKJgY6uM5iobQm1YaWaEBLySvWTc5m", "GiyuU6qqcFo5GuvjCI4npVSj9ZlDPFvgbwArQxqE");
  Parse.User.logIn("MakeUpCentral", "0158186091", { 
    success: function(user) {console.log(user); console.log("OK"); callback();},
    error: function(error) {console.log(error);console.log("ERROR");}
    });
}
*/


function saveUpdatedAt() 
{
 // connectAsAdmin(function()
 // {
    var query = new Parse.Query(Parse.Object.extend("GlobalUpdatedAt"));
    query.ascending("updatedAt").find(
      {
        success: function (results) { destroyGlobalUpdatedAtObjects(results, function() { createGlobalUpdatedAtObject()});},
        error: function (error) { createGlobalUpdatedAtObject();}
  });
  //});
};


function destroyGlobalUpdatedAtObjects(objects, callback)
{
  if (objects && objects.length)
  {
    var taskCount = objects.length;
    objects.forEach(function(object) 
    {
        object.destroy({
        success: function (object) {taskCount--; if (taskCount < 1) {callback();} },
        error: function (myObject, error) {taskCount--; if (taskCount < 1) {callback();} }
      });
    });
  }
  else {callback();}
}


function createGlobalUpdatedAtObject()
{
  var GlobalUpdatedAtClass = Parse.Object.extend("GlobalUpdatedAt");
  var globalUpdatedAtObject = new GlobalUpdatedAtClass()
  globalUpdatedAtObject.set("globalUpdatedAt", new Date())
  globalUpdatedAtObject.save(null, 
  {
  success: function(object) { alert('New object created with objectId: ' + object.id);},
  error: function(object, error) { alert('Failed to create new object, with error code: ' + error.message);}
  });
}


Parse.Cloud.afterSave("Categories", function(request) 
{
  saveUpdatedAt();
});

Parse.Cloud.afterDelete("Categories", function(request)
{
  saveUpdatedAt();
});


Parse.Cloud.afterSave("CategoriesCountry", function(request)
{
  saveUpdatedAt();
});

Parse.Cloud.afterDelete("CategoriesCountry", function(request)
{
  saveUpdatedAt();
});


Parse.Cloud.afterSave("Countries", function(request)
{
  saveUpdatedAt();
});

Parse.Cloud.afterDelete("Countries", function(request)
{
  saveUpdatedAt();
});


Parse.Cloud.afterSave("CountriesFacecharts", function(request)
{
  saveUpdatedAt();
});

Parse.Cloud.afterDelete("CountriesFacecharts", function(request)
{
  saveUpdatedAt();
});


Parse.Cloud.afterSave("CountriesVideos", function(request)
{
  saveUpdatedAt();
});

Parse.Cloud.afterDelete("CountriesVideos", function(request)
{
  saveUpdatedAt();
});


Parse.Cloud.afterSave("FacechartProducts", function(request)
{
  saveUpdatedAt();
});

Parse.Cloud.afterDelete("FacechartProducts", function(request)
{
  saveUpdatedAt();
});


Parse.Cloud.afterSave("Facecharts", function(request)
{
  saveUpdatedAt();
});

Parse.Cloud.afterDelete("Facecharts", function(request)
{
  saveUpdatedAt();
});


Parse.Cloud.afterSave("Faceparts", function(request)
{
  saveUpdatedAt();
});

Parse.Cloud.afterDelete("Faceparts", function(request)
{
  saveUpdatedAt();
});


Parse.Cloud.afterSave("Languages", function(request)
{
  saveUpdatedAt();
});

Parse.Cloud.afterDelete("Languages", function(request)
{
  saveUpdatedAt();
});


Parse.Cloud.afterSave("Products", function(request)
{
  saveUpdatedAt();
});

Parse.Cloud.afterDelete("Products", function(request)
{
  saveUpdatedAt();
});


Parse.Cloud.afterSave("Status", function(request)
{
  saveUpdatedAt();
});

Parse.Cloud.afterDelete("Status", function(request)
{
  saveUpdatedAt();
});


Parse.Cloud.afterSave("Translations", function(request)
{
  saveUpdatedAt();
});

Parse.Cloud.afterDelete("Translations", function(request)
{
  saveUpdatedAt();
});


Parse.Cloud.afterSave("Videos", function(request)
{
  saveUpdatedAt();
});

Parse.Cloud.afterDelete("Videos", function(request)
{
  saveUpdatedAt();
});


Parse.Cloud.afterSave("VideosCategories", function(request)
{
  saveUpdatedAt();
});

Parse.Cloud.afterDelete("VideosCategories", function(request)
{
  saveUpdatedAt();
});
