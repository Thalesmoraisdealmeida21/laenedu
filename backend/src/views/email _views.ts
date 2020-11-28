import Email from '../models/Email';

export default {
  render(email: Email) {
    return {
      id: email.id,
      name: email.name,
      email: email.email,
    }
  },

  renderMany(emails: Email[]) {
    return emails.map(email => this.render(email));
  }
};
