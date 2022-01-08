import { Global } from "../models/Global";

export default {
  render(global: Global) {
    return {
      globalId: global.id,
      globalTitle: global.title,
      globalSubtitle: global.subtitle,
      globalImg1: global.img1,
      globalTitle2: global.title2,
      globalImg2: global.img2,
      globalDatetime: global.datetime,
      globalSignature: global.signature
    };
  },

  renderMany(globals: Global[]){
    return globals.map(global => this.render(global));
  }
}