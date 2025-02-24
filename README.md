# Biglietto del treno

Programma che chiede all'utente il numero di chilometri che vuole percorre e l'età del passeggero e in base a queste informazioni restituire il prezzo totale del viaggio.

---

### Pseudocodice

-   Chiedere chilometri da percorre al passeggero
    -   Controllo input
    -   SE è NaN
        -   Messaggio di errore
-   Chiedere età del passeggero
    -   Controllo input
    -   SE è NaN
        -   Messaggio di errore
-   Trasformare input da stringa a numero
-   Applicare prezzo del biglietto in base ai chilometri (0.21 € al km)
-   SE età è inferiore a 18
    -   Applicare sconto per minorenni del 20%
-   ALTRIMENTI SE età è maggiore di 65
    -   Applicare sconto per over 65 del 40%
-   Mostrare prezzo biglietto con massimo 2 decimali
