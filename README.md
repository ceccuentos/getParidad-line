## Paridad de monedas desde SBIF (Chile)

### Uso

Simple app ejecutada desde línea de comandos que muestra por pantalla o lleva a un archivo las paridades de monedas usadas en ambitos administrativos en Chile
Las monedas permitidas son:

- Dolar
- UF
- UTM (sólo por mes)
- Euro

Comandos:
  - app listar  Lista en consola paridad de <moneda>
    Lista en consola paridad de <moneda>

    Options:
    --version     Muestra número de versión                             [booleano]
    --help        Muestra ayuda                                         [booleano]
    --moneda, -p  Moneda a elegir
                            [requerido] [selección: "dolar", "uf", "euro", "utm"]
    --year, -y    Años desde 2015                                      [requerido]
    --month, -m   Mes 1-12                                             [requerido]
    --day, -d     Días 1-31

  - app crear   Guarda en archivo <moneda>-<AAAAMMDD>.txt la paridad de monedas
    Guarda en archivo <moneda>-<AAAAMMDD>.txt la paridad de monedas

    Options:
    --version     Muestra número de versión                             [booleano]
    --help        Muestra ayuda                                         [booleano]
    --moneda, -p  Moneda a elegir
                            [requerido] [selección: "dolar", "uf", "euro", "utm"]
    --year, -y    Años desde 2015                                      [requerido]
    --month, -m   Mes 1-12                                             [requerido]
    --day, -d     Días 1-31
