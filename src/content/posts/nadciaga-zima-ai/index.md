---
title: 'Nadciąga zima AI? Raczej stagnacja'
published: 2025-12-02 12:04
tags:
   - zima
   - llm

---
[Prawo nagłówków Betteridge'a](https://pl.wikipedia.org/wiki/Prawo_nag%C5%82%C3%B3wk%C3%B3w_Betteridge%E2%80%99a) mówi, że jak jest pytanie w  tytule artykułu, to odpowiedź niemal zawsze brzmi "nie" i można nie czytać treści. No więc: autor [tego wpisu twierdzi, że odpowiedź brzmi "tak"](https://taranis.ie/llms-are-a-failure-a-new-ai-winter-is-coming/), ja jednak jestem sceptyczny, ale coś jest na rzeczy.

"Zimą AI" nazywa się okres rezygnacji po wstępnym _hype_ odnośnie rozwoju AI. Przeżyliśmy już dwie takie zimy (w tym pierwszą w latach 70tych XX wieku, bo może niektórych to zaskoczy, ale prace nad sztuczną inteligencją zaczęły się naprawdę dawno temu). Po wstępnie obiecujących efektach algorytmy dochodzą do ściany i okazuje się, że nie potrafią tak wiele, jak sobie obiecywaliśmy.

Następuje wtedy odwrót biznesu od AI, a prace nad nią wracają do uniwersyteckich laboratoriów. Media milkną, nikt w sztuczną inteligencję nie inwestuje przepompowanych kwot, a wspomnienie, że modele językowe to nasz zawód czy hobby budzą uśmieszek i komentarze, że osiągnięcie czegoś więcej w tej kwestii jest niemożliwe.

Aż do momentu gdy jednak okazuje się, że mamy postęp, AI zaczyna się zachowywać tak, że szczęka opada i znów staje się to tematem wartym inwestycji czasu i pieniędzy. Tak jak to się stało kilka lat temu, po drugiej zimie rozpoczętej gdzieś na poczatku XXI wieku. Prawdziwa wiosna AI.

Autor artykułu powyżej uważa, że wiosna, która teraz trwa zaraz się skończy i znów wpadniemy w okres zimy.

Nie jest na pewno tak, że nic nie jest na rzeczy. Im bardziej poznajemy czym LLM są, a już szczególnie im lepiej rozumieją to inwestorzy w kolejnych startupach, tym łatwiej pojąć, że prędzej czy później rozwój trafi na ścianę. [Wspominałem o tym nieco](https://neuronowa.pl/posts/zbiorczy-17-11/#po-modelach-j%C4%99zykowych-przyjdzie-era-modeli-%C5%9Bwiata) gdy pisałem o Modelach Świata.

LLM jak sama nazwa wskazuje to modele językowe. To bardzo zaawansowane generatory tekstu, tak zaawansowane, że sprawiają wrażenie inteligentnych, ale inteligencji tu nie ma żadnej. Po prostu zwracają słowo po słowie (a raczej token po tokenie) coś, co statystycznie jest najbardziej sensowne, jeśli się spojrzy na już wyświetlony czy otrzymany tekst.

Jeśli powiem "raz, dwa" i będę oczekiwał od ciebie byś dokończył, najpewniej dopowiesz "trzy". Jeśli zacznę "litwo, ojczyzno", powiesz "moja". I nie zrobisz tego, bo jesteś nad wyraz inteligentny, a dlatego, że *tak się mówi*. Statystycznie najczęściej po dwóch słowach, jakie wymieniłem w tekstach mówionych czy pisanych pojawia się te trzecie.

Przykłady, które podałem są niesamowicie proste, ale na tym właśnie polega wytrenowanie i algorytm modeli językowych. Zapamiętywane ciągi są coraz dłuższe, coraz dłuższe i tak naprawdę wewnątrz modelu nie są ciągami, a macierzą, siecią powiązanych słów z wektorami wskazującymi które słowa często występują obok siebie, a które rzadziej. Ale też które grupy słów, dzięki czemu AI wie gdzie podążać dalej ze swoją odpowiedzią. Gdy zadajemy czatowi pytanie, układa on nasze słowa (tokeny) w ciąg wektorowych odniesień i na bazie takiego dłuższego już łańcuszka statystycznie odgaduje jakim słowem odpowiedzieć najpierw, zbiera wtedy znów wszystko (nasze pytanie + 1 słowo odpowiedzi) w kolejny ciąg wektorowy i patrzy jakie słowo będzie teraz pasować do odpowiedzi jako drugie. I tak dalej, i tak dalej.

Tak działały pierwsze modele językowe, które rozwinęliśmy przez najpierw dołożenie "pamięci" i mocy obliczeniowej do komputerów (owe miliardy parametrów każdego modelu muszą gdzieś być przetwarzane), a potem przez różne sposoby walki z halucynacjami.

Halucynacje, to zbłądzenie modelu w poszukiwaniu kolejnych słów. Model wybiera kolejne słowo nieco "na chybił trafił" spośród tych statystycznie najlepiej pasujących. Widać to na przykład gdy zapytamy czat kilka razy "opowiedź mi dowcip": za każdym razem będzie to dowcip nieco inny. Przy tym wybieraniu na chybił trafił, zdarza się, że model pójdzie w bardzo złym kierunku i zacznie mówić głupoty.

No więc twórcy modeli dokładają różne sposoby na unikanie złych odpowiedzi: upraszczają ciągi słów by były bardziej trzymające się tematu, dokładają agenturalne rozwiązania by automatycznie zweryfikować rezultat i odpowiedzieć modelowi "twoja odpowiedź jest nieprawidłowa" i wtedy on próbuje jeszcze raz.

To poprawi odpowiedzi, ale nie przeskakuje dwóch problemów. Pierwszy to fakt, że halucynacje będą się zdarzać i trzeba dokładać coraz więcej wysiłków, by ich unikać. Szczególnie, że coraz bardziej przypominające ludzki inteligencję modele aż za często przekonują nas swoim zaawansowaniem, że to co mówią, to musi być prawda. Nie weryfikujemy odpowiedzi, bo przecież gdy zapytaliśmy ChatGPT o przepis na sałatkę i odpowiedź zwalała z nóg, to czy pomyliłby się też, w kwestiach, na których się nie znamy? Jeśli nam powiedział, że to co nas boli to zapewne nic niebezpiecznego i okład z lodu pomoże i użyje w odpowiedzi fachowych terminów medycznych dla określenia mięśni jakie mamy w tym miejscu, będziemy to sprawdzać? Czy w ogóle wiemy jak to sprawdzić?

Druga kwestia ograniczenia leksykalne: modele językowe jak to już wyżej wyjaśniłem bazują na słowie pisanym. Mogę "zrozumieć" (nauczyć się) tylko tego co zostało kiedykolwiek spisane i odpowiedzieć nam tylko w sposób, który można wyrazić słowami. Nawet jeśli coś nie było opisane, jak na przykład jak ma się zachować autonomicznie jadący samochód, to douczamy takie modele używając ludzkiego języka.

Może się wydawać, że język nie jest tu ograniczeniem, ale umyka nam jak wiele rzeczy jest niewyrażalnych słowami, lub opis słowny nie wpełni oddaje złożoność problemu. Obecne LLM nie rozumieją na przykład pojęcia czasu: co prawda odpowiedzą nam jak je o to zapytamy ale nie potrafią stosować konceptu czasu do bardziej dogłębnych analiz i używać go abstrakcyjnie. Nie umieją wywnioskować jak się zmieni cena akcji nawet jeśli nakarmimy je ogromną ilością danych o cenach historycznych. Na bazie takiej swojej analizy, bardzo przekonywująco nam powiedzą by dany walor kupić lub sprzedać ale taka rekomendacja jak pokazują eksperymenty nie jest lepsza od rzutu kością.

Ba: modele językowe nawet nie rozumieją czym jest słowo, bo operują na tokenach. Zbitkach znaków, które nie do końca są słowami. Rozumieją czy jest słowo "drzewo" i wytłumaczą nam je z różnych kontekstach, bo mają do tego grafy w swojej wektorowej sieci, znajdujące konotację tokenu "drzewo" z innymi tokenami, a to odpowiadającymi za wyświetlenie słowa "roślina". Ale nie potrafią rozbić takiego słowa na litery.

Oczywiście teraz możecie sprawdzić i poprosić Claude czy inny czat o przeliterowanie słowa drzewo i zapewne dostaniecie poprawną odpowiedź, ale model akurat tej odpowiedzi nie weźmie ze swojej bazy wiedzy, a uruchomi w tle mini program w pythonie, który rozbije string "drzewo" na litery i zwróci nam odpowiedź.

A może już ten wpis jest nieaktualny bo douczono modele literowania, sylabizowania itp. AI się ciągle zmienia, jednak nie zmieni to faktu, że ściana istnieje. Odsuwamy ją co miesiąc i tydzień coraz dalej ale odsuwanie to jest coraz wolniejsze.

Czy to jednak zwiastuje kolejną zimę? Tu jestem pewien, że nie. To będzie stagnacja dla biznesu, ale dla użytkowników przecież to wszystko co już jest nie zniknie. Modele już zmieniły to jak wygląda nasze codzienne życie, i to wszystko nigdzie sobie nie pójdzie. To co teraz robimy z AI będziemy nadal robić.

Jedynie zmieni się biznes patrzący na AI jak na nowy rynek. Wpompowano już w to ogromne pieniądze i coraz cześciej widać, że to się niekoniecznie zwróci. Stąd [OpenAI](https://neuronowa.pl/posts/reklamy-w-chatgpt) i [Google](https://neuronowa.pl/posts/zbiorczy-23-11) ma zamiar wyświetlać nam w odpowiedziach reklamy, bo z samego serwowania modeli na ogromnie drogich superkomputerach nie ma co liczyć, że to się opłaci przy tak niskich kosztach subskrybcji czy cennikach dostępu do API.

Startupy z kolejnymi pomysłami jak wykorzystać AI będą pojawiać się wolniej jeśli w ogóle: można się spodziewać, że im bliżej będziemy muru możliwości LLM, tym predzej twórcy modeli będą podnosić opłaty za dostęp do nich. A więc czy na pewno kolejny fajny klasyfikator czy analizator z wykorzystaniem AI na pewno ktoś będzie od startupu chciał kupić w takiej cenie, by to startupowi się opłacało?

Rynek się uspokoi bo zniknie z niego bańka. Wciąż jednak rynek ten jest pusty jeśli pomyślimy i popycie: wokół nas są tysiące firm, w których z pomocą AI można zautomatyzować niektóre procesy, tak by niewielkim stosunkowo kosztem zaoszczędzić w miejscach gdzie "kasa wycieka". Małymi krokami AI pojawi się w tych miejscach i to jest według mnie scenariusz na przyszłe lata: spokojny rozwój obecnych modeli / zniknięcie startupowego szaleństwa / rozsądne integracje tam gdzie to faktycznie pomoże.

Aż do kolejnego ogromnego przełomu.