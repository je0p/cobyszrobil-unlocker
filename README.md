# cobyszrobil-unlocker

Odblokowywacz słów do strony [Mamm0n'a](https://cobyszrobil.vercel.app/).

Skrypt Tampermonkey, który wyłącza easter eggi w polu pytania:

- `tubson` nie zamienia się już na "t word"
- `60` / `sześćdziesiątka` nie zamyka pola "w więzieniu"
- `cinkrof` / `cini` nie podpowiada i nie dopisuje "łajza"

## Instalacja

1. Zainstaluj [Tampermonkey](https://www.tampermonkey.net/) (Chrome, Brave, Firefox, Edge).
2. Włącz uruchamianie skryptów użytkownika (bez tego Tampermonkey nie wykona żadnego skryptu):
   - Brave/Chrome: otwórz `brave://extensions` (lub `chrome://extensions`).
   - Kliknij **Szczegóły** przy Tampermonkey.
   - Włącz **Zezwalaj na skrypty użytkownika**.
   - Starsze wersje przeglądarki: zamiast tego włącz **Tryb dewelopera** (przełącznik w prawym górnym rogu).
3. Otwórz plik [`cobyszrobil-unlocker.user.js`](./cobyszrobil-unlocker.user.js) i kliknij **Raw**.
4. Tampermonkey pokaże okno instalacji, kliknij **Zainstaluj**.
5. Wejdź na stronę i odśwież ją (Ctrl+F5).

## Sprawdzenie, czy działa

- Otwórz konsolę (F12). Powinien być wpis `[CoBysZrobil] aktywny`.
- Wpisz `tubson` w pole pytania. Nic nie powinno się zmienić.

## Znane skutki uboczne

- Blokada zdarzenia `input` wyłącza też licznik znaków (`0 / 500`) i zapis szkicu.
- Skrypt działa tylko w przeglądarce. Jeśli serwer filtruje treść, tego nie ominie.

## Aktualizacje

Tampermonkey sprawdza nowe wersje sam, jeśli w nagłówku skryptu jest `@updateURL` i `@downloadURL`
(wskazujące na link **Raw** do pliku).

## Licencja

MIT
