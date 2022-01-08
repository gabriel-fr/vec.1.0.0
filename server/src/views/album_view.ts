import { Album } from '../models/Album';

export default {
  render(album: Album) {
    return {
      albumId: album.id,
      albumName: album.name,
      albumDescription: album.description,
      albumImg1: album.img1,
      albumImg2: album.img2,
      albumImg3: album.img3,
      albumImg4: album.img4,
      albumImg5: album.img5,
      albumDatetime: album.datetime,
    };
  },

  renderMany(albuns: Album[]){
    return albuns.map(album => this.render(album));
  }
}