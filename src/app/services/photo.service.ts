import { Injectable } from '@angular/core';
import { Plugins, CameraResultType, Capacitor, FilesystemDirectory, 
  CameraPhoto, CameraSource } from '@capacitor/core';

const { Camera, Filesystem, Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  public photo: Photo;


  constructor() { }

  public async addNewToGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri, 
      source: CameraSource.Camera, 
      quality: 100 
    });
    
    this.photo = {
      filepath: "soon...",
      webviewPath: capturedPhoto.webPath
    }
  }

  public removeFromGallery() {
    this.photo = null;
  }
}

export interface Photo {
  filepath: string;
  webviewPath: string;
}
