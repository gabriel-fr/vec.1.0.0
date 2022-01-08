import { Footer } from '../models/Footer';

export default {
  render(footer: Footer) {
    return {
      footerId: footer.id,
      footerText: footer.text,
      footerLink1: footer.link1,
      footerLink2: footer.link2,
      footerLink3: footer.link3,
      footerLink4: footer.link4
    };
  }
}