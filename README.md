#prueba sin compression
![sin-1](https://user-images.githubusercontent.com/79757893/141349177-55df831f-eba9-4f1d-a282-82b0ec5321f9.png)
![sin-2](https://user-images.githubusercontent.com/79757893/141349185-0973a480-cc76-4c47-bc21-b9b581b1f543.png)

#prueba con compression
![con-1](https://user-images.githubusercontent.com/79757893/141349193-2bba093c-07ef-4796-91b4-4cea35c6f147.png)
![con-2](https://user-images.githubusercontent.com/79757893/141349212-1ec031a9-7fe8-43d5-b97a-5b1c01c3a871.png)

# test de rendimiento con profilling usando console.log en el código analizado (ruta /info)
<img width="608" alt="Captura de Pantalla 2021-11-11 a la(s) 08 22 00" src="https://user-images.githubusercontent.com/79757893/141349451-75165a1a-82f4-41ac-910b-c828506ac317.png">

# test de rendimiento con profilling usando logger en el código analizado (ruta /info)
<img width="1194" alt="Captura de Pantalla 2021-11-11 a la(s) 08 23 12" src="https://user-images.githubusercontent.com/79757893/141349491-a3b8d22f-ce6f-48aa-a11b-ef9a6601ea37.png">

#analisis comparativo: 
<img width="1377" alt="Captura de Pantalla 2021-11-11 a la(s) 14 13 46" src="https://user-images.githubusercontent.com/79757893/141349577-7ad9ce77-449c-4162-b635-f019441cbf6a.png">

#test con autocannon y 0x con logger en ruta /info:
<img width="1072" alt="Captura de Pantalla 2021-11-11 a la(s) 14 45 19" src="https://user-images.githubusercontent.com/79757893/141349715-3deb2f10-6418-45a3-a9f5-e44bff8ebb9d.png">
<img width="735" alt="Captura de Pantalla 2021-11-11 a la(s) 14 46 33" src="https://user-images.githubusercontent.com/79757893/141349727-299abf00-1b31-4f03-a2de-11137b297617.png">


#test con autocannon y 0x con console.log en ruta /info: - el primer cuadro pertenece al test con logger y el último con console.log -
<img width="1089" alt="Captura de Pantalla 2021-11-11 a la(s) 14 51 10" src="https://user-images.githubusercontent.com/79757893/141349856-d6443d78-824f-4911-87db-1f80f5b24e21.png">
<img width="1416" alt="Captura de Pantalla 2021-11-11 a la(s) 14 50 35" src="https://user-images.githubusercontent.com/79757893/141349829-7a88e1ad-109d-4a83-95a9-afcda6d8c89d.png">

### conclusión de análisis
La performance del código es mucho más óptima utilizando logger antes que console.log debido a que este comando no bloquea los procesos subsiguientes, por ende el tiempo de respuesta es mucho más rápido. Si de números hablamos:
Con console.log operando, la media en respuestas es de 421.8 y la cantidad de respuestas por segundo: 100.91
En cambio, con logger, la media baja a 338.4 y la capacidad de responder en segundos se eleva a 121.65

Concluyendo, un código con compression y loggers es mejor performante que uno sin estas características.


