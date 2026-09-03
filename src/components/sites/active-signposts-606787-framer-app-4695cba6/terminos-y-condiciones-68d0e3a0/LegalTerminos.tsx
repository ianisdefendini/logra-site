import type { ReactNode } from "react";

/*
 * Términos y Condiciones — legal document page content.
 * Cloned from https://active-signposts-606787.framer.app/terminos-y-condiciones
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
.logra-legal .lg-b {
  display: inline-block;
  min-width: 40px;
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

function Bt({ children }: { children: ReactNode }) {
  return (
    <p>
      <span className="lg-b">●&nbsp;</span>
      {children}
    </p>
  );
}

function Gap() {
  return <div className="lg-gap" aria-hidden="true" />;
}

export function LegalTerminos() {
  return (
    <section className="logra-legal">
      <style>{css}</style>

      <header className="lg-head">
        <span className="lg-pill">
          <span className="lg-dot">•</span>
          Términos y Condiciones
        </span>
        <h1>Términos y Condiciones</h1>
        <p className="lg-updated">Última actualización: 8 febrero de 2023.</p>
      </header>

      <h3>Términos y condiciones</h3>
      <p>Los términos y condiciones de uso (los “Términos y Condiciones” o los “Términos”) que se incluyen en este documento son aplicables a los Usuarios, quienes deseen adquirir la prestación de los Servicios (como se define más adelante) a través de la Plataforma.</p>
      <p>Estos Términos y Condiciones constituyen un contrato válido entre los Usuarios como clientes actuales o futuros Digitizeme Inc. (“Logra”, “nosotros”, o “nuestro”), sus afiliadas y vinculadas y rigen el uso de los contenidos y Servicios ofrecidos a través de la Plataforma.</p>
      <p>Todos los términos en mayúscula que no se definan expresamente en estos Términos y Condiciones, tendrán el significado que se asigna a los mismos en la Política de Privacidad, incluyendo, principalmente, los términos “Usuario” y “Plataforma”.</p>
      <p>Cualquier persona que desee acceder o hacer uso de la Plataforma o los Servicios que en ésta se ofrecen, podrá hacerlo exclusivamente sujetándose a los presentes Términos y Condiciones, así como a la Política de Privacidad.</p>
      <p>Al utilizar la Plataforma, el Usuario acepta y se obliga a cumplir los siguientes Términos y Condiciones de uso. Por favor, revise estos Términos y Condiciones de manera detallada y cuidadosa. En todo caso, cualquier persona que no acepte los presentes Términos y Condiciones, deberá abstenerse de utilizar la Plataforma y/o adquirir los Servicios que en su caso sean ofrecidos.</p>

      <Sec n={1} title="Servicios de Logra" />
      <p>Logra proporciona software y servicios que recomiendan a las pequeñas y medianas (Pymes) empresas, estrategias y herramientas a implementar paso a paso, para ayudarles a crecer o innovar en su día a día y a diagnosticar e identificar los retos de negocio o desafíos que enfrentan las Pymes, así como, guías en cómo implementar las acciones, herramientas, soluciones y mejoras prácticas para el crecimiento de las empresas. Adicionalmente, Logra conecta a las Pymes con expertos, consultores y proveedores de servicios dentro de la plataforma (los “Servicios”). Los Servicios también se refieren a los productos, aplicaciones y servicios de Logra, en cada caso en cualquier formato en que puedan ofrecerse ahora o en el futuro.</p>
      <p>Entre los Servicios, Logra ofrece una amplia gama de funcionalidades que están igualmente sujetas a estos Términos y Condiciones, entre los que se incluyen:</p>
      <Bt>Sitios web;</Bt>
      <Bt><em>Dashboards</em> y funcionalidades de centralización de información y servicios;</Bt>
      <Bt>Plataformas para Pymes, Expertos e instituciones (o entidades de desarrollo económico);</Bt>
      <Bt>Servicios integrados, insertados en aplicaciones o sitios web de otras empresas.</Bt>
      <p>Todo el contenido, herramientas y funcionalidades de la Plataforma son de titularidad de Logra o esta última tiene autorización para publicarla en la Plataforma. Por lo anterior, toda información contenida en esta Plataforma tales como, imágenes, texto, creaciones, mensajes, ilustraciones, gráficos, logos, diseños, fotografías, iconos, programa, datos, música, sonidos, videos, bases de datos o cualquier otro material son propiedad de Logra o de terceros que han autorizado a Logra su uso y explotación. Por lo tanto, no se permitirá de ninguna manera al Usuario copiar, reproducir, distribuir, transmitir, publicar total o parcialmente o utilizar por cualquier otro medio, el material de este sitio sin previa autorización de Logra. De igual manera, no se autoriza el redireccionamiento a este sitio o copia en espejo sin previa autorización. Logra respeta los derechos de autor de otros sitios y por lo tanto solicita a la comunidad navegante de Internet que aplique la misma teoría. Frente a los redireccionamientos que puedan generarse desde la Plataforma, Logra no se responsabilizará por ningún contenido, inconveniente, error o cualquier particularidad que pueda ocurrir en dicha URL.Logra puede cancelar las cuentas de los Usuarios unilateralmente y sin previo aviso, siempre que considere que ha existido violación de sus derechos de propiedad intelectual y/o de terceros y podrá iniciar acciones legales contra los violadores de estos derechos.</p>
      <p>El material de la Plataforma es suministrado sobre la base de &quot;tal como es&quot;, por lo tanto, Logra no otorga ningún tipo de garantía, expresa o implícita, sobre dicho material. Logra advierte a los Usuarios que la información de la Plataforma puede contener errores o inexactitudes, no estar completa o actualizada. Por ello, Logra se reserva el derecho de corregir cualquier error, omisión o inexactitud, cambiar o actualizar la misma en cualquier momento y sin previo aviso.</p>
      <p>La Plataforma, puede contener enlaces a otros sitios para propósitos de referencia y apoyo. De igual manera, si el usuario tuviere sistemas contables o ERP’s, de uso simultaneo con la Plataforma, el Usuario reconoce que Logra no tiene ningún control o administración sobre estos sitios, por ende, no se responsabiliza de daños o perjuicios que causen estos sitios, el Usuario acepta que Logra no es responsable en caso de daños causados directa o indirectamente a su equipo al entrar a estos sitios.</p>
      <p>Si hacemos algún cambio sustancial que impacte negativamente tu uso en nuestros Servicios, o si dejamos de ofrecer un servicio, lo notificaremos a los Usuarios registrados con una antelación razonable, excepto en situaciones de urgencia, como en las que se busca prevenir abusos, cumplir con obligaciones legales o resolver problemas de seguridad y funcionamiento.</p>
      <p>Algunos de los Servicios se han diseñado para que el Usuario registrado pueda cargar, subir, transferir, almacenar, enviar, recibir o compartir su contenido. El Usuario registrado no tiene ninguna obligación de proporcionar ningún contenido a la Plataforma. El Usuario puede elegir libremente el contenido que quiere facilitarnos. Si el Usuario decide cargar, subir o compartir contenido, deberá asegurarse de que tiene los derechos y autoridad necesarios para ello y de que dicho contenido no viola la ley aplicable. Logra no se hará responsable en ningún caso por dicho contenido</p>

      <Sec n={2} title="Licencia de Uso" />
      <p>El contenido de los Usuarios es y será de su propiedad, lo que significa que seguirá siendo titular de los derechos de propiedad intelectual que tengas sobre dicho contenido. El Usuario conservará los derechos de propiedad intelectual sobre el contenido que cree. A través de estos Términos y Condiciones, el Usuario registrado concede una licencia a Logra y la Plataforma sobre su contenido en caso que resulte necesario para la adecuada prestación de los Servicios.</p>
      <p>Esta licencia permite a Logra, con respecto al contenido que carga el Usuario registrado, titular de una cuenta, en la Plataforma:</p>
      <It m="(a)">Alojar, reproducir, distribuir, comunicar y usar el contenido del Usuario registrado, para guardarlo en nuestros sistemas y permitir que los Usuarios registrados puedan acceder al contenido desde cualquier lugar;</It>
      <It m="(b)">Publicar, ejecutar o mostrar públicamente el contenido, si se ha hecho visible para otros Usuarios;</It>
      <It m="(c)">Modificar o crear obras derivadas que estén basadas en el contenido; por ejemplo, mediante un cambio de formato;</It>
      <It m="(d)">Sublicenciar estos derechos a: (i) otros usuarios, para permitir que los servicios funcionen tal y como se han diseñado como fotos; (ii) nuestros contratistas, que han firmado contratos con nosotros de acuerdo con los presentes términos, únicamente para las finalidades específicas que se describen en la Política de Privacidad;</It>
      <It m="(e)">Gestionar y mejorar los Servicios. Esto incluye el uso de sistemas automatizados y de algoritmos para analizar el contenido. Los análisis se realizan cuando el contenido se envía, se recibe y cuando se almacena;</It>
      <It m="(f)">Utilizar contenido compartido de forma pública para promover los Servicios;</It>
      <It m="(g)">Alojar, reproducir, distribuir, comunicar y usar el contenido del Usuario registrado, para evitar o resolver problemas técnicos, de servicios, de seguridad o de asistencia.</It>
      <It m="(h)">Alojar, reproducir, distribuir, comunicar y usar el contenido del Usuario registrado, para evitar o resolver problemas técnicos, de servicio, de seguridad o de asistencia.</It>

      <Sec n={3} title="Uso de los Servicios; cuenta de Logra" />
      <p>En los casos en los que el Usuario sea una persona natural, deberá tener 18 años o más para usar la Plataforma. Si reside en una jurisdicción que restringe el uso de la Plataforma por motivos de edad o restringe la capacidad de suscribir contratos como el presente por motivos de edad, deberá respetar estos límites de edad y abstenerse de utilizar la Plataforma.</p>
      <p>Si un Usuario no tiene la edad mínima para poder gestionar su propia cuenta de Logra debe contar con el permiso de su padre, madre, representante o tutor legal para utilizar una cuenta de Logra. Si un padre, madre, representante o tutor legal permite a su hijo/a que utilice los Servicios, se aplican estos Términos y Condiciones y es responsable de la actividad que realice en la Plataforma.</p>
      <p>Si el Usuario registrado cumple con los requisitos de edad mínima, puede crear una cuenta de Logra. Para el correcto funcionamiento de los Servicios, es obligatorio tener una cuenta de Logra, proporcionando su nombre legal completo, una dirección de correo electrónico válida y cualquier otra información necesaria para completar el proceso de registro. Como regla general, sus datos de acceso pueden ser utilizados hasta un máximo de cinco sesiones simultáneas; siempre, sin embargo, que Logra pueda reducir este límite a su discreción para hacer frente a problemas conocidos o sospechados de uso compartido inapropiado de licencias.</p>
      <p>El Usuario registrado es responsable del uso de la cuenta de Logra, y esto incluye tomar las medidas necesarias para mantener la cuenta protegida. Recomendamos que el Usuario registrado use periódicamente la revisión de seguridad.</p>
      <p>Organizaciones, como Pymes, MiPymes y Startups, utilizan nuestros Servicios. Para usar nuestros Servicios en nombre de una organización:</p>
      <It m="(a)">Es necesario que un representante autorizado de dicha organización acepte los presentes Términos;</It>
      <It m="(b)">El administrador de la organización puede asignarle al Usuario una cuenta de Logra. Dicho administrador puede exigirle al Usuario el cumplimiento de otras normas, y puede tener la capacidad de acceder a la cuenta de Logra del Usuario o de inhabilitarlo.</It>
      <p>En los casos en los que el Usuario corresponda a una persona jurídica, deberá estar debidamente constituida y la persona natural encargada de la cuenta Logra deberá tener las facultades para administrar la cuenta. Así mismo, el Usuario cuenta con las autorizaciones requeridas para obligarse conforme a estos Términos y Condiciones.</p>
      <p>En todo caso, será responsabilidad de la empresa el manejo que la persona asignada le dé a la cuenta de Logra y Logra tendrá la facultad de deshabilitarlo si encuentra un manejo inadecuado de la misma.</p>
      <p>Para la prestación de nuestros Servicios, en ocasiones enviamos anuncios de servicio y otro tipo de información. Para mayor información sobre las distintas formas de comunicación que empleamos, consulte nuestra Política de Privacidad.</p>

      <Sec n={4} title="Modificaciones, Suspensión y Notificaciones" />
      <It m="4.1.">Modificaciones. Logra se reserva el derecho de modificar y revisar los Términos y Condiciones en cualquier momento, sin previo aviso, por cualquier motivo. Cuando se implemente una modificación, Logra publicará los Términos y Condiciones actualizados (“Versión Actualizada”) en la Plataforma para que los Usuarios puedan leer los cambios correspondientes.</It>
      <p>Logra podrá notificar al Usuario en tal sentido, a través de la dirección de correo suministrada o mediante cualquier otro medio que Logra considere adecuado para tal fin. La Versión Actualizada entrará en rigor al momento de su publicación, pero no se aplicará en forma retroactiva. El acceso a la Plataforma y/o el uso de los Servicios por parte de Usuario después de la publicación de una Versión Actualizada constituirá en la aceptación tácita de dicha Versión Actualizada.</p>
      <p>Así mismo, Logra se reserva la posibilidad de modificar sin previo aviso el diseño, presentación y/o configuración de la Plataforma, así como algunos o todos los Servicios, y/o añadir servicios nuevos.</p>
      <Gap />
      <It m="4.2.">Suspensión y terminación. Logra se reserva el derecho de suspender o cancelar su cuenta o su acceso a cualquier Servicio o a la Plataforma, en cualquier momento y por cualquier motivo. Podemos agregar o eliminar, suspender, borrar, discontinuar o establecer condiciones para los Servicios o cualquier característica o aspecto de un Servicio. Tomaremos medidas razonables para notificarle respecto a la cancelación o estos otros tipos de cambios por correo electrónico o la próxima vez que intente acceder a su cuenta en la Plataforma. Podemos suspender de manera permanente o temporal el acceso a los Servicios o el acceso a la Plataforma sin previo aviso ni responsabilidad por cualquier motivo o sin motivo alguno.</It>
      <p>En caso de expiración, terminación o cancelación de la suscripción del Usuario, Logra podrá desactivar inmediatamente la cuenta del Usuario; sin embargo, en ningún caso dicha desactivación eximirá al Usuario de cualquier obligación de pagar las tasas devengadas o pagaderas a Logra o de cualquier responsabilidad relacionada con el uso del Servicio por parte del Usuario antes de dicha expiración, terminación o cancelación.</p>

      <Sec n={5} title="Responsabilidades del Usuario" />
      <It m="5.1.">Usted es el único responsable de mantener la confidencialidad su información de ingreso a la Plataforma y de restringir el acceso a los Servicios desde sus dispositivos compatibles, por lo tanto, Usted es absolutamente responsable de las actividades que ocurran bajo su cuenta de Logra. Usted acuerda notificar de forma inmediata a Logra acerca de cualquier hecho que permita suponer el uso indebido de la información contenida en su cuenta de Logra, tales como, robo, extravío, o acceso no autorizado a cuentas y/o contraseñas, con el fin de proceder a su inmediata cancelación. Usted tomará inmediatamente todas las medidas razonables para mitigar los efectos de una vulneración de seguridad y cooperará con Logra y proporcionará toda la información solicitada por Logra para remediar la vulneración. Logra no será responsable en ningún caso por cualquier pérdida o daño derivado de su falta de cumplimiento con los requisitos establecidos en la presente sección.</It>
      <Gap />
      <It m="5.2.">Es responsabilidad del Usuario utilizar la Plataforma de acuerdo con la forma en la que fue diseñada; en este sentido, queda prohibida la utilización de cualquier tipo de software que automatice la interacción o descarga de los contenidos o servicios proporcionados a través de la Plataforma sin el previo consentimiento de Logra. El Usuario se compromete a utilizar la información, contenida o Servicios ofrecidos a través de la Plataforma de manera lícita, sin contravenir lo dispuesto en los presentes Términos y Condiciones, la ley aplicable, la moral y/o el orden público, y se abstendrá de realizar cualquier acto que pueda suponer una afectación a los derechos de terceros, o perjudique de algún modo el funcionamiento de la Plataforma.</It>
      <Gap />
      <It m="5.3.">El Usuario se compromete a proporcionar información lícita, exacta y veraz siempre que le sea solicitada en la Plataforma. Por consiguiente, Logra no se responsabiliza por la inexactitud de los datos proporcionados por los Usuarios.</It>
      <Gap />
      <It m="5.4.">Deberes Generales. El Usuario se compromete a cumplir con los siguientes deberes generales:</It>
      <It m="(a)">No utilizará una cuenta que esté sujeta a cualquier derecho de una persona que no sea la propia sin la autorización adecuada. Así mismo, no perjudicará el funcionamiento adecuado de la red, ni tratará de dañar la Plataforma de ningún modo;</It>
      <It m="(b)">No copiará ni distribuirá la Plataforma ni ningún contenido sin el permiso escrito;</It>
      <It m="(c)">Cumplirá con toda la legislación aplicable de su país de residencia y del país, estado o ciudad en el que se encuentre al usar la Plataforma o el Servicio.</It>
      <It m="(d)">Utilizará los Servicios para beneficio de la empresa que representa y seguirá todas las instrucciones de uso que se presenten a medida que vaya utilizando cada una de las herramientas provistas por Logra.</It>
      <Gap />
      <It m="5.5.">El Usuario declara que no tiene obligaciones legales o contractuales, prohibiciones, gravámenes o limitaciones que afecten o impidan el uso adecuado de la Plataforma y/o los Servicios.</It>
      <Gap />
      <It m="5.6.">Logra se reserva el derecho a terminar inmediatamente el servicio y el uso de la Plataforma en caso de que incumpla alguna de las reglas y obligaciones anteriores.</It>

      <Sec n={6} title="Restricciones del Usuario" />
      <It m="6.1.">Los derechos otorgados al Usuario en los presentes Términos y Condiciones para el uso de la Plataforma están sujetos a ciertas restricciones. El derecho de uso que se concede con la contratación de los Servicios es intransferible, revocable, no exclusivo y limitado para el uso por parte del Usuario para los fines definidos por la naturaleza de los Servicios y no para su explotación o comercialización por parte del Usuario. Ningún Usuario puede ni debe permitirle a un tercero a realizar ninguna de las siguientes acciones, ya sea de forma directa o indirecta:</It>
      <It m="(a)">Acceder o supervisar cualquier material o información en algún sistema de Logra usando cualquier proceso manual o medios como robot, spider, scraper, integraciones, APIs disponibles o cualquier otro medio automatizado;</It>
      <It m="(b)">Violar las restricciones de cualquiera de los encabezados de exclusión de robots de los Servicios, utilizar vías alternativas, omisiones o evasiones de cualquiera de las limitaciones técnicas de los Servicios, usar cualquier herramienta para activar funciones o características que se encuentren desactivadas en los Servicios, o descompilar, desensamblar o aplicar técnicas de ingeniería inversa a los Servicios, descompilar o valerse de cualquier otro medio para tratar de descubrir el código fuente, código objeto de la estructura de la Plataforma, excepto en tanto esta restricción esté prohibida expresamente por la legislación pertinente;</It>
      <It m="(c)">Realizar o intentar realizar acciones que interfieran con el funcionamiento adecuado de los Servicios, impidan el acceso o el uso de los Servicios por parte de otros Usuarios o agreguen una carga no razonable o desproporcionadamente elevada a nuestra infraestructura;</It>
      <It m="(d)">Obtener o intentar obtener acceso a cualquier información confidencial de Logra o de otros Usuarios a través de cualquier medio. El uso de bots, códigos de automatización malware y/o similares que tenga como fin el acceso a o robo de información confidencial;</It>
      <It m="(e)">Utilizar la Plataforma para ejercer acciones de competencia desleal;</It>
      <It m="(f)">Copiar, reproducir, alterar, modificar, crear trabajos derivados, exhibir públicamente, reeditar, cargar, publicar, transmitir, revender o distribuir de alguna manera material, información o Servicios de Logra;</It>
      <It m="(g)">Transferir los derechos que a Usted se le otorguen en virtud de estos Términos y Condiciones;</It>
      <It m="(h)">Utilizar los Servicios para cualquier actividad o productos ilegales tanto nacionales como internacionales de cualquier manera que le exponga a algún perjuicio a Usted, a otros Usuarios de Logra a nuestros socios o a Logra; o</It>
      <It m="(i)">Utilizar los Servicios de otro modo excepto como se haya permitido expresamente conforme a estos Términos y Condiciones.</It>
      <It m="(j)">Intentar saturar o interrumpir los Servicios o la infraestructura de Logra imponiendo intencionadamente cargas irrazonables a nuestros sistemas (por ejemplo, utilizando métodos automatizados para enviar solicitudes a nuestros servidores a un ritmo superior al que podría enviar un usuario humano durante el mismo periodo de tiempo); o</It>
      <It m="(k)">interrumpir o interferir en el acceso de otros Usuarios finales o de cualquier host o red, lo que incluye, entre otros, el envío de virus, la sobrecarga, el envío de correo basura, el bombardeo de correo o la inundación de los Servicios, o la creación de contenidos mediante scripts diseñados para interferir o crear una carga indebida en los Servicios.</It>
      <Gap />
      <It m="6.2.">En el caso en el que Logra sospeche razonablemente que su cuenta de Logra se ha utilizado para un fin no autorizado, ilícito o delictivo, contamos con su autorización expresa para compartir información acerca de Usted, de su cuenta de Logra y de cualquiera de sus transacciones con las autoridades competentes.</It>
      <Gap />
      <It m="6.3.">Logra se reserva el derecho a terminar inmediatamente el servicio y el uso de la Plataforma en caso de que incumpla alguna de las reglas y obligaciones anteriores.</It>

      <Sec n={7} title="Pagos por el uso de los Servicios" />
      <It m="7.1.">Tarifas. Los Servicios se proporcionan a través de un plan mensual o anual. Las tarifas estarán incluidas directamente en la Plataforma y se aumentarán anualmente con base en el IPC del año inmediatamente anterior o en los términos que lo determine Logra, lo cual será notificado a los Usuarios oportunamente. En todo caso, las instituciones podrán realizar parte o totalidad del pago de la anualidad para sus redes de empresas, por lo tanto, los Usuarios Pymes invitados por dichas instituciones podrán beneficiar de planes de pago de forma gratuita.</It>
      <Gap />
      <It m="7.2.">Renovación automática. El Usuario acepta que su suscripción a los Servicios se renovará automáticamente de forma anual o mensual (la &quot;Fecha de Renovación&quot;) dependiendo del plazo elegido por el Usuario al suscribirse al Servicio. Por la presente, el Usuario autoriza a Logra a cobrar automáticamente al Usuario las tarifas aplicables en o después de cada Fecha de Renovación, a menos que la suscripción del Usuario al Servicio haya sido finalizada o cancelada.</It>
      <Gap />
      <It m="7.3.">Cálculo de las tarifas. Las tarifas se basan en períodos anuales o mensuales que comienzan en la Fecha de Inicio de la Suscripción del Usuario y finalizan en el aniversario anual o mensual de la misma (dependiendo de si el Usuario elige una suscripción anual o mensual).</It>
      <Gap />
      <It m="7.4.">Impuestos. Todas las tarifas excluyen todos los impuestos, gravámenes, derechos o tasas similares de cualquier naturaleza, incluidos, por ejemplo, los impuestos sobre el valor añadido, las ventas, el uso o las retenciones, gravables por cualquier jurisdicción (colectivamente “Impuestos”). El Usuario será responsable del pago de todos los Impuestos asociados con su compra de acceso al Servicio, excluyendo sólo aquellos impuestos que se basan en los ingresos netos de Logra. En caso de que el Usuario deba retener algún Impuesto en el momento del pago a Logra, el Usuario reembolsará a Logra dicha retención.</It>
      <Gap />
      <It m="7.5.">Suscripciones de prueba. Logra puede, a su elección, ofrecer a nuevos clientes una prueba gratuita limitada del Servicio, sujeta a estos Términos. Sin perjuicio de cualquier disposición en contrario en este documento, Logra tendrá derecho a rescindir la prueba gratuita de un Usurario en cualquier momento y por cualquier motivo. Ninguna organización o individuo tiene derecho a recibir más de una (1) prueba gratuita del Servicio.</It>
      <Gap />
      <It m="7.6.">Los montos por los servicios de Logra podrán ser pagados entre cualquiera de los siguientes métodos de pago, según Logra otorgue disponibilidad de los mismos: Tarjeta de Crédito, Tarjeta Débito o PSE.</It>
      <Gap />
      <It m="7.7.">Mora. Si no efectúa los pagos (no impugnados de buena fe) a su vencimiento conforme a estas Condiciones, y tras un impago continuado durante un periodo de quince (15) días calendario después de que le hayamos notificado por escrito y le hayamos dado la oportunidad de subsanarlo, podremos suspender la prestación del Servicio hasta que se reciba el pago y podremos cobrarle una comisión por demora sobre el importe vencido a partir de la fecha de vencimiento de dicho importe al tipo menor entre el 1,5% mensual o el tipo máximo permitido por la legislación aplicable, junto con nuestros costes incurridos en el cobro de dicho pago. Tenemos derecho a retener la ejecución y suspender la prestación del Servicio hasta que se abonen íntegramente todas las cantidades adeudadas que no hayan sido impugnadas. Logra se reserva el derecho de emprender acciones judiciales y extrajudiciales que estime pertinentes para obtener el pago del monto debido.</It>

      <Sec n={8} title="Política de Cancelación" />
      <p>El Usuario podrá́ terminar unilateralmente su cuenta Logra en la plataforma en cualquier momento que así lo desee, la cual se entenderá cancelada a las 4 semanas contadas desde la solicitud . Durante el periodo comprendido entre la fecha de solicitud de cancelación, el Cliente tendrá acceso a los Servicios y podrá hacer uso de los mismos. La cancelación de la cuenta de Logra implica la eliminación del contenido del Usuario. Logra no asumirá ninguna responsabilidad frente al Usuario por cualquier cancelación y/o suspensión de la cuenta de Logra o la eliminación del contenido del Usuario.</p>

      <Sec n={9} title="Acceso a la Plataforma" />
      <It m="9.1.">Logra no garantiza el acceso a la Plataforma, al contenido ni a los módulos, de tal forma no será responsable de que ésta se encuentre libre de errores, software malicioso, o que pueda causar algún daño a nivel de software o hardware en el equipo a través del cual el Usuario accede a la Plataforma. Logra tampoco se hace responsable de los daños que pudiesen ocasionarse por un uso inadecuado de la Plataforma y en ningún caso será responsable por las pérdidas, daños o perjuicios de cualquier tipo que surjan por el sólo acceso o utilización de la Plataforma.</It>
      <Gap />
      <It m="9.2.">Al utilizar los Servicios el Usuario acepta que: (a) es responsable de leer detenidamente los Términos y Condiciones antes de comprometerse a adquirir los Servicios; y (b) celebra un contrato legalmente vinculante para comprar los Servicios. Nos reservamos el derecho de cambiar nuestros precios en cualquier momento y de corregir los errores de precios que pueden ocurrir inadvertidamente. Información adicional sobre precios e impuestos sobre las ventas está disponible en la página de pagos en la Plataforma.</It>

      <Sec n={10} title="Política de Privacidad y Protección de Datos" />
      <It m="10.1.">Logra ha implementado medidas técnicas y organizativas que tienen como objetivo proteger su información contra destrucciones, pérdidas accidentales, alteraciones y contra el acceso, uso, modificación o divulgación no autorizados. Sin embargo, Logra no puede garantizar que terceros no autorizados no puedan sobrepasar esas medidas ni usar su información con fines indebidos. El Usuario reconoce que brinda su información bajo su propio riesgo y así mismo se compromete a adoptar las medidas necesarias que estén a su alcance para asegurar la privacidad de los datos personales recabados de forma que se garantice su seguridad, se evite su alteración, pérdida o tratamiento no autorizado.</It>
      <It m="10.2.">Los Usuarios deberán acogerse a la Política de Privacidad. Al utilizar cualquiera de nuestros Servicios, aceptan que nuestras prácticas de datos personales le apliquen de la manera en la que se establece en la Política de Privacidad. La Política de Privacidad explica cómo Logra maneja la información personal que los Usuarios nos proporciona cuando Logra hace uso de sus datos personales para proporcionarle los Servicios o para sus propios fines. Se le recomienda a los Usuarios que se familiaricen con la Política de Privacidad antes de usar la Plataforma y adquirir los Servicios.</It>
      <It m="10.3.">Logra se reserva el derecho a modificar su Política de Privacidad, de acuerdo con sus necesidades o de acuerdo con la legislación aplicable. El acceso o utilización de la Plataforma por parte del Usuario después de dichos cambios, implicará la aceptación de estos cambios.</It>

      <Sec n={11} title="Indemnidad" />
      <p>El Usuario, exonera de toda responsabilidad a Logra sus afiliadas y vinculadas y se obliga a mantener indemne a Logra y a nuestros respectivos empelados, directores, agentes, afiliados, vinculadas y representantes de cualquier reclamo, costo, pérdida, daño, juicio, evaluación de impuestos, multa, interés; perjuicio, daño, pasivo y/o contingencia (incluidos sin limitación honorarios razonables de abogados) que surjan de cualquier reclamo, acción, auditoría, investigación, indagación o en relación con los mismos, u otro procedimiento iniciado por cualquier persona o entidad que surja o se relacione con: (a) cualquier incumplimiento real o supuesto de sus declaraciones, garantías u obligaciones reconocidos en los presentes Términos y Condiciones; (b) el uso indebido o inapropiado de los Servicios; (c) la violación de cualquier derecho de terceros, inclusive cualquier derecho de privacidad, de publicidad o de propiedad intelectual; (d) la violación de cualquier ley, norma o reglamento en cualquier otro país; (e) el acceso y/o uso de los Servicios con su nombre único, contraseña u otro código de seguridad adecuado por otras partes;  (f) cualquier transacción, compra, producto o servicio con respecto al cual Logra le proporcione, o le haya proporcionado, servicios de procesamiento de pagos de conformidad con los Términos y Condiciones; (g) cualquier queja, reclamo, o perjuicio que llegaren a causar a sus clientes y/o terceros con la comercialización de sus productos y/o servicios ofertados; y, (h) el incumplimiento de cualquier disposición conforme a la protección del consumidor.</p>

      <Sec n={12} title="Limitación de responsabilidad de Logra" />
      <It m="12.1.">En ningún caso Logra sus afiliadas y vinculadas, ni su personal, ni cualquier parte involucrada en la producción de los Servicios será responsable por daños directos o indirectos, ni por las pérdidas intangibles que se originen por la violación de los presentes Términos y Condiciones.</It>
      <It m="12.2.">Logra responderá única y exclusivamente frente a terceros y frente al Usuario, en aquellos casos en que se demuestre culpa grave o dolo por parte de Logra en la causa que originó el daño o evento por el que se deba responder. De igual manera, Logra responderá única y exclusivamente hasta por el valor total de las facturas efectivamente pagadas por el Usuario durante el último año.</It>

      <Sec n={13} title="Ley aplicable y fuero" />
      <p>Estos Términos y Condiciones están regidos por la ley vigente en la República de Colombia. Cualquier controversia que se origine en contra de Logra con ocasión o como consecuencia de estos Términos, se resolverá ante los jueces y tribunales de la justicia ordinaria.</p>

      <Sec n={14} title="Vigencia" />
      <p>Los presentes Términos y Condiciones rigen a partir de febrero de 2023.</p>
    </section>
  );
}

export default LegalTerminos;
