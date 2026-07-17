---
title: 'Porada: Jak wydajniej kodować w Cursorze w stałych projektach?'
published: 2026-07-17 09:27
tags:
   - porada
   - cursor
   - skills
   - autodiscovery
---

Wczoraj zajrzałem do statystyk mojego użycia Cursora i trochę mnie przeraziła ilość tokenów, jakie zużywam: [W ciągu miesiąca zużyłem ich siedemset pięćdziesiąt milionów](https://www.facebook.com/konrad.karpieszuk/posts/pfbid02NY5Ez5xHUoNGQMrtg1MVz1YuSjyFFxLGLNfaAEWEqV5dEjWajwW7FHUuESdfzCGJl). Co prawda w tej chwili właściwie za to nie płacę, ale przyjdzie taki dzień, w którym taka ilość tokenów będzie mnie kosztowała 4000 dolarów. Czas więc zastanowić się jak zmniejszyć zużycie.

Jednym ze sposobów, który używam już od jakiegoś czasu jest przepisanie `rules` i `skills`. I robię to w sposób automatyczny. Otwieram nowe okno rozmowy, przełączam na tryb Plan (bo wtedy Cursor myśli wydajniej i zbiera większą ilość informacji) i wpisuje ten prompt:

> Przeanalizuj ~30 ostatnich rozmów w tym projekcie. Znajdź stałe fakty, które agent wciąż rediscoveruje, i na ich podstawie zaktualizuj .cursor/rules oraz .cursor/skills, żeby kolejne sesje były szybsze i mniej powtarzalne.

Bo tak: Cursor ma dostęp do poprzednich rozmów, ale nie zagląda do nich, dopóki go o to nie poprosimy. A takie poproszenie jak wyżej pozwala na znalezienie rzeczy, jakie w kółko musi powtarzać przy nowych zadaniach. To nie tylko zmniejsza zużycie tokenów, ale przede wszystkim przyspiesza pracę nad projektem: nie musi już odkrywać tego, co zapisze sobie w skillsach i rules.

Wydajność tego polecenia jest naprawdę niesamowita: zobaczycie jak dużo oczywistych rzeczy AI-edytor musi w kółko odkrywać. Sam zauważy, które pliki najczęściej edytujecie i stworzy rules podpowiadający po co one są. Opisza dokładnie wszystkie składowe projektu (i tu jest chyba największa oszczędnośćna tokenach: zamiast w każdej kolejnej rozmowie wysyłać cały codebase do modelu, będzie czerpać wstępną o nim wiedzę z opisu, który sobie stworzy).

Tip dodatkowy: po wykonaniu powyższego prompta, wydajcie kolejny:

> Zapisz ten prompt, który wykonałeś powyżej, jako globalny command o nazwie rediscover-to-skills-and-prompts

Bo warto powtarzać to zadanie raz na jakiś czas.
