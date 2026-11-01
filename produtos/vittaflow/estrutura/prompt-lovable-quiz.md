# Prompt para a Lovable — ajustes no quiz e na oferta (2026-11-01)

Base: `analises/2026-11-01-analise.md`. Colar o bloco abaixo inteiro na Lovable (em inglês, que é a língua do site).

```
Please make the following changes to the VittaFlow quiz funnel. Keep the current visual style (colors, fonts, logo). Do not change the Hotmart checkout link.

## 1. Speed: first screen must appear in under 1 second
- The landing screen ("1-MINUTE QUIZ / LYMPH RESET PLAN / How old are you?" with the 5 age buttons) must render as static HTML inside index.html, visible before the React bundle loads. React can hydrate/take over afterwards.
- Load the Meta Pixel and the Utmify script after the first paint (on window load), not in the <head> blocking render.
- Preload the main font and the logo. Convert all images to WebP and lazy-load everything below the fold.

## 2. Shorten the quiz to ~14 questions (it says "1-MINUTE QUIZ")
Keep only these screens, in this order, and update the progress counter (x/18):
1. Who is this plan for? (Male / Female)
2. How frequently do you feel tense or anxious?
3. Do you find yourself clenching your jaw or grinding your teeth?
4. Do you feel pain or tightness in your lower back, tailbone, or hips?
5. How frequently do your legs feel heavy, sore, or swollen?
6. Do you struggle with belly bloating or lower-belly fullness...?
7. [Interstitial] "You've been carrying this weight by yourself..." (keep)
8. "I'm exhausted the moment I open my eyes..."
9. How would you describe your energy throughout the day?
10. How long have you been dealing with these symptoms?
11. Do you experience any of the following sleep problems?
12. How would you describe your day-to-day lifestyle?
13. What are you hoping to gain from this Lymph Reset Plan? — REMOVE the option "Naturally lower my blood pressure".
14. Had you heard about the connection between fascia and your lymphatic system?
15. [Interstitial] "Your Lymph Reset Plan" — rewrite as: "Your routine combines gentle fascia-release and lymph-drainage movements you can do at home in about 10 minutes a day." Remove "years of clinical research" and "the same method used in wellness clinics".
16. [Profile summary] keep the layout, but: rename "Fascial Tightness Level" to "Your tension score (based on your answers)"; add a small line "This is not a medical assessment."; remove the vagus nerve / "locked in a cycle it can't escape" paragraph and replace with: "Your answers point to tension in your hips, lower back and legs. Your plan starts there."
17. [Plan timeline] replace "we predict you'll be able to completely reverse these effects by [date]" with "Your 4-week plan: [today] → [today + 28 days]". No promise of results.
18. How confident do you feel about following your plan for the next 4 weeks?

DELETE these screens completely: "Over 146,208 people have already chosen VittaFlow"; "How my body feels shapes my mood"; "My symptoms are taking a toll on my relationships..."; low sex drive question; "Do you snap, pull away..."; "people around you don't really get..."; frequent urge to use the bathroom; coffee/caffeine; habits to quit; physical changes (weight, blood pressure, hair loss); "anything made life tougher"; "What would you most like to improve"; "See how lymphatic congestion impacts your daily life" (charts + "studies show"); "Did a medical expert introduce you to VittaFlow?".

## 3. Loading screen, name, email
- Loading screen ("Creating your personalized Lymph Reset Plan..."): remove the "Over 438,000 people" line. Keep max 2 testimonials and remove any mention of doctors and of specific body results (e.g. "belly felt flatter"). Use only testimonials from real customers; if there are none, remove the testimonials from this screen.
- Email screen: remove "247,330+ PEOPLE HAVE CHOSEN US". Keep the privacy line.
- Merge the "Would you like emails with special offers..." screen into the email screen as an optional checkbox (unchecked by default), so it is one screen less.

## 4. Scratch card → simple price reveal
- The scratch card must also work with a single tap and must never send the user back to the start of the quiz. Add a button below it: "Reveal my price".
- What it reveals: "Your introductory price: $19.90 — one-time payment". Remove "70%" and "plus extra savings on select plans" (there are no other plans and no verified regular price).
- Then a "See my plan" button goes to /checkout.

## 5. Offer page (/checkout)
- Remove the Before/After body photos. Replace with a phone mockup showing "Week 1–4" of the routine (day list, video thumbnails).
- Keep the "Today / On the plan" table but change the right column to goals, not promises: "Feel lighter", "More energy for your day", "Calmer mood".
- Add a plan card right above the first "Get My Plan" button:
  "4-Week Lymph Reset Plan
   $19.90 — one-time payment. No subscription.
   Instant access by email · 30-day refund"
- Remove the countdown timer ("THIS OFFER ENDS IN") from both places.
- Remove "Cancel any time." and replace the legal paragraph with: "By clicking 'Get My Plan' you agree to our Terms of Service and Privacy Policy. This is a one-time payment of $19.90 processed by Hotmart. No subscription, no recurring charges. 30-day refund."
- Update the Terms / "Subscription & Refund Policy" pages so they also say one-time payment (rename to "Refund Policy").
- Remove the "81% / 73% / 60% of people..." stats block.
- Remove the "Featured in: Forbes / Business Insider" logos.
- Testimonials: remove any mention of doctors ("My doctor referred me", "Two different doctors dismissed..."), and of "fluid retention", "swelling vanished". Use only real customer testimonials; add the line "Individual results vary."
- Add a short footer line: "VittaFlow is a wellness routine and is not intended to diagnose, treat, cure or prevent any disease. Consult your doctor before starting any new exercise program."

## 6. Tracking (Meta Pixel)
- Fire fbq('trackCustom','QuizStep',{step:N}) at steps 1, 5, 10, 15 and 18.
- Fire fbq('track','Lead') when the email is submitted.
- Fire fbq('track','ViewContent') when /checkout loads.
- Fire fbq('track','InitiateCheckout') when "Get My Plan" is clicked.
- On the "Get My Plan" link, append the user's name and email to the Hotmart URL (&name=...&email=..., URL-encoded) so the checkout is pre-filled, and keep all UTM parameters from the landing URL (also pass utm_source/utm_campaign/utm_content as &src= and &sck= for Hotmart).

After the changes, test the full flow on a 390px-wide mobile screen from the first screen to the Hotmart checkout.
```

## Fora da Lovable (o dono faz na Hotmart)
- Tirar o cronômetro do checkout da Hotmart (configuração do checkout → contador).
- Confirmar que o produto está como pagamento único, sem recorrência.
