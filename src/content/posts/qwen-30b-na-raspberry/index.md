---
title: 'Qwen 30B na Raspberry Pi'
published: 2026-01-07 20:43
tags:
   - Qwen
   - Alibaba
   - RaspberryPi
---

ByteShape przygotował wersję modelu Qwen 30B, która da się uruchomić z urządzeń z tak małą ilością zasobów jak np Raspberry Pi 5. Model działa szybko (7 tokenów na sekundę), a jakość zwracanych wyników jest niemal identyczna jak pełnego modelu (94% zgodności nie pozwala w praktyce odróżnić jednego od drugiego).

Osiągnięto to nie dzięki okrojeniu modelu z samego rozmiaru, a przez kwatyzację, czyli zawężenie ilości bitów na parametr.

Na mnie robi to tak duże wrażenie, że aż chyba przetestuje jak to się na Raspberry sprawdza (i dam Wam znać). Pełny Qwen 30B działa normalnie w dwóch trybach: BF16 (half precision) który wymaga około 60GB ramu, lub FP32 (full precision) który z kolei zużywa około 120 GB ramu.

[Model dostepny jest tutaj](https://huggingface.co/byteshape/Qwen3-30B-A3B-Instruct-2507-GGUF) a szczegółowe informacje znajdziecie [na stronie ByteShape](https://byteshape.com/blogs/Qwen3-30B-A3B-Instruct-2507/)