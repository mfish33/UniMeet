import { NgModule, Optional, SkipSelf } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';


const firebaseConfig = {
    apiKey: "AIzaSyDRlzH-X12UYwP_UtNerqtIraLVHukvxds",
    authDomain: "camppolyhacks2021.firebaseapp.com",
    projectId: "camppolyhacks2021",
    storageBucket: "camppolyhacks2021.appspot.com",
    messagingSenderId: "283117264328",
    appId: "1:283117264328:web:31d9133b415ec5163f74fd",
    measurementId: "G-HCXGJSPSBB"
};

@NgModule({
    providers: [],
    imports: [AngularFireModule.initializeApp(firebaseConfig), AngularFireAuthModule],
    declarations: [],
    exports: []
})
export class FirebaseModule {
    constructor(@Optional() @SkipSelf() parentModule: FirebaseModule) {
        if (parentModule) {
            throw new Error(
                'FirebaseModule is already loaded. Import it in the AppModule only'
            );
        }
    }
}