# DWEC_Angular_login
Hacer un apartado de login para el backend de la prueba de JWT

# Modelos
Primero hacemos el modelo "user", donde almacenamos los atributos de la clase user del backend. 
Además de ello, tenemos que concretar los modelos de "login" y "register": para ello, miramos los dtos del backend, que indican qué cosas esperan recibir del frontend (Request) y qué cosas pretenden devolver a este (Response).

# Componente formulario
También puede ser el primer paso, para entender mejor qué necesitamos exactamente para complementar la parte de backend. Con (ngSubmit) y [(ngModel)] en el html guardamos los parámetros introducidos, que luego se podrán referenciar en login-form.ts.