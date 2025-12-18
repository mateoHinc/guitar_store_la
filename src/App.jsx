function App() {
  return (
    <>
      <header class="py-5 header">
        <div class="container-xl">
          <div class="justify-content-md-between justify-content-center row">
            <div class="col-8 col-md-3">
              <a href="index.html">
                <img class="img-fluid" src="/img/logo.svg" alt="imagen logo" />
              </a>
            </div>
            <nav class="d-flex align-items-start justify-content-end mt-5 col-md-6 a">
              <div class="carrito">
                <img
                  class="img-fluid"
                  src="/img/carrito.png"
                  alt="imagen carrito"
                />

                <div id="carrito" class="bg-white p-3">
                  <p class="text-center">El carrito esta vacio</p>
                  <table class="table w-100">
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
                            class="img-fluid"
                            src="/img/guitarra_02.jpg"
                            alt="imagen guitarra"
                          />
                        </td>
                        <td>SRV</td>
                        <td class="fw-bold">$299</td>
                        <td class="flex align-items-start gap-4">
                          <button type="button" class="btn btn-dark">
                            -
                          </button>
                          1
                          <button type="button" class="btn btn-dark">
                            +
                          </button>
                        </td>
                        <td>
                          <button class="btn btn-danger" type="button">
                            X
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <p class="text-end">
                    Total pagar: <span class="fw-bold">$899</span>
                  </p>
                  <button class="mt-3 p-2 w-100 btn btn-dark">
                    Vaciar Carrito
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <main class="mt-5 container-xl">
        <h2 class="text-center">Nuestra Colección</h2>

        <div class="mt-5 row">
          <div class="align-items-center my-4 col-md-6 col-lg-4 row">
            <div class="col-4">
              <img
                class="img-fluid"
                src="/img/guitarra_01.jpg"
                alt="imagen guitarra"
              />
            </div>
            <div class="col-8">
              <h3 class="text-black text-uppercase fs-4 fw-bold">Lukather</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
                quae labore odit magnam in autem nesciunt, amet deserunt
              </p>
              <p class="text-primary fw-black fs-3">$299</p>
              <button type="button" class="w-100 btn btn-dark">
                Agregar al Carrito
              </button>
            </div>
          </div>

          <div class="align-items-center my-4 col-md-6 col-lg-4 row">
            <div class="col-4">
              <img
                class="img-fluid"
                src="/img/guitarra_02.jpg"
                alt="imagen guitarra"
              />
            </div>
            <div class="col-8">
              <h3 class="text-black text-uppercase fs-4 fw-bold">SRV</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
                quae labore odit magnam in autem nesciunt, amet deserunt
              </p>
              <p class="text-primary fw-black fs-3">$299</p>
              <button type="button" class="w-100 btn btn-dark">
                Agregar al Carrito
              </button>
            </div>
          </div>

          <div class="align-items-center my-4 col-md-6 col-lg-4 row">
            <div class="col-4">
              <img
                class="img-fluid"
                src="/img/guitarra_03.jpg"
                alt="imagen guitarra"
              />
            </div>
            <div class="col-8">
              <h3 class="text-black text-uppercase fs-4 fw-bold">Borland</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
                quae labore odit magnam in autem nesciunt, amet deserunt
              </p>
              <p class="text-primary fw-black fs-3">$299</p>
              <button type="button" class="w-100 btn btn-dark">
                Agregar al Carrito
              </button>
            </div>
          </div>

          <div class="align-items-center my-4 col-md-6 col-lg-4 row">
            <div class="col-4">
              <img
                class="img-fluid"
                src="/img/guitarra_04.jpg"
                alt="imagen guitarra"
              />
            </div>
            <div class="col-8">
              <h3 class="text-black text-uppercase fs-4 fw-bold">Vai</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
                quae labore odit magnam in autem nesciunt, amet deserunt
              </p>
              <p class="text-primary fw-black fs-3">$299</p>
              <button type="button" class="w-100 btn btn-dark">
                Agregar al Carrito
              </button>
            </div>
          </div>

          <div class="align-items-center my-4 col-md-6 col-lg-4 row">
            <div class="col-4">
              <img
                class="img-fluid"
                src="/img/guitarra_05.jpg"
                alt="imagen guitarra"
              />
            </div>
            <div class="col-8">
              <h3 class="text-black text-uppercase fs-4 fw-bold">Thompson</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
                quae labore odit magnam in autem nesciunt, amet deserunt
              </p>
              <p class="text-primary fw-black fs-3">$299</p>
              <button type="button" class="w-100 btn btn-dark">
                Agregar al Carrito
              </button>
            </div>
          </div>

          <div class="align-items-center my-4 col-md-6 col-lg-4 row">
            <div class="col-4">
              <img
                class="img-fluid"
                src="/img/guitarra_06.jpg"
                alt="imagen guitarra"
              />
            </div>
            <div class="col-8">
              <h3 class="text-black text-uppercase fs-4 fw-bold">White</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
                quae labore odit magnam in autem nesciunt, amet deserunt
              </p>
              <p class="text-primary fw-black fs-3">$299</p>
              <button type="button" class="w-100 btn btn-dark">
                Agregar al Carrito
              </button>
            </div>
          </div>

          <div class="align-items-center my-4 col-md-6 col-lg-4 row">
            <div class="col-4">
              <img
                class="img-fluid"
                src="/img/guitarra_07.jpg"
                alt="imagen guitarra"
              />
            </div>
            <div class="col-8">
              <h3 class="text-black text-uppercase fs-4 fw-bold">Cobain</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
                quae labore odit magnam in autem nesciunt, amet deserunt
              </p>
              <p class="text-primary fw-black fs-3">$299</p>
              <button type="button" class="w-100 btn btn-dark">
                Agregar al Carrito
              </button>
            </div>
          </div>
          <div class="align-items-center my-4 col-md-6 col-lg-4 row">
            <div class="col-4">
              <img
                class="img-fluid"
                src="/img/guitarra_08.jpg"
                alt="imagen guitarra"
              />
            </div>
            <div class="col-8">
              <h3 class="text-black text-uppercase fs-4 fw-bold">Dale</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
                quae labore odit magnam in autem nesciunt, amet deserunt
              </p>
              <p class="text-primary fw-black fs-3">$299</p>
              <button type="button" class="w-100 btn btn-dark">
                Agregar al Carrito
              </button>
            </div>
          </div>
          <div class="align-items-center my-4 col-md-6 col-lg-4 row">
            <div class="col-4">
              <img
                class="img-fluid"
                src="/img/guitarra_09.jpg"
                alt="imagen guitarra"
              />
            </div>
            <div class="col-8">
              <h3 class="text-black text-uppercase fs-4 fw-bold">Krieger</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
                quae labore odit magnam in autem nesciunt, amet deserunt
              </p>
              <p class="text-primary fw-black fs-3">$299</p>
              <button type="button" class="w-100 btn btn-dark">
                Agregar al Carrito
              </button>
            </div>
          </div>
          <div class="align-items-center my-4 col-md-6 col-lg-4 row">
            <div class="col-4">
              <img
                class="img-fluid"
                src="/img/guitarra_10.jpg"
                alt="imagen guitarra"
              />
            </div>
            <div class="col-8">
              <h3 class="text-black text-uppercase fs-4 fw-bold">Campbell</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
                quae labore odit magnam in autem nesciunt, amet deserunt
              </p>
              <p class="text-primary fw-black fs-3">$299</p>
              <button type="button" class="w-100 btn btn-dark">
                Agregar al Carrito
              </button>
            </div>
          </div>
          <div class="align-items-center my-4 col-md-6 col-lg-4 row">
            <div class="col-4">
              <img
                class="img-fluid"
                src="/img/guitarra_11.jpg"
                alt="imagen guitarra"
              />
            </div>
            <div class="col-8">
              <h3 class="text-black text-uppercase fs-4 fw-bold">Reed</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
                quae labore odit magnam in autem nesciunt, amet deserunt
              </p>
              <p class="text-primary fw-black fs-3">$299</p>
              <button type="button" class="w-100 btn btn-dark">
                Agregar al Carrito
              </button>
            </div>
          </div>
          <div class="align-items-center my-4 col-md-6 col-lg-4 row">
            <div class="col-4">
              <img
                class="img-fluid"
                src="/img/guitarra_12.jpg"
                alt="imagen guitarra"
              />
            </div>
            <div class="col-8">
              <h3 class="text-black text-uppercase fs-4 fw-bold">Hazel</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
                quae labore odit magnam in autem nesciunt, amet deserunt
              </p>
              <p class="text-primary fw-black fs-3">$299</p>
              <button type="button" class="w-100 btn btn-dark">
                Agregar al Carrito
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer class="bg-dark mt-5 py-5">
        <div class="container-xl">
          <p class="m-md-0 mt-4 text-white text-center fs-4">
            GuitarLA - Todos los derechos Reservados
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
