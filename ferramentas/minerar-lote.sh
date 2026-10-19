#!/usr/bin/env bash
# Uso: ./minerar-lote.sh termos.txt pasta_saida [pausa_segundos]
# Uma busca por termo, com pausa entre buscas. Se o Meta bloquear (0 anúncios),
# espera 15 min e tenta o mesmo termo de novo (até 8 vezes).
set -u
TERMOS="$1"; SAIDA="$2"; PAUSA="${3:-180}"
DIR="$(cd "$(dirname "$0")" && pwd)"
mkdir -p "$SAIDA"
while IFS= read -r termo; do
  [ -z "$termo" ] && continue
  arq="$SAIDA/$(echo "$termo" | tr ' $/' '___').json"
  grep -q '"id":"' "$arq" 2>/dev/null && continue
  for tentativa in 1 2 3 4 5 6 7 8; do
    tmp="$(mktemp)"
    node "$DIR/biblioteca-anuncios.js" busca "$termo" > "$tmp" 2>/dev/null
    n=$(grep -o '"id":"' "$tmp" | wc -l)
    if [ "$n" -gt 0 ]; then mv "$tmp" "$arq"; echo "$(date +%H:%M) OK $termo -> $n anúncios"; break; fi
    rm -f "$tmp"
    echo "$(date +%H:%M) BLOQUEIO $termo (tentativa $tentativa), aguardando 15 min"
    sleep 900
  done
  sleep "$PAUSA"
done < "$TERMOS"
echo "$(date +%H:%M) FIM"
