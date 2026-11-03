/** German Nutzungsbedingungen for MealMira */
import { MEALMIRA_APP_NAME } from './mealmiraLegal';

const LANDING = 'https://quantivatech-landing-page.onrender.com';
const DELETE_URL = `${LANDING}/apps/mealmira/konto-loeschen`;
const PRIVACY_URL = `${LANDING}/apps/mealmira/datenschutz`;

export const mealmiraTermsDeSections = [
  {
    title: '1. Einleitung',
    body: `Diese Nutzungsbedingungen („Bedingungen“) regeln Ihren Zugang zu und die Nutzung von ${MEALMIRA_APP_NAME} („MealMira“, „die App“, „wir“, „uns“ oder „unser“).

Indem Sie ein Konto erstellen, auf die App zugreifen oder sie nutzen, stimmen Sie diesen Bedingungen zu. Wenn Sie nicht einverstanden sind, nutzen Sie die App bitte nicht.`,
  },
  {
    title: '2. Der Dienst',
    body: `${MEALMIRA_APP_NAME} ist eine Anwendung zur Mahlzeitenprotokollierung und -organisation, die Ihnen unter anderem Folgendes ermöglichen kann:`,
    list: [
      'Ziele und tägliche Ernährungsziele festzulegen',
      'Mahlzeiten zu fotografieren und vorgeschlagene Lebensmittel sowie Makros zu prüfen',
      'ein Ernährungstagebuch mit Notizen und Befinden zu führen',
      'Fortschritt und Wochenübersichten einzusehen',
      'optionale Modi wie den GLP-1-Modus zu nutzen',
    ],
    bodyAfterList:
      'Verfügbare Funktionen können sich im Laufe der Zeit ändern, wenn wir die App weiterentwickeln.',
  },
  {
    title: '3. KI-generierte Informationen',
    body: `Die App kann künstliche Intelligenz nutzen, um Lebensmittel und Nährwertschätzungen aus Fotos oder anderen Eingaben vorzuschlagen.

KI-generierte Ergebnisse können unvollständig, ungenau oder falsch sein. Sie sind dafür verantwortlich, Ergebnisse zu prüfen, bevor Sie sich darauf verlassen.

${MEALMIRA_APP_NAME} garantiert nicht, dass KI-generierte Informationen korrekt, vollständig oder für medizinische, ernährungsbezogene, allergiebezogene, diätetische oder andere fachliche Zwecke geeignet sind.`,
  },
  {
    title: '4. Keine medizinische oder ernährungsbezogene Beratung',
    body: `${MEALMIRA_APP_NAME} ist ein Organisations- und Informationswerkzeug. Die App bietet keine:`,
    list: [
      'medizinische Beratung',
      'klinische Ernährungsberatung',
      'Diagnose oder Behandlung',
      'Garantien zu Allergien oder Lebensmittelsicherheit',
      'professionelle Diätberatung',
    ],
    bodyAfterList:
      'Berücksichtigen Sie stets Ihre eigenen gesundheitlichen Bedürfnisse und konsultieren Sie bei Bedarf eine qualifizierte Fachperson — insbesondere, wenn Sie GLP-1-Medikamente einnehmen oder gesundheitliche Einschränkungen haben.',
  },
  {
    title: '5. Nutzerkonten',
    body: 'Einige Funktionen erfordern ein Konto. Sie sind für korrekte Angaben, sichere Zugangsdaten, die Sicherheit Ihres Kontos und Aktivitäten unter Ihrem Konto verantwortlich. Sie dürfen die App nicht rechtswidrig nutzen oder versuchen, die App oder ihre Dienste zu gefährden.',
  },
  {
    title: '6. Nutzerinhalte',
    body: `Sie können Mahlzeitenfotos, Notizen und andere Inhalte hochladen. Sie behalten das Eigentum an den von Ihnen bereitgestellten Inhalten. Mit dem Hochladen räumen Sie uns die begrenzten Rechte ein, die erforderlich sind, um diese Inhalte ausschließlich zur Bereitstellung der App — einschließlich KI-gestützter Funktionen — zu verarbeiten, zu speichern, zu übertragen und anzuzeigen. Sie sind dafür verantwortlich sicherzustellen, dass Sie das Recht haben, die von Ihnen bereitgestellten Inhalte hochzuladen.`,
  },
  {
    title: '7. Abonnements und Abrechnung',
    body: `Abonnements, die über den Apple App Store oder Google Play erworben werden, werden von der jeweiligen Plattform abgerechnet. Preise, Testphasen und Verlängerungsbedingungen werden vor dem Kauf angezeigt. Sofern der Store nichts anderes vorsieht, verlängern sich Abonnements automatisch, bis sie gekündigt werden. Verwalten oder kündigen Sie in den Apple- oder Google-Kontoeinstellungen. Erstattungen richten sich nach den Richtlinien von Apple oder Google.`,
  },
  {
    title: '8. Kostenlose Testphasen und Nutzungslimits',
    body: 'Die App kann eine begrenzte kostenlose Testphase oder begrenzte KI-Nutzung anbieten. Wir können den Testzugang einschränken oder beenden, wenn wir vernünftigerweise Missbrauch feststellen.',
  },
  {
    title: '9. Verfügbarkeit des Dienstes',
    body: 'Wir bemühen uns, die App verfügbar und zuverlässig zu halten, garantieren jedoch keine unterbrechungsfreie Verfügbarkeit. Wir können Funktionen ändern, aussetzen oder einstellen, wenn dies vernünftigerweise erforderlich ist.',
  },
  {
    title: '10. Verbotene Nutzung',
    body: 'Sie verpflichten sich, die App nicht rechtswidrig zu nutzen, keinen unbefugten Zugang zu versuchen, Limits nicht zu umgehen, Testphasen nicht zu missbrauchen, keine Schadsoftware einzuschleusen, die App nicht zurückzuentwickeln und ihre Sicherheit oder ihren Betrieb nicht zu beeinträchtigen.',
  },
  {
    title: '11. Geistiges Eigentum',
    body: `Die App und ihre originalen Materialien gehören Mohamed Razmy Abdul Razzak (veröffentlicht unter der Marke Quantiva Tech) oder Lizenzgebern und sind durch geltendes Recht des geistigen Eigentums geschützt.`,
  },
  {
    title: '12. Daten und Datenschutz',
    body: `Ihre Nutzung der App unterliegt außerdem unserer Datenschutzerklärung unter ${PRIVACY_URL}, die Bestandteil dieser Bedingungen ist.`,
  },
  {
    title: '13. Haftungsausschluss',
    body: `Soweit gesetzlich zulässig, wird ${MEALMIRA_APP_NAME} „wie besehen“ und „wie verfügbar“ bereitgestellt. Wir garantieren keine genauen KI-Vorschläge, korrekte Nährwertangaben oder unterbrechungsfreie Verfügbarkeit.`,
  },
  {
    title: '14. Haftungsbeschränkung',
    body: 'Soweit gesetzlich zulässig, haften wir nicht für indirekte oder Folgeschäden aus Ihrer Nutzung der App. Nichts schließt die Haftung aus, soweit dies gesetzlich nicht zulässig ist — einschließlich zwingender Verbraucherrechte.',
  },
  {
    title: '15. Beendigung',
    body: `Sie können die Nutzung der App jederzeit einstellen und Ihr Konto über die App oder unter ${DELETE_URL} löschen. Wir können den Zugang bei schwerwiegenden Verstößen, Betrug, Missbrauch, rechtswidriger Nutzung oder Sicherheitsrisiken sperren oder beenden. Das Löschen Ihres Kontos kündigt keine Store-Abonnements — kündigen Sie diese in den Store-Einstellungen.`,
  },
  {
    title: '16. Änderungen dieser Bedingungen',
    body: 'Wir können diese Bedingungen von Zeit zu Zeit aktualisieren. Bei wesentlichen Änderungen können wir Sie über die App oder auf anderem geeigneten Weg benachrichtigen.',
  },
  {
    title: '17. Anwendbares Recht',
    body: 'Diese Bedingungen unterliegen dem in Deutschland anwendbaren Recht, unbeschadet zwingender Verbraucherschutzrechte in Ihrem Wohnsitzland.',
  },
  {
    title: '18. Kontakt',
    body: `${MEALMIRA_APP_NAME}
Entwickler: Mohamed Razmy Abdul Razzak
Quantiva Tech (Personal Brand)
Standort: Frankfurt am Main, Deutschland
E-Mail: razmyrazzak@outlook.com`,
  },
];
