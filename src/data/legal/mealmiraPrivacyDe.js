/** German Datenschutzerklärung for MealMira */
import { MEALMIRA_APP_NAME } from './mealmiraLegal';

const LANDING = 'https://quantivatech-landing-page.onrender.com';
const DELETE_URL = `${LANDING}/apps/mealmira/konto-loeschen`;

export const mealmiraPrivacyDeSections = [
  {
    title: '1. Einleitung',
    body: `${MEALMIRA_APP_NAME} („MealMira“, „wir“, „uns“ oder „unser“) ist eine Anwendung zur Mahlzeitenprotokollierung und Essensorganisation. Sie hilft Nutzerinnen und Nutzern, Ziele festzulegen, tägliche Ernährungsziele zu planen, Mahlzeiten zu fotografieren, ein Ernährungstagebuch zu führen und den Fortschritt behutsam zu verfolgen.

Diese Datenschutzerklärung erläutert, welche personenbezogenen Daten wir erheben und verarbeiten, wie wir diese verwenden, mit wem sie geteilt werden können, wie wir sie schützen und welche Rechte und Wahlmöglichkeiten Ihnen zur Verfügung stehen.

Durch die Nutzung von ${MEALMIRA_APP_NAME} bestätigen Sie, dass Sie die in dieser Datenschutzerklärung beschriebenen Verfahren zur Kenntnis genommen haben.`,
  },
  {
    title: '2. Verantwortlicher',
    body: `Verantwortlicher für die Verarbeitung Ihrer personenbezogenen Daten ist:

Mohamed Razmy Abdul Razzak
Quantiva Tech (Personal Brand)
E-Mail: razmyrazzak@outlook.com
Standort: Frankfurt am Main, Deutschland

Bei Fragen oder Anfragen zum Datenschutz können Sie uns kontaktieren unter: razmyrazzak@outlook.com`,
  },
  {
    title: '3. Welche Informationen wir erfassen',
    body: `Je nachdem, wie Sie ${MEALMIRA_APP_NAME} verwenden, können wir die folgenden Kategorien von Informationen verarbeiten.`,
    subsections: [
      {
        title: '3.1 Konto- und Authentifizierungsdaten',
        body: 'Wenn Sie ein Konto erstellen oder sich anmelden, können wir folgende Informationen verarbeiten:',
        list: [
          'E-Mail-Adresse',
          'Firebase-Benutzer-/Konto-ID',
          'Für die sichere Anmeldung erforderliche Authentifizierungsinformationen',
          'Informationen, die über unterstützte Anmeldeanbieter wie Google oder Apple bereitgestellt werden',
        ],
        bodyAfterList:
          'Passwörter werden von unserem Authentifizierungsanbieter verarbeitet und von uns nicht im Klartext gespeichert. MealMira nutzt ein eigenes Firebase-Projekt, getrennt von unseren anderen Apps.',
      },
      {
        title: '3.2 Ziele, Pläne und Mahlzeitendaten',
        body: 'Bei der Nutzung der App können wir Informationen verarbeiten, die Sie eingeben oder die für Sie erzeugt werden, einschließlich:',
        list: [
          'Ziele, die Sie wählen (z. B. Abnehmen, Halten, Muskelaufbau oder GLP-1-Modus)',
          'Tägliche Kalorien- und Makroziele',
          'Mahlzeiten, Mahlzeitenfotos, Lebensmittel, Portionen und Zeitstempel',
          'Einträge im Ernährungstagebuch, Ortsangaben sowie Hunger-/Sättigungsangaben, die Sie speichern',
          'Fortschritt, Markierungen für „gute Tage“ und Wochenübersichten',
          'Favoriten und Einstellungen, die Sie freiwillig angeben',
        ],
        bodyAfterList:
          'Diese Informationen werden verwendet, um Mahlzeitenprotokollierung, Organisation, Einblicke und verwandte Funktionen der Anwendung bereitzustellen.',
      },
      {
        title: '3.3 Hochgeladene Fotos',
        body: 'Wenn Sie die Snap-Funktion nutzen, können Sie Mahlzeitenfotos hochladen. Diese Fotos können personenbezogene Informationen enthalten. Wir verarbeiten sie nur so weit, wie es erforderlich ist, um Lebensmittel zu erkennen und Kalorien-/Makrovorschläge zu erstellen, die Sie prüfen und bearbeiten können.',
      },
      {
        title: '3.4 KI-gestützte Auswertung',
        body: 'Wenn Sie eine Mahlzeit fotografieren, kann die KI-Verarbeitung Lebensmittel, Portionen und Nährwertschätzungen vorschlagen. Die Ergebnisse werden zur Prüfung angezeigt und können unvollständig oder ungenau sein. Sie bleiben selbst für Entscheidungen zu Ernährung und Gesundheit verantwortlich. MealMira gibt keine medizinische Beratung.',
      },
      {
        title: '3.5 Technische und Nutzungsdaten',
        body: 'Wir können begrenzte technische Informationen verarbeiten, die zum Betrieb, zur Sicherheit und zur Wartung der Anwendung erforderlich sind, z. B. Geräte- oder App-Informationen, App-Version, Betriebssystem, IP-Adresse, Sicherheits- und Authentifizierungsdaten, Fehler-/Diagnosedaten sofern zutreffend sowie Nutzungsdaten zur Sicherheit und Missbrauchsprävention. Wir verwenden diese Informationen nicht zur Erstellung von Werbeprofilen.',
      },
      {
        title: '3.6 Abonnementinformationen',
        body: `Wenn Sie ein Abonnement erwerben, können abonnement- und kaufbezogene Informationen vom jeweiligen App Store und von Abonnementdiensten verarbeitet werden. ${MEALMIRA_APP_NAME} kann Abonnementdienste zur Verwaltung bezahlter Pläne nutzen. Wir erhalten oder speichern Ihre vollständige Zahlungskartennummer nicht.`,
      },
    ],
  },
  {
    title: '4. Wie wir Ihre Informationen verwenden',
    body: 'Wir verwenden personenbezogene Daten, um:',
    list: [
      'die Anwendung bereitzustellen (Konto, Mahlzeiten, Tagebuch, Fortschritt, KI-gestützte Snap-Funktionen, Synchronisation, Support)',
      'Konten zu schützen und Missbrauch zu verhindern (einschließlich Test- oder Nutzungslimits, sofern zutreffend)',
      'Zuverlässigkeit und Sicherheit zu erhalten und zu verbessern',
    ],
    bodyAfterList:
      'Wir verkaufen Ihre persönlichen Mahlzeiten- oder Kontodaten nicht. Wir verwenden Ihre Mahlzeitendaten nicht für Werbung Dritter.',
  },
  {
    title: '5. KI-Verarbeitung',
    body: `${MEALMIRA_APP_NAME} kann künstliche Intelligenz nutzen, um Lebensmittel auf Fotos zu erkennen oder strukturierte Mahlzeitenvorschläge aus von Ihnen bereitgestellten Inhalten zu erzeugen.

Wenn Sie eine KI-Funktion anfordern, können relevante Bilder oder Texte sicher an einen KI-Anbieter (z. B. OpenAI) zur Verarbeitung übermittelt werden. Wir konfigurieren unsere KI-API-Nutzung so, dass wir Inhalte von MealMira-Nutzern nicht absichtlich für das Training von Modellen freigeben.`,
  },
  {
    title: '6. Auftragsverarbeiter und Dienstleister',
    body: `Zum Betrieb von ${MEALMIRA_APP_NAME} können wir vertrauenswürdige Drittanbieter einsetzen:`,
    table: {
      headers: ['Anbieter', 'Zweck'],
      rows: [
        ['Firebase / Google', 'Authentifizierung und Kontoverwaltung (MealMira-Firebase-Projekt)'],
        ['MongoDB Atlas', 'Speicherung von Nutzerprofilen und mahlzeitenbezogenen Daten'],
        ['Render', 'Hosting von Backend-Diensten'],
        ['OpenAI', 'KI-gestützte Foto- und Vorschlagsfunktionen'],
        ['RevenueCat', 'Abonnements, Berechtigungen und Abonnementstatus'],
        ['Apple / Google Play', 'App-Vertrieb, Käufe und Zahlungen'],
      ],
    },
    bodyAfterList:
      'Wir stellen Dritten nur die Informationen zur Verfügung, die vernünftigerweise erforderlich sind, damit sie ihre Leistungen erbringen können.',
  },
  {
    title: '7. Datensicherheit',
    body: 'Wir treffen angemessene technische und organisatorische Maßnahmen zum Schutz Ihrer personenbezogenen Daten, einschließlich verschlüsselter Verbindungen (HTTPS/TLS), sicherer Authentifizierung über Firebase, Zugriffskontrollen und geschütztem Datenbankzugriff. Kein internetbasierter Dienst kann absolute Sicherheit garantieren. Sie sollten auch Ihre Zugangsdaten und Ihr Gerät schützen.',
  },
  {
    title: '8. Speicherung und Aufbewahrung',
    body: `Wir speichern Ihre Konto- und mahlzeitenbezogenen Informationen so lange, wie dies für die Bereitstellung der Anwendung erforderlich ist. Wenn Sie Ihr Konto löschen, löschen wir personenbezogene und mahlzeitenbezogene Daten, die mit Ihrem Konto verbunden sind, aus unseren aktiven Systemen — einschließlich Konto, Profil, Mahlzeiten, Fotos, Tagebucheinträgen und ggf. KI-bezogenen Daten, die mit Ihrem Konto verknüpft sind.

Bestimmte Informationen können aufbewahrt werden, soweit dies gesetzlich vorgeschrieben ist oder für berechtigte Zwecke der Sicherheit, Betrugsprävention oder Rechtsdurchsetzung erforderlich ist.`,
  },
  {
    title: '9. Kostenlose Testphase und Betrugsprävention',
    body: `${MEALMIRA_APP_NAME} kann eine begrenzte kostenlose Testphase oder begrenzte KI-Nutzung anbieten. Um wiederholten Missbrauch von Testphasen zu verhindern, können wir eine kryptografische Kennung erstellen, die mit einer Konto-Kennung (z. B. einer normalisierten E-Mail-Adresse) verknüpft ist. Diese Kennung wird mit einem Einwegverfahren erzeugt. Die ursprüngliche E-Mail-Adresse lässt sich daraus nicht wiederherstellen.

Wird ein Konto gelöscht, können wir diese begrenzte Kennung zur Missbrauchsprävention bis zu 12 Monate aufbewahren und sie anschließend löschen.`,
  },
  {
    title: '10. Kontolöschung',
    body: `Sie können die Löschung Ihres ${MEALMIRA_APP_NAME}-Kontos beantragen:

• Direkt in der MealMira-App über Konto/Einstellungen
• Über unsere Webseite zur Kontolöschung: ${DELETE_URL}

Das Löschen Ihres MealMira-Kontos beendet nicht automatisch ein aktives Abonnement, das über Apple, Google Play oder einen anderen Anbieter erworben wurde. Kündigen Sie Abonnements in den Einstellungen des jeweiligen Stores.`,
  },
  {
    title: '11. Ihre Datenschutzrechte',
    body: 'Wenn Sie sich im EWR, im Vereinigten Königreich oder in einer anderen Region mit vergleichbaren Datenschutzrechten befinden, können Sie Rechte haben auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Widerspruch, Datenübertragbarkeit, Widerruf einer Einwilligung sofern anwendbar sowie das Recht, eine Beschwerde bei einer Aufsichtsbehörde einzureichen. Kontakt: razmyrazzak@outlook.com. Wir können Sie bitten, Ihre Identität zu bestätigen, bevor wir bestimmte Anfragen bearbeiten.',
  },
  {
    title: '12. Rechtsgrundlagen der Verarbeitung',
    body: 'Soweit die DSGVO gilt, verarbeiten wir personenbezogene Daten auf Grundlagen einschließlich Vertragserfüllung, berechtigter Interessen (Sicherheit und Zuverlässigkeit), rechtlicher Verpflichtungen sowie Einwilligung, soweit erforderlich.',
  },
  {
    title: '13. Internationale Datenübermittlungen',
    body: 'Einige Anbieter können personenbezogene Daten außerhalb des EWR verarbeiten. Bei solchen Übermittlungen treffen wir angemessene Maßnahmen nach geltendem Datenschutzrecht, z. B. Angemessenheitsbeschlüsse oder Standardvertragsklauseln.',
  },
  {
    title: '14. Kinder',
    body: `${MEALMIRA_APP_NAME} richtet sich nicht an Kinder unter dem Alter, in dem sie solche Dienste nach geltendem Recht selbstständig nutzen dürfen. Wir erheben wissentlich keine personenbezogenen Daten von Kindern unter Verstoß gegen geltendes Recht. Kontakt: razmyrazzak@outlook.com, wenn Sie glauben, dass ein Kind unzulässig personenbezogene Daten bereitgestellt hat.`,
  },
  {
    title: '15. Zahlungen und Abonnements',
    body: `${MEALMIRA_APP_NAME} kann optionale kostenpflichtige Abonnements anbieten. Zahlungen werden vom jeweiligen App Store oder Zahlungsanbieter abgewickelt. Wir speichern keine vollständigen Kredit- oder Debitkartennummern.`,
  },
  {
    title: '16. Kein Verkauf personenbezogener Daten',
    body: 'Wir verkaufen, vermieten oder handeln nicht mit Ihren persönlichen Mahlzeiten- oder Kontodaten. Wir verwenden Ihre Mahlzeitenfotos oder Tagebucheinträge nicht, um Werbeprofile für Dritte zu erstellen.',
  },
  {
    title: '17. Änderungen dieser Datenschutzerklärung',
    body: 'Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren. Bei wesentlichen Änderungen können wir Sie über die Anwendung oder auf anderem geeigneten Weg benachrichtigen. Das Datum „Letzte Aktualisierung“ gibt an, wann diese Erklärung zuletzt aktualisiert wurde.',
  },
  {
    title: '18. Kontakt',
    body: `${MEALMIRA_APP_NAME}
Quantiva Tech (Personal Brand)
Mohamed Razmy Abdul Razzak
E-Mail: razmyrazzak@outlook.com
Standort: Frankfurt am Main, Deutschland`,
  },
];
