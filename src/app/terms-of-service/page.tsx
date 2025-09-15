"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PageTermsOfUse() {
  return (
    <div className="min-h-screen flex flex-col items-center p-6 md:p-12 border-t-50">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Términos de Uso
      </h1>

      <Card className="max-w-3xl w-full mb-8">
        <CardHeader>
          <CardTitle>Información General</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Todo el contenido de este sitio web, incluyendo música, artículos, imágenes y cualquier información publicada, es exclusivamente para fines informativos y promocionales de nuestro cliente, el DJ Jesús Pulido.
          </p>
          <p className="mb-4">
            Está estrictamente prohibido copiar, distribuir, reproducir, o utilizar cualquier información del sitio sin la autorización expresa de Jesús Pulido.
          </p>
        </CardContent>
      </Card>

      <Card className="max-w-3xl w-full mb-8">
        <CardHeader>
          <CardTitle>Propiedad Intelectual</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            <li>Todo el contenido del sitio es propiedad exclusiva de Jesús Pulido o sus colaboradores autorizados.</li>
            <li>La reproducción total o parcial sin permiso constituye una violación de derechos de autor y puede tener consecuencias legales.</li>
            <li>Las marcas, nombres artísticos y logotipos presentes están protegidos por leyes de propiedad intelectual.</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="max-w-3xl w-full mb-8">
        <CardHeader>
          <CardTitle>Uso del Sitio</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-2">
            Al utilizar este sitio, aceptas:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>No extraer información de manera automatizada (scraping) sin autorización.</li>
            <li>No redistribuir contenido con fines comerciales o ilegales.</li>
            <li>No interferir con el funcionamiento del sitio ni con la experiencia de otros usuarios.</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="max-w-3xl w-full mb-8">
        <CardHeader>
          <CardTitle>Limitación de Responsabilidad</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-2">
            Aunque nos esforzamos por mantener la información actualizada y precisa, Jesús Pulido no se hace responsable por:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Errores o inexactitudes en el contenido.</li>
            <li>Daños derivados del uso del sitio o de la información presentada.</li>
            <li>Acciones de terceros que incumplan estos términos.</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="max-w-3xl w-full mb-8">
        <CardHeader>
          <CardTitle>Protección Legal</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-2">
            Cualquier uso no autorizado del contenido puede ser sujeto a acciones legales. Jesús Pulido se reserva el derecho de:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Tomar medidas legales en caso de violaciones de derechos de autor.</li>
            <li>Suspender el acceso de usuarios que incumplan los términos.</li>
            <li>Modificar estos términos en cualquier momento, siendo su uso continuado aceptación de los cambios.</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="max-w-3xl w-full mb-12">
        <CardHeader>
          <CardTitle>Contacto</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-2">
            Para consultas sobre permisos, uso de contenido o reportes de infracciones, contacta a Jesús Pulido en: <strong>contacto@jesuspulido.com</strong>.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
