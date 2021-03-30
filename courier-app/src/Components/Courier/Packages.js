import React, { useEffect, useState } from 'react';
import MaterialTable from "material-table";
import { getPackages } from '../../actions/CourierAction';
import { columns } from './Header';

const Packages = () => {

    const [allpackage, setAllPackage ] = useState([]);

      useEffect(() =>{
          
        getPackages().then(response => {
            const path = response.data.responseObject;
            let arr = [];
            for(let element in path){
                arr.push({courier: path[element].courier, 
                        description: path[element].description, supplier: path[element].supplier,
                        priceToPay: path[element].priceToPay, weight: path[element].weight,
                        internalTracking: path[element].internalTracking,  courierTracking: path[element].courierTracking});    
            }
            setAllPackage(arr)           
        });
        // axios.get('/packages/getPending?username=jsanchez').then(response => {
            //     console.log(response)
            // })
      }, [])
    return ( 
        <div className="container">
            <div class="row justify-content-center align-items-center minh-100">
                <div class="col-lg-12">
                {allpackage ? (
                        <MaterialTable 
                        title="Package Details"
                        data={allpackage}
                        columns={columns}
                        options={{ search: true, paging: false, filtering: false, exportButton: false }}
                    />
                ): null}
                </div>
            </div>
        </div>
     );
}
 
export default Packages;