import React, { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom"
import Footer from "../components/Footer";

import Register2 from "../img/register2.png"



import { Formik } from "formik";

import Input from "../components/Input";

function BisRegisterPage2() {

    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    const { singup } = useAuth()
    const navigate = useNavigate();

    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await singup(user.email, user.password)
            navigate("/register3")
        } catch (error) {
            console.log(error);

        }


    }



    return (
        <div className="h-screen">

            <div>

                <Header />

                <div>
                    <div className="md:sticky md:top-0 md:z-50 md:flex md:justify-center md:w-full bg-white">
                        <Link to="/" className="h-[70px]
                        flex justify-center items-center bg-[#fff] md:w-[125px] md:h-[89px] border-b-4 border-[#919191] text-[#464646] hover:bg-[#919191] hover:text-[#fff] cursor-pointer ">
                            <p className="text-[15px] font-semibold ">Inicio</p>
                        </Link>

                        <Link to="/pokedex" className="h-[70px]
                        flex justify-center items-center  bg-white md:w-[125px] md:h-[89px] border-b-4 border-red-500 hover:bg-red-500 text-[#464646] hover:text-[#fff] cursor-pointer">
                            <p className="text-[15px] font-semibold"> Pokédex</p>
                        </Link>

                        <div className="h-[70px]
                        flex justify-center items-center  bg-white md:w-[125px] md:h-[89px] border-b-4 border-orange-500  hover:bg-orange-500 text-[#464646] hover:text-[#fff] cursor-pointer">
                            <p className="text-[15px] font-semibold "> Aplicaciones</p>
                        </div>

                        <div className="h-[70px]
                        flex justify-center items-center  bg-white md:w-[125px] md:h-[89px] border-b-4 border-yellow-500 hover:bg-yellow-500 text-[#464646] hover:text-[#fff] cursor-pointer">
                            <p className="text-[15px] font-semibold ">Juegos de Cartas Coleccionables</p>
                        </div>

                        <div className="h-[70px]
                        flex justify-center items-center  bg-white md:w-[125px] md:h-[89px] border-b-4 border-green-500 hover:bg-green-500 text-[#464646] hover:text-[#fff] cursor-pointer">
                            <p className="text-[15px] font-semibold "> TV Pokémon</p>
                        </div>

                        <div className="h-[70px]
                        flex justify-center items-center  bg-white md:w-[125px] md:h-[89px] border-b-4 border-[#5dbef3] hover:bg-[#5dbef3] text-[#464646] hover:text-[#fff] cursor-pointer">
                            <p className="text-[15px] font-semibold "> Play! Pokémon</p>
                        </div>

                        <div className="h-[70px]
                        flex justify-center items-center  bg-white md:w-[125px] md:h-[89px] border-b-4 border-[#3d56f5] hover:bg-[#3d56f5] text-[#464646] hover:text-[#fff] cursor-pointer">
                            <p className="text-[15px] font-semibold "> Noticias</p>
                        </div>
                    </div>



                    <div className=" xl:flex xl:justify-between">
                        <Sidebar />


                        <div className="mt-[30px]  bg-[#fff]">

                            <div className="lg:flex lg:flex-col lg:mb-[200px] lg:items-center">

                                <div>
                                    <p className="text-[1.6em] text-[#999999]">Crea tu cuenta Club de Entrenadores Pokémon
                                    </p>
                                </div>
                                <div>

                                    <div className="mt-5">
                                        <img className="hidden md:block md:h-[60px]" src={Register2} alt="" />
                                    </div>


                                    <div className="md:flex">
                                        <div className="">

                                            <form onSubmit={handleSubmit}>

                                                <div className=" w-full h-[1200px] md:h-[1150px] bg-[#F2F2F2] mt-5 md:w-[600px] md:rounded-tl-lg lg:h-[900px] ">

                                                    <p className="text-[20px] text-[#616161]">Todos los campos son obligatorios.</p>


                                                    <div className="flex flex-col items-center md:flex-row md:justify-between mt-5">

                                                        <p
                                                            className="text-[20px] md:ml-5  text-[#212121] lg:text-[1.5em]">
                                                            Nombre de usuario
                                                        </p>

                                                        <Input
                                                            type="text"
                                                            name="name"
                                                      />

                                                    </div>

                                                    <div className="md:flex md:mr-5 md:flex-col md:items-end">

                                                        <div className='flex justify-center lg:justify-end '>
                                                            <button className='h-[44px] mt-2  rounded-md text-white w-[290px] hover:bg-[#0c6a8f] font-semibold lg:text-[1.2em] bg-[#30a7d7]' type="submit">
                                                                Comprobar disponibilidad
                                                            </button>
                                                        </div>

                                                        <div className="m-auto md:m-0 w-[290px]">
                                                            <p className="text-[#616161] text-[13px]"> Tu nombre de usuario es el nombre que usarás para iniciar sesión en tu cuenta. Sólo tú verás este nombre.
                                                            </p>
                                                        </div>
                                                    </div>


                                                    <div className="flex flex-col items-center md:flex-row md:justify-between md: mt-5">

                                                        <p
                                                            className="text-[20px] md:ml-5 text-[#212121] lg:text-[1.5em]">Contraseña</p>

                                                        <input
                                                            className="h-[40px] w-[290px] rounded md:mr-5 bg-[#313131] text-white "

                                                            onChange={handleChange}
                                                            type="password"                                                       
                                                            name="password"
                                                            id="password"
                                                        />
                                                    </div>

                                                    <div className="m-auto md:flex md:justify-end md:w-full  md:m-0 w-[290px]">
                                                        <p className="md:mr-10 text-[#616161] text-[13px]">
                                                            Tu contraseña debe tener minimo 8 carácteres
                                                        </p>
                                                    </div>

                                                    <div className="flex flex-col items-center md:flex-row md:justify-between md: mt-5">

                                                        <p
                                                            className="text-[20px] md:ml-5  text-[#212121] lg:text-[1.5em]">Confirmar contraseña
                                                        </p>

                                                        <Input
                                                            type="password"
                                                        />

                                                    </div>

                                                    <div className="flex flex-col items-center md:flex-row md:justify-between md: mt-5">

                                                        <p className="text-[20px] md:ml-5  text-[#212121] lg:text-[1.5em]">Correo electrónico</p>

                                                        <input
                                                            className="h-[40px] w-[290px] rounded md:mr-5 bg-[#313131] text-white "
                                                            onChange={handleChange}
                                                            type="email"                                             
                                                            name="email"
                                                            id="email"
                                                        />

                                                    </div>

                                                    <div className="m-auto md:flex md:justify-end md:w-full  md:m-0 w-[290px]">
                                                        <p className="md:mr-[67px] text-[#616161] text-[13px]">
                                                            Tu correo electrónico servirá para verificar <br className="hidden md:block" />
                                                            tu cuenta.
                                                        </p>
                                                    </div>



                                                    <div className="md:ml-5  md:m-0 m-auto mt-5 md:w-[500px] w-[290px]">

                                                        <p className="font-semibold text-[17px]">
                                                            Me gustaría recibir actualizaciones por correo electrónico de The Pokémon
                                                            Company International con respecto a:
                                                        </p>
                                                    </div>

                                                    <div className="md:mt-5 mb-[50px] flex flex-col">

                                                        <div className="md:m-0 md:ml-5  m-auto mt-[20px] flex h-[40px] md:w-[500px] w-[290px]">

                                                            <input className="h-[30px] w-[30px] bg-[#313131]" type="checkbox" />

                                                            <p className="pl-[20px] text-[15px] text-[#616161]">Noticias e información sobre Pokémon</p>
                                                        </div>

                                                        <div className="md:m-0 md:ml-5  m-auto mt-[20px] flex h-[40px] md:w-[500px] w-[290px]">

                                                            <input className="h-[30px] w-[30px] bg-[#313131]" type="checkbox" />

                                                            <p className="pl-[20px] text-[15px] text-[#616161]">Eventos semanales</p>
                                                        </div>


                                                    </div>


                                                    <div className="md:m-0 md:w-full m-auto w-[290px]">

                                                        <p className="text-[#919191]">¿Deseas que tu perfil del Club de Entrenadores Pokémon sea público? Esto incluye contenido como tu apodo. La información personal (como tu nombre real) siempre se mantendrá en privado.</p>

                                                        <form className="flex justify-around mt-5">

                                                            <div className="">

                                                                <input type="radio" name="check" />

                                                                <label className="ml-3 text-[#919191]" htmlFor="">Si</label>

                                                            </div>

                                                            <div className="">

                                                                <input type="radio" name="check" />

                                                                <label className="ml-3 text-[#919191]" htmlFor="">No</label>

                                                            </div>

                                                        </form>


                                                        <div className="flex flex-col items-center md:flex-row md:justify-between md: mt-5">

                                                            <p className="text-[20px] md:ml-5 text-[#212121] lg:text-[1.5em]">Nombre en pantalla</p>

                                                            <Input />

                                                        </div>

                                                        <div className="md:flex md:mr-5 md:flex-col md:items-end">

                                                            <div className='flex justify-center lg:justify-end '>
                                                                <button className='h-[44px] mt-2  rounded-md text-white w-[290px] hover:bg-[#0c6a8f] font-semibold lg:text-[1.2em] bg-[#30a7d7]' type="submit">
                                                                    Comprobar disponibilidad
                                                                </button>
                                                            </div>
                                                        </div>


                                                    </div>

                                                </div>

                                                <div className="md:w-full md:ml-5 w-[290px] mb-5  m-auto">
                                                    <p>Para obtener más información, consulte nuestro <span className=" cursor-pointer  text-[#0000EE] hover:text-[#282876]">Aviso sobre la privacidad</span> </p>
                                                </div>



                                                <div className="md:w-full md:ml-5 md:items-start flex flex-col items-center w-full justify-center">

                                                    <p className=" text-center text-[20px]">Términos de uso del sitio web de Pokémon</p>

                                                    <p className="text-center text-[#616161]">Lee las condiciones de uso y haz clic en "Continuar" para aceptarlas.
                                                    </p>

                                                    <div className=" md:w-[550px] rounded-md w-[300px] h-[350px] bg-[#616161] scrollbar scrollbar-thumb-white">

                                                        <div className="pl-5  w-[100%]">
                                                            <span className="text-white flex mb-5"> Términos de uso</span>

                                                            <span className="text-white flex mb-5"> Última actualización: 3 de mayo de 2018</span>

                                                            <span className="text-white flex mb-5">POR FAVOR LEA ATENTAMENTE LOS SIGUIENTES TÉRMINOS DE USO ANTES DE UTILIZAR EL SERVICIO</span>

                                                            <span className="text-white flex mb-5">  1. ¿QUÉ SERVICIOS ESTÁN CUBIERTOS POR ESTOS TÉRMINOS? Estos términos de uso (los «Términos») cubren los siguientes productos y servicios (los «Servicios»), independientemente de la forma en las que se tenga acceso a ellos y/o se utilicen, realizados o bien, puestos a disposición por The Pokémon Company International, Inc. o sus subsidiarias («Pokémon», «nosotros» o «nuestro(a)»):
                                                            </span>

                                                            <span className="text-white flex mb-5">   (i) www.Pokemon.com;
                                                            </span>


                                                            <span className="text-white flex mb-5">  (ii) Sistema de cuentas de The Pokémon Trainer Club;
                                                            </span>

                                                            <span className="text-white flex mb-5">
                                                                (iii) Todas las aplicaciones publicadas por Pokémon, ya sea para tabletas, televisiones inteligentes, consolas para videojuegos, plataformas de redes sociales, dispositivos móviles y otras plataformas (las «Aplicaciones»), excepto que la aplicación indique algo diferente.
                                                            </span>

                                                            <span className="text-white flex mb-5">
                                                                (iv) Juego de Cartas Coleccionables Pokémon Online («JCC Pokémon Online»);
                                                            </span>

                                                            <span className="text-white flex mb-5">
                                                                (v) Todos los boletines informativos vía correo electrónico publicados o distribuidos por Pokémon; y
                                                            </span>

                                                            <span className="text-white flex mb-5">
                                                                (vi) Todas las demás funciones interactivas, servicios y comunicaciones proporcionados por Pokémon.
                                                            </span>

                                                            <span className="text-white flex mb-5">
                                                                2. EL PRESENTE CONTRATO SE CELEBRA ENTRE USTED Y THE POKÉMON COMPANY INTERNATIONAL, INC. Al acceder, descargar o utilizar el Servicio, usted acepta que ha leído, comprendido y está de acuerdo con estos Términos y cualquier código de conducta que pudiéramos proponer ocasionalmente. Al permitir a un menor de edad utilizar el Servicio, también está aceptando que el menor cumpla con los Términos. El Aviso sobre la Privacidad de Pokémon (www.pokemon.com/el/aviso-sobre-la-privacidad/) (el «Aviso sobre la Privacidad") explica la recopilación, uso, transmisión y divulgación de la información personal proporcionada por usted u obtenida de usted. Al aceptar cumplir con estos términos, también acepta que ha leído y comprendido la descripción sobre la recopilación, uso, transmisión y divulgación de su información o datos personales contenida en el Aviso sobre la Privacidad (con las respectivas modificaciones que se le realicen en cualquier momento). Por favor revise el Aviso sobre la Privacidad antes de utilizar el Servicio.
                                                            </span>

                                                            <span className="text-white flex mb-5">
                                                                Si no acepta estos Términos, no podrá acceder a nuestro Servicio o utilizarlo. Los Términos están sujetos a actualización o cambio en cualquier momento y el uso continuo del Servicio significa que acepta dichas modificaciones.
                                                            </span>
                                                            <span className="text-white flex mb-5">
                                                                3. PROPIEDAD INTELECTUAL, CONTENIDO DEL SERVICIO Y CONTRIBUCIONES DEL USUARIO. A menos que se indique lo contrario, todo el contenido relacionado con el Servicio, incluyendo artículos, ilustraciones, capturas de pantalla, gráficos, logos, descargas y otros archivos, es propiedad de Pokémon y está protegido por derechos de autor, marcas registradas y otras leyes de propiedad intelectual de los Estados Unidos de América e internacionales. Las marcas registradas y derechos de autor de los juegos y personajes de terceros son propiedad de las compañías que comercializan o cuentan con licencia sobre dichos productos. Debido a que recibimos miles de solicitudes al respecto, nuestra política es negar el uso de nuestras marcas registradas y derechos de autor. De conformidad con las limitaciones establecidas en la legislación aplicable, usted reconoce y acepta que no tiene derechos de propiedad u otros derechos sobre ningún contenido relacionado con el Servicio, incluyendo, de manera enunciativa mas no limitativa, contenido que usted haya creado o desarrollado, incluyendo «imágenes de entrenador», nombres de pantalla, puntajes de juegos, el contenido de chats y otros mensajes entregados a un Servicio o a nosotros directamente.
                                                            </span>

                                                            <span className="text-white flex mb-5">
                                                                Ninguna de las comunicaciones, retroalimentación solicitada y otros materiales entregados al Servicio (a través de correo electrónico u otro medio) se considerará confidencial ni de propiedad exclusiva. Al entregar material al Servicio y sujeto a las limitaciones establecidas en la legislación aplicable, usted renuncia a reclamar que el uso del material viola cualquiera de sus derechos, incluyendo derechos morales, derechos de privacidad, derechos de propiedad exclusiva, derechos de publicidad, derechos de reconocimiento por su material o ideas, o cualquier otro derecho, incluyendo el derecho a aprobar la forma en que se utilice dicho material. Además, usted nos otorga a nosotros o a cualquiera de nuestros sucesores y cesionarios una licencia internacional vitalicia y libre de regalías para utilizar, transmitir, copiar y exhibir la información y material entregados por cualquier medio conocido en el presente o diseñado en el futuro, y declara que cuenta con todos los derechos necesarios en dicha publicación. No se proporcionará ninguna contraprestación o remuneración adicional por ningún material o información (incluyendo, de manera enunciativa mas no limitativa, creativa, financiera, de negocios, comercial, etc.) que se entregue de cualquier forma. También es importante para el éxito de varios de nuestros Servicios que cualquier error o problema que descubra lo reporte de manera confidencial directamente al Servicio de Atención a Clientes de Pokémon, a fin de que podamos darle debida atención tan pronto como sea posible. Para saber cómo contactarnos, visite Pokémon Support.
                                                            </span>

                                                            <span className="text-white flex mb-5">
                                                                Cualquier opinión, consejo y otra información expresada por un tercero sobre el Servicio representa su propio punto de vista y no el de Pokémon, por lo que no debe confiar en ellos. Ni Pokémon ni ninguna de sus subsidiarias o respectivos representantes, directores, empleados, proveedores de información, licenciantes, licenciatarios, ejecutivos y/o subsidiarias son responsables o culpables de ninguna decisión tomada con base en dicha información.
                                                            </span>

                                                            <span className="text-white flex mb-5">
                                                                4. RECLAMACIONES POR VIOLACIÓN DE DERECHOS DE AUTOR. Si considera que una parte del Servicio viola sus derechos de autor y desea presentar una notificación de violación de derechos de autor con nosotros, por favor visite http://www.pokemon.com/us/copyright/ para consultar las instrucciones para presentarnos una notificación de este tipo.
                                                            </span>

                                                            <span className="text-white flex mb-5">
                                                                5. DERECHOS Y RESTRICCIONES DEL USUARIO. Estos Términos le autorizan, a título personal, a utilizar el contenido del Servicio puesto a su disposición únicamente para propósitos personales, domésticos no comerciales. Por ningún motivo usted puede:
                                                            </span>

                                                            <span className="text-white flex mb-5">
                                                                (i) Cambiar o quitar cualquier derecho de autor u otras notificaciones sobre derechos exclusivos del contenido relacionado con el Servicio.

                                                            </span>
                                                            <span className="text-white flex mb-5">
                                                                (ii) Modificar o crear derivados basados en el contenido.
                                                            </span>

                                                            <span className="text-white flex mb-5">
                                                                (iii) Utilizar o facilitar el uso de un programa de un tercero no autorizado (p. ej., bots, mods, hacks y scripts) para modificar o automatizar la operación del Servicio, ya sea para su beneficio o el de un tercero.
                                                            </span>

                                                            <span className="text-white flex mb-5">
                                                                (iv) Utilizar el contenido de cualquier forma: (a) sugerir una asociación con cualesquiera otros productos, servicios o marcas, (b) que pudiera causar confusión entre los clientes, (c) que denigre o desacredite a Pokémon, (d) que se considere una forma de explotación para propósitos comerciales o (e) que viole nuestros derechos de propiedad intelectual.
                                                            </span>

                                                            <span className="text-white flex mb-5">
                                                                (v) Descargar cantidades de contenido a una base datos por cualquier motivo.
                                                            </span>

                                                            <span className="text-white flex mb-5">
                                                                (vi) Corromper, desensamblar o practicar ingeniería inversa en cualquier parte de cualquier Servicio, o bien utilizar un Servicio para propósitos diferentes a los que hemos establecido junto con las operaciones del Servicio.
                                                            </span>

                                                            <span className="text-white flex mb-5">
                                                                (vii) Desarrollar productos o servicios similares funcionalmente hablando para cualquier Servicio.
                                                            </span>

                                                            <span className="text-white flex mb-5">
                                                                (viii) Utilizar cualquier Servicio en beneficio de un tercero o transferir su acceso a los Serv
                                                                icios a un tercero.
                                                            </span>

                                                            <span className="text-white flex mb-5">
                                                                (ix) Utilizar el Servicio o contenido para propósitos comerciales, incluyendo, de manera enunciativa mas no limitativa: (a) vender el acceso a todo o una parte del Servicio o (b) colocar publicidad, patrocinios o promociones en o dentro del Servicio o el contenido.
                                                            </span>

                                                            <span className="text-white flex mb-5">
                                                                (x) Evitar, obviar o deshabilitar cualquier protocolo o mecanismo de seguridad o de administración de derechos digitales en cualquier Servicio.
                                                            </span>

                                                            <span className="text-white flex mb-5">
                                                                (xi) Infiltrarse en cualquier sistema utilizado para operar el Servicio.
                                                            </span>

                                                            <span className="text-white flex mb-5">
                                                                (xii) Realizar cualquier acción para provocar o tomar ventaja de disfuncionalidades, errores de programación u otras anomalías en el Servicio o el sistema utilizado para operar el Servicio; o
                                                            </span>

                                                            <span className="text-white flex mb-5">
                                                                (xiii) Intentar obviar cualquier restricción en cualquier Servicio que se base en la edad, geografía u otra restricción que hayamos impuesto.
                                                            </span>

                                                            <span className="text-white flex mb-5">
                                                                Adicionalmente, deberá cumplir con todas la leyes y obligaciones legales aplicables, incluyendo las relacionadas con las siguientes áreas: derechos de autor, marcas registradas y otras leyes de propiedad intelectual, libelo, calumnia, difamación, difamación comercial, menosprecio de productos, acoso, invasión de la privacidad, agravio, obscenidad, indecencia y violación de derechos de autor o marcas registradas. La violación de derechos de autor puede dar lugar a acciones civiles y/o penales y sanciones.
                                                            </span>

                                                            <span className="text-white flex mb-5">
                                                                Usted reconoce y acepta que es el único responsable de la confidencialidad de su respectiva cuenta, así como del nombre de usuario y la contraseña que utiliza para el Servicio, incluyendo el hecho de no reutilizar las contraseñas que ya haya utilizado con el Servicio para cualquier otra cuenta Acepta que Pokémon no será responsable de ninguna pérdida que tenga lugar debido al uso no autorizado de sus cuentas de Pokémon.
                                                            </span>

                                                            <span className="text-white flex mb-5">
                                                                Sin perjuicio a las disposiciones contrarias incluidas en estos Términos, nosotros podremos, en cualquier momento, con o sin aviso previo, suspender o cancelar su acceso a todo o alguna parte del Servicio, así como negar cualquier uso presente o futuro del mismo en cualquier momento.
                                                            </span>

                                                            <span className="text-white flex mb-5">
                                                                6. NORMAS DE CONDUCTA Y CONVIVENCIA. Tiene prohibido publicar o transmitir al Servicio cualquier material que pudiera: (i) interferir con el uso que cualquier otro pudiera hacer del Servicio; (ii) considerarse de cualquier forma abusivo, ilegal, indecente, obsceno, ofensivo o intimidatorio; (iii) motivar a alguien a violar la ley; (iv) violar los derechos de autor u otros derechos de propiedad de cualquier otra persona; (v) interferir con la privacidad de cualquier otro usuario; (vi) contener un virus o cualquier otro componente dañino; o (vii) contener declaraciones o descripciones falsas o engañosas sobre el origen del material o la comunicación.
                                                            </span>

                                                            <span className="text-white flex mb-5">
                                                                Aunque es posible que en algún momento monitoreemos o revisemos los tableros de anuncios, las salas de chat, las discusiones en línea, las publicaciones, las transmisiones de información y cualquier otro contenido de los usuarios en relación con el Servicio, no tenemos la obligación de hacerlo, por lo que no asumimos ninguna responsabilidad derivada del contenido de cualquiera de dichas comunicaciones. Es posible que cambiemos, editemos o quitemos cualquier material o conversaciones de los usuarios que consideremos ilegales, indecentes, obscenos, ofensivos o que violen nuestras políticas de cualquier forma. Cooperaremos plenamente con cualquier autoridad policial u orden judicial que solicite o nos ordene revelar la identidad de la persona que haya publicado dichos materiales.
                                                            </span>

                                                            <span className="text-white flex mb-5">
                                                                7. CUENTAS DE PLAYER TRAINER CLUB. Para poder tener acceso a algunas de las funciones del Servicio, necesitará crear una cuenta de Pokémon Trainer Club («Cuenta PTC»). Si elije crear una Cuenta PTC (https://club.pokemon.com/el/club-de-entrenadores-pokemon/registro/), utilizar una Cuenta PTC para ingresar a otras partes del Servicio (como JCC Pokémon Online, Play! Pokémon o Pokémon Global Link) o autenticar su identidad en servicios operados por terceros (como Pokémon GO, foros de TCGO y el portal de atención al cliente de Pokémon), usted acepta:
                                                            </span>

                                                            <span className="text-white flex mb-5">
                                                                (i) Proporcionar información verídica, precisa, actualizada y completa sobre usted («Información de Perfil»).
                                                            </span>

                                                            <span className="text-white flex mb-5">
                                                                (ii) Mantener y actualizar inmediatamente su Información de Perfil para que sea precisa.
                                                            </span>

                                                            <span className="text-white flex mb-5">
                                                                (iii) Tener solo una Cuenta PTC.
                                                            </span>

                                                            <span className="text-white flex mb-5">
                                                                (iv) Nunca utilizar la Cuenta PTC de otra persona.
                                                            </span>

                                                            <span className="text-white flex mb-5">
                                                                (v) Asumir plena responsabilidad por la actividad de su cuenta y la seguridad de las credenciales de esta.
                                                            </span>

                                                            <span className="text-white flex mb-5">
                                                                Tenemos derecho a suspender o cancelar su cuenta, con o sin aviso, así como negar cualquier y todo uso presente o futuro del Servicio debido a la violación de los Términos, o si determinamos, a nuestra discreción, que la suspensión o cancelación es la mejor opción para lograr un ambiente justo, honesto y seguro para los usuarios del Servicio (incluyendo los participantes del programa Play! Pokémon, JCC Pokémon Online o cualquier otra parte del Servicio).
                                                            </span>

                                                            <span className="text-white flex mb-5">
                                                                Un aviso especial con respecto a los niños y la privacidad en línea Es posible que los padres quieran que los niños tengan acceso a este Servicio. Los niños pueden crear una Cuenta PTC utilizando el proceso ordinario solicitando su permiso cuando corresponda.
                                                            </span>

                                                            <span className="text-white flex mb-5">
                                                                8. CONCURSOS; SORTEOS. Este Servicio puede hacer referencia a concursos, sorteos o eventos similares (incluyendo, de manera enunciativa mas no limitativa, eventos del campeonato del programa Play! Pokémon) que ofrezcan premios o requieran que envíe material o información sobre usted. Cada concurso, sorteo o cualquier otro evento tiene sus propias reglas, que el usuario deberá leer y aceptar antes de poder participar.

                                                                9. PROGRAMA PLAY! POKÉMON. Debido a la popularidad de los productos de Pokémon, probablemente se lleven a cabo una gran cantidad de torneos en la vida real para el intercambio de tarjetas y videojuegos de Pokémon («Eventos de Play! Pokémon») alrededor del mundo en diferentes fechas. Aunque nosotros organizamos algunos eventos especiales y campeonatos, los Eventos de Play! Pokémon son organizados y operados por organizadores independientes como minoristas de juegos de tarjetas coleccionables. Aunque la mayor parte de los Eventos de Play! Pokémon no son dirigidos por nosotros, sí publicamos en el Servicio cierta información que recibimos al respecto de los organizadores independientes del Evento Play! Pokémon, la cual incluye las fechas, horarios y lugares de los eventos, así como los nombres y clasificación de los titulares de las cuentas PTC que seleccionaron en la configuración de Play! Pokémon la opción de que se envíe esta información al Servicio. La información que nos envían estos organizadores independientes de Eventos Play! Pokémon nos sirve para crear y publicar la clasificación de los jugadores con base en los resultados de los torneos. Pokémon hará lo posible para incluir información precisa y actualizada sobre el Servicio; sin embargo, Pokémon no hace ninguna declaración ni proporciona ninguna garantía de ningún tipo en relación con la precisión, moneda o plenitud de la información sobre el Servicio, incluyendo, de manera enunciativa mas no limitativa, los resultados de los torneos y la clasificación de los jugadores.

                                                                10. PRODUCTOS Y SERVICIOS DE TERCEROS. El Servicio puede contener enlaces a las páginas web, servicios y plataformas de terceros que no son de nuestra propiedad ni están controlados por nosotros. No nos hacemos responsables del contenido de los sitios operadas por terceros, incluyendo sitios operadas por distribuidores que se enlazan al Servicio con la autorización de Pokémon. Asimismo, no nos hacemos responsables de mantener ningún material al que se haga referencia en otro sitio y no proporcionamos garantías para ese sitio o este Servicio a este respecto. Adicionalmente, es posible que algunas características en el Servicio le pidan que registre cierta información, incluyendo el número de ID del juego, información de la cuenta de terceros (como información de cuenta de iTunes o Google Play) y/o que utilice el hardware/software de Nintendo™ o la Red de Nintendo para poder utilizar algunas funciones del Servicio. No nos hacemos responsables por la falla de dicho hardware, software o servicio, incluyendo cualquier daño a la información del juego o el puntaje en el mismo. Para mayor información sobre el hardware y software de Nintendo, por favor visite la página web de Nintendo en www.nintendo.com.

                                                                11. CONTENIDO VIRTUAL. Es posible que en varias ocasiones le permitamos utilizar dinero «real» para comprar Contenido Virtual. El «Contenido Virtual» es un término genérico para los productos y servicios gratuitos disponibles para los usuarios a través del uso de una tarjeta de código, o que se pueden comprar en el Servicio y se pueden utilizar en el mismo para acceder a algunas características, funciones y otro Contenido Virtual. El Contenido virtual incluye, de manera enunciativa mas no limitativa, productos virtuales como tarjetas coleccionables virtuales, fundas para grupos de cartas y monedas; así como tipo de cambio virtual en el Servicio como gemas, boletos y tokens de entrenador («Moneda Virtual»). Es posible que algunas funciones en los Servicios no estén disponibles si no son compradas. </span>

                                                            <span className="text-white flex mb-5">
                                                                Es posible que, en cualquier momento y a nuestra discreción, ofrezcamos la oportunidad al usuario de adquirir cierto Contenido Virtual gratuito, a un bajo costo o como contenido adicional cuando adquiera otro Contenido Virtual o contenido para la vida real como tarjetas coleccionables de Pokémon físicas. Usted podrá adquirir únicamente la cantidad de Contenido Virtual que nosotros autoricemos y en los momentos que lo permitamos, a nuestra discreción, y podrá sólo comprarlo para uso personal en el Servicio. La inclusión de cualquier Contenido Virtual en un momento determinado no implica ni garantiza que este estará disponible en cualquier o en todo momento. Todas las funciones, contenido y especificaciones del Contenido Virtual descrito o representado en el Servicio están sujetos a cambio en cualquier momento sin previo aviso.</span>


                                                            <span className="text-white flex mb-5">
                                                                El Contenido Virtual no tiene valor monetario y no puede reembolsarse en moneda de curso legal, servicios o productos de valor fuera de los Servicios. El Contenido Virtual obtenido a través del Servicio se le proporciona mediante una licencia personal, limitada, revocable, no sublicenciable e intransferible para utilizarse en el Servicio. Usted no cuenta con derechos patrimoniales, o derecho o título sobre o con respecto a ningún Contenido Virtual que aparezca o tenga su origen en el Servicio, y el Contenido Virtual no puede ser transferido o revendido de ninguna forma sin nuestro consentimiento explícito. En cualquier momento y a nuestra discreción podemos cancelar su acceso al Contenido Virtual.
                                                            </span>

                                                            <span className="text-white flex mb-5">
                                                                12. ADQUISICIÓN DE CONTENIDO VIRTUAL. En lo que se refiere a todos los cargos por cualquier Contenido Virtual vendido en relación con el Servicio, nosotros o el procesador de pagos que nos representa haremos el cobro a su tarjeta de crédito o método de pago alternativo. Los precios del Contenido Virtual mostrados no incluyen impuestos. Usted acepta pagar todas las tarifas e impuestos aplicables incurridos por usted o cualquiera que esté utilizando su cuenta. En caso de que el proveedor de su tarjeta de crédito o de su método de pago alternativo se niegue a pagarnos el monto cargado a su cuenta, tendremos derecho a eliminar de su cuenta el Contenido Virtual, o los productos o servicios adquiridos con dicho Contenido Virtual. Usted acepta no cancelar o revertir ningún cargo por dicho Contenido Virtual ni intentar defraudarnos de ninguna forma. En caso de que necesitemos interponer una demanda para cobrar los saldos vencidos, usted acepta reembolsarnos todos los gastos en los que incurramos para recuperar los pagos vencidos, incluyendo honorarios de abogados y otros gastos legales.
                                                            </span>

                                                            <span className="text-white flex mb-5">
                                                                TODAS LAS ADQUISICIONES DE CONTENIDO VIRTUAL SON NO RETORNABLES Y NO REEMBOLSABLES. Si usted canjea Moneda Virtual para comprar productos virtuales dentro del juego, pierde todo derecho legal a retractarse, ya que empezamos a prestar nuestros servicios con base en el canje que realizó de Moneda Virtual a Contenido Virtual. Si debido a algún problema con su cuenta o por cualquier otra razón usted pierde Contenido Virtual y nosotros podemos corroborar que en efecto contaba con él, haremos comercialmente todo lo posible para reemplazarlo.
                                                            </span>

                                                            <span className="text-white flex mb-5">
                                                                NO RECIBIRÁ DINERO NI NINGUNA OTRA REMUNERACIÓN POR CONTENIDO VIRTUAL NO UTILIZADO CUANDO SE CIERRE UNA CUENTA, YA SEA QUE EL CIERRE HAYA SIDO VOLUNTARIO O INVOLUNTARIO. Algunas jurisdicciones podrían proporcionarle derechos legales adicionales, incluyendo un Periodo de Gracia para retractarse de la compra. Nada de lo aquí contenido tiene la intención de limitar sus derechos de devolución o cancelación por la compra de Contenido Virtual conforme a la legislación local.
                                                            </span>

                                                            <span className="text-white flex mb-5">
                                                                13. INTERCAMBIO DE CONTENIDO VIRTUAL. Algunas partes del Servicio permiten al usuario intercambiar Contenido Virtual con otros usuarios. Usted reconoce que su decisión de celebrar cualquier intercambio de Contenido Virtual es a su discreción y bajo su propio riesgo. No investigamos a los socios de intercambio y no garantizamos que el intercambio será satisfactorio o que será un intercambio de valor justo entre las partes que lo lleven a cabo. Nos reservamos el derecho a determinar, a nuestra discreción, con o sin aviso, qué Contenido Virtual puede ser intercambiado entre los usuarios y cuándo. Los productos no intercambiables no pueden intercambiarse bajo ninguna circunstancia.
                                                            </span>

                                                            <span className="text-white flex mb-5">
                                                                En algunos casos, el Contenido Virtual intercambiado sólo podrá intercambiarse por productos similares (p. ej., una tarjeta poco común sólo podrá intercambiarse por otra tarjeta poco común). En ningún caso podrá intercambiar Contenido Virtual por dinero «real» o cualquier otro producto o servicio fuera del Servicio, o la promesa de proporcionar ciertos productos o servicios ya sea dentro o fuera del Servicio. Cualquier intento de hacer un intercambio fuera del Servicio, de intercambiar algún producto prohibido u ofrecer intercambiar productos cuando el intercambio depende de un evento (p. ej., el resultado de un partido de JCC Pokémon Online) puede dar lugar a la suspensión o cancelación de su Cuenta PTC.</span>

                                                            <span className="text-white flex mb-5">
                                                                14. ACTUALIZACIONES Y CAMBIOS AL SERVICIO En cualquier momento podemos emitir parches o actualizaciones para partes del Servicio, los cuales deberá instalar para poder seguir utilizándolas. Usted acepta recibir e instalar dichos parches y actualizaciones para poder continuar utilizando el Servicio. También acepta que es posible que todo o partes del Servicio sufran problemas con el servidor que provoquen que el Servicio no esté temporalmente disponible y que nosotros, a nuestra discreción y sin aviso, podremos cancelar todo o una parte de este. Usted acepta no presentar ningún recurso de ningún tipo contra nosotros, incluso si debido a esto usted pierde un partido, Contenido Virtual o ya no tiene acceso a todo o una parte del Servicio.</span>

                                                            <span className="text-white flex mb-5">
                                                                15. LIMITACIÓN DE RESPONSABILIDAD. EL SERVICIO Y TODO EL CONTENIDO INCLUIDO EN ÉL SE PROPORCIONA «TAL CUAL ES» SIN NINGUNA GARANTÍA DE NINGÚN TIPO EXPRESA O IMPLÍCITA, INCLUYENDO, DE MANERA ENUNCIATIVA MAS NO LIMITATIVA, GARANTÍAS DE TÍTULO DE PROPIEDAD O GARANTÍAS IMPLÍCITAS DE COMERCIABILIDAD O ADECUACIÓN PARA UN PROPÓSITO PARTICULAR. AL UTILIZAR EL SERVICIO, USTED RECONOCE QUE LO REALIZA BAJO SU PROPIO RIESGO, QUE ASUME PLENA RESPONSABILIDAD POR TODOS LOS COSTOS ASOCIADOS CON EL MANTENIMIENTO O REPARACIÓN DE CUALQUIER EQUIPO QUE EMPLEE PARA HACER USO DEL SERVICIO, Y QUE NI POKÉMON NI NINGUNA DE SUS SUBSIDIARIAS O SUS RESPECTIVOS REPRESENTANTES, DIRECTORES, EMPLEADOS, PROVEEDORES DE INFORMACIÓN, LICENCIANTES, LICENCIATARIOS, EJECUTIVOS Y/O SUBSIDIARIAS SERÁN RESPONSABLES DE NINGÚN DAÑO DE NINGÚN TIPO RELACIONADO CON LA UTILIZACIÓN DE ESTE SERVICIO.</span>


                                                            <span className="text-white flex mb-5">
                                                                BAJO NINGUNA CIRCUNSTANCIA, INCLUYENDO, DE MANERA ENUNCIATIVA MAS NO LIMITATIVA, NEGLIGENCIA POR PARTE DE POKÉMON, NI POKÉMON NI CUALQUIERA DE SUS SUBSIDIARIAS O SUS RESPECTIVOS REPRESENTANTES, DIRECTORES, EMPLEADOS, PROVEEDORES DE INFORMACIÓN, LICENCIANTES, LICENCIATARIOS, EJECUTIVOS Y/O SUBSIDIARIAS SERÁN RESPONSABLES POR DAÑOS Y PERJUICIOS DERIVADOS, DIRECTOS, INCIDENTALES, INDIRECTOS, PUNITIVOS O ESPECIALES RELACIONADOS CON (A) EL USO DE ESTE SERVICIO, (B) LA INCAPACIDAD DE UTILIZAR ESTE SERVICIO O (C) ERRORES U OMISIONES EN EL CONTENIDO Y LAS FUNCIONES DE ESTE SERVICIO, INCLUSO SI SE HA INFORMADO A POKÉMON O A UN REPRESENTATE AUTORIZADO DEL MISMO SOBRE DICHOS DAÑOS Y PERJUICIOS. ALGUNOS ESTADOS NO PERMITEN LA EXCLUSIÓN O LIMITACIÓN DE DAÑOS Y PERJUICIOS DERIVADOS O INCIDENTALES, ASÍ QUE EXISTE LA POSIBILIDAD DE QUE LA LIMITACIÓN O EXCLUSIÓN ANTERIOR NO APLIQUE PARA USTED. EN NINGÚN CASO LA RESPONSABILIDAD TOTAL DE POKÉMON Y SUS RESPECTIVOS REPRESENTANTES, DIRECTORES, EMPLEADOS, PROVEEDORES DE INFORMACIÓN, LICENCIANTES, LICENCIATARIOS, EJECUTIVOS Y/O SUBSIDIARIAS ANTE USTED POR TODOS LOS DAÑOS Y PERJUICIOS, PÉRDIDAS Y FUNDAMENTOS PARA DEMANDA (YA SEAN CONTRACTUALES O POR ACTOS ILÍCITOS CIVILES EXTRACONTRACTUALES) SERÁ SUPERIOR A $100.00.</span>

                                                            <span className="text-white flex mb-5">
                                                                USTED COMPRENDE QUE LAS LIMITACIONES DE GARANTÍA, ASÍ COMO DE RESPONSABILIDAD Y RECURSOS ANTES MENCIONADAS SON UNA CONDICIÓN PARA QUE LE PROPORCIONEMOS EL SERVICIO. SIN ELLAS, NO PODEMOS NI LE PROPORCIONAREMOS LOS SERVICIOS. Usted acepta que en caso de que descubramos que ha violado cualquier parte de estos Términos, podremos llevar a cabo cualquier acción que consideremos necesaria, incluyendo, de manera enunciativa mas no limitativa, la cancelación de su Cuenta PTC y su acceso a los Servicios. Usted reconoce que, si esto sucede, no recibirá ningún reembolso y otra remuneración por ningún producto que pudiera estar asociado a su cuenta al momento de la cancelación.</span>

                                                            <span className="text-white flex mb-5">
                                                                16. INDEMNIZACIÓN. Usted acepta indemnizar, defender y sacar en paz y a salvo a Pokémon y a sus subsidiarias y a sus respectivos representantes, directores, empleados, proveedores de información, licenciantes, licenciatarios, ejecutivos y/o subsidiarias (conjuntamente, las «Partes Indemnizadas») de y contra cualquier y toda responsabilidad y costo (incluyendo, de manera enunciativa mas no limitativa, honorarios y costos de abogados) en los que incurran las Partes Indemnizadas en relación con cualquier demanda que surja por incumplir usted con estos Términos o las declaraciones, garantías y convenios anteriores. Usted deberá cooperar tan plenamente como se requiera en la defensa de cualquier demanda. Pokémon se reserva el derecho, a costa propia, a asumir la defensa y control exclusivos de cualquier asunto de algún otro modo sujeto a indemnización por parte de usted y en ningún caso usted deberá llegar a un arreglo sobre ningún asunto sin el consentimiento por escrito de Pokémon.</span>

                                                            <span className="text-white flex mb-5">
                                                                17. DISPOSICIONES GENERALES. Estos Términos, nuestros Avisos de Privacidad y cualesquiera términos adicionales publicados en este Servicio, en su conjunto constituyen el acuerdo completo entre Pokémon y usted con respecto al uso de este Servicio. Cualquier fundamento para una demanda que pudiera tener en relación con su uso de este Servicio deberá interponerse en un plazo de 1 año después de que surja la demanda o el fundamento para esta. Si un tribunal competente considera que alguna de las disposiciones de estos Términos o parte de dicha disposición no se puede cumplir, esta deberá cumplirse conforme al alcance máximo permitido, a fin de que se cumpla la intención del presente contrato y el resto de los términos deberán continuar en pleno vigor y surtir efectos. Estos Términos se rigen y deberán interpretarse de conformidad con las leyes del estado de Washington, excluyendo cualquier conflicto con otras disposiciones legales, tal y como se aplica a contratos firmados por los residentes de Washington y que se cumplen únicamente dentro de ese estado. Asimismo, usted somete su persona a la jurisdicción del estado de Washington. Usted acepta de manera irrevocable someterse a la jurisdicción exclusiva de los tribunales estatales y locales del estado de Washington, EE. UU. para cualquier controversia que surja en relación con estos Servicios con respecto a cualquier demanda que usted interponga contra nosotros y tendrá una jurisdicción no exclusiva para cualquier demanda que nosotros interpongamos contra usted. Usted acepta recibir cualquier emplazamiento judicial vía correo postal en el estado en el que nos haya especificado que se encuentra su domicilio. POR MEDIO DEL PRESENTE, LAS PARTES RENUNCIAN A UN JUICIO CON JURADO. Usted acepta que esta disposición prevalecerá después de la terminación o expiración del presente Contrato.</span>


                                                        </div>

                                                    </div>


                                                    <div className="md:m-0 md:mt-5 md:ml-5 md:w-full m-auto mt-[20px] flex h-[40px] mb-7 w-[290px]">

                                                        <input className="md:h-[30px] h-[60px] w-[60px] bg-[#313131]" type="checkbox" />

                                                        <p className="pl-[20px] text-[15px] text-[#616161]">                Acepto las condiciones de uso de la cuenta del Club de Entrenadores Pokémon.
                                                        </p>

                                                    </div>

                                                    <div className="md:-m-0 md:ml-5 md:w-[450px] w-[300px] m-auto">

                                                        <p className="md:ml-5">Si decide continuar usando los Servicios, usted reconoce que ha leído, entendido y aceptado nuestras <span className=" cursor-pointer  text-[#0000EE] hover:text-[#282876]">Términos de uso</span></p>
                                                    </div>
                                                </div>

                                                <div className='flex md:justify-end md:mb-5 md:mr-10 justify-center lg:justify-end lg:pr-5'>
                                                    <button className='h-[44px] mt-10  rounded-md text-white w-[140px] hover:bg-[#329e42] font-semibold  bg-[#4dad5b]' type="submit">
                                                        Continuar
                                                    </button>
                                                </div>

                                                <div className='hidden lg:flex  md:mr-10 justify-center lg:justify-end lg:pr-5'>
                                                    <button className='h-[44px] mt-10  rounded-md text-white w-[100px] hover:bg-[#141313] font-semibold  bg-[#313131]' type="submit">
                                                        Imprimir
                                                    </button>
                                                </div>

                                            </form>


                                        </div>

                                        <div className="md:h-[1150px] lg:h-[900px] bg-gradient-to-b from-[#e6bc2f] to-[#ebc855] md:mb-5  lg:w-[200px] mt-5">

                                            <img className="  lg:h-[600px] hidden md:block " src="https://assets.pokemon.com/static2/_ui/img/account/pokemon-signup.png" alt="" />

                                        </div>
                                    </div>


                                </div>
                            </div>





                        </div>
                        <Sidebar />
                    </div>

                    <Footer />

                </div>

            </div>




        </div >
    )
}

export default BisRegisterPage2;