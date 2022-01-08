import { Article } from '../models/Article';

export default {
  render(article: Article) {
    return {
      articleId: article.id,
      articleTitle: article.title,
      articleSubtitle: article.subtitle,
      articleImgOne: article.img1,
      articleTitle2: article.title2,
      articleSubtitle2: article.subtitle2,
      articleImg2: article.img2,
      articleDateTime: article.datetime,
      articleSignature: article.signature
    };
  },

  renderMany(articles: Article[]){
    return articles.map(article => this.render(article));
  }
}
