const manageTranslations = require('react-intl-translations-manager').default;

manageTranslations({
  messagesDirectory: 'src/translations/src/',
  translationsDirectory: 'src/translations/locales/',
  languages: ['sv'],
});
