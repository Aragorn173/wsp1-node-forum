# Del 5

- [ ] Skapa en ny post i databasen med SQL INSERT
- [ ] Göra detta med Node och skapa formulär
## Skapa en ny post, SQL

Sql frågan för att skapa en ny post är

```sql
INSERT INTO ja15forum (author, title, content) VALUES ('Jens', 'Hej', 'Detta är ett test');
```

## Med node

För att skapa en ny post så behöver vi en ny route. Skapa en ny route i routes/index.js

```js
router.post('/new', async function (req, res, next) {
    const { author, title, content } = req.body;
    const [rows] = await promisePool.query("INSERT INTO ja15forum (author, title, content) VALUES (?, ?, ?)", [author, title, content]);
    res.redirect('/');
});
```

Skapa en ny template för att skriva ut formuläret. Skapa en ny fil i views/new.njk

```html
<form action="/new" method="post">
    <label for="author">Författare</label>
    <input type="text" name="author" id="author">
    <label for="title">Titel</label>
    <input type="text" name="title" id="title">
    <label for="content">Innehåll</label>
    <textarea name="content" id="content" cols="30" rows="10"></textarea>
    <button type="submit">Skicka</button>
</form>
```

Skapa en ny route för att visa formuläret.

```js
router.get('/new', async function (req, res, next) {
    res.render('new.njk', {
        title: 'Nytt inlägg',
    });
});
```

[Del 6](part-6.md)