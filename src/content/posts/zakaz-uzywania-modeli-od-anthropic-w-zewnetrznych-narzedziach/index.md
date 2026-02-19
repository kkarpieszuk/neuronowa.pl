---
title: 'Zakaz używania subskrybcyjnych kluczy od Anthropic w zewnętrznych narzędziach!'
published: 2026-02-19 07:28
tags:
   - zakaz
   - anthropic
   - claude
   - opus
   - sonnet
   - api
   - openclaw
---

No to jest naprawdę wielka zmiana. Anthropic do swojego regulaminu [wprowadził zapis](https://code.claude.com/docs/en/legal-and-compliance), że api keys z subskrybcji służące do dostępu do ich modeli Claude  takich jak Sonnet czy Opus mogę być wykorzystywane w Claude.ai i Claude Code. Nigdzie indziej - tylko w narzędziach stworzonych przez Anthropic.

Jeśli więc używasz OpenClaw, Chatbox, Cursor czy cokolwiek innego gdzie do używania musiałeś skopiować i wkleić klucz api od Antrhopic, robisz to nielegelanie. To też podważa w ogóle korzystanie z ich API: teoretycznie nie możesz sam wykonywać requestów do ich API z swojego programu czy skryptu. Co prawda pracownicy Anhtropic na [Twitterze](https://x.com/trq212/status/2024212380142752025) mówią, że dla własnych eksperymentów wciąż będzie można  używać API, ale to nie regulamin używania, a opinia pracowników, nie jest to prawnie wiążące.

No to trochę jakby koniec dostępności modeli Claude, a może nawet nie "trochę" a zwyczajnie koniec. **Przy czym trzeba pamiętać, że chodzi o tokeny z subskrybcji** - tych, które pozwalają na jednorazową opłatę za dostęp do dużej ilości tokenów (przy okazji uwaga: Anthropic nie ujawnia jaka to ilość). Klucze wygnerowane dla zapytań "per zużycie" (gdzie płacimy za faktyczne zużycie) wciąż można używać, ale jak wszyscy wiedzą, koszt w takim wypadku potrafi opróżnić niejeden portfel.

Na [HN](https://news.ycombinator.com/item?id=47069299) jest żywa dyskusja na ten temat i oczywście zadowolenia brak. Jasne są intencje Anthropic - pieniądze. Koszty pracy serwerów odpowiadających na zapytania są duże, subsydiowane cześciowo przez firmę, ale po to by przyciągać użytkowników do ich własnych narzędzi. Korzystanie z API w narzędziach zewnetrznych im się zwyczajnie nie opłaca.