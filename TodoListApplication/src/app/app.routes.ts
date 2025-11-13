import { Routes } from '@angular/router';
import { ShowDataComponent } from './show-data/show-data.component';
import { AdddataComponent } from './adddata/adddata.component';

export const routes: Routes = [
    {
        path:'',
        component:ShowDataComponent,
    },
    {
        path:'adddata',
        component:AdddataComponent

    }
];
