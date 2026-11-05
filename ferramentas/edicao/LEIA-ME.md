# Edição por código — FFmpeg + faster-whisper + Remotion

Método: `.claude/skills/diretor-edicao/especialistas/metodo-codigo.md`.

## Montar o ambiente (sessão nova)
```bash
mkdir -p /home/user/edicao && cp -r ferramentas/edicao/* /home/user/edicao/
pip install faster-whisper gdown
cd /home/user/edicao/remotion && npm i && npm i @fontsource/montserrat@5.1.0
mkdir -p public/{takes,folhas,audio,sfx,fonts}
cp node_modules/@fontsource/montserrat/files/montserrat-latin-{800,900}-normal.woff2 public/fonts/
python3 -I ../scripts/sfx.py
```
## Fluxo
1. Baixar áudios/folhas do Drive (`curl "https://drive.google.com/uc?export=download&id=<ID>"`).
2. `python3 -I scripts/transcribe.py <áudios>` → `transcricoes/*.json` (copiar para `remotion/src/data/`).
3. Banco: `python3 -I scripts/mixkit_search.py <termos>` (Mixkit, licença grátis comercial, sem chave) → baixar `https://assets.mixkit.co/videos/<id>/<id>-1080.mp4` (ou -720) → `scripts/prepare_media.sh in out` para 1080x1920.
4. Conferir rostos por grade de quadros antes de usar.
5. `npx remotion still` (6–8 quadros) → grade → corrigir → `npx remotion render ... --browser-executable=/opt/pw-browsers/chromium_headless_shell-1243/chrome-headless-shell-linux64/chrome-headless-shell`.
6. Pós: `scripts/finalizar.sh` (loudnorm -14 LUFS + 2 passes até 14 MB).
