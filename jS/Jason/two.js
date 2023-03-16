let e = [
            {ID:1, Name: 'Bhaskar', Desn:'Executive', Sal:90000},
            {ID:1, Name: 'Bhaskar', Desn:'Executive', Sal:90000},
            {ID:1, Name: 'Bhaskar', Desn:'Executive', Sal:90000},
            {ID:1, Name: 'Bhaskar', Desn:'Executive', Sal:90000},
            {ID:1, Name: 'Bhaskar', Desn:'Executive', Sal:90000},
            {ID:1, Name: 'Bhaskar', Desn:'Executive', Sal:90000},
            {ID:1, Name: 'Bhaskar', Desn:'Executive', Sal:90000},
            {ID:1, Name: 'Bhaskar', Desn:'Executive', Sal:90001},
];


function readData() {

        let r = "";

        for  (emp of e) {

            r = r + `<tr>
                        <td> ${emp.ID} </td>  
                        <td> ${emp.Name} </td>  
                        <td> ${emp.Desn} </td>  
                        <td> ${emp.Sal} </td>  
                    </tr>`

        }

        document.getElementById('tb').innerHTML=r;

}