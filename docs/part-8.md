
# Lägg till kommentarer

## Skapa en ny tabell

```sql
CREATE TABLE ja15comments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    authorId INT NOT NULL,
    postId INT NOT NULL,
    content TEXT NOT NULL,
    FOREIGN KEY (authorId) REFERENCES ja15users(id),
    FOREIGN KEY (postId) REFERENCES ja15forum(id)
);
```

## Skapa en ny post

```sql
INSERT INTO ja15comments (authorId, postId, content) VALUES (1, 1, 'Detta är en kommentar');
```

## Hämta alla kommentarer

```sql
SELECT ja15comments.*, ja15users.name FROM ja15comments
JOIN ja15users ON ja15comments.authorId = ja15users.id;
```
