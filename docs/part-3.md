# Del 3 - Databasdesign

Databasen behöver designas utifrån vad du önskar spara i den. Ta en stund och fundera igenom vilka fält du behöver spara i din databas. Vilka datatyper ska de ha?

- [ ] Förstå SQL frågor, datatyper och struktur
- [ ] Grundläggande databasdesign och SQL frågor

### Vilka kolumner behöver vi?

För en forum-post vill vi ha ett antal kolumner. Vem som har skrivit posten, titeln, innehållet och när posten skapades.

I den här beskrivningen så är namn på svenska, men i databasen så är det enklast att använda engelska (funktionsmässigt).

### Vilka datatyper behöver vi?

- författare, ett namn varchar(255)
- titel, text, men inte för lång varchar(255)
- innehåll, text
- skapad, datum

För att ändra i tabellen så behöver vi skriva SQL frågor för att göra detta.

```sql
ALTER TABLE ja15forum ADD author VARCHAR(255) NOT NULL;
ALTER TABLE ja15forum ADD title VARCHAR(255) NOT NULL;
ALTER TABLE ja15forum ADD content TEXT NOT NULL;
ALTER TABLE ja15forum ADD createdAt DATETIME DEFAULT CURRENT_TIMESTAMP;
```

För att inspektera tabellen med sql så kan du använda 

```sql
DESCRIBE ja15forum;
```

![Table image](assets/describe-table.png)

Tabellen för forumet är nu klar och nästa steg är att fylla den med data.

### Skapa data

Skapa data, använd antingen Tableplus eller så skriver du sql-fråga.
Testa båda!

```sql
INSERT INTO ja15forum (author, title, content) VALUES ('Jens', 'Hej', 'Detta är ett test');
```

### Visa data

För att välja, visa data från en SQL databas så används select. Du väljer innehållet och databasen svarar med data.

```sql
SELECT * FROM ja15forum;
```

[Del 4](part-4.md)
