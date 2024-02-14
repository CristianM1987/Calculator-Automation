Proyecto de automatización de calculadora.

La calculadora posee distintas Builds, donde Prototype es la única que funciona correctamente, las demas Builds tienen errores variados.
La misión principal es poder barrer correctamente la aplicación y poder recorrer las distintas builds para hacer pruebas.

Instrucciones de Instalación y Ejecución de Playwright con TypeScript

1. **Instalación de Node.js y npm:**
   Asegúrate de tener Node.js y npm instalados en tu sistema. Puedes descargarlos desde https://nodejs.org/.

2. **Configuración de un Proyecto de TypeScript:**
   - Crea un nuevo directorio para tu proyecto.
   - Abre una terminal en el directorio recién creado y ejecuta el siguiente comando para inicializar un proyecto TypeScript:
     ```
     npm init -y
     ```
   - Instala TypeScript como una dependencia de desarrollo:
     ```
     npm install --save-dev typescript
     ```
   - Inicializa el archivo de configuración de TypeScript:
     ```
     npx tsc --init
     ```

3. **Instalación de Playwright y Tipos de Playwright:**
   - Instala Playwright y los tipos de Playwright como dependencias de desarrollo:
     ```
     npm install --save-dev playwright @types/playwright
     ```

4. **Escribir y Ejecutar Scripts con Playwright en TypeScript:**
   - Crea tus scripts de prueba en TypeScript (por ejemplo, `example.spec.ts`).
   - Utiliza un archivo de configuración de TypeScript (`tsconfig.json`) para configurar las opciones de compilación.
   - Puedes ejecutar tus scripts utilizando un entorno de ejecución como `ts-node`. Instálalo como dependencia de desarrollo:
     ```
     npm install --save-dev ts-node
     ```
     Y ejecuta tu script de la siguiente manera:
     ```
     npx ts-node example.spec.ts
     ```
5. **Clonar repositorio**
    - https://github.com/CristianM1987/Calculator-Automation.git

6. **Ejecutar**
    - Ejecución por backend: npx playwright test
    - Ejecución con vista al front-end: npx playwright test --headed