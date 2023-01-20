
## Hämta alla inlägg med författare i node

Uppdatera SQL frågan i index routen.

## Posta nya inlägg med författare

Uppdatera SQL frågan i new routen.

## Uppdatera formuläret

Uppdatera formuläret i new.njk så att författaren är en dropdown.

```html
<label for="author">Författare</label>
<select name="author" id="author">
    {% for user in users %}
        <option value="{{ user.id }}">{{ user.name }}</option>
    {% endfor %}
</select>
```

Uppdatera routen för att hämta alla användare.

```js
router.get('/new', async function (req, res, next) {
    const [users] = await promisePool.query("SELECT * FROM ja15users");
    res.render('new.njk', {
        title: 'Nytt inlägg',
        users,
    });
});
```
[Del 8](part-8.md)