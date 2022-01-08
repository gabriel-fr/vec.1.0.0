import { User } from '../models/User';
import profileView from './profile_view';
import articleView from './article_view';
import albumView from './album_view';

export default {
  render(user: User) {
    return {
      id: user.id,
      email: user.email,
      profile: profileView.render(user.profile),
      articles: articleView.renderMany(user.articles),
      albuns: albumView.renderMany(user.albuns)
    };
  },

  renderMany(users: User[]) {
    return users.map(user => this.render(user));
  }
}