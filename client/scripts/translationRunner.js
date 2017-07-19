const manageTranslations = require('react-intl-translations-manager').default;

manageTranslations({
  messagesDirectory: 'src/locale/messages/',
  translationsDirectory: 'src/locale/translations/',
  jsonOptions: { trailingNewline: true },
  languages: ['sv'],
});
