"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PageCopyright() {
  return (
    <div className="min-h-screen flex flex-col items-center p-6 md:p-12 border-t-50">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Aviso de Copyright y Propiedad Intelectual
      </h1>
      <Card className="max-w-3xl w-full mb-8">
        <CardHeader>
          <CardTitle>Protección de Contenidos</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Todo el contenido de este sitio web, incluyendo pero no limitado a:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Música y pistas de DJ creadas por Jesús Pulido.</li>
            <li>Videos, grabaciones y material audiovisual.</li>
            <li>Imágenes, fotografías, ilustraciones y diseños gráficos.</li>
            <li>
              Textos, artículos, biografía, notas de prensa y cualquier
              descripción publicada.
            </li>
            <li>Logotipos, nombres artísticos, marcas y eslóganes.</li>
            <li>Enlaces, códigos y estructura del sitio web.</li>
            <li>
              Base de datos, listas de contactos o cualquier información
              recopilada en el sitio.
            </li>
          </ul>
          <p className="mb-4">
            Todos estos contenidos están protegidos por derechos de autor,
            propiedad intelectual y legislación aplicable. Su reproducción,
            distribución, modificación o uso sin autorización expresa de Jesús
            Pulido está estrictamente prohibida.
          </p>
        </CardContent>
      </Card>
      <Card className="max-w-3xl w-full mb-8">
        <CardHeader>
          <CardTitle>Uso Permitido</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Los visitantes pueden visualizar y disfrutar del contenido
            únicamente con fines personales y no comerciales. Cualquier otro uso
            requiere autorización previa y por escrito de Jesús Pulido.
          </p>
        </CardContent>
      </Card>
      <Card className="max-w-3xl w-full mb-8">
        <CardHeader>
          <CardTitle>Prohibiciones</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>
              Reproducción parcial o total de música, videos o imágenes sin
              permiso.
            </li>
            <li>
              Distribución, venta o publicación de cualquier contenido en
              plataformas externas.
            </li>
            <li>Modificación de material audiovisual, textos o imágenes.</li>
            <li>Extracción de información para uso automatizado o scraping.</li>
            <li>
              Uso del sitio o su contenido para fines ilegales o comerciales sin
              autorización.
            </li>
          </ul>
        </CardContent>
      </Card>
      <Card className="max-w-3xl w-full mb-8">
        <CardHeader>
          <CardTitle>Protección Legal</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Cualquier infracción a los derechos de autor o propiedad intelectual
            será considerada una violación legal y podrá ser sancionada conforme
            a la legislación vigente.
          </p>
          <p className="mb-4">
            Jesús Pulido se reserva el derecho de emprender acciones legales
            contra cualquier persona o entidad que incumpla estas condiciones.
          </p>
        </CardContent>
      </Card>
      <Card className="max-w-3xl w-full mb-12">
        <CardHeader>
          <CardTitle>Contacto para Autorización</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Para solicitar permisos de uso, reproducción o distribución de
            contenido del sitio, contacta a Jesús Pulido en:{" "}
            <strong>copyright@jesuspulido.com</strong>
          </p>
          <p>
            Todas las solicitudes serán revisadas y requerirán autorización
            explícita por escrito antes de permitir cualquier uso.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
