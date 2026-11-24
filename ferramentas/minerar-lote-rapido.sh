#!/usr/bin/env bash
# Uso: [EXATA=1] ./minerar-lote-rapido.sh <PAIS> <termos.txt> <pasta_saida> <pausa_s> <limite_s>   (EXATA=1 busca a frase exata)
# lote.sh PAIS termos saida pausa limite_segundos — 1 tentativa extra após 60s; marca vazios em .vazio
P=$1; T=$2; O=$3; PA=$4; LIM=$5; F=/home/user/operacao-infoprodutos/ferramentas; mkdir -p $O; ini=$(date +%s)
while IFS= read -r t; do [ -z "$t" ] && continue
  a="$O/$(echo "$t" | tr ' $/' '___').json"; grep -q '"id":"' "$a" 2>/dev/null && continue; [ -f "$a.vazio" ] && continue
  [ $(( $(date +%s)-ini )) -gt $LIM ] && { echo "PAUSA-LIMITE"; exit 0; }
  for k in 1 2; do PAIS=$P timeout 150 node $F/biblioteca-anuncios.js busca "$t" ${EXATA:+--exata} > "$a.tmp" 2>/dev/null; n=$(grep -o '"id":"' "$a.tmp" | wc -l)
    if [ $n -gt 0 ]; then mv "$a.tmp" "$a"; echo "$(date +%H:%M) $P OK $t $n"; break; fi; rm -f "$a.tmp"; [ $k = 1 ] && sleep 60 || { touch "$a.vazio"; echo "$(date +%H:%M) $P VAZIO $t"; }; done
  sleep $PA; done < "$T"; echo "FIM $P"
