import 'bootstrap/dist/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './Usuarios.css';
import data from './Usuarios.js';
import { form } from 'react-bootstrap';
import { useEffect, reactState, useState } from 'react';
import {AgGridColumn, AgGridReact, AgReactComponent } from 'ag-grid-react'; //ag grid component
import { GridComponent, ColumnDirective } from '@syncfusion/ej2-react-grids';
import { registerLicense } from '@syncfusion/ej2-base';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz";

registerLicense ('Ngo9BigBOggjHTQxAR8/V1NBaF5cXmRCekx0THxbf1x0ZFdMYFlbRHdPIiBoS35RckVgWn9fdHRQQmZcV0Z3');

function Usuarios() {
    const [colDefs] = useState ([
        { field: "id" },
        { field: "nombre" },
        { field: "Apellido paterno:" },
        { field: "Apellido materno" },
        { field: "Correo" },
        { field: "Telefono" },
        { field: "nUsuario" } //nombre de usuario
    ]);

    const [gridApi] = useState();
    fetch ('./Usuarios.json').then(function (response) {
        return response.json();
    }).then(function(data) {
        gridApi.setGridOption('rowData', data);
    })

    fetch('./Usuarios.json').then(function(response) {
        return response.json();
    }).then(function(data){
        const colDefs = gridOptions.api.getColumnsDefs();
        colDefs.lenght=0;
        const keys = Objetct.keys(data[0])
        keys.forEach(key => colDefs.push({field: key}));
        gridOptions.api.setGridOption('columnsDefs', colDefs);

        gridOptions.api.setRowData('rowData, data');
    })

    const columnsDefs = [

    ];

    const gridOptions = {
        columnsDefs : columnsDefs,
        enableSorting : true,
        enableFilter : true,
        pagination : true,
    };

    fetch(data).then(function(response) {
        return response.json();
    }).then(function(data){
        const colDefs = gridOptions.api.getColumnsDefs();
        colDefs.lenght=0;
        const keys = Object.keys(data[0]);
        keys.forEach(key => colDefs.push({field : key}));
        gridOptions.api.setColumnDefs(colDefs);

        gridOptions.api.setColumnDefs(data);
    })

    const [ setRowData ] = useState([]);
    const [ rowData ] = useState([
        useEffect(() => {
            fetch(data).then(res => res.json()).then(result => setRowData(result.data));
        }, [])
    ]);

    return (
        <div>
            <div style={{ margin: '10%', marginTop: '5%' }}>
                <GridComponent dataSource={data}>
                    <ColumnsDirective>
                        <ColumnDirective field='id' headerText='ID' textAlign='Right' width ='100' />
                        <ColumnDirective field='Nombre' headerText='Nombre' textAlign='Right' width ='100' />
                        <ColumnDirective field='PrimerApellido' headerText='Apellido paterno' textAlign='Right' width ='100' />
                        <ColumnDirective field='SegundoApellido' headerText='Apellido materno' textAlign='Right' width ='100' />
                        <ColumnDirective field='Correo' headerText='Correo' textAlign='Right' width ='100' />
                        <ColumnDirective field='Telefono' headerText='Telefono' textAlign='Right' width ='100' />
                        <ColumnDirective field='NombredeUsuario' headerText='Nombre de Usuario' textAlign='Right' width ='100' />
                    </ColumnsDirective> 
                </GridComponent>
            </div>

            <div className='Usuarios'>
                <h2>a</h2>
                <div className="ag-theme-alpine ag-style">
                    
                    <AgGridReact
                        rowData={rowData}
                        columnDefs={colDefs}
                    />
                </div>
            </div>
        // wrapping container with theme & size
            <Form
                className="ag-theme-quartz" //applying the grid theme
                style={{ height: 500 }} // the grid will fill the size of the parent container
            >


                <AgGridReact
                rowData={rowData}
                columnDefs={colDefs}
                />
            </Form>
        </div>



    )
}

export default Usuarios;
