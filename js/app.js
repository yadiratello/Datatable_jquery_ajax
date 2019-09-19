$(document).ready(function () {
    $('#tabla').DataTable({
        ajax: {
            url: 'http://localhost:3000/employees',
            dataSrc: ''

        },
        columns: [
            { data: "id" },
            { data: "first_name" },
            { data: "last_name" },
            { data: "email" },
            { data: "gender" }
        ]
    });
});