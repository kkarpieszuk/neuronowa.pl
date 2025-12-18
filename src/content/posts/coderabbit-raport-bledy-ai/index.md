---
title: 'Raport: wygenerowany kod ma 1.7 razy więcej błędów'
published: 2025-12-18 17:20
tags:
   - coderabbit
   - code-generation
   - ai vs human
---

I do tego błędów zagrażających bezpieczeństwu jest o 50% więcej niż w kodzie stworzonym ręcznie.

Do takich wniosków [doszedł CodeRabbit](https://www.coderabbit.ai/blog/state-of-ai-vs-human-code-generation-report) po przeanalizowaniu wyników swojego narzędzia. CodeRabbit to automatyczny (a jakże: używający AI) _code reviewer_, który podpina się pod repozytorium Github i wtedy automatycznie sprawdza wszystkie PR wyszukując potencjalne błędy.

Autorzy przeanalizowali teraz wyniki działania swojego narzędzia. Po porównaniu ilości znalezionych przez CodeRabbit błędów w kodzie wygenerowanym przez sztuczną inteligencję, a w kodzie napisanym przez człowieka, wyszło im, że to jednak ludzie nadal radzą sobie z pisaniem kodu lepiej niż AI.

Po odsianiu wartości skrajnych, stosując odchylenie standardowe, wyszło, że na każdy PR stworzony przez człowieka _króliczek_ potrafił znaleźć 12 błędów na PR w kodzie human-made, a w kodzie AI aż 26. Co więcej, błędów krytycznych zagrażających bezpieczeństwu aplikacji i ochronie danych, AI popełniało aż o prawie 50% więcej błędów niż człowiek.

Jakość kodu AI także pozostawia wiele do życzenia (ale to chyba wie każdy, kto był zmuszony do czytania takiego kodu).

Należy pamiętać, że analizy są na podstawie wyników z kolejnego narzędzia AI. Sam używałem CodeRabbit i wiem, że ma jako tako duży współczynnik false positive: wiele znalezionych przez niego błędów tak naprawdę błędami nie było. Przykładowo: niemal zawsze zgłasza problem braku sanityzacji danych wyjściowych, bo nie śledzi całej logiki jego wykonania. Jeśli filtrowanie danych odbywa się w innej części kodu, który nie jest widoczny w PR, _królik_ powie, że mamy tu błąd.