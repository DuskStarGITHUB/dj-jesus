"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PageCookies() {
  return (
    <div className="min-h-screen flex flex-col items-center p-6 md:p-12 border-t-50">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Política de Cookies
      </h1>
      <Card className="max-w-3xl w-full mb-8">
        <CardHeader>
          <CardTitle>Uso de Cookies y Tecnologías Similares</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Este sitio web no utiliza cookies para rastreo, publicidad ni
            análisis de terceros. Sin embargo, durante la navegación pueden
            aparecer cookies o tecnologías similares generadas por:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Navegador web del usuario.</li>
            <li>Extensiones instaladas por el usuario.</li>
            <li>
              Servicios externos como Google u otras herramientas de
              automatización.
            </li>
          </ul>
          <p className="mb-4">
            Nosotros no controlamos ni recopilamos información mediante estas
            cookies externas.
          </p>
        </CardContent>
      </Card>
      <Card className="max-w-3xl w-full mb-8">
        <CardHeader>
          <CardTitle>Uso de LocalStorage</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Para mejorar la experiencia del usuario, utilizamos{" "}
            <strong>localStorage</strong> del navegador, donde almacenamos
            exclusivamente:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Preferencias de tema (modo oscuro, colores, estilos).</li>
            <li>Preloads y cache de contenido para agilizar la navegación.</li>
            <li>
              Información temporal para mejorar la experiencia (pre-info,
              configuración de la página).
            </li>
          </ul>
          <p className="mb-4">
            Esta información permanece solo en el dispositivo del usuario y no
            es compartida con terceros.
          </p>
        </CardContent>
      </Card>
      <Card className="max-w-3xl w-full mb-12">
        <CardHeader>
          <CardTitle>Consentimiento y Control</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            No solicitamos consentimiento para el uso de localStorage porque no
            se utiliza con fines de rastreo ni publicidad. El usuario puede
            borrar cualquier dato almacenado en su navegador en cualquier
            momento.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
