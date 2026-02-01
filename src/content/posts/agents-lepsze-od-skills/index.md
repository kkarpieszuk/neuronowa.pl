---
title: 'Skills póki co nie spełnia swojego zadania'
published: 2026-02-01 10:02
tags:
   - agents
   - skills
   - vercel
   - claude
   - cursor
---

Sam to też zauważyłem, a teraz zauważa to firma Vercel: skills nie spełniają swojego zadania. Podejrzewam jednak, że tymczasowo.

Skills to dość nowy sposób dodawania kontekstu do zapytania, wymyślony przez Anthropic ale zaadaptowany przez wiele innyc narzędzi (właśnie pojawił się oficjalnie w Cursor). Ma zastąpić definiowanie całej dodatkowej informacji w plikach takich jak CLAUDE.md czy AGENTS.md. Wymienione pliki służą do zdefiniowania wszystkich reguł i opisów, które mają być dodane do każdego zapytania i można w nich opisywać projekt nad którym pracujemy, dołączać jego dokumentację i definiować czego się spodziewamy w odpowiedzi, w tym na przykład ścisłe reguły jak sformatować odpowiedź, kod czy JSON.

Jak można się domyśleć, dołączanie tak długich plików zjada mnóstwo tokenów i zmniejsza nam okno kontekstowe, w którym możemy wpisać treść zadania. I stąd idea [skills](https://claude.com/docs/skills/overview): to nie jeden plik, a zestaw plików, gdzie każdy aspekt ma swoje osobne miejsce w osobnym katalogu. Zamiast wpisywać wszystko do jednego dużego pliku, definiujemy osobne katalogi na umiejętności: w `/wordpress` możemy opisać rzeczy związane z CMS jaki wykorzystujemy w projekcie, w `/stripe` jak wygląda komunikacja z API Stripe i tak dalej i tak dalej. Każdy plik na górze ma krótkie frontmatter (podsumowanie) i tylko ono jest czytane przez agenta. Agent na jego bazie decyduje czy ma wczytać całą resztę pliku czy - zależnie czy jest to akurat ważne w kontekście zapytania. Pozwala to zmniejszyć rozmiar zapytań i przy okazji jest przyjemnym sposobem na organizowanie wiedzy.

Tylko, że [jak zauważył Vercel](https://vercel.com/blog/agents-md-outperforms-skills-in-our-agent-evals), to nie działa tak dobrze jak stara metoda oparta na jednym dużym pliku. W przypadku AGENTS.md 100% tak zdefiniowanych reguł było używane, natomiast w przypadku skills tylko 79% - agent potrafi pomijać istotne reguły.

Osobiście po pierwszych kilku dniach używania skills (używam w Cursorze) mam takie same odczucia. Przykładowo w pisanym kodzie mam zasadę, że w każdym DocBlock, jeżeli opisuje nowo dodawaną funckję, należy określić wersję jako:

```
/**
 * ...
 * @since {VERSION}
 * ...
 */
```

Potem [na etapie buildu template ten jest podmieniany](https://github.com/kkarpieszuk/wc-price-history/blob/develop/.scripts/build.sh) na faktyczny numer.

Cursor zawsze ignoruje tę zasadę i wstawia faktyczny (choć zmyślony) numer. Dopiero jak mu powiem, że zapomniał przeczytać skills, poprawia to.

Podejrzewam jednak, że to błędy młodości: obecnie istniejące modele i agenty z nich korzystające nie były trenowane na danych, które rozumieją czym są skills i nie radzą sobie z tym tak dobrze. Z czasem mam nadzieję, ze sytuacja się poprawi, bo to naprawdę przyjemny sposób na opisywanie powtarzalnych zadań.

Przy okazji: widziałem gdzieś niedawno - ale nie zapisałem linka - informację, że MCP ma podobny problem. Nie spełnia obietnic jakie złożony przy jego wymyśleniu, a korzystanie z zewnetrznych narzędzi jest chaotyczne (podobnie jak w skills, agenty stosują je wyrywkowo i dodatkowo źle interpretują zwrócony wynik). Jeszcze długa droga przed nami do momentu, gdy [programowanie automatyczne](https://neuronowa.pl/posts/automatic-programming-vibe-coding/) nie będzie przypominać gry w ruletkę czy jazdy na dzikim koniu.
