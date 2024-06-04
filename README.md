# **Lambda + SQL Challenge**

## **Sección 1: Funciones Lambda**

**Tarea 1: Filtrar y Transformar Datos**

- **Descripción:** Dado objeto con información de productos en una tienda escribe una función lambda que filtre los productos cuyo precio sea mayor a $10.000 y que devuelva una lista con los nombres de esos productos en mayúsculas.

**PROPUESTA DE SOLUCIÓN**

Se crea la lambda `lambda-sql-challenge-dev-master-filter-transform-products` en un entorno ServerlessFramework con un desencadenador APIGateway:

![alt_text](/assets/task1_aws_01.png)

Para la solución de este ejercicio se opta por una combinación de `filter` y `map` para obtener los resultados esperados, si bien, esta combinación nos ofrece una complejidad algorítmica de `O(n)`

```ts
filterAndTransform(products: Product[], minPrice: number): string[] {
    return products.filter((product) => product.price > minPrice).map((product) => product.name.toUpperCase());
}
```

**Pruebas**

**Endpoint APIGateway:** https://agws49czy9.execute-api.us-east-2.amazonaws.com/dev/filter-transform-products<br>
**Method:** POST<br>
**Params:** N/A<br>
**Body:** JSON(minPrice, products[]) 

![alt_text](/assets/task1_aws_02.png)

Se deja `minPrice` como límite mínimo a filtrar los productos

**Request de Prueba**

```json
{
  "minPrice": 10000,
  "products": [
    {
      "name": "Auriculares Xiaomi Basic",
      "price": 12000
    },
    {
      "name": "Funda para Smartphone",
      "price": 6000
    },
    {
      "name": "Cargador Rápido USB",
      "price": 15000
    },
    {
      "name": "Memoria USB 32GB SanDisk",
      "price": 18000
    },
    {
      "name": "Lámpara LED de Escritorio",
      "price": 12000
    },
    {
      "name": "Cuaderno Argollado",
      "price": 5000
    },
    {
      "name": "Termo de Agua 500ml",
      "price": 8000
    },
    {
      "name": "Mouse Inalámbrico Logitech",
      "price": 15000
    },
    {
      "name": "Teclado USB HP",
      "price": 20000
    },
    {
      "name": "Altavoz Bluetooth Portátil",
      "price": 15000
    },
    {
      "name": "Protector de Pantalla para Smartphone",
      "price": 8000
    },
    {
      "name": "Calculadora Científica Casio",
      "price": 18000
    },
    {
      "name": "Audífonos Estéreo Panasonic",
      "price": 18000
    },
    {
      "name": "Organizador de Escritorio",
      "price": 10000
    },
    {
      "name": "Portarretratos Digital",
      "price": 20000
    },
    {
      "name": "Almohada Cervical",
      "price": 16000
    },
    {
      "name": "Botella Deportiva 1L",
      "price": 7000
    },
    {
      "name": "Cámara Web USB",
      "price": 19000
    },
    {
      "name": "Kit de Limpieza para Laptop",
      "price": 10000
    },
    {
      "name": "Base Enfriadora para Laptop",
      "price": 14000
    }
  ]
}
```

---

By<br>
Volkmar Carrillo<br>
Systems Engineer