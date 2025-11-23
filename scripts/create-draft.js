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
    const slug = await question('Podaj slug dla nowego draftu: ');

    if (!slug || slug.trim() === '') {
      console.error('Slug nie może być pusty!');
      process.exit(1);
    }

    const slugTrimmed = slug.trim();
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

    console.log(`✓ Utworzono draft: ${draftFile}`);
    console.log(`  Katalog: ${draftDir}`);
  } catch (error) {
    console.error('Błąd podczas tworzenia draftu:', error);
    process.exit(1);
  } finally {
    rl.close();
  }
}

createDraft();

