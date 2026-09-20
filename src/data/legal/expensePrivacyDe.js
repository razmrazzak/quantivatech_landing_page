/** German Datenschutzerklärung for Expense - KI Tracker */
export const expensePrivacyDeSections = [
  {
    title: '1. Einleitung',
    body: `Expense - KI Tracker („Expense“, „wir“, „uns“ oder „unser“) ist eine Anwendung zur Verwaltung von Ausgaben und Einnahmen. Die App hilft Nutzern dabei, private und geschäftliche Finanzen zu organisieren, indem Transaktionen manuell erfasst oder Belege, Rechnungen, Quittungen, Kontoauszüge und andere Finanzdokumente mithilfe von KI gescannt werden.

Diese Datenschutzerklärung erläutert, welche personenbezogenen Daten wir erheben und verarbeiten, wie wir diese verwenden, mit wem sie geteilt werden können, wie wir sie schützen und welche Rechte und Wahlmöglichkeiten Ihnen zur Verfügung stehen.

Durch die Nutzung von Expense - KI Tracker bestätigen Sie, dass Sie die in dieser Datenschutzerklärung beschriebenen Verfahren zur Verarbeitung personenbezogener Daten zur Kenntnis genommen haben.`,
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
    body: 'Je nachdem, wie Sie Expense - KI Tracker verwenden, können wir die folgenden Kategorien von Informationen verarbeiten.',
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
          'Passwörter werden von unserem Authentifizierungsanbieter verarbeitet und von uns nicht im Klartext gespeichert.',
      },
      {
        title: '3.2 Finanz- und Transaktionsdaten',
        body: 'Bei der Nutzung der App können wir Informationen verarbeiten, die Sie selbst eingeben oder die aus Dokumenten extrahiert werden, einschließlich:',
        list: [
          'Ausgaben- und Einnahmebeträge',
          'Währung',
          'Transaktionsdatum',
          'Händler- oder Unternehmensname',
          'Kategorie der Ausgabe oder Einnahme',
          'MwSt.-/Steuerbetrag, sofern verfügbar',
          'Einzelpositionen, sofern verfügbar',
          'Kennzeichnung als privat oder geschäftlich',
          'Notizen oder Beschreibungen',
          'Weitere Transaktionsinformationen, die Sie freiwillig eingeben',
        ],
        bodyAfterList:
          'Diese Informationen werden verwendet, um die Funktionen zur Ausgabenverwaltung, Kategorisierung, Berichterstellung und zum Export bereitzustellen.',
      },
      {
        title: '3.3 Hochgeladene Dokumente und Bilder',
        body: 'Wenn Sie die KI-Scan-Funktion verwenden, können Sie Fotos von Belegen, Rechnungen, Quittungen, Kontoauszüge als PDF-Dateien und andere Finanzdokumente hochladen. Diese Dokumente können finanzielle und personenbezogene Informationen enthalten. Wir verarbeiten diese Dokumente nur soweit dies erforderlich ist, um die von Ihnen angeforderten Scan-, Analyse- und Finanzorganisationsfunktionen bereitzustellen.',
      },
      {
        title: '3.4 Durch KI extrahierte Informationen',
        body: 'Wenn Sie ein Finanzdokument scannen, kann unsere KI unter anderem folgende Informationen extrahieren: Händler, Datum, Betrag, Währung, MwSt., Einzelpositionen, Art der Ausgabe oder Einnahme, Kategorie sowie Kennzeichnung als privat oder geschäftlich. Die durch KI erzeugten Informationen werden Ihnen zur Überprüfung angezeigt. Sie können die extrahierten Informationen bearbeiten, bevor Sie sie als Transaktion speichern. KI-generierte Informationen sind möglicherweise nicht immer vollständig oder korrekt. Sie sind dafür verantwortlich, Ihre Finanzdaten und Aufzeichnungen zu überprüfen.',
      },
      {
        title: '3.5 Technische und Nutzungsinformationen',
        body: 'Wir können begrenzte technische Informationen verarbeiten, die für den Betrieb, die Sicherheit und die Wartung der Anwendung erforderlich sind, beispielsweise:',
        list: [
          'Geräte- oder Anwendungsinformationen',
          'App-Version',
          'Betriebssystem',
          'IP-Adresse',
          'Sicherheits- und Authentifizierungsinformationen',
          'Fehler- und Diagnoseinformationen, sofern zutreffend',
          'Informationen über die Nutzung der Anwendung, soweit diese für Sicherheit, Missbrauchsprävention und den Betrieb des Dienstes erforderlich sind',
        ],
        bodyAfterList: 'Wir verwenden diese Informationen nicht zur Erstellung von Werbeprofilen.',
      },
      {
        title: '3.6 Abonnementinformationen',
        body: 'Wenn Sie ein Abonnement erwerben, können abonnement- und kaufbezogene Informationen durch die jeweiligen App-Stores und Anbieter von Abonnementdiensten verarbeitet werden. Expense - KI Tracker verwendet Abonnementdienste zur Verwaltung kostenpflichtiger Tarife und des Zugriffs auf Premium-Funktionen. Wir erhalten oder speichern nicht Ihre vollständige Kredit- oder Debitkartennummer. Die Zahlungsabwicklung erfolgt über die jeweilige Plattform oder den jeweiligen Zahlungsanbieter.',
      },
    ],
  },
  {
    title: '4. Wie wir Ihre Informationen verwenden',
    body: 'Wir verwenden personenbezogene Daten für folgende Zwecke:',
    list: [
      'Bereitstellung der Anwendung: Konto erstellen und verwalten, Authentifizierung, Transaktionen speichern, Belege und Finanzdokumente verarbeiten, Finanzinformationen mit KI extrahieren, Transaktionen kategorisieren, Dashboards und Berichte, private und geschäftliche Ausgaben verwalten, PDF-/CSV-Exporte, Synchronisation auf unterstützten Geräten und Kundensupport',
      'Sicherheit und Missbrauchsprävention: Konten schützen, Missbrauch erkennen, betrügerische Nutzung von Testzeiträumen verhindern, KI-Scan-Limits durchsetzen und Systeme schützen',
      'Verbesserung des Dienstes: Zuverlässigkeit und Sicherheit warten, Fehler beheben und den Dienst verbessern',
    ],
    bodyAfterList:
      'Wir verkaufen Ihre persönlichen Finanzdaten nicht. Wir verwenden Ihre Finanzdaten nicht, um Werbung von Drittanbietern bereitzustellen.',
  },
  {
    title: '5. Verarbeitung von Dokumenten durch KI',
    body: `Expense - KI Tracker verwendet künstliche Intelligenz, um Finanzinformationen aus den von Ihnen ausgewählten Dokumenten zu extrahieren.

Wenn Sie einen KI-Scan durchführen, kann das entsprechende Dokument oder Bild sicher an OpenAI zur KI-gestützten Verarbeitung übertragen werden. Der KI-Dienst kann Informationen aus dem Dokument verarbeiten, einschließlich finanzieller Informationen, um strukturierte Daten wie Händler, Datum, Betrag, Währung, MwSt., Einzelpositionen, Kategorie und Transaktionsart zurückzugeben.

Die extrahierten Informationen werden an unsere Anwendung zurückgegeben, damit Sie diese überprüfen und bearbeiten können, bevor Sie sie speichern.

Wir verwenden für diese Funktion die OpenAI API. Nach der aktuellen Datenrichtlinie von OpenAI werden API-Eingaben und -Ausgaben standardmäßig nicht zum Training von OpenAI-Modellen verwendet, sofern der API-Kunde nicht ausdrücklich entsprechende Datenfreigabeeinstellungen aktiviert. Wir konfigurieren unsere OpenAI-API-Nutzung entsprechend und aktivieren nicht absichtlich die Weitergabe von Dokumentdaten von Expense-Nutzern zum Training von Modellen.`,
  },
  {
    title: '6. Dienstleister',
    body: 'Für den Betrieb von Expense - KI Tracker können wir vertrauenswürdige Drittanbieter einsetzen. Je nach den von Ihnen verwendeten Funktionen können dazu gehören:',
    table: {
      headers: ['Anbieter', 'Zweck'],
      rows: [
        ['Firebase / Google', 'Authentifizierung und Kontoverwaltung'],
        ['MongoDB Atlas', 'Speicherung von Benutzerprofilen und Finanztransaktionen'],
        ['Render', 'Hosting von Backend-Diensten'],
        ['OpenAI', 'KI-gestützte Verarbeitung von Dokumenten und Belegen'],
        ['RevenueCat', 'Abonnements, Berechtigungen und Abonnementstatus'],
        ['Apple / Google Play', 'App-Verteilung, Käufe und Zahlungen'],
      ],
    },
    bodyAfterList:
      'Wir stellen Drittanbietern nur die Informationen zur Verfügung, die angemessen erforderlich sind, damit diese ihre jeweiligen Dienstleistungen erbringen können.',
  },
  {
    title: '7. Datensicherheit',
    body: 'Wir treffen angemessene technische und organisatorische Maßnahmen, um Ihre persönlichen und finanziellen Informationen vor unbefugtem Zugriff, Veränderung, Offenlegung oder Zerstörung zu schützen. Diese Maßnahmen können unter anderem umfassen:',
    list: [
      'Verschlüsselte Verbindungen über HTTPS/TLS',
      'Sichere Authentifizierung über Firebase',
      'Zugriffskontrollen',
      'Serverseitige Authentifizierung und Autorisierung',
      'Geschützten Datenbankzugriff',
      'Sichere API-Zugangsdaten',
      'Beschränkten Zugriff auf Produktionssysteme',
      'Sicherheitsüberwachung und Maßnahmen zur Missbrauchsprävention',
    ],
    bodyAfterList:
      'Trotz dieser Maßnahmen kann kein internetbasierter Dienst eine absolute Sicherheit garantieren. Sie sollten Ihre Zugangsdaten und Ihr Gerät ebenfalls vor unbefugtem Zugriff schützen.',
  },
  {
    title: '8. Speicherung und Aufbewahrung von Daten',
    body: `Wir speichern Ihre Konto- und Finanzinformationen so lange, wie dies für die Bereitstellung der Anwendung und die Verwaltung Ihres Kontos erforderlich ist. Ihre Finanzdaten bleiben verfügbar, solange Ihr Konto aktiv ist, sofern Sie diese nicht selbst löschen.

Wenn Sie Ihr Konto löschen, löschen wir die mit Ihrem Konto verbundenen personenbezogenen und finanziellen Daten aus unseren aktiven Anwendungssystemen, soweit zutreffend, einschließlich Ihres Anwendungskontos, Ihrer Profilinformationen, Ihrer Transaktionen, Ihrer hochgeladenen Finanzdokumente, gespeicherter Beleginformationen und KI-Extraktionsdaten, die Ihrem Konto zugeordnet sind.

Bestimmte Informationen können aufbewahrt werden, wenn dies gesetzlich vorgeschrieben ist oder soweit dies für legitime Sicherheits-, Betrugspräventions- oder rechtliche Zwecke erforderlich ist.`,
  },
  {
    title: '9. Kostenlose Testphase und Betrugsprävention',
    body: `Expense - KI Tracker kann eine begrenzte kostenlose Testphase für KI-Scans anbieten. Um den wiederholten Missbrauch der Testphase zu verhindern, können wir eine kryptografische Kennung erstellen, die mit einer Konto-Kennung, beispielsweise der normalisierten E-Mail-Adresse des Nutzers, verbunden ist.

Diese Kennung wird mithilfe eines Einweg-Kryptografieprozesses erzeugt und ausschließlich für Zwecke wie folgende verwendet: festzustellen, ob eine Testphase bereits genutzt wurde; wiederholten Missbrauch der Testphase zu verhindern; den Dienst vor betrügerischer oder automatisierter Nutzung zu schützen.

Aus der kryptografischen Kennung kann die ursprüngliche E-Mail-Adresse nicht wiederhergestellt werden. Wenn ein Konto gelöscht wird, können wir diese begrenzte Kennung zur Betrugsprävention für bis zu 12 Monate aufbewahren, sofern dies zur Missbrauchsprävention erforderlich ist. Nach Ablauf dieses Zeitraums wird sie gelöscht.

Diese begrenzte Aufbewahrung bedeutet nicht, dass Ihre Finanztransaktionen, hochgeladenen Dokumente oder Profilinformationen nach der Kontolöschung weiterhin gespeichert werden.`,
  },
  {
    title: '10. Löschung Ihres Kontos',
    body: `Sie können die Löschung Ihres Expense - KI Tracker Kontos beantragen.

Die Kontolöschung ist verfügbar:
• Direkt in der Expense - KI Tracker App über den Konto-/Einstellungsbereich
• Über unsere Webseite zur Kontolöschung: https://quantivatech-landing-page.onrender.com/apps/expense/konto-loeschen

Wenn Ihr Konto gelöscht wird, löschen wir die mit Ihrem Konto verbundenen persönlichen und finanziellen Daten aus unseren aktiven Systemen, vorbehaltlich der in dieser Datenschutzerklärung beschriebenen begrenzten Aufbewahrung oder gesetzlicher Aufbewahrungspflichten. Dies kann unter anderem die Löschung Ihres Firebase-Authentifizierungskontos, Ihres Benutzerprofils, Ihrer Transaktionen, Ihrer hochgeladenen Belege und Dokumente, Ihrer KI-Scan-Daten und anderer mit Ihrem Konto verbundener Anwendungsdaten umfassen.

Falls bestimmte Informationen von einem Drittanbieter aus rechtlichen, abrechnungsbezogenen, sicherheitsbezogenen oder betrugspräventiven Gründen aufbewahrt werden müssen, können diese Informationen entsprechend den geltenden Richtlinien des jeweiligen Anbieters weiterhin gespeichert werden.

Die Löschung Ihres Expense-Kontos beendet nicht automatisch ein aktives Abonnement, das über Apple, Google Play oder einen anderen Abonnementanbieter abgeschlossen wurde. Ein aktives Abonnement muss über die entsprechenden Einstellungen des jeweiligen App-Stores gekündigt werden.`,
  },
  {
    title: '11. Ihre Datenschutzrechte',
    body: 'Wenn Sie sich im Europäischen Wirtschaftsraum, im Vereinigten Königreich oder in einem anderen Land mit vergleichbaren Datenschutzrechten befinden, können Ihnen unter anderem folgende Rechte zustehen:',
    list: [
      'Das Recht auf Auskunft über Ihre personenbezogenen Daten',
      'Das Recht auf Berichtigung unrichtiger Daten',
      'Das Recht auf Löschung Ihrer personenbezogenen Daten',
      'Das Recht auf Einschränkung der Verarbeitung',
      'Das Recht, bestimmten Verarbeitungen zu widersprechen',
      'Das Recht auf Datenübertragbarkeit',
      'Das Recht, eine Einwilligung zu widerrufen, sofern die Verarbeitung auf einer Einwilligung beruht',
      'Das Recht, eine Beschwerde bei einer zuständigen Datenschutzaufsichtsbehörde einzureichen',
    ],
    bodyAfterList:
      'Diese Rechte unterliegen den jeweils geltenden gesetzlichen Voraussetzungen und Ausnahmen. Um Ihre Rechte auszuüben, kontaktieren Sie uns unter: razmyrazzak@outlook.com. Wir können Sie auffordern, Ihre Identität zu bestätigen, bevor wir bestimmte Anfragen bearbeiten.',
  },
  {
    title: '12. Rechtsgrundlagen der Verarbeitung',
    body: 'Soweit die DSGVO Anwendung findet, verarbeiten wir personenbezogene Daten je nach konkreter Verarbeitung auf einer oder mehreren der folgenden Rechtsgrundlagen:',
    list: [
      'Vertragserfüllung — erforderlich, um den angeforderten Dienst bereitzustellen (Konto, Transaktionen, KI-Scans)',
      'Berechtigte Interessen — Betrugs- und Missbrauchsprävention, Systemschutz, Anwendungssicherheit, Fehlerbehebung und Zuverlässigkeit (unter Berücksichtigung Ihrer Rechte)',
      'Rechtliche Verpflichtungen — soweit zur Erfüllung gesetzlicher Pflichten erforderlich',
      'Einwilligung — soweit gesetzlich erforderlich; Widerruf jederzeit möglich, wenn die Verarbeitung auf Einwilligung beruht',
    ],
  },
  {
    title: '13. Internationale Datenübermittlung',
    body: 'Einige unserer Dienstleister können personenbezogene Daten außerhalb des Europäischen Wirtschaftsraums (EWR) verarbeiten. Wenn personenbezogene Daten außerhalb des EWR übermittelt werden, treffen wir geeignete Maßnahmen gemäß den geltenden Datenschutzgesetzen. Dazu kann beispielsweise ein Angemessenheitsbeschluss oder der Einsatz geeigneter vertraglicher Schutzmaßnahmen wie Standardvertragsklauseln gehören. Der konkrete Speicherort und die angewandten Übermittlungsmechanismen können von den jeweils verwendeten Diensten und der eingesetzten Infrastruktur abhängen.',
  },
  {
    title: '14. Kinder',
    body: 'Expense - KI Tracker richtet sich nicht an Kinder unterhalb des Alters, ab dem sie Dienste dieser Art nach dem jeweils geltenden Recht selbstständig nutzen dürfen. Wir erheben nicht wissentlich personenbezogene Daten von Kindern unter Verstoß gegen geltendes Recht. Wenn Sie der Meinung sind, dass ein Kind uns unzulässigerweise personenbezogene Daten zur Verfügung gestellt hat, kontaktieren Sie uns bitte unter: razmyrazzak@outlook.com',
  },
  {
    title: '15. Zahlungen und Abonnements',
    body: 'Expense - KI Tracker bietet optionale kostenpflichtige Abonnements an. Die aktuellen Abonnementtarife können Plus und Pro umfassen. Abonnementzahlungen werden über den jeweiligen App-Store oder Zahlungs-/Abonnementanbieter abgewickelt. Wir speichern keine vollständige Kredit- oder Debitkartennummer.',
    list: [
      'Anbieter können Abonnementstatus, gekauftes Produkt, Kaufdatum, Verlängerungsinformationen, Transaktionskennungen und App-Store-Kontoinformationen verarbeiten',
      'Abonnement- und Kaufinformationen können von Apple, Google oder dem jeweiligen Anbieter gemäß deren Richtlinien und gesetzlichen Verpflichtungen aufbewahrt werden',
    ],
  },
  {
    title: '16. Kein Verkauf persönlicher Finanzdaten',
    body: 'Wir verkaufen, vermieten oder handeln nicht mit Ihren persönlichen Finanzdaten. Wir verwenden Ihre Belege, Rechnungen, Kontoauszüge oder Transaktionsdaten nicht zur Erstellung von Werbeprofilen für Dritte. Ihre Finanzdaten werden zur Bereitstellung der Funktionen von Expense - KI Tracker verarbeitet, einschließlich Transaktionsverwaltung, KI-Extraktion, Kategorisierung und Berichterstellung.',
  },
  {
    title: '17. Änderungen dieser Datenschutzerklärung',
    body: 'Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren, um Änderungen an der Anwendung, unseren Dienstleistern, unseren Datenverarbeitungspraktiken oder den geltenden gesetzlichen Anforderungen zu berücksichtigen. Bei wesentlichen Änderungen können wir Sie über die Anwendung oder auf andere angemessene Weise informieren. Das Datum „Letzte Aktualisierung“ am Anfang dieser Datenschutzerklärung zeigt an, wann die Datenschutzerklärung zuletzt aktualisiert wurde.',
  },
  {
    title: '18. Kontakt',
    body: `Wenn Sie Fragen zu dieser Datenschutzerklärung, Ihren personenbezogenen Daten oder Ihren Datenschutzrechten haben, kontaktieren Sie uns bitte:

Expense - KI Tracker
Quantiva Tech (Personal Brand)
Mohamed Razmy Abdul Razzak
E-Mail: razmyrazzak@outlook.com
Standort: Frankfurt am Main, Deutschland`,
  },
];
