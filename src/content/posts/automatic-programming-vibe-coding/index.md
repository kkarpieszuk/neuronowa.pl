---
title: 'Programowanie automatyczne a vibe coding'
published: 2026-01-31 12:30
tags:
   - automatic
   - vibe coding
---

Trafiłem na ciekawy wpis o tym, czym się różni programowanie automatyczne od tzw. vibe codingu. Ukucie terminu vibe coding faktycznie zrobiło wiele złego dla ludzi programujących z użyciem sztucznej inteligencji jak i dla oprogramowania w ten sposób wytwarzanego.

Kojarzy się to bowiem z wydaniem polecenia sztucznej inteligencji i pójściem sobie na kawkę z oczekiwaniem, ze gdy wrócimy program będzie gotowy. Program gotowy zapewne będzie, ale jego jakość będzie co najwyżej "może być". Do jednorazowego użycia w sam raz, klient może też się nie zorientuje. Jednak jeśli program taki mamy utrzymywać lub dalej rozwijać - broń boże.

[Autor trafnie zauważa](https://antirez.com/news/159), że to w osobie, która wydaje polecenia sztucznej inteligencji leży największa odpowiedzialność za to, co powstanie. AI nigdy bowiem nie stworzy dla różnych osób programu o takiej samej jakości kodu, dokładnie takim samym wyglądzie interfejsu i takim samym "maintainability".

To od tego ja będzie wyglądać nasze polecenie - a raczej zestaw poleceń - zależy jaki będzie efekt końcowy. Jeśli podejdziemy to sprwy jak vibe coderzy z workflow jak wyżej ("ogólnie opisz oczekiwany efekt i oczekuj, że LLM zdziała cuda") nie jesteśmy programistami automatycznego programowania.

Programiści automatycznego programowania spędzają podobną ilość czasu na programowaniu jak programiści tradycyjni, przy czym nie piszą kodu, a poświęcają ogromną ilość czasu na tworzeniu odpowiedniego zapytania. Nie oczekują, że pierwszy wynik działania AI to będzie dzieło idealne. Wręcz odwrotnie: po otrzymaniu wyniku dedykują dużą część czasu by znaleźć niedoskonałości, bo więdzą, że one tam są. I wydają kolejne polecenia by wynik poprawić, potem poprawić jeszcze raz, zadbać o _maintainability_ tworząc testy (które faktycznie testują).

Jeśli doświadczasz w pracy _prompt fatique_ najprawdopodobniej jesteś już po tej lepszej stronie automatycznego programowania. Jeśli się mu poddajesz i odpuszczasz, nie rób tego.