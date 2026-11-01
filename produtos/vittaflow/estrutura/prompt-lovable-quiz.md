# Prompt para a Lovable — ajustes de conversão no quiz e na oferta (2026-11-01, v2)

Base: `analises/2026-11-01-analise.md` (gargalos 1 a 3). A v2 contém só o que afeta vendas, conforme o pedido do dono e a regra de análise de 2026-11-01. O "70% off", os depoimentos e o resto do conteúdo continuam como estão.

```
Please make the following changes to the VittaFlow quiz funnel to increase conversions. Keep the current visual style, copy, testimonials and the 70% discount. Do not change the Hotmart checkout link.

## 1. Speed: the first screen must appear in under 1 second
Right now about half of the paid clicks leave before the page shows up.
- Render the landing screen ("1-MINUTE QUIZ / LYMPH RESET PLAN / How old are you?" with the 5 age buttons) as static HTML inside index.html, so it is visible before the React bundle loads. React can take over afterwards.
- Load the Meta Pixel and the Utmify script after the first paint (on window load), not blocking the render in the <head>.
- Preload the main font and the logo. Convert images to WebP and lazy-load everything below the fold.

## 2. Shorten the quiz (it promises "1-MINUTE QUIZ" but has 33 steps + 8 more screens)
Delete these questions completely and update the progress counter to the new total:
- "Do you often feel a frequent urge to use the bathroom?"
- "How my body feels shapes my mood"
- "My symptoms are taking a toll on my relationships, my work, and my day-to-day life"
- "How often do you feel disconnected from your body — low sex drive, no spark, no desire?"
- "Do you snap, pull away, or shut down...?"
- "Do you feel like the people around you don't really get what you're dealing with?"
- "How often do you have coffee or other caffeinated beverages?"
- "Are there any habits you're hoping to quit?"
- "Have you noticed any physical changes lately?"
- "Has anything below made life tougher recently?"
- "What would you most like to improve to feel better?"
- "Did a medical expert introduce you to VittaFlow?"
Keep all other questions and screens exactly as they are.

## 3. Fewer screens before the price
- Merge the "Would you like emails with special offers, lymph-release techniques, and free gifts?" screen into the email screen as an optional checkbox, so it is one screen less.
- Reduce the "Creating your personalized Lymph Reset Plan..." loading screen to about 4 seconds total.

## 4. Scratch card: must never break the flow
- In our test, a normal tap/drag on the scratch card sent the user back to the first screen of the quiz. Fix this: the card must never navigate back to the start.
- It must also reveal with a single tap, and add a button below it: "Reveal my discount".
- After the reveal, show: "70% OFF unlocked — your price today: $19.90" and a "Claim my discount" button that goes to /checkout.

## 5. Offer page (/checkout): show the price
The page has no price at all before the Hotmart checkout, and the legal text talks about a subscription while Hotmart charges a one-time $19.90. Fix this:
- Add a plan card right above each "Get My Plan" button:
  "4-Week Lymph Reset Plan
   70% OFF — $19.90 one-time payment
   Instant access by email · 30-day refund promise"
- Replace the legal paragraph under the button with: "By clicking 'Get My Plan' you agree to our Terms of Service and Privacy Policy. One-time payment of $19.90 processed by Hotmart. No subscription, no recurring charges."
- Replace "Guaranteed safe checkout. Cancel any time." with "Guaranteed safe checkout. 30-day refund promise."

## 6. Tracking (Meta Pixel), so we can see where people drop
- Fire fbq('trackCustom','QuizStep',{step:N}) on the first question, then every 5 questions, and on the last question.
- Fire fbq('track','Lead') when the email is submitted.
- Fire fbq('track','ViewContent') when /checkout loads.
- Fire fbq('track','InitiateCheckout') when "Get My Plan" is clicked.

## 7. Pre-fill the Hotmart checkout
On every "Get My Plan" link, append the name and email the user typed in the quiz to the Hotmart URL (&name=...&email=..., URL-encoded), and keep all UTM parameters from the landing URL (also pass them as &src= and &sck= for Hotmart).

After the changes, test the whole flow on a 390px-wide mobile screen, from the first screen to the Hotmart checkout, including the scratch card.
```

## Fora da Lovable (na Hotmart)
- Ver se dá para tirar endereço, CEP, estado e telefone do checkout. A Hotmart pode exigir esses dados nos EUA por causa do imposto.
- Confirmar que o produto está como pagamento único.
