/*global systemDictionary:true */
'use strict';

systemDictionary = {
    "Email": {                                       "en": "User/Email",                                      "de": "Benutzer/Email",                                  "ru": "Пользователь/Email",                              "pt": "Usuário/E-mail",                                  "nl": "User/E-mail",                                     "fr": "Utilisateur/Email",                               "it": "Utente/E-mail",                                   "es": "Usuario/Correo electrónico",                      "pl": "Użytkownik/Email"},
    "Password": {                                    "en": "Password",                                        "de": "Passwort",                                        "ru": "пароль",                                          "pt": "Senha",                                           "nl": "Wachtwoord",                                      "fr": "Mot de passe",                                    "it": "Parola d'ordine",                                 "es": "Contraseña",                                      "pl": "Hasło"},
    "Settings": {                                    "en": "Settings",                                        "de": "Einstellungen",                                   "ru": "настройки",                                       "pt": "Configurações",                                   "nl": "instellingen",                                    "fr": "Paramètres",                                      "it": "impostazioni",                                    "es": "Configuraciones",                                 "pl": "Ustawienia"},
    "acceptLanguage": {                              "en": "Custom Accept-Language Header",                   "de": "Eigene Sprachangabe-Header",                      "ru": "Пользовательский заголовок Accept-Language",      "pt": "Cabeçalho de Aceitar Idioma Personalizado",       "nl": "Aangepaste acceptatie-taalkop",                   "fr": "En-tête personnalisé Accept-Language",            "it": "Intestazione di lingua accettabile personalizzata", "es": "Encabezado personalizado de idioma de aceptación", "pl": "Niestandardowy nagłówek Accept-Language"},
    "alexaLogin": {                                  "en": "Alexa login data",                                "de": "Alexa Login Daten",                               "ru": "Входные данные Alexa",                            "pt": "Dados de login do Alexa",                         "nl": "Alexa-inloggegevens",                             "fr": "Données de connexion Alexa",                      "it": "Dati di login di Alexa",                          "es": "Datos de acceso de Alexa",                        "pl": "Dane logowania Alexa"},
    "alexaServiceHost": {                            "en": "Alexa base url",                                  "de": "Alexa Basis URL",                                 "ru": "Alexa base url",                                  "pt": "URL base do Alexa",                               "nl": "Alexa-basis-URL",                                 "fr": "Alexa base de l'Alexa",                           "it": "Alexa base url",                                  "es": "URL base de Alexa",                               "pl": "Adres bazowy Alexa"},
    "auth": {                                        "en": "Login Details for Amazon Account where Echo devices are registered", "de": "Login-Daten für das Amazon-Konto, wo die Echo Geräte registriert sind", "ru": "Детали входа для учетной записи Amazon, на которой зарегистрированы устройства Echo", "pt": "Detalhes de login para a conta da Amazon em que os dispositivos de eco estão registrados", "nl": "Aanmeldgegevens voor Amazon-account waarop Echo-apparaten zijn geregistreerd", "fr": "Détails de connexion pour le compte Amazon où les appareils Echo sont enregistrés", "it": "Dettagli di accesso per l'account Amazon in cui sono registrati i dispositivi Echo", "es": "Detalles de inicio de sesión para Amazon Cuenta donde están registrados los dispositivos Echo", "pl": "Dane logowania do konta Amazon, w którym zarejestrowane są urządzenia Echo"},
    "auth_info": {                                   "en": "The credentials will be stored encrypted in your local ioBroker instance. You can also leave them empty, but then you need to fetch the Amazon cookie by your own or use the proxy from the adapter to login and get the cookie.", "de": "Die Login-Daten werden verschlüsselt in der lokalen ioBroker-Instanz gespeichert. Wenn die Daten nicht angegeben werden, muss man selbst das Cookie beschaffen oder über den Proxy des Adapters den Login vornehmen, sodass das Cookie dann ermittelt werden kann. Dies muss aber manuell wiederholt werden sobald der Cookie ungültig geworden ist.", "ru": "Учетные данные будут храниться зашифрованными в вашем локальном экземпляре ioBroker. Вы также можете оставить их пустыми, но затем вам нужно получить cookie Amazon самостоятельно или использовать прокси-сервер от адаптера для входа в систему и получить файл cookie.", "pt": "As credenciais serão armazenadas criptografadas na sua instância local do ioBroker. Você também pode deixá-los vazios, mas, em seguida, é necessário buscar o cookie Amazon por conta própria ou usar o proxy do adaptador para fazer login e obter o cookie.", "nl": "De inloggegevens worden gecodeerd opgeslagen in uw lokale instantie ioBroker. Je kunt ze ook leeg laten, maar dan moet je de Amazon-cookie zelf ophalen of de proxy van de adapter gebruiken om in te loggen en de cookie te krijgen.", "fr": "Les informations d'identification seront stockées cryptées dans votre instance ioBroker locale. Vous pouvez également les laisser vides, mais vous devez ensuite récupérer le cookie Amazon par vous-même ou utiliser le proxy de l'adaptateur pour vous connecter et obtenir le cookie.", "it": "Le credenziali verranno archiviate crittografate nell'istanza ioBroker locale. Puoi anche lasciarli vuoti, ma poi devi recuperare il cookie Amazon da solo o utilizzare il proxy dall'adattatore per accedere e ottenere il cookie.", "es": "Las credenciales se almacenarán encriptadas en su instancia local de ioBroker. También puede dejarlos vacíos, pero luego debe buscar la cookie de Amazon por su cuenta o usar el proxy del adaptador para iniciar sesión y obtener la cookie.", "pl": "Dane uwierzytelniające będą przechowywane w postaci zaszyfrowanej w lokalnej instancji ioBroker. Możesz również pozostawić je puste, ale musisz pobrać plik cookie Amazon samodzielnie lub użyć proxy z adaptera, aby się zalogować i uzyskać plik cookie."},
    "cookie": {                                      "en": "Cookie",                                          "de": "Cookie",                                          "ru": "Cookie",                                          "pt": "Biscoito",                                        "nl": "Cookie",                                          "fr": "Cookie",                                          "it": "Cookie",                                          "es": "Cookie",                                          "pl": "Cookie"},
    "cookieAlt": {                                   "en": "Manual input of the cookie",                      "de": "Manuelle Eingabe des Cookie",                     "ru": "Ручной ввод файла cookie",                        "pt": "Entrada manual do cookie",                        "nl": "Handmatige invoer van de cookie",                 "fr": "Entrée manuelle du cookie",                       "it": "Inserimento manuale del cookie",                  "es": "Entrada manual de la cookie",                     "pl": "Ręczne wprowadzanie pliku cookie"},
    "cookieAlt_info": {                              "en": "The cookie can also be entered directly. Email & password are then not required", "de": "Der Cookie kann auch manuell ermittelt und eingetragen werden. Email & Passwort werden dann nicht benötigt", "ru": "Файл cookie также можно ввести напрямую. Электронная почта и пароль не требуются.", "pt": "O cookie também pode ser inserido diretamente. E-mail e senha não são necessários", "nl": "De cookie kan ook rechtstreeks worden ingevoerd. E-mail en wachtwoord zijn dan niet vereist", "fr": "Le cookie peut également être entré directement. L'email et le mot de passe ne sont pas requis", "it": "Il cookie può anche essere inserito direttamente. Email e password non sono quindi necessarie", "es": "La cookie también se puede ingresar directamente. El correo electrónico y la contraseña no son necesarios", "pl": "Plik cookie można również wprowadzić bezpośrednio. Email i hasło nie są wtedy wymagane"},
    "cookieAlt_info2": {                             "en": "See e.g. <a href=\"https://www.gehrig.info/alexa/Alexa.html\" target=\"_blank\">here</a> how to get a cookie manually or try the proxy mode of the adapter! See Error message in log for proxy URL", "de": "Siehe z.B. <a href=\"https://www.gehrig.info/alexa/Alexa.html\" target=\"_blank\">here</a> wie ein Cookie manuellerstellt werden kann, oder den Proxy-Modus des Adapters versuchen. Die Proxy-URL wird in der Fehlermeldung angezeigt.", "ru": "См. <a href=\"https://www.gehrig.info/alexa/Alexa.html\" target=\"_blank\">здесь</a>, как получить файл cookie вручную или попробовать прокси-режим адаптера! См. Сообщение об ошибке в журнале для URL-адреса прокси-сервера", "pt": "Veja por exemplo <a href=\"https://www.gehrig.info/alexa/Alexa.html\" target=\"_blank\">aqui</a> como obter um cookie manualmente ou experimentar o modo proxy do adaptador! Consulte a mensagem de erro no log de URL do proxy", "nl": "Zie b.v. <a href=\"https://www.gehrig.info/alexa/Alexa.html\" target=\"_blank\">hier</a> hoe u een cookie handmatig kunt krijgen of probeer de proxy-modus van de adapter! Zie Foutbericht in logboek voor proxy-URL", "fr": "Voir par exemple <a href=\"https://www.gehrig.info/alexa/Alexa.html\" target=\"_blank\">ici</a> comment obtenir un cookie manuellement ou essayez le mode proxy de l'adaptateur! Voir le message d'erreur dans le journal pour l'URL du proxy", "it": "Vedi per es. <a href=\"https://www.gehrig.info/alexa/Alexa.html\" target=\"_blank\">qui</a> come ottenere manualmente un cookie o provare la modalità proxy dell'adattatore! Vedere Messaggio di errore nel registro per l'URL del proxy", "es": "Ver p. <a href=\"https://www.gehrig.info/alexa/Alexa.html\" target=\"_blank\"> aquí </a> cómo obtener una cookie manualmente o probar el modo proxy del adaptador. Consulte el mensaje de error en el registro para la URL del proxy", "pl": "Zobacz np. <a href=\"https://www.gehrig.info/alexa/Alexa.html\" target=\"_blank\">tutaj</a>, jak uzyskać ciasteczko ręcznie lub wypróbować tryb proxy adaptera! Zobacz komunikat o błędzie w dzienniku dla adresu URL proxy"},
    "cookieLoginUrl": {                              "en": "Custom Cookie-Amazon-URL",                        "de": "Eigene Cookie-Amazon-URL",                        "ru": "Пользовательский URL-адрес Cookie-Amazon",        "pt": "Cookie personalizado-Amazon-URL",                 "nl": "Aangepaste Cookie-Amazon-URL",                    "fr": "Cookie personnalisé-Amazon-URL",                  "it": "Cookie personalizzato-Amazon-URL",                "es": "Cookie personalizada-Amazon-URL",                 "pl": "Niestandardowy plik cookie-Amazon-URL"},
    "interval": {                                    "en": "Data update intervals",                           "de": "Datenaktualisierungsintervalle",                  "ru": "Интервалы обновления данных",                     "pt": "Intervalos de atualização de dados",              "nl": "Gegevens update-intervallen",                     "fr": "Intervalles de mise à jour",                      "it": "Intervalli di aggiornamento dei dati",            "es": "Intervalos de actualización de datos",            "pl": "Interwały aktualizacji danych"},
    "interval_info": {                               "en": "Several data can automatically be updated. You define here in seconds how often this should happen. Using the state history.#trigger you can always update the data manually. If you set 0 as interval the automatic update is disabled. ", "de": "Bestimmte Daten können automatisch aktualisiert werden. Wie oft dies passiert, wird hier in Sekunden ferstgelegt. Über den Datenunkt history.#trigger kann jederzeit manuell eine Aktualisierung angestossen werden. Die Angabe von 0 deaktiviert die automatischen Aktualisierungen.", "ru": "Несколько данных могут автоматически обновляться. Вы определяете здесь в секундах, как часто это должно произойти. Используя историю состояний. # Триггер, вы всегда можете обновлять данные вручную. Если вы установите 0 как интервал, автоматическое обновление отключено.", "pt": "Vários dados podem ser atualizados automaticamente. Você define aqui em segundos quantas vezes isso deve acontecer. Usando o histórico de estados. # Trigger, você sempre pode atualizar os dados manualmente. Se você definir 0 como intervalo, a atualização automática será desativada.", "nl": "Verschillende gegevens kunnen automatisch worden bijgewerkt. Je definieert hier in seconden hoe vaak dit moet gebeuren. Door de # trigger te gebruiken, kunt u de gegevens altijd handmatig bijwerken. Als u 0 instelt als interval, is de automatische update uitgeschakeld.", "fr": "Plusieurs données peuvent être automatiquement mises à jour. Vous définissez ici en secondes combien de fois cela devrait arriver. En utilisant l'historique d'état. # Trigger, vous pouvez toujours mettre à jour les données manuellement. Si vous définissez 0 comme intervalle, la mise à jour automatique est désactivée.", "it": "Diversi dati possono essere aggiornati automaticamente. Definisci qui in secondi quanto spesso ciò dovrebbe accadere. Utilizzando la cronologia dello stato. # Trigger puoi sempre aggiornare i dati manualmente. Se si imposta 0 come intervallo, l'aggiornamento automatico è disabilitato.", "es": "Varios datos se pueden actualizar automáticamente. Usted define aquí en segundos con qué frecuencia esto debería suceder. Con el disparador de historial de estado. #, Siempre puede actualizar los datos manualmente. Si configura 0 como intervalo, la actualización automática está deshabilitada.", "pl": "Kilka danych może być automatycznie aktualizowanych. Tutaj określasz w sekundach, jak często powinno to mieć miejsce. Korzystając z historii stanów. # Trigger zawsze możesz zaktualizować dane ręcznie. Jeśli ustawisz 0 jako interwał, aktualizacja automatyczna zostanie wyłączona."},
    "overwrite": {                                   "en": "Override special parameter for cookie determination and communication", "de": "Überschreiben spezieller Parameter zur Cookie-Ermittlung und Kommunikation", "ru": "Переопределить специальный параметр для определения и связи файлов cookie", "pt": "Substituir parâmetro especial para determinação e comunicação de cookies", "nl": "Speciale parameter voor cookie-bepaling en communicatie overschrijven", "fr": "Remplacer le paramètre spécial pour la détermination des cookies et la communication", "it": "Sostituisci i parametri speciali per la determinazione e la comunicazione dei cookie", "es": "Anula el parámetro especial para la determinación y comunicación de cookies", "pl": "Zastąp specjalny parametr do określania i komunikacji plików cookie"},
    "overwrite_info": {                              "en": "By default the parameters are set to connect with a german amazon account. If you are using other amazon countries you need to set the correct data here. Check in Adapter README for some details. Also in certain cases whwere the automatic cookie determindation is failing it can help to play around here especially with Accept-Language and user-agent.", "de": "Standardmäßig verbindet sich der Adapter mit einem deutschen Amazon-Konto. Bei der Nutzung von anderen Amazon-Ländern müssen hier die korrekten Daten eingetragen werden. Einige Hinweise dazu sind in der Adapter-README zu finden. Auch in speziellen Fällen, wenn die automatische Cookie-Ermittlung fehlschlägt, kann es helfen die Fehler user-Agent und Accept-Language anzupassen.", "ru": "По умолчанию для параметров установлено соединение с немецкой учетной записью amazon. Если вы используете другие страны амазонки, вам нужно установить правильные данные здесь. За дополнительной информацией обратитесь к адаптеру README. Также в некоторых случаях, когда автоматическая дефрагментация файлов cookie не работает, она может помочь здесь играть особенно с Accept-Language и user-agent.", "pt": "Por padrão, os parâmetros são configurados para se conectar a uma conta da Amazon na Alemanha. Se você estiver usando outros países amazônicos, precisará definir os dados corretos aqui. Verifique no Adaptador README para alguns detalhes. Também em certos casos, quando a determinação automática de cookies está falhando, pode ajudar a brincar aqui, especialmente com Accept-Language e user-agent.", "nl": "Standaard zijn de parameters ingesteld om verbinding te maken met een Duits Amazon-account. Als u andere Amazon-landen gebruikt, moet u hier de juiste gegevens instellen. Raadpleeg de README van de adapter voor meer informatie. Ook in bepaalde gevallen waar de automatische cookie-bepaling faalt, kan het helpen om hier te spelen, vooral met Accept-Language en user-agent.", "fr": "Par défaut, les paramètres sont définis pour se connecter avec un compte amazon allemand. Si vous utilisez d'autres pays amazon, vous devez définir les données correctes ici. Vérifiez l'adaptateur README pour plus de détails. Dans certains cas, lorsque la détermination automatique des cookies échoue, cela peut aider à jouer ici, en particulier avec Accept-Language et user-agent.", "it": "Di default i parametri sono impostati per connettersi con un account tedesco di Amazon. Se stai utilizzando altri paesi di Amazon, devi impostare qui i dati corretti. Controllare in Adapter README per alcuni dettagli. Inoltre, in alcuni casi in cui la determinazione automatica dei cookie non funziona, può aiutare a giocare qui, specialmente con Accept-Language e user-agent.", "es": "Por defecto, los parámetros están configurados para conectarse con una cuenta amazon alemana. Si está utilizando otros países amazónicos, debe establecer los datos correctos aquí. Verifique en el adaptador README para algunos detalles. También en algunos casos, la determinación automática de cookies está fallando, puede ayudar a jugar aquí especialmente con Accept-Language y User-Agent.", "pl": "Domyślnie parametry są ustawione na połączenie z niemieckim kontem Amazon. Jeśli korzystasz z innych krajów amazon, musisz ustawić poprawne dane tutaj. Sprawdź w pliku README na temat niektórych szczegółów. Również w niektórych przypadkach, gdy automatyczne określanie ciasteczek zawodzi, może pomóc w zabawie, szczególnie w Accept-Language i user-agent."},
    "password": {                                    "en": "password",                                        "de": "Passwort",                                        "ru": "пароль",                                          "pt": "senha",                                           "nl": "wachtwoord",                                      "fr": "mot de passe",                                    "it": "parola d'ordine",                                 "es": "contraseña",                                      "pl": "hasło"},
    "proxy": {                                       "en": "Proxy Settings",                                  "de": "Proxy-Einstellungen",                             "ru": "Настройки прокси",                                "pt": "Configurações de proxy",                          "nl": "Proxy instellingen",                              "fr": "Paramètres du proxy",                             "it": "Impostazioni proxy",                              "es": "Configuración de proxy",                          "pl": "Ustawienia proxy"},
    "proxyListenBind": {                             "en": "Proxy Binding to certain IP",                     "de": "Proxy-Beschränkung auf folgende IP (Listen Bind)", "ru": "Связывание прокси-сервера с определенным IP-адресом", "pt": "Ligação Proxy a determinados IPs",                "nl": "Proxy-binding aan bepaalde IP",                   "fr": "Liaison proxy à certaines adresses IP",           "it": "Collegamento a determinati indirizzi IP",         "es": "Enlazado Proxy a cierta IP",                      "pl": "Wiązanie proxy do określonego adresu IP"},
    "proxyOwnIp": {                                  "en": "Own IP or hostname to use in proxy link",         "de": "Eigene IP oder für den Proxy-Link",               "ru": "Собственный IP-адрес или имя хоста для использования в прокси-ссылке", "pt": "IP ou nome de host próprio para usar no link do proxy", "nl": "Eigen IP of hostnaam om te gebruiken in proxy-koppeling", "fr": "Propre IP ou nom d'hôte à utiliser dans un lien de proxy", "it": "Proprio IP o nome host da utilizzare nel collegamento proxy", "es": "IP propia o nombre de host para usar en el enlace proxy", "pl": "Własny adres IP lub nazwa hosta do użycia w łączu proxy"},
    "proxyPort": {                                   "en": "Proxy-Port",                                      "de": "Proxy-Port",                                      "ru": "Порт прокси",                                     "pt": "Porta proxy",                                     "nl": "Proxy-Port",                                      "fr": "Port proxy",                                      "it": "Porta proxy",                                     "es": "Puerto proxy",                                    "pl": "Port proxy"},
    "proxyPort_info": {                              "en": "(0 = random port)",                               "de": "(0 = zufälliger Port)",                           "ru": "(0 = случайный порт)",                            "pt": "(0 = porta aleatória)",                           "nl": "(0 = willekeurige poort)",                        "fr": "(0 = port aléatoire)",                            "it": "(0 = porta casuale)",                             "es": "(0 = puerto aleatorio)",                          "pl": "(0 = losowy port)"},
    "proxy_info": {                                  "en": "If the automatic determination of a cookie is not able the adapter opens a proxy to allow a manual login to amazon. The Logfile will tell you the URL to use then. Open this in your browser, manually login into Amazon, solve all potential Captchas or Two-Factor-Authentications and the cookie is catched in the background automatically if successfull.", "de": "Wenn die automatische Cookie-Ermittlung nicht funktioniert öffnet der Adapter einen Proxy um einen manuellen Login zu erleuben. Das Logfile nennt in dem Fall den aufzurufenden Link. Diese mit dem Browser aufrufen, bei Amazon einloggen, alle potentiell angezeigten Captachas und Zwei-Faktor-Abfragen beantworten und das Cookie wird bei Erfolg im Hintergrund automatisch erfasst.", "ru": "Если автоматическое определение файла cookie не позволяет адаптеру открыть прокси-сервер, чтобы разрешить вход в систему вручную для амазонки. Затем в файле журнала будет указан URL-адрес. Откройте это в своем браузере, вручную войдите в Amazon, разрешите все потенциальные Captchas или Two-Factor-Authentication, и cookie автоматически зацепится в фоновом режиме, если успешно.", "pt": "Se a determinação automática de um cookie não for capaz, o adaptador abre um proxy para permitir um login manual na amazon. O arquivo de registro irá dizer-lhe o URL para usar então. Abra isso no seu navegador, faça login manualmente na Amazon, resolva todos os Captchas ou Autenticações de dois fatores em potencial e o cookie será capturado em segundo plano automaticamente se for bem-sucedido.", "nl": "Als de automatische vaststelling van een cookie niet mogelijk is, opent de adapter een proxy om handmatig inloggen bij Amazon mogelijk te maken. Het logbestand geeft u de URL die u vervolgens moet gebruiken. Open dit in uw browser, log handmatig in bij Amazon, los alle mogelijke Captchas of Two-Factor-Authenticaties op en de cookie wordt automatisch in de achtergrond gevangen als het succesvol is.", "fr": "Si la détermination automatique d'un cookie n'est pas possible, l'adaptateur ouvre un proxy pour autoriser une connexion manuelle à amazon. Le fichier journal vous indiquera l'URL à utiliser ensuite. Ouvrez-le dans votre navigateur, connectez-vous manuellement à Amazon, résolvez tous les captcha potentiels ou les authentifications à deux facteurs et le cookie est automatiquement récupéré en arrière-plan en cas de succès.", "it": "Se la determinazione automatica di un cookie non è possibile, l'adattatore apre un proxy per consentire l'accesso manuale ad Amazon. Il file di registro ti indicherà l'URL da utilizzare in quel momento. Apri questo nel tuo browser, accedi manualmente ad Amazon, risolvi tutti i potenziali Captcha o Autenticazione a due fattori e il cookie viene automaticamente catturato in background in caso di successo.", "es": "Si la determinación automática de una cookie no puede, el adaptador abre un proxy para permitir un inicio de sesión manual en Amazon. El archivo de registro le dirá la URL que debe usar. Abra esto en su navegador, inicie sesión manualmente en Amazon, resuelva todas las posibles Captchas o Autenticaciones de dos factores y la cookie queda atrapada en segundo plano automáticamente si tiene éxito.", "pl": "Jeśli automatyczne określenie pliku cookie nie jest możliwe, adapter otwiera proxy, aby umożliwić ręczne logowanie do Amazon. Logfile wskaże ci adres URL, którego będziesz używał. Otwórz to w przeglądarce, ręcznie zaloguj się do Amazon, rozwiąż wszystkie potencjalne Captchas lub uwierzytelnienia dwuetapowe, a ciasteczko zostanie automatycznie przechwycone w tle, jeśli się powiedzie."},
    "s (0 = disabled)": {                            "en": "s (0 = disabled)",                                "de": "s (0 = deaktiviert)",                             "ru": "сек (0 = отключено)",                             "pt": "s (0 = desativado)",                              "nl": "s (0 = uitgeschakeld)",                           "fr": "s (0 = désactivé)",                               "it": "s (0 = disabilitato)",                            "es": "s (0 = deshabilitado)",                           "pl": "s (0 = wyłączone)"},
    "updateHistoryInterval": {                       "en": "History update interval",                         "de": "History Update Interval",                         "ru": "Интервал обновления истории",                     "pt": "Intervalo de atualização do histórico",           "nl": "Historisch update-interval",                      "fr": "Intervalle de mise à",                            "it": "Intervallo di aggiornamento della cronologia",    "es": "Intervalo de actualización de historial",         "pl": "Interwał aktualizacji historii"},
    "updateStateInterval": {                         "en": "Data update interval (player info ...)",          "de": "Daten-Update-Interval (Player-Info ...)",         "ru": "Интервал обновления данных (информация плеера ...)", "pt": "Intervalo de atualização de dados (informações do player ...)", "nl": "Gegevensbijwerkingsinterval (Player-Info ...)",   "fr": "Intervalle de mise à jour des données (Player-Info ...)", "it": "Intervallo di aggiornamento dei dati (Player-Info ...)", "es": "Intervalo de actualización de datos (Player-Info ...)", "pl": "Interwał aktualizacji danych (Player-Info ...)"},
    "userAgent": {                                   "en": "Custom User-Agent",                               "de": "Eigener User-Agent",                              "ru": "Пользовательский User-Agent",                     "pt": "Custom User-Agent",                               "nl": "Aangepaste User-Agent",                           "fr": "User-Agent personnalisé",                         "it": "User-Agent personalizzato",                       "es": "User-Agent personalizado",                        "pl": "Niestandardowy User-Agent"},
};