export default function Header() {
  return (
    <>
      <header className="py-5 header">
        <div className="container-xl">
          <div className="justify-content-md-between justify-content-center row">
            <div className="col-8 col-md-3">
              <a href="index.html">
                <img
                  className="img-fluid"
                  src="/img/logo.svg"
                  alt="imagen logo"
                />
              </a>
            </div>
            <nav className="d-flex align-items-start justify-content-end mt-5 col-md-6 a">
              <div className="carrito">
                <img
                  className="img-fluid"
                  src="/img/carrito.png"
                  alt="imagen carrito"
                />

                <div id="carrito" className="bg-white p-3">
                  <p className="text-center">El carrito esta vacio</p>
                  <table className="table w-100">
                    <thead>
                      <tr>
                        <th>Imagen</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <img
                            className="img-fluid"
                            src="/img/guitarra_02.jpg"
                            alt="imagen guitarra"
                          />
                        </td>
                        <td>SRV</td>
                        <td className="fw-bold">$299</td>
                        <td className="flex align-items-start gap-4">
                          <button type="button" className="btn btn-dark">
                            -
                          </button>
                          1
                          <button type="button" className="btn btn-dark">
                            +
                          </button>
                        </td>
                        <td>
                          <button className="btn btn-danger" type="button">
                            X
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <p className="text-end">
                    Total pagar: <span className="fw-bold">$899</span>
                  </p>
                  <button className="mt-3 p-2 w-100 btn btn-dark">
                    Vaciar Carrito
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
