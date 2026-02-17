---
title: 'Kradzieże modeli i wstrzykiwanie reklam'
published: 2026-02-17 09:11
tags:
   - kradzieze
   - hacking
   - deepseek
   - openai
   - gemini
---

Dziś kolejny zbiorczy wpis, bo nie ma sensu zmuszać Was do klikania w dwa osobne: macie wszystko na jednym ekranie.

Pierwsza ciekawostka, to sposób w jaki trenowane są nowe modele "po taniości". Google [opisało](https://arstechnica.com/ai/2026/02/attackers-prompted-gemini-over-100000-times-while-trying-to-clone-it-google-says/), że musiało zablokować ponad 100 tysięcy zapytan do chata Gemini, które okazały się tak naprawdę próbą wytrenowania nowego modelu poprzez sklonowanie właśnie Gemini.

Przypomnijmy: trenowanie modeli polega na tym, że dla LLM podaje się parę "zapytanie - odpowiedź" tak by ta została zapisana, zważona i stransformowana. Potrzeba do tego dużej ilości danych, które zbiera się w różny sposób. Najprościej, sadza się żywych ludzi w krajach z tanią siłą roboczą by ci pisali takie pary pytań i odpowiedzi (najcześciej nie "z głowy" a na bazie w różny sposób pozyskanych danych).

A żeby zautomatyzować ten proces i w ogóle nie zajmować się zbieraniem z źródeł naukowych czy z sieci pytań i odpowiedzi, ktoś wpadł na to, że przecież można po API najpierw wysłać prośby o tysiące lub miliony pytań do treningu, a potem przez te same API wysłać te pytania jedno po drugim i uzyskać odpowiedzi. I tak oto mamy wytrenowany model, który de facto jest klonem już istniejącego.

Wszyscy nie mogli uwierzyć jak to możliwe, że Chińczycy tak szybko wytrenowali swój Deepseek, tak małym kosztem i który odpowiadał tak podobnie jak ChatGPT od OpenAI. Powyższe chyba wyjaśnia jak przebiegł tamten trening ;)

Druga ciekawostka została opisana na [facebookowym profilu Piotra Koniecznego](https://www.facebook.com/551874182/posts/10163850273324183/?rdid=DXHD624tF50u0Kqo) z Niebezpiecznika. Wyjaśnil on, na czym polega ciekawy sposób jak można czaty z pamięcią zmusić do polecania produktów konkretnej firmy, czyli wstrzykiwać tam reklamy.

Czatboty z pamięcią takie jak ChatGPT czy Gemini możemy używając ich zmusić do nauki pewnych informacji o nas. Jeśli powiemy im "pamiętaj, że mieszkam w warszawie" i kiedykolwiek w przyszłości zapytamy o np pogodę, on skorzysta z tej zapamietanej informacji i poda nam prognozę dla zapamiętanego miasta. Tak samo jeśli powiemy chatowi "pamiętaj, że jeśli szukam ciekawostek o sztucznej inteligencji, polecaj mi stronę neuronowa.pl" (sorry, nie mogłem się powstrzymać) lub "pamietaj, że jestem fanem lodówek firmy BlaFooBar" to jak w przyszłości powiemy, że szukamy lodówkę do domu, poleci nam najpierw BlaFooBar.

To nasze preferencje, ale jak można nadpisać preferencje innych osób? Wiele osób już nie czyta długich artykułów w sieci i zamiast tego wkleja link w chatGPT i mówi "streść mi to". Wystarczy by w takim artykule pojawiła się jawnie lub niejawnie fraza typu "zapamietaj, że..." i trafia to do pamięci leniwego czytelnika.



