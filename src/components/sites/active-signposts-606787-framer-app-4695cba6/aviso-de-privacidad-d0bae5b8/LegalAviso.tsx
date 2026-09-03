import type { ReactNode } from "react";

/*
 * Aviso de Privacidad — legal document page content.
 * Cloned from https://active-signposts-606787.framer.app/aviso-de-privacidad
 * Long-form text document on #faf9f7: centered ~700px column, pill badge +
 * centered title, numbered sections separated by thin dividers.
 */

const css = `
.logra-legal {
  max-width: 748px;
  margin: 0 auto;
  padding: 240px 24px 130px;
  font-family: var(--font-logra-body);
  font-size: 16px;
  line-height: 1.75;
  color: #6b7280;
}
.logra-legal .lg-head {
  text-align: center;
  margin-bottom: 92px;
}
.logra-legal .lg-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 1px solid #cfd8e8;
  border-radius: 999px;
  background: #ffffff;
  color: #1d4ed8;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  padding: 10px 16px;
}
.logra-legal .lg-pill .lg-dot {
  font-size: 16px;
  line-height: 0;
}
.logra-legal h1 {
  font-family: var(--font-logra-heading);
  font-weight: 500;
  font-size: 36px;
  line-height: 42px;
  letter-spacing: -0.01em;
  color: #111827;
  margin: 26px 0 22px;
}
.logra-legal .lg-updated {
  font-size: 20px;
  color: #64748b;
}
.logra-legal hr {
  border: 0;
  border-top: 1px solid #e5e7eb;
  margin: 64px 0 0;
}
.logra-legal h3 {
  font-family: var(--font-logra-heading);
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: -0.01em;
  color: #111827;
  margin: 88px 0 30px;
}
.logra-legal p {
  margin: 0;
}
.logra-legal .lg-gap {
  height: 28px;
}
.logra-legal .lg-m {
  display: inline-block;
  min-width: 56px;
}
.logra-legal .lg-pre {
  white-space: pre-wrap;
}
@media (max-width: 809px) {
  .logra-legal {
    padding: 200px 20px 90px;
  }
  .logra-legal .lg-head {
    margin-bottom: 64px;
  }
  .logra-legal h1 {
    font-size: 28px;
    line-height: 34px;
  }
  .logra-legal .lg-updated {
    font-size: 17px;
  }
  .logra-legal h3 {
    font-size: 21px;
    line-height: 27px;
    margin: 64px 0 24px;
  }
  .logra-legal hr {
    margin-top: 48px;
  }
}
`;

function Sec({ n, title }: { n?: number; title: string }) {
  return (
    <>
      <hr />
      <h3>{n != null ? `${n}. ${title}` : title}</h3>
    </>
  );
}

function It({ m, children }: { m: string; children: ReactNode }) {
  return (
    <p>
      <span className="lg-m">{m}&nbsp;</span>
      {children}
    </p>
  );
}

function Gap() {
  return <div className="lg-gap" aria-hidden="true" />;
}

export function LegalAviso() {
  return (
    <section className="logra-legal">
      <style>{css}</style>

      <header className="lg-head">
        <span className="lg-pill">
          <span className="lg-dot">•</span>
          Aviso de Privacidad
        </span>
        <h1>Aviso de Privacidad</h1>
        <p className="lg-updated">Última actualización: 8 febrero de 2023.</p>
      </header>

      <h3>Política de privacidad y protección de Datos Personales</h3>
      <p>A continuación, se presenta la política de privacidad y protección de Datos Personales (en adelante la “Política de Privacidad” o la “Política”) aplicable a todas las personas naturales y jurídicas que suministren sus Datos Personales (como se define más adelante) a través de la Plataforma (como se define más adelante) de propiedad de la sociedad DIGITIZEME INC., (en adelante “Logra”, “nuestro” o “nosotros”), dicha información será incluida en las bases de datos de Logra y será tratada de conformidad con la política que a continuación se presenta.</p>

      <Sec n={1} title="Objetivo" />
      <p>La Política tiene el objetivo de establecer los criterios para la recolección, almacenamiento, uso, transferencia, circulación y supresión de los Datos Personales de usuarios de los servicios de Logra, contratistas, proveedores y en general terceros, que sean tratados por Logra. En este sentido, Logra ha dispuesto la presente Política, con el propósito de regular de manera clara y dar a conocer los aspectos relevantes con relación a los Datos Personales de la comunidad, incluyendo, pero sin limitarse a los proveedores, terceros y Usuarios de su Plataforma, quienes hayan otorgado autorización para el manejo de sus datos a Logra. Esta Política aplica para toda la información personal registrada en las bases de datos de Logra, quien podrá actuar en calidad de responsable o encargado del tratamiento de los Datos Personales.</p>

      <Sec n={2} title="Definiciones" />
      <p><em>Autorización</em>. Consentimiento previo, expreso e informado del Titular para llevar a cabo el Tratamiento de Datos Personales.</p>
      <p><em>Base de Datos</em>. Conjunto organizado de Datos Personales que sea objeto de Tratamiento.</p>
      <p><em>Cuenta Logra</em>. Cuenta de Usuarios registrados de Logra para el uso de la Plataforma.</p>
      <p><em>Dato Personal</em>. Cualquier información vinculada o que pueda asociarse a una o varias personas determinadas y/o determinables; a información suministrada por cualquier persona natural o jurídica que se registre en nuestra página web y/o aplicativos.</p>
      <p><em>Datos Públicos</em>. Se refiere al dato calificado como tal en virtud de la ley y aquel que no sea semiprivados, privados o sensibles. Son considerados datos públicos, entre otros, los datos relativos al estado civil de las personas, a su profesión u oficio, a su calidad de comerciante o servidor público y aquellos que puedan obtenerse sin reserva alguna. Por su naturaleza, los datos públicos pueden estar contenidos, entre otros, en registros públicos, documentos públicos, gacetas y boletines oficiales.</p>
      <p><em>Dato Privado</em>. Es el dato que por su naturaleza íntima o reservada sólo es relevante para el Titular.</p>
      <p><em>Encargado del Tratamiento</em>. Persona natural o jurídica, pública o privada, que por sí misma o en asocio con otros, realice el Tratamiento de Datos Personales por cuenta del Responsable del Tratamiento en virtud de una obligación legal o contractual, de conformidad con lo previsto en la ley aplicable.</p>
      <p><em>Plataforma</em>. significan Sitios Web de Logra (incluyendo sin limitación www.logra.io, app.logra.io,  red.logra.io, pro.logra.io y cualquier URL sucesora, versiones móviles o localizadas y dominios y subdominios relacionados) y el conjunto de sistemas administrados por Logra.</p>
      <p><em>Responsable del Tratamiento</em>. Persona natural o jurídica, pública o privada, que por sí misma o en asocio con otros, decida sobre la Base de Datos y/o el Tratamiento de los datos.</p>
      <p><em>Trasferencia de datos:</em> La transferencia de datos tiene lugar cuando el responsable y/o encargado del tratamiento de datos personales, ubicado en Colombia, envía la información o los datos personales a un receptor con fines operativos, logísticos y publicitarios, que a su vez es responsable del tratamiento y se encuentra dentro o fuera de Colombia.</p>
      <p><em>Transmisión:</em> Tratamiento de datos personales que implica la comunicación de los mismos dentro o fuera del territorio de la República de Colombia cuando tenga por objeto la realización de un tratamiento por el encargado por cuenta del Responsable, con fines operativos, logísticos y publicitarios.</p>
      <p><em>Titular</em>. Persona natural o jurídica cuyos Datos Personales sean objeto de Tratamiento, quien podrá ser o no Usuario de Logra.</p>
      <p><em>Usuario</em>. Significa (a) cualquier persona que acceda a la Plataforma o (b) cualquier persona que luego de haber accedido a la Plataforma, se haya registrado o se convierta en cliente de Logra; en cada caso, conforme a lo establecido en los Términos y Condiciones.</p>
      <p><em>Vinculadas y/o Relacionadas</em>. Corresponde a cualquier sociedad vinculada, matriz, filial, subsidiaria, aliada y subordinada, en caso de existir.</p>

      <Sec n={3} title="Principios Rectores" />
      <p>La Política se regirá por la aplicación de los siguientes principios de manera armónica e integral:</p>
      <p><em>Principio de finalidad</em>. El Tratamiento de Datos Personales obedecerá a una finalidad legítima que se informará al Titular.</p>
      <p><em>Principio de libertad</em>. El Tratamiento de Datos Personales solo puede ejercerse con el consentimiento previo, expreso e informado del Titular. Los Datos Personales no serán obtenidos o divulgados sin previa autorización, o en ausencia de mandato legal o judicial que releve el consentimiento.</p>
      <p><em>Principio de veracidad</em>. La información sujeta a tratamiento debe ser veraz, completa, exacta, actualizada, comprobable y comprensible. Se prohíbe el Tratamiento de Datos Personales parciales, incompletos, fraccionados o que induzcan a error.</p>
      <p><em>Principio de seguridad</em>. La información sujeta a Tratamiento se manejará con las medidas técnicas, humanas y administrativas comercialmente razonables, que sean necesarias para otorgar seguridad a los registros evitando su adulteración, pérdida, consulta, uso o acceso no autorizado o fraudulento.</p>
      <p><em>Principio de confidencialidad</em>. Todas las personas que intervengan en el Tratamiento de Datos Personales están obligadas a garantizar la reserva de la información, inclusive después de finalizada su relación con alguna de las labores que comprende dicho tratamiento.</p>
      <p><em>Principio de Transparencia</em>. En el Tratamiento de Datos Personales se garantizará el derecho del Titular a obtener del Responsable del Tratamiento o del Encargado del Tratamiento, en cualquier momento y sin restricciones, información acerca de la existencia de datos que le conciernan.</p>
      <p><em>Principio de Acceso y Circulación Restringida</em>. El tratamiento de Datos Personales está sujeto a los límites que se derivan de la naturaleza de los mismos, de las disposiciones de ley. En este sentido, su tratamiento solo podrá hacerse por personas autorizadas por el Titular y/o por las personas previstas en ley.</p>
      <p><em>Principio de Confidencialidad</em>. Todas las personas que intervengan en el Tratamiento de Datos Personales que no tengan la naturaleza de Datos Públicos están obligadas a garantizar la reserva de la información, inclusive después de finalizada su relación con alguna de las labores que comprende el tratamiento, pudiendo solo realizar suministro o comunicación de Datos Personales cuando ello corresponda al desarrollo de las actividades autorizadas en la ley y en los términos de la misma.</p>

      <Sec n={4} title="Tratamiento y Finalidad" />
      <p>Logra realizará el Tratamiento de los Datos Personales para las finalidades informadas al momento en que éstos sean recolectados y que sea previa y expresamente autorizada por parte del Titular. Así mismo, los Encargados o terceros que tengan acceso a los Datos Personales por virtud de la ley o contrato, mantendrán el Tratamiento dentro de las siguientes finalidades:</p>
      <It m="(a)">Ejecutar la relación contractual existente con proveedores, terceros y Usuarios de su Plataforma, incluida el pago de obligaciones contractuales;</It>
      <It m="(b)">Registrar la información de proveedores, terceros y Usuarios de la Plataforma y el registro de cada uno en la Base de Datos;</It>
      <It m="(c)">Envío de información a entidades gubernamentales o judiciales por solicitud expresa de la misma;</It>
      <It m="(d)">Soporte en procesos de auditoría externa/interna;</It>
      <It m="(e)">Con propósitos de seguridad o prevención de fraude;</It>
      <It m="(f)">Gestionar trámites (solicitudes, quejas, reclamos);</It>
      <It m="(g)">Incluir en sus Bases de Datos y darle Tratamiento a la información adquirida en virtud de la relación existente entre los Titulares y Logra;</It>
      <It m="(h)">Mejorar los servicios de Logra a través del desarrollo de estudios de mercado sobre el comportamiento, necesidades, gustos e intereses de los Usuarios sobre la Plataforma;</It>
      <It m="(i)">Aprendizaje del algoritmo para mejorar el funcionamiento de la plataforma.</It>
      <It m="(j)">Realizar estudios poblacionales, geográficos, demográficos, de comportamiento, hábitos de compra, gustos y preferencias de los Usuarios, que permitan desarrollar campañas publicitarias, de mercado y análisis estadísticos. Dicha información podrá ser comercializada a terceros sin que con ello se incluyan Datos Personales ni Datos Privados;</It>
      <It m="(k)">Mejorar de las iniciativas comerciales y promocionales de Logra;</It>
      <It m="(l)">Realizar gestión de estadísticas internas, con el objetivo de hacer seguimiento a los servicios ofrecidos;</It>
      <It m="(m)">Enviar información y/o comunicaciones por cualquier medio que hubiese sido brindado por el Titular a Logra (mensajes de texto al teléfono celular, redes sociales, correo electrónico entre otros) sobre nuevos servicios, cambio en el servicio y tarifas, recordatorios de pago, promociones, eventos e información de interés para los Usuarios;</It>
      <It m="(n)">Compartir los Datos Personales con los proveedores de servicios y en general terceros para el cumplimiento de las obligaciones de Logra. Logra no se hace responsable por el uso indebido que estas personas o entidades puedan darle a la información;</It>
      <It m="(o)">Suministrar los Datos Personales de los Usuarios a las entidades que intervengan en la resolución de disputas entre los mismos, tales como: compañías de seguros, amigables componedores o tribunales de arbitraje o tribunales competentes para solucionar tales disputas;</It>
      <It m="(p)">Transferir los Datos Personales de los Usuarios para fines operativos, logísticos y publicitarios a sus accionistas, empresas Vinculadas, Aliadas y/o Relacionadas.</It>
      <It m="(q)">Darle Tratamiento a la información en medios físicos y digitales, asegurando que estén correctamente utilizados por parte de Logra;</It>
      <It m="(r)">Contactar y/o enviar información, por cualquier medio, sobre servicios que Logra considere pueden ser de interés por parte del Titular. Así como envío de cualquier otro tipo de comunicaciones  y  actividades  relacionadas  con  el  objeto  social  de Logra;</It>
      <It m="(s)">La información suministrada por el Usuario, será utilizada por Logra para efectos de facturación (en caso de aplicar) y demás efectos tributarios, en este caso será compartida con las entidades del Estado encargadas de desarrollar, supervisar o gestionar dicha labor;</It>
      <It m="(t)">Contactar al Titular en el evento que se genere algún tipo de problema o inconveniente con los Datos Personales;</It>
      <It m="(u)">Manejo de la facturación y recaudo de cartera;</It>
      <It m="(v)">Envío, recepción de mensajes de texto, correos electrónicos y/o otros con fines comunicativos, publicitarios y/o de atención al cliente, con el fin de mantener un contacto personalizado con los Usuarios;</It>
      <It m="(w)">Acceder a los Datos Personales contenidos en la base de datos de terceros operadores de información para: (a) llevar a cabo la elaboración de puntajes (scores) crediticios, herramientas de validación de ingresos, herramientas predictivas de ingresos, herramientas para evitar el fraude, la suplantación y en general, adelantar una adecuada gestión del riesgo crediticio y (b) compararla, contrastarla y complementarla con la información financiera, comercial, crediticio, de servicios y obrante en centrales de información crediticia y/o operadores de bases de datos de información financiera, comercial, crediticia, entre otros;</It>
      <It m="(x)">Reportar a las centrales de información, sobre el cumplimiento o incumplimiento de las obligaciones por concepto de la prestación del servicio o por cualquier otra obligación que haya adquirido con Logra, o quien éste designe.</It>
      <It m="(y)">Transmitir o transferir los datos personales de los que es Responsable a terceros para efectos de cumplimiento de su relación contractual o para efectos de análisis de datos.</It>
      <It m="(z)">Transmitir o transferir los datos personales para: (a) llevar a cabo la elaboración de puntajes (scores) crediticios, herramientas de validación de ingresos, herramientas predictivas de ingresos, herramientas para evitar el fraude, la suplantación y en general, adelantar una adecuada gestión del riesgo crediticio y (b) compararla, contrastarla y complementarla con la información financiera, comercial, crediticio, de servicios y obrante en centrales de información crediticia y/o operadores de bases de datos de información financiera, comercial, crediticia, entre otros</It>

      <Sec n={5} title="Derecho de los Titulares" />
      <p>Los Titulares de los Datos personales tendrán derecho a:</p>
      <It m="(a)">Derecho de acceso. Solicitar, conocer, actualizar y rectificar sus Datos Personales que hayan sido objeto de Tratamiento, de manera gratuita.</It>
      <It m="(b)">Derecho de actualización. Conocer, actualizar y rectificar sus Datos Personales frente a Logra o a los Encargados del Tratamiento de los mismos. Este derecho se podrá ejercer frente a Datos Personales parciales, inexactos, incompletos, fraccionados, que induzcan a error, o aquellos cuyo Tratamiento esté expresamente prohibido o no haya sido autorizado.</It>
      <It m="(c)">Derecho de prueba.  Solicitar prueba de la existencia de la autorización otorgada a Logra, salvo cuando expresamente se exceptúe como requisito para el Tratamiento de acuerdo con la ley aplicable.</It>
      <It m="(d)">Derecho de información. Presentar solicitud correspondiente a Logra o al Encargado del Tratamiento sobre la información respecto al uso que se le ha dado a su Datos Personales.</It>
      <It m="(e)">Derecho de quejas y reclamos. El derecho a presentar ante la autoridad competente en la jurisdicción aplicable, quejas y/o reclamos.</It>
      <It m="(f)">Derecho de revocación. Revocar la autorización y/o solicitar la supresión de sus Datos Personales de las Bases de Datos, directamente o cuando la autoridad competente haya determinado que Logra no le dio a los Datos Personales un uso conforme a los usos y finalidades autorizados y siempre que no exista un deber legal o contractual que impida eliminarlos.</It>
      <It m="(g)">Derecho de conocimiento. Conocer las modificaciones a los términos de esta Política de manera previa a la implementación de las nuevas modificaciones o, en su defecto, de la nueva política de tratamiento de la información.</It>
      <It m="(h)">Derecho de supresión. Solicitar la supresión de sus Datos Personales de las Bases de Datos siempre y cuando no exista un deber legal o una obligación de carácter contractual en virtud de la cual no sea posible dicha supresión.</It>

      <Sec n={6} title="Deberes Responsables y Encargados" />
      <It m="6.1.">Deberes del Responsable del Tratamiento. Serán deberes del Responsable del Tratamiento de Datos Personales, los siguientes:</It>
      <It m="(a)">Solicitar y conservar, en las condiciones previstas en esta Política, copia de la respectiva autorización otorgada por el Titular;</It>
      <It m="(b)">Informar de manera clara y suficiente al Titular sobre la finalidad de la recolección y los derechos que le asisten por virtud de la autorización otorgada;</It>
      <It m="(c)">Informar a solicitud del Titular sobre el uso dado a sus Datos Personales;</It>
      <It m="(d)">Tramitar las consultas y reclamos formulados en los términos señalados en la presente Política;</It>
      <It m="(e)">Procurar que los principios de finalidad, libertad, veracidad, seguridad, confidencialidad, transparencia, acceso y circulación y confidencialidad estén presentes durante todo el Tratamiento de los Datos;</It>
      <It m="(f)">Conservar la información bajo las condiciones de seguridad necesarias para impedir su adulteración, pérdida, consulta, uso o acceso no autorizado o fraudulento;</It>
      <It m="(g)">Rectificar los Datos Personales cuando ello sea procedente;</It>
      <It m="(h)">Observar y dar cumplimiento a los derechos del Titular, según corresponda por la ley aplicable o de acuerdo con esta Política.</It>
      <Gap />
      <It m="6.2.">Deberes de los Encargados del Tratamiento. Sin perjuicio de cualquier otro deber u obligación de Encargado del Tratamiento de Datos Personales de acuerdo con sus propias políticas, serán deberes del Encargado del Tratamiento de Datos Personales los siguientes:</It>
      <It m="(a)">Establecer que el Responsable del Tratamiento esté autorizado para suministrar los Datos Personales que tratará como Encargado;</It>
      <It m="(b)">Garantizar al Titular, en todo tiempo, el pleno y efectivo ejercicio del derecho de hábeas data;</It>
      <It m="(c)">Conservar la información bajo las condiciones de seguridad necesarias para impedir su adulteración, pérdida, consulta, uso o acceso no autorizado o fraudulento;</It>
      <It m="(d)">Realizar oportunamente la actualización, rectificación o supresión de los datos;</It>
      <It m="(e)">Actualizar la información reportada por los Responsables del tratamiento dentro de los términos determinados por le ley aplicable;</It>
      <It m="(f)">Tramitar las consultas y los reclamos formulados por los Titulares en los términos señalados en la presente política;</It>
      <It m="(g)">Registrar en la base de datos la leyenda “reclamo en trámite” en la forma en que se establece en la Política;</It>
      <It m="(h)">Insertar en la base de datos la leyenda “información en discusión judicial” una vez notificado por parte de la autoridad competente sobre procesos judiciales relacionados con la calidad del Dato Personal;</It>
      <It m="(i)">Abstenerse de circular información que esté siendo controvertida por el Titular y cuyo bloqueo haya sido ordenado por la autoridad competente;</It>
      <It m="(j)">Permitir el acceso a la información únicamente a las personas autorizadas por el Titular o facultadas por la ley para dicho efecto;</It>
      <It m="(k)">Informar a la autoridad competente cuando se presenten violaciones a los códigos de seguridad y existan riesgos en la administración de la información de los Titulares;</It>
      <It m="(l)">Cumplir las instrucciones y requerimientos que imparta la autoridad competente en la jurisdicción aplicable.</It>

      <Sec n={7} title="Formas de Recolectar los Datos" />
      <It m="7.1.">Logra recolecta los Datos Personales de sus Usuarios a través de la Plataforma y del uso de la misma.</It>
      <Gap />
      <It m="7.2.">Los Usuarios que realicen el proceso de creación de una cuenta en Logra deberán diligenciar el formulario correspondiente a sus Datos Personales y los datos de la Pyme a la que representan para poder acceder a su cuenta.</It>
      <Gap />
      <It m="7.3.">Logra también podrá recolectar Datos Personales de los Usuarios por el acceso a productos que se integran en aplicaciones y sitios web de terceros. Si el Usuario decide registrarse para obtener una cuenta utilizando sus credenciales de un servicio de terceros su nombre y dirección de correo electrónico nos serán facilitados según lo permita la configuración de su perfil en dicho servicio de tercero.</It>
      <Gap />
      <It m="7.4.">Cuando el Usuario interactúa con Logra a través de los Servicios, automáticamente recopilamos información sobre usted a través de cookies (pequeños archivos de texto colocados en su dispositivo), identificador de dispositivo móvil y otras tecnologías. Por favor, lea la sección quince (15) &quot;Cookies y Otras Herramientas Tecnológicas&quot; a continuación para obtener más información sobre cómo utilizamos las cookies y otras tecnologías. Cuando visita nuestros sitios web, nuestros servidores registran información (&quot;datos de registro&quot;), incluida la información que su navegador envía automáticamente cada vez que visita el sitio web. Estos datos de registro incluyen su dirección de Protocolo de Internet (&quot;IP&quot;) (desde la que entendemos el país desde el que se está conectando en el momento en que visita el Sitio), el tipo de navegador y su configuración, y la fecha y hora de su solicitud</It>
      <Gap />
      <It m="7.5.">En los casos en los que se trate de diligenciamiento de formularios, los Datos Personales que Logra podrá solicitar del Titular los siguientes datos, así como cualquier otro que estime pertinente:</It>
      <It m="●">Nombre completo del Titular;</It>
      <It m="●">Identificación o documento de identidad;</It>
      <It m="●">Fecha de nacimiento;</It>
      <It m="●">Nacionalidad;</It>
      <It m="●">Domicilio;</It>
      <It m="●">Dirección de contacto;</It>
      <It m="●">Teléfonos de contacto;</It>
      <It m="●">Correo electrónico;</It>
      <It m="●">Datos bancarios, tarjetas de crédito y cuentas bancarias en caso de aplicar;</It>
      <It m="●">Información financiera;</It>
      <It m="●">Información Profesional;</It>
      <It m="●">Información Tributaria;</It>
      <It m="●">Información de referencias bancarias y/o comerciales;</It>
      <It m="●">Certificado de Existencia y Representación Legal o documentos de constitución, dependiendo de la jurisdicción aplicable en caso de tratarse de una persona jurídica.</It>

      <Sec n={8} title="Autorización y Consentimiento del Titular" />
      <It m="8.1.">Logra sólo debe solicitar autorización de acuerdo con los requisitos de la ley aplicable. La autorización del Titular de la información no será necesaria cuando lo determine la ley aplicable.</It>
      <It m="8.2.">En el evento de una venta, fusión, consolidación, cambio en el control societario, transferencia de activos, reorganización o liquidación de Logra y/o sus entidades Vinculadas y/o Relacionadas, Logra podrá transferir los Datos Personales de los Titulares a las partes involucradas, para lo cual por medio de la aceptación del presente documento Logra se entiende queda facultada para realizarlo.</It>

      <Sec n={9} title="Procedimiento de Consulta, Ratificación y Reclamos" />
      <It m="9.1.">Consulta.  Las consultas y solicitudes de los Titulares serán atendidas en el término determinado por la ley aplicable, contado a partir de la fecha de recibo de las mismas. En caso de que no sea posible resolver la consulta dentro de este término, el Titular será informado de dicha situación en la dirección de notificación que haya incluido en la respectiva consulta, y el término de respuesta se podrá extender hasta por el término determinado por la ley aplicable.  La respuesta a las consultas o reclamos que los Titulares presenten podrán ser entregadas por cualquier medio físico o electrónico.</It>
      <Gap />
      <It m="9.2.">Rectificaciones y Reclamos. Cuando el Titular de la Información advierta un presunto incumplimiento por parte de Logra de sus deberes en materia de Protección de Datos Personales y deseen ejercer sus derechos contenidos en la legislación aplicable y en la presente Política, podrán presentar un reclamo ateniéndose a los siguientes requisitos y procedimiento:</It>
      <It m="(a)">Para la radicación y atención de su Rectificación o Reclamo, se deberá presentar por solicitud por escrito la cual debe contener la siguiente información:</It>
      <It m="i.">Nombre completo y apellidos;</It>
      <It m="ii.">Datos de contacto (dirección física y/o electrónica y teléfonos de contacto);</It>
      <It m="iii.">Medios para recibir respuesta a su solicitud;</It>
      <It m="iv.">Motivo(s)/hecho(s) que dan lugar al reclamo con una breve descripción del derecho que desea ejercer (conocer, actualizar, rectificar, solicitar prueba de la autorización otorgada, revocarla, suprimir, acceder a la información);</It>
      <It m="v.">Firma (si aplica);</It>
      <It m="vi.">Número de identificación;</It>
      <It m="vii.">Copia de los documentos que se requiera hacer valer, en caso de aplicar.</It>
      <p>La radicación de solicitud se formulará mediante comunicación dirigida al área encargada de Logra según se indica más adelante, con la identificación del Titular, la descripción de los hechos que dan lugar a la solicitud, la dirección y acompañado de los documentos que soporten la solicitud de ser aplicable.</p>
      <It m="(b)">Si la solicitud resulta incompleta, Logra requerirá al interesado dentro del término determinado por la ley aplicable para que complete y subsanase su petición. Transcurridos el término determinado por la ley aplicable desde la fecha del requerimiento, sin que el solicitante presente la información requerida, se entenderá que ha desistido de la Rectificación y/o Reclamo.</It>
      <It m="(c)">Una vez recibido la solicitud completa, se incluirá en la Base de Datos una leyenda que diga “reclamo en trámite” y el motivo del mismo, actividad que deberá realizarse en el término de la ley aplicable. Dicha leyenda deberá mantenerse hasta que la solicitud sea decidida.</It>
      <It m="(d)">En el caso de quien reciba la solicitud no sea competente para resolverlo, se procederá a un traslado a quien sí lo sea para que resuelva en el término de la ley aplicable, y le deberá notificar al solicitado de tal hecho.</It>
      <It m="(e)">Logra resolverá la solicitud en el término máximo de la ley aplicable contados a partir del día siguientes de recibo del mismo. En caso de que no sea posible resolver la consulta dentro de este término, el solicitante será informado de la demora, los motivos y la fecha de respuesta en la dirección de notificación que haya incluido en el respectivo reclamo. En todo caso, el término de respuesta no podrá superar el término máximo de la ley aplicable. La respuesta a los reclamos que los Titulares presenten podrá ser efectuadas por cualquier medio físico o electrónico.</It>
      <Gap />
      <It m="9.3.">Logra ha designado un área especializada para la recepción y atención de quejas y reclamos. Así mismo, lo ha designado como responsable de la protección de sus datos, en el evento de alguna duda o inquietud sobre la presente Política de Privacidad o el Tratamiento y uso de los Datos Personales favor dirigir sus consultas, peticiones quejas o reclamos a:</It>
      <p className="lg-pre">{"Nombre: Ianis Defendini\n Dirección:  Mare pond place 1279, 28443 Hampstead North Carolina USA\n Correo Electrónico: soporte@logra.io\n Página Web: logra.io\n Teléfono: +57 (320) 441-5620"}</p>

      <Sec n={10} title="Trasmisión Nacional e Internacional" />
      <p>Logra podrá trabajar con terceros proveedores, tanto nacionales como internacionales, para facilitar los servicios que ofrece a sus Usuarios así como para desarrollar actividades en cumplimiento de su objeto social. Logra podrá hacer transmisión o transferencia a dichos proveedores para que ejecuten las actividades derivadas de los Servicios de Logra. Las transferencias se harán en cumplimiento de la ley aplicable.</p>
      <p>A este respecto y a los efectos de lo previsto en el numeral 7.3, en Logra tenemos el compromiso de proteger los Datos Personales. Sin embargo, esta Política solo aplica a la Plataforma. Nuestra Plataforma también podrían contener links a páginas web de terceros. No confirmamos ni asumimos responsabilidad alguna por el contenido de páginas web o recursos de terceros y nuestra Política no aplica a las páginas de otra titularidad, incluso si se accede a éstas a través de un enlace desde nuestra Plataforma. Deberá revisar las políticas de privacidad de páginas de terceros antes de proporcionar cualquier información. Nosotros no compartimos los Datos Personales con terceros a menos que usted consienta expresamente. Por favor, lea atentamente esta Política a fin de comprender cómo recopilamos, utilizamos, compartimos y protegemos la información en línea.</p>

      <Sec n={11} title="Confidencialidad de los Datos Personales" />
      <p>La información correspondiente a los Datos Personal suministrada por los Titulares será utilizada únicamente por Logra, sus accionistas, Vinculadas y/o Relacionadas y los terceros autorizados para tales fines, conforme a lo establecido en la presente Política de Privacidad. Los Datos Personales no serán destinados, en evento alguno, a propósitos distintos de aquellos para los cuales fue suministrada, razón por la cual Logra procurará proteger la privacidad de los Datos Personales y conservarla bajo las condiciones de seguridad necesarias para impedir su adulteración, pérdida, consulta, uso o acceso no autorizado o fraudulento, así como el respeto de los derechos de los Titulares de la misma.</p>
      <p>Si por cualquier circunstancia una autoridad competente solicita sea revelada la información correspondiente a los Datos Personales, que se encuentre en poder de Logra y, en consecuencia, sea su obligación legal suministrar la misma, Logra procederá a entregar dichos Datos Personales, situación que los Titulares aceptan y autorizan a Logra para este efecto, en todo caso el Titular de dicha información será informado.</p>

      <Sec n={12} title="Seguridad de los Datos" />
      <p>Logra dispone de medidas de seguridad para proteger la información personal recibida, dichas medidas se encuentran ajustadas para cumplir con la normatividad aplicable.</p>
      <p>Teniendo en cuenta que los servicios prestados por Logra se desarrollan a través de internet y que del mismo modo la información personal es recolectada, pueden existir interceptaciones ilegales o violación a los sistemas y bases de datos por parte de personas inescrupulosas o no autorizadas.</p>
      <p>En estos eventos Logra no se responsabiliza por la indebida utilización de la información obtenida por esos medios.</p>

      <Sec n={13} title="Tratamiento de Datos Personales de Menores de Edad" />
      <p>Para ser Usuario de Logra, la persona deberá ser mayor de edad. En ningún caso Logra efectuará el Tratamiento de Datos Personales de niños, niñas y adolescentes. Si fuera el caso, no obstante, realizaría el Tratamiento de Datos Personales respetando el interés superior de los mismos y asegurando, en todos los casos, el respeto de sus derechos fundamentales y garantías mínimas.</p>

      <Sec n={14} title="Transmisión y Transferencia de Datos Personales" />
      <p>Logra está plenamente facultado para realizar Transmisión y/o Transferencia de Datos Personales a sus accionistas, empresas Vinculadas, Aliadas y/o Relacionadas, así como a terceros y a autoridades judiciales o administrativas, sean personas naturales o jurídicas, colombianas o extranjeras, en aquellos eventos en los cuales la Transferencia o Transmisión de los datos sea necesaria para llevar a cabo los usos y actividades autorizadas por los Titulares, así como para fines operativos, logísticos y publicitarios. En todos los eventos, dicha información se conservará bajo estricta confidencialidad y será sometida a un Tratamiento riguroso, respetando los derechos y las garantías de sus Titulares.</p>

      <Sec n={15} title="Cookies y Otras Herramientas Tecnológicas" />
      <p>En Logra usamos cookies y tecnologías similares para personalizar y mejorar la experiencia de nuestros clientes, así como para mostrarle publicidad online relevante. Las cookies son pequeños archivos de texto que contienen un identificador único que se almacena en el computador o aparato móvil a través del cual el Usuario accede a la Plataforma, de manera que aquellos pueden ser reconocidos cada vez que usted utilice la Plataforma.</p>
      <p>El Titular de los Datos Personales puede elegir deshabilitar en cualquier momento las cookies que utilizamos a excepción de aquellas necesarias exclusivamente para el funcionamiento de la Plataforma. Sin embargo, esto podría restringir su uso de los servicios prestados por Logra y limitar su experiencia en la Plataforma. El uso de cookies no contiene ni afecta Datos Personales y no representa peligro de virus.</p>

      <Sec n={16} title="Modificación y/o Actualización de la Política" />
      <p>Cualquier cambio sustancial en la Política de Tratamiento, se comunicará de forma oportuna a los Titulares de los Datos Personales a través del correo electrónico que hubiesen registrado en la Plataforma y/o a través de la Plataforma.</p>

      <Sec n={17} title="Identificación del Responsable" />
      <p className="lg-pre">{"Razón Social: DIGITIZEME INC.\nDomicilio: Mare pond place 1279, 28443 Hampstead, North Carolina, USA\nCorreo Electrónico: soporte@logra.io\nTeléfono: +57 (320) 441-5620"}</p>

      <Sec n={18} title="Vigencia" />
      <p>La presente Política para el Tratamiento de Datos Personales rige a partir del 8 febrero de 2023.</p>
      <p>Las Bases de Datos en las que se registrarán los Datos Personales tendrán una vigencia igual al tiempo en que se mantenga y utilice la información para las finalidades descritas en esta Política. Una vez se cumplan esas finalidades y siempre que no exista un deber legal o contractual de conservar su información, sus datos serán eliminados de nuestras Bases de Datos.</p>
    </section>
  );
}

export default LegalAviso;
