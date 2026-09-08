# Diseño y desarrollo de una API REST para gestión de usuarios

La empresa de fintech 'FinTech Solutions' necesita una API REST para gestionar usuarios. La API debe permitir crear, leer, actualizar y eliminar usuarios. Los usuarios tienen atributos como nombre, email, fecha de nacimiento y rol. La API debe validar que el email sea único y que la fecha de nacimiento sea válida. La API debe ser idempotente para las operaciones de creación y actualización. En caso de error, la API debe devolver un mensaje de error descriptivo. El sistema debe ser capaz de manejar al menos 100 solicitudes por segundo con un tiempo de respuesta promedio de 200ms.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | API REST con NestJS, TypeORM y Swagger |
| **Nivel** | junior-l2 |
| **Tipo** | practical |
| **Tiempo estimado** | 8 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Un IDE o editor de código.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Verifica que el proyecto arranca sin errores.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Definición del modelo de usuario

**Objetivo:** Definir el modelo de usuario con sus atributos y validaciones.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Identificar los atributos necesarios para un usuario.
- Definir las validaciones para cada atributo.
- Asegurar que el email sea único y que la fecha de nacimiento sea válida.

**Entregable:** Modelo de usuario definido con sus atributos y validaciones.

<details>
<summary>Pistas de conocimiento</summary>

- Considera los tipos de datos adecuados para cada atributo.
- Piensa en las posibles validaciones para garantizar la integridad de los datos.

</details>

### Fase 2: Implementación de los endpoints CRUD

**Objetivo:** Implementar los endpoints para crear, leer, actualizar y eliminar usuarios.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Crear los endpoints para las operaciones CRUD.
- Asegurar que los endpoints sean idempotentes para las operaciones de creación y actualización.
- Devolver mensajes de error descriptivos en caso de error.

**Entregable:** Endpoints CRUD implementados y funcionando.

<details>
<summary>Pistas de conocimiento</summary>

- Revisa las mejores prácticas para el diseño de APIs REST.
- Considera el uso de middlewares para las validaciones y la idempotencia.

</details>

### Fase 3: Pruebas y optimización

**Objetivo:** Realizar pruebas y optimizar el rendimiento de la API.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Realizar pruebas unitarias y de integración para los endpoints.
- Optimizar el rendimiento de la API para manejar al menos 100 solicitudes por segundo con un tiempo de respuesta promedio de 200ms.

**Entregable:** API optimizada y con pruebas unitarias y de integración.

<details>
<summary>Pistas de conocimiento</summary>

- Utiliza herramientas de pruebas como Jest y Supertest.
- Considera el uso de caché y otras técnicas de optimización.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué es un modelo de usuario y por qué es necesario?
- **paraQueSirve**: ¿Para qué sirven las validaciones en los atributos de un usuario?
- **comoSeUsa**: ¿Cómo se implementan los endpoints CRUD en una API REST?
- **erroresComunes**: ¿Cuáles son los errores comunes al implementar una API REST y cómo se pueden evitar?
- **queDecisionesImplica**: ¿Qué decisiones implica hacer idempotente un endpoint de creación?

## Criterios de Evaluacion

- Definir el modelo de usuario con sus atributos y validaciones.
- Implementar los endpoints para las operaciones CRUD.
- Asegurar que los endpoints sean idempotentes y devuelvan mensajes de error descriptivos.
- Realizar pruebas unitarias y de integración para los endpoints.
- Optimizar el rendimiento de la API para manejar al menos 100 solicitudes por segundo con un tiempo de respuesta promedio de 200ms.

## Como trabajar con un asistente de IA

- **AGENTS.md** — instrucciones nativas del repo (Cursor, Codex, Copilot, Gemini, Claude Code). Abrí el proyecto y el agente las carga solo.
- **PROMPT_MEJORA.md** — el mismo prompt, para copiar y pegar en un chat (claude.ai, ChatGPT, etc.).

---

*Reto generado automaticamente por Challenge Generator - Pragma*
