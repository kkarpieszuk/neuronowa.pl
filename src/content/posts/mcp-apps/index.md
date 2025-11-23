---
title: 'MCP dostaje wygląd: Specyfikacja MCP Apps'
published: 2025-11-23 15:03
tags:
   - mcp
   - model context protocol
   - ui
   - openai
   - anthropic
---

MCP czyli Model Context Protocol są już z nami już od dłuższego czasu, ale właśnie następuje spore rozszerzenie ich właściwości i umiejętności: dostają twarz. Zapropnował to już jakiś czas temu OpenAI, ale  [teraz w ramach wspólnego konsorcjum z konkurentem Anthropic postanowiono to ustandardyzować](https://blog.modelcontextprotocol.io/posts/2025-11-21-mcp-apps/).

MCP to sposób na odpytywanie zewnętrznych narzędzi bezpośrednio przez agentów AI. Gdy my jako ludzie pytamy AI o to ja jaka jest pogoda, AI poprzez protoków MCP łączy się z zewnętrzną usługą dostarczającą prognozy pogody, sprawdza pogodę i wyświetla nam w jakiś sposób tę informację.

Do tej pory komunikacja przez MCP opierała się na tekście: odpowiedź z prognozą przychodziła do AI w postaci albo czystego tekstu albo - co jest częstsze - w postaci ustrukturyzowanej np jako JSON:

```
{
   'city': 'Sokółka',
   'temperature': '12',
   'rain': '0%',
   ...
}
```

I po odebraniu takiej odpowiedzi Agent AI był odpowiedzialny za przedstawienie jej nam w postaci czytelnej dla człowieka, albo jako tekstowa odpowiedź:

> Dziś w Sokółce będzie 12 stopni i brak deszczu

Albo w jakiejś postaci graficznej, np widgetu pogodowego ze słoneczkiem, kroplami deszczu itp.

Od teraz serwery MCP będą mogłby zwracać także zasoby `ui://...` będące linkami do wizualnej reprezentacji odpowiedzi. Pod takim URLem na razie kryć się będzie odpowiedź w postaci HTML, w przyszłości przewidziane są inne formaty.

Zatem agent AI nie będzie musiał się głowić jak graficznie przedstawić odpowiedź o temperaturze, znalezione oferty wycieczek czy odkurzaczy w sklepie: serwer MCP od razu odpowie ładnym interfejsem, który zostanie osadzony w treści odpowiedzi czata, którego używamy.

Co więcej taki interfejs będzie inteaktywny. Będzie więc można bezpośrednio z niego dokonać zamówienia wybranego odkurzacza i opłacić go bez opuszczania czatu. Wszystko będzie sandboksowane a więc czat nie dowie się nic odnośnie składanego zamówienia czy danych naszej karty płatniczej.

Tłumacząc w sposób jeszcze prostszy (ELI5): odpowiedzi MCP to będą takie mini- strony WWW przy czym pełnoprawne, osadzone w starym dobrym `<iframe>`.

Jeśli jesteś webamsterem i obawiałeś się schyłku WWW w czasach czatów AI, to wizja ta się nieco oddala i sugeruję zagłebienie się w ten temat, bo oto właśnie otwiera się nowa nisza.

