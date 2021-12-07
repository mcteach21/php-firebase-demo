// Firebase Config.
var config = {
    apiKey: "AIzaSyCUTm3a-og9w_K6_dCfRIzmRSP8P9xjBlo",
    authDomain: "php-demo-071221.firebaseapp.com",
    databaseURL: "https://php-demo-071221-default-rtdb.firebaseio.com",
    projectId: "php-demo-071221",
    storageBucket: "php-demo-071221.appspot.com",
    messagingSenderId: "1068726323423",
    appId: "1:1068726323423:web:8730da550751368e7e416a",
    measurementId: "G-TWM4T25ZM1"
};

// var database = null;
var lastIndex = 0;
var updateID = 0;


firebase.initializeApp(config);
// firebase.analytics();
database = firebase.database();


/**
 * CRUD in Firebase DB
 */

// Get Data
firebase.database().ref('Users/').on('value', function (snapshot) {
    var value = snapshot.val();
    var htmls = [];
    $.each(value, function (index, value) {
        if (value) {
            htmls.push('<tr>\
                <td>' + value.name + '</td>\
                <td>' + value.email + '</td>\
                <td><button data-toggle="modal" data-target="#update-modal" class="btn btn-info updateData" data-id="' + index + '">Update</button>\
                <button data-toggle="modal" data-target="#remove-modal" class="btn btn-danger removeData" data-id="' + index + '">Delete</button></td>\
                </tr>');
        }
        lastIndex = index;
    });
    $('#tbody').html(htmls);
    $("#submitUser").removeClass('desabled');
});

// Add Data
$('#submitUser').on('click', function () {
    var values = $("#addUser").serializeArray();
    var name = values[0].value;
    var email = values[1].value;
    var userID = parseInt(lastIndex) + 1;

    console.log(values);
    firebase.database().ref('Users/' + userID).set({
        name: name,
        email: email,
    });

    lastIndex = userID;
    $('#addUser input').val('');
});

// Update Data
$('body').on('click', '.updateData', function () {
    updateID = $(this).attr('data-id');
    firebase.database().ref('Users/' + updateID).on('value', function (snapshot) {
        var values = snapshot.val();
        var updateData = '<div class="form-group">\
            <label for="first_name" class="col-md-12 col-form-label">Name</label>\
            <div class="col-md-12">\
            <input id="first_name" type="text" class="form-control" name="name" value="' + values.name + '" required autofocus>\
            </div>\
            </div>\
            <div class="form-group">\
            <label for="last_name" class="col-md-12 col-form-label">Email</label>\
            <div class="col-md-12">\
            <input id="last_name" type="text" class="form-control" name="email" value="' + values.email + '" required autofocus>\
            </div>\
            </div>';
        $('#updateBody').html(updateData);
    });
});
$('.updateUser').on('click', function () {
    var values = $(".users-update-record-model").serializeArray();
    var postData = {
        name: values[0].value,
        email: values[1].value,
    };
    var updates = {};

    updates['/Users/' + updateID] = postData;
    firebase.database().ref().update(updates);

    $("#update-modal").modal('hide');
});

// Remove Data
$("body").on('click', '.removeData', function () {
    var id = $(this).attr('data-id');
    $('body').find('.users-remove-record-model').append('<input name="id" type="hidden" value="' + id + '">');
});

$('.deleteRecord').on('click', function () {
    var values = $(".users-remove-record-model").serializeArray();
    var id = values[0].value;

    firebase.database().ref('Users/' + id).remove();

    $('body').find('.users-remove-record-model').find("input").remove();
    $("#remove-modal").modal('hide');
});

$('.remove-data-from-delete-form').click(function () {
    $('body').find('.users-remove-record-model').find("input").remove();
});
