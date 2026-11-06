#!/usr/bin/env bash
# Uso: ./minerar-paises.sh <pasta_rodada> <pausa> PAIS:arquivo_termos [PAIS:arquivo ...]
# Roda minerar-lote.sh país a país (um por vez, para não bloquear a Biblioteca). Saída em <pasta_rodada>/bruto-<pais>.
set -u
DIR="$(cd "$(dirname "$0")" && pwd)"; RODADA="$1"; PAUSA="$2"; shift 2
while pgrep -f "minerar-lote.sh" >/dev/null; do sleep 20; done
for item in "$@"; do
  p="${item%%:*}"; t="${item#*:}"; pl=$(echo "$p" | tr 'A-Z' 'a-z')
  echo "$(date +%H:%M) PAÍS $p ($t)"
  PAIS="$p" "$DIR/minerar-lote.sh" "$DIR/$t" "$RODADA/bruto-$pl" "$PAUSA" >> "$RODADA/bruto-$pl.log" 2>&1
done
echo "$(date +%H:%M) FIM TODOS"
