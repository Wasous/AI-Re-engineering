# Imágenes necesarias para la landing page

Para completar la implementación de la landing page, necesitarás crear las siguientes imágenes:

## Imágenes principales:

1. **dashboard-mockup.png** - Un mock-up de un dashboard de IA con métricas de resultados para la sección hero
   - Resolución recomendada: 1200x800px
   - Debe mostrar gráficos con métricas de mejora (ROI, reducción de costes, etc.)

2. **client-logo-1.png**, **client-logo-2.png**, **client-logo-3.png**, **client-logo-4.png** - Logos de empresas cliente para la sección de prueba social
   - Resolución recomendada: 180x80px
   - Formato transparente (PNG)
   - Utilizar logos de empresas reconocidas de tu sector

## Sobre Calendly:

Para que la integración de Calendly funcione correctamente, deberás:

1. Crear una cuenta en Calendly (https://calendly.com/)
2. Configurar un tipo de evento "Auditoría gratuita de 30 min"
3. Actualizar el enlace en el código HTML con tu enlace personal de Calendly:
   ```html
   <div class="calendly-inline-widget" data-url="https://calendly.com/TU-USUARIO/auditoria-30min" style="min-width:320px;height:500px;"></div>
   ```

## Google Analytics y Hotjar:

Para activar el seguimiento de análisis:

1. Crear una cuenta en Google Analytics y obtener tu ID de seguimiento (G-XXXXXXXXXX)
2. Crear una cuenta en Hotjar y obtener tu ID de seguimiento (XXXXXXX)
3. Actualizar estos IDs en el código HTML
