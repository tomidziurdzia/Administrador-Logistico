import { Link } from "react-router-dom";

const NuevoPassword = () => {
  <>
    <h1 className="text-primary-blue font-black text-center text-2xl md:text-4xl">
      Reestablecer Contraseña
    </h1>
    <form className="my-5 bg-white shadow rounded-lg p-10">
      <div className="mt-8 my-5">
        <label
          className="text-gray-500 block text-xl font-bold"
          htmlFor="contraseña"
        >
          Contraseña
        </label>
        <input
          className="w-full mt-2 p-3 border rounded-xl"
          id="contraseña"
          type="password"
          placeholder="Ingresa tu contraseña"
        />
      </div>
      <div className="mt-8 my-5">
        <label
          className="text-gray-500 block text-xl font-bold"
          htmlFor="repetir-contraseña"
        >
          Repetir Contraseña
        </label>
        <input
          className="w-full mt-2 p-3 border rounded-xl"
          id="repetir-contraseña"
          type="password"
          placeholder="Repite tu contraseña"
        />
      </div>
      <input
        type="submit"
        value="Reestablecer Contraseña"
        className="bg-primary-blue text-white w-full py-3 font-bold rounded hover:cursor-pointer hover:bg-hover-button transition-colors"
      />
    </form>
    <nav className="lg:flex lg:justify-between">
      <Link className="block text-center my-5 text-gray-500 text-sm" to="/">
        ¿Ya tienes una cuenta? Inicia sesión
      </Link>
      <Link
        className="block text-center my-5 text-gray-500 text-sm"
        to="/olvide-password"
      >
        Olvide mi contraseña
      </Link>
    </nav>
  </>;
};

export default NuevoPassword;
