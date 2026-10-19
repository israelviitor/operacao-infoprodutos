#!/usr/bin/env bash
# Uso: ./minerar-lote.sh termos.txt pasta_saida [pausa_segundos]
# Roda uma busca por termo, com pausa entre buscas para evitar bloqueio do Meta.
set -u
TERMOS="$1"; SAIDA="$2"; PAUSA="${3:-60}"
DIR="$(cd "$(dirname "$0")" && pwd)"
mkdir -p "$SAIDA"
while IFS= read -r termo; do
  [ -z "$termo" ] && continue
  arq="$SAIDA/$(echo "$termo" | tr ' $/' '___').json"
  [ -s "$arq" ] && grep -q '"anuncios":\[{' "$arq" && continue
  node "$DIR/biblioteca-anuncios.js" busca "$termo" > "$arq" 2>/dev/null
  n=$(grep -o '"id":"' "$arq" | wc -l)
  echo "$(date +%H:%M) $termo -> $n anúncios"
  if [ "$n" -eq 0 ]; then echo "  (provável bloqueio; pausa longa)"; sleep $((PAUSA*5)); fi
  sleep "$PAUSA"
done < "$TERMOS"
