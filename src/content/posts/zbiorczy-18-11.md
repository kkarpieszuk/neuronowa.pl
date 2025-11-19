---
title: "Co w AI piszczy: Uciekanie z autocenzury AI i łapanie w cenzurę, gpt-5.1 w API"
draft: false
published: 2025-11-18
tags:
  - OpenAI
  - "#heretic"
  - chatgpt
  - "#ai-fail"
---

## Usuwanie cenzury w AI za pomocą Heretic

Większość modeli językowych ma wbudowane zasady ograniczające ich użycie: nie możesz np. zapytać o treści dla dorosłych lub o rzeczy, które mogą zagrażać zdrowiu twojemu lub kogokolwiek innego.

Jeśli model zbudawany jest za pomocą transformera i uruchamiasz go sam, możesz zdjąć te ograniczenia na wiele sposobów. Jednym z nich jest [biblioteka Heretic](https://github.com/p-e-w/heretic) dostępna na Githubie. Jeśli jesteś zainteresowany innymi rozwiązaniami, na dole opisu znajdziesz listę podobnych narzędzi.

## Zabawka bez cenzury ocenzurowana

Skoro już mówimy o cenzurowaniu: okazało się, że producent misia nazwanego Kumma, misia, który ma wbudowane rozmawianie z nim za pomocą ChataGPT, sam zapomniał odpowiednio ocenzurować odpowiedzi. Miś doradzał dzieciom jak bawić się zapałkami, jak znaleźć ostre przedmioty i inne, nawet bardziej niebezpieczne porady. OpenAI odcięło FoloToy - producenta - od dostępu do GPT przez API. Misie chwilowo zamilkły.

[Źródło](https://mashable.com/article/chatgpt-teddy-bear-canceled) 

## GPT model 5.1 jest już dostępny w API

OpenAI poinformował, że model `gpt-5.1` [jest już dostępny](https://platform.openai.com/docs/guides/latest-model) w OpenAI API, a nie tylko na stronie ChatGPT. Można go użyć w trzech wersjach:

- `gpt-5.1` do codziennych, ogólnych zadań
- `gpt-5.1-codex` do złożonych zadań, wymagających więcej czasu na wykonanie
- `gpt-5.1-codex-mini` do edycji i zmian wartości, model ten jest tańszy od powyższych

Ogólnie ceny modeli w wersji 5.1 są takie same jak 5.0
