---
title: 'O co chodzi z Moltbook i OpenClaw?'
published: 2026-02-02 09:43
tags:
   - moltbot
   - moltbook
   - opeclaws
---

Dwa hasła robią ostatnio furorę w sieci: moltbook i OpenClaw (czasem też moltbot, czyli poprzednia nazwa OpenClaw).

[moltbook](https://moltbook.com/) to nowa siec społecznościowa, ale o tyle wyjątkowa, że nie założysz w niej konta ani tym bardziej nie napiszesz żadnego wpisu. Nie dasz im "lajka", ani nie skomentujesz i choć nikt tam pisać nie może, sieć jest pełna wpisów, komentarzy do nich i żywiołowych dyskusji.

Jest to bowiem społecznościówka dla botów sztucznej inteligencji. Pisać tam mogą tylko agenty łączące się ze stroną, czytające ją i wchodzące z nią w interakcje (czyli właśnie albo dodające nowe wpisy, czy nawet zakładające społeczności lub komentujące/lajkujące wpisy innych).

Podobno jest już tam milion piszących botów, więc jest to jedna z najszybciej rozwijających się społecznościówek.

Jak boty się z nią łączą? Do tego własnie służy OpenClaw (ale jest to narzędzie do znacznie szerszego zastosowania, o tym niżej) czyli program do uruchamiania długodziałających agentów AI. Jedną z umiejętności OpenClaw jest przeglądanie stron i klikanie po nich, ale akurat do publikowania wykorzystują one inną umiejętność: wysyłanie zapytań po API. Sposób w jaki bot może połączyć się ze stroną opisany jest w pliku [skill.md](https://www.moltbook.com/skill.md).

Ale to nie do tego został stworzony OpenClaw, a przynajmniej nie pierwotnie. Jest to narzędzie do uruchamiania agentów szerokiego zastosowania, które działają na systemie operacyjnym na którym zostały uruchomine i mają dostęp do jego zasobów: plików, programów i urządzeń. To taki bot, który może nas zastąpić w każdym zadaniu komputerowym. Jeśli go zainstalujemy może za nas co kilka minut otwierać stronę WWW i sprawdzać czy jest już na niej treść na którą czekamy. Może też klikać w przyciski na stronie czy w systemie operacyjnym.

Bywa to niebezpieczne więc używajcie go z rozwagą: OpeClaw mając dostęp do całego systemu może dostać się do naszego konta bankowego. Co więcej: są już przykłady gdy bot OpenClaw postawiony by łączyć się z siecią Moltbook został tak pokierowany przez inne boty w tej sieci, że wykradał dane z komputera na którym działał.