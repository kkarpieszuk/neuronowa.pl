#!/usr/bin/env node

import { createInterface } from 'node:readline';
import { writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join } from 'node:path';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question(query) {
  return new Promise((resolve) => {
    rl.question(query, resolve);
  });
}

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    // Zamień polskie znaki na ASCII (ł nie jest obsługiwane przez normalize)
    .replace(/ą/g, 'a')
    .replace(/ć/g, 'c')
    .replace(/ę/g, 'e')
    .replace(/ł/g, 'l')
    .replace(/ń/g, 'n')
    .replace(/ó/g, 'o')
    .replace(/ś/g, 's')
    .replace(/ź/g, 'z')
    .replace(/ż/g, 'z')
    // Usuń znaki diakrytyczne z innych języków
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    // Zamień spacje i podkreślenia na myślniki
    .replace(/[\s_]+/g, '-')
    // Usuń wszystkie znaki które nie są literami, cyframi lub myślnikami
    .replace(/[^a-z0-9-]/g, '')
    // Usuń wielokrotne myślniki
    .replace(/-+/g, '-')
    // Usuń myślniki na początku i końcu
    .replace(/^-+|-+$/g, '');
}

function getCurrentDateTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}`;
}

async function createDraft() {
  try {
    const slugInput = await question('Podaj slug dla nowego draftu: ');

    if (!slugInput || slugInput.trim() === '') {
      console.error('Slug nie może być pusty!');
      process.exit(1);
    }

    const slugTrimmed = slugify(slugInput.trim());

    if (!slugTrimmed) {
      console.error('Nie udało się utworzyć poprawnego sluga!');
      process.exit(1);
    }

    const postsDir = join(process.cwd(), 'src', 'content', 'posts');
    const draftDir = join(postsDir, slugTrimmed);
    const draftFile = join(draftDir, 'index.md');

    // Sprawdź czy katalog już istnieje
    if (existsSync(draftDir)) {
      console.error(`Katalog ${slugTrimmed} już istnieje!`);
      process.exit(1);
    }

    // Utwórz katalog
    await mkdir(draftDir, { recursive: true });

    // Utwórz zawartość pliku
    const content = `---
title: ''
published: ${getCurrentDateTime()}
tags:
   -
---

`;

    // Zapisz plik
    await writeFile(draftFile, content, 'utf-8');

    console.log(`✓ Utworzono draft: ${slugTrimmed}`);
    console.log(`\n📄 ${slugTrimmed}/index.md`);
  } catch (error) {
    console.error('Błąd podczas tworzenia draftu:', error);
    process.exit(1);
  } finally {
    rl.close();
  }
}

createDraft();

