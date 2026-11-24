# Coleta logada no Mac (sessão local da Mineração)

Para que serve: buscar na Biblioteca de Anúncios **logado na conta secundária do Facebook**, para ter menos buscas vazias e mais de 30 anúncios por busca. A sessão local só faz a **coleta**. Análise, nota, comitê e entrega continuam na sessão "Mineração" da nuvem, com as mesmas regras (`regras/geral.md`, `regras/mineracao.md`).

## Instalação (uma vez)
1. Pasta de trabalho: `~/Documents/radar`. Clonar o repositório dentro dela: `git clone https://github.com/israelviitor/operacao-infoprodutos.git` (se pedir login do GitHub, o dono faz pelo navegador).
2. Conferir Node.js (`node -v`). Se faltar, pedir ao dono para instalar a versão LTS de nodejs.org.
3. `cd operacao-infoprodutos/ferramentas && npm install` (não rodar `npx playwright install`: usamos o Google Chrome já instalado no Mac, `channel: 'chrome'`).
4. Perfil exclusivo do robô: `~/Documents/radar/chrome-perfil`. **Nunca** usar o perfil do Chrome dos anúncios do dono nem a pasta padrão do Chrome.
5. Login único: `CHROME_PERFIL=~/Documents/radar/chrome-perfil node biblioteca-anuncios.js login` → abre uma janela do Chrome por 5 min; **o dono** entra com a conta secundária do Facebook. Nunca digitar, pedir ou guardar e-mail/senha.
6. Teste: `CHROME_PERFIL=~/Documents/radar/chrome-perfil PAIS=BR node biblioteca-anuncios.js busca "por apenas R$ 47" --exata` → deve voltar mais de 30 anúncios.

## Uso
- Sempre `git pull origin main` antes.
- Todas as buscas com `CHROME_PERFIL=~/Documents/radar/chrome-perfil` (rola 8 vezes por padrão; `ROLAR=n` muda). Em lote: `CHROME_PERFIL=... [EXATA=1] ./minerar-lote-rapido.sh BR <termos.txt> <pasta>/bruto 20 2400`.
- Pausa mínima de 20 s entre buscas e no máximo ~60 buscas por dia, para não marcar a conta secundária.
- Salvar brutos em `produtos/_mineracao/<data>/bruto-logado/`, commit e push na `main`. Avisar a sessão da nuvem (ou o dono) que há brutos novos.
- Se o Facebook pedir verificação/checkpoint: parar e avisar o dono. Não tentar contornar.
