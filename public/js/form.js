function saveForm() {
    var database = firebase.database();
    var name = document.getElementById('names').value;
    var email = document.getElementById('emails').value;
    var country = document.getElementById('countrys').value;
    var state = document.getElementById('states').value;
    var phone = document.getElementById('phones').value;
    var subs = document.getElementById('subs');
    userId = Math.floor((Math.random() * 1000000) + 1);
    database.ref('Subscribers/' + userId).set({
        Name: name,
        Email: email,
        Country: country,
        State: state,
        Phone: phone
    });
    subs.classList.add("disabled");
    subs.innerHTML = "Submitted";
    Materialize.toast('We will keep in touch!', 4000)
    $('#modal1').modal('close');
}
function saveContact() {
    var database = firebase.database();
    var name = document.getElementById('name').value;
    var lastname = document.getElementById('last_name').value;
    var email = document.getElementById('email').value;
    var country = document.getElementById('country').value;
    var text = document.getElementById('textarea1').value;
    var submit = document.getElementById('submit');
    userId = Math.floor((Math.random() * 1000000) + 1);
    database.ref('Feedback/' + userId).set({
        Firstname: name,
        Lastname: lastname,
        Email: email,
        Country: country,
        Message: text
    });
    submit.classList.add("disabled");
    submit.innerHTML = "Submitted";
    Materialize.toast('We will get back to you soon!', 4000)
}