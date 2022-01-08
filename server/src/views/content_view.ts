import { Content } from '../models/Content';
import footerView from './footer_view';
import globalView from './global_view';

export default {
  render(content: Content) {
    return {
      id: content.id,
      emphasis: content.emphasis,
      footer: footerView.render(content.footer),
      globals: globalView.renderMany(content.globals) 
    };
  }
}