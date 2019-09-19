document.querySelector('#boton').addEventListener('click', crearDatos2);

// function traerDatos() {
//     const xhttp = new XMLHttpRequest();

//     xhttp.open('GET', 'db2.json', true);

//     xhttp.send();

//     xhttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             let datos = JSON.parse(this.responseText);
//             let respuesta = document.querySelector('#respuesta');
//             respuesta.innerHTML = '';
//             for (let item of datos) {
//                 respuesta.innerHTML += `
//                 <tr>
//                 <td>${item.id}</td>
//                 <td>${item.first_name}</td>
//                 <td>${item.last_name}</td>
//                 <td>${item.email}</td>
//                 <td>${item.gender}</td>`
//             }
//         }
//     }
// }


function crearDatos2(){
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/employees/",
        success: function (response) {

            $.each(response, function (indexInArray, valueOfElement) { 
                var $resp = "";
                $resp = $resp + "<tr><td>" +valueOfElement.id+"</td>";
                $resp = $resp + "<td>" +valueOfElement.first_name+"</td>";
                $resp = $resp + "<td>" +valueOfElement.last_name+"</td>";
                $resp = $resp + "<td>" +valueOfElement.email+"</td>";
                $resp = $resp + "<td>" +valueOfElement.gender+"</td></tr>";
                //console.log(valueOfElement.email);
                $("#respuesta").append($resp);
            });
        }
    });
}