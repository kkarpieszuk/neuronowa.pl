---
title: 'AI zabija Tailwind jako biznes'
published: 2026-01-07 22:11
tags:
   - ai
   - tailwind
   - ai fail
   - ai vs human
---

"Zostało nam 6 miesięcy życia" - podcast o takim tytule, [zamieścił na Twiterze](https://x.com/adamwathan/status/2008909182301282623) Adam Wathan, twórca frameworka CSS o nazwie TailWind. Ale wszystko zaczęło się już [dzień wcześniej na Githubie](https://github.com/tailwindlabs/tailwindcss.com/pull/2388), albo może wiele miesięcy wcześniej? Zapraszam do lektury.

Zacznijmy od Tailwinda. Tailwind CSS to framework do stylowania stron i ich komponentów za pomocą gotowych klas, bardzo popularny wśród twórców WWW. Z jego użyciem nie trzeba ręcznie opisywać każdego elementu na stronie jak ma wyglądać, ile pikseli ma mieć szerokości, jak daleko ma być od innego elementu, jakie ma mieć kolory, czcionki, zaokrąglenia. Tyle na start wystarczy. Dodam jeszcze, ze Tailwind zdobył ogromną popularność między innymi temu, że jest za darmo, a autor zbudował na nim biznes oferując część gotowych komponentów odpłatnie.

Teraz ten biznes się wali i to do tego stopnia, że przychody stopniały o 90%, a by utrzymać rentowność Adam był zmuszony zwolnić 75% załogi, a reszta wciąż zatrudnionych musi koncentrować się na walce o przetrwanie. Niestety firma nie widzi przyszłości przed sobą i tak jak powiedział twórca w podcaście, podejrzewa, że za pół roku nic już nie zostanie.

Co ciekawe, to wszystko dzieje się przy ogromnym wzroście popularności samego frameworka wynikającego głównie z... popularności AI. Jak jest możliwy ten paradoks?

Gdy teraz pytasz dowolny model LLM o pomoc przy budowie strony, najprawdopodobniej wygeneruje ci on kod używający właśnie Tailwind do stylowania. Ba: jeśli nie chcesz by było to oparte o Tailwind, musisz wręcz model poprosić by go nie używał. LLM uważa Tailwind za popularny (właściwie standard), więc go używa, a więc Tailwind staje się jeszcze popularniejszy.

Tylko, że biznes model firmy stojącej za Tailwind opierał się na dwóch rzeczach, które LLMy wycięły:

Po pierwsze, aby poznać Tailwind ludzie "przed AI" odwiedzali jego stronę i czytali dokumentację. Dokumentacja stanowiła także sposób na poinformowania ich o istnieniu płatnych komponentów. Dzięki temu, że teraz ludzie kod Tailwind generują automatycznie, ruch na stronach dokumentacji umarł. Nikt nowy więc nie dowiaduje się o istnieniu płatnych dodatków.

Po drugie płatne dodatki nie są już potrzebne. Nikt nawet się za nimi nie rozgląda. Teraz przecież wystarczy zapytać LLM i taki dodatek - kiedyś płatny - od razu wygeneruje.

Wspomniany wpis na Githubie zaczął się od dość niewinnej prośby by do dokumentacji Tailwinda dodać endpoint llms.txt tak by sztuczna inteligencja jeszcze łatwiej tę dokumentację czytała i rozumiała. Wy już wiecie po przeczytaniu powyższego jak bardzo nie na miejscu była jego prośba :) Ale pytający przecież nie wiedział w jakich tarapatach jest Tailwind. W wątku odezwał się Adam Wathan i z dużą dozą taktu ale też goryczy wyjaśnił, że takie działanie to jak gwóźdź do trumny dla jego firmy. Ale też gwóźdź który jest już niepotrzebny, bo wieko zostanie zabite tak czy inaczej za jakieś pół roku.

Historię powyżej miejmy na rozwadze przy całym zachwycie nad AI. To nie pierwszy biznes który umarł i nie pierwszy który umrze z powodu kradzieży ruchu i treści przez wszelkiej maści agenty i czaty AI.

