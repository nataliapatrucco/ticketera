# Ticketera

# DEVELOP

generamos el container

```bash
docker-compose build
```

levantamos el servicio

```bash
docker-compose up
```

### primer vez

despues de cada build hay que correr el seed

_con el container corriendo_

```
docker ps
```

busco el id del container

```
docker exec -it CONTAINER_ID bash
```

ahora adentro del container

```
npm run seed
```

### [Comandos utiles](https://gist.github.com/Plataforma5la/190cbdb3ec3f4c54e8cb36ee3bdcc09e)
