--PARTE 1:
--Usando el siguiente ERD como referencia, escribe una consulta SQL que devuelva una lista de usuarios junto con los nombres de sus amigos.

SELECT users.first_name, users.last_name, user2.first_name as friend_first_name, user2.last_name as friend_last_name FROM friendships
LEFT JOIN users ON users.id = friendships.user_id
LEFT JOIN users as user2 ON user2.id = friendships.friend_id

--PARTE 2:
-- Ejercicio Adicional.

--1. Devuelva a todos los usuarios que son amigos de Kermit, asegúrese de que sus nombres se muestren en los resultados.
SELECT CONCAT(users.first_name, ' ', users.last_name) AS name, CONCAT(users2.first_name, ' ', users2.last_name) AS friend_name
FROM users
LEFT JOIN friendships ON users.id = friendships.user_id
JOIN users as users2 ON users2.id = friendships.friend_id AND users2.first_name LIKE 'Kermit'

--2. Devuelve el recuento de todas las amistades.
SELECT COUNT(users.id) AS friends_number
FROM users
LEFT JOIN friendships ON users.id = friendships.user_id
JOIN users AS users2 ON users2.id = friendships.friend_id

--3. Descubre quién tiene más amigos y devuelve el recuento de sus amigos.
SELECT CONCAT(users.first_name, ' ', users.last_name) AS name, COUNT(users.id) friends_number
FROM users
LEFT JOIN friendships ON users.id = friendships.user_id AND users.first_name LIKE 'Amy'
JOIN users AS users2 ON users2.id = friendships.friend_id 

--4. Crea un nuevo usuario y hazlos amigos de Eli Byers, Kermit The Frog y Marky Mark.
-- crea el usuario.
INSERT INTO users (first_name, last_name, created_at) 
VALUES('Lola','Loles', NOW())
-- Los hace amigos. 
INSERT INTO friendships (user_id, friend_id)
VALUES(6,2), (6,4), (6,5) 

--5. Devuelve a los amigos de Eli en orden alfabético.
SELECT CONCAT(users.first_name, ' ', users.last_name) AS name, CONCAT(users2.first_name, ' ', users2.last_name) AS friend_name
FROM users
LEFT JOIN friendships ON users.id = friendships.user_id AND user_id=2
JOIN users as users2 ON users2.id = friendships.friend_id
ORDER BY friend_name

--6. Eliminar a Marky Mark de los amigos de Eli.
DELETE FROM friendships
WHERE user_id = 2 AND friend_id=5

--7. Devuelve todas las amistades, mostrando solo el nombre y apellido de ambos amigos
SELECT CONCAT(users.first_name, ' ', users.last_name) AS name, CONCAT(users2.first_name, ' ', users2.last_name) AS friend_name FROM users
LEFT JOIN friendships ON users.id = friendships.user_id
JOIN users as users2 ON users2.id = friendships.friend_id