---
title: 'Claude Opus  4.5 i Advanced Tool Use'
published: 2025-11-25 07:39
tags:
   - anthropic
   - claude
   - opus
   - mcp
   - ai tools
---

## Opus 4.5

Od wczoraj dostępny jest nowy [model Claude Opus 4.5](https://www.anthropic.com/news/claude-opus-4-5): znajdziecie go jeśli korzystacie z pakietów Pro od Anthropic lub poprzez Api. Także na przykład Cursor już ma ten model dostępny (płatny osobno).

Najważniejsza jest wydajność, a ta według twórców i przedstawionych benchmarków przewyższa na te chwile wszystkie inne modele, także konkurencji.

Także niezależne serwisy [wyrażają zachwyt i wieszczą koniec ręcznego programowania](https://every.to/vibe-check/vibe-check-opus-4-5-is-the-coding-model-we-ve-been-waiting-for): o ile wcześniej nawet z najlepszymi modelami było tak, że zaprogramowanie wstępnej wersji programu, nawet w pełni działającej było już oczywiste i łatwe do zrobienia, to gdy chcieliśmy rozwijać taki program dalej, narastała w nim ilość błędów i zamiast rozwiązywać je, AI dokładna kolejne i kolejne. Tu podobno nie ma już tego problemu: Opus 4.5 radzi sobie nie tylko ze stworzeniem programu przez vibe coding, ale i jego utrzymaniem.

Inną ważną kwestią jest koszt: 5 dolarów za milion tokenów wejściowych i 25 dolarów za  milion wyjściowych to spadek trzykrotny w porównaniu z poprzednią wersją Opusa.

Jeśli mogę skomentować, to na uwagę w benchmarkach zasługuje fakt, że o ile ogólnie nastąpiła poprawa w programowaniu, to na przykład w przypadku języka PHP model zachowuje się nieco gorzej od Sonnet 4.5. I trzeba też pamiętać, że Antrhopic znany jest (a przynajmniej podejrzewany) o _nerfienie_ swoich modeli: w pierwszych tygodniach po premierze modele są rewelacyjne ale później odczucia uzytkowników sa takie, że ich wydajność i skuteczność spada. Zatem jak testować to teraz.

## Advanced Tool Use

Inną rzeczą, którą Anthropic się wczoraj pochwaliło jest ATU - coś z czego skorzystają osoby wdrażające AI poprzez API, szczególnie jeśli używają zewnętrznychn narzędzi poprzez protokół MCP, [o którym nieco pisałem wczoraj](https://neuronowa.pl/posts/mcp-apps/).

Teraz jest tak, że podłączając jakieś narzędzie do AI poprzez MCP zajmuje ono spory fragment okna kontekstowego. Przy każdym zapytaniu wysyłanym do AI, po wysłaniu system prompt, a przed wysłaniem faktycznego pytania od użytkownika, wysyłana jest informacja o dostepnych narzędziach i zajmuje ona bardzo dużo tokenów. Każdy serwis dostępny przez MCP wysyła swój opis do AI, co umie, jakie ma narzędzia, co każde narzędzie robi... To jest nawet 26 tys tokenów jeśli chcemy by AI używało Githuba przez MCP czy 17 tys tokenów gdy chcemy by model miał dostęp do naszych zadań na Jira.

Od teraz tak nie będzie. [Advanced Tool Use](https://www.anthropic.com/engineering/advanced-tool-use) pozwala na dynamiczne wyszukiwanie narzędzi. Tylko podstawowe informacje z MCP jest wysyłane do modelu, a cała reszta opisu opóźniana (deferred): AI od Claude za pomocą wyrażeń regularnych sprawdzi które z narzędzi przyda się do konkretnego zadania i pobierze opis tylko adekwatnych (i potem je użyje).

Nie jest to bezkosztowe: odpowiedź do użytkownika przyjdzie w takim wypadku opóźniona o czas na przeszukiwanie, zatem trzeba wyważyć czy wolimy wysłać informacje od razu (bo mamy mało narzędzi MCP i są one dokładnie dopasowane do zadania) czy pozwolić modelowi by sam wyszukał odpowiedniego spośród tych, które udostepniliśmy.