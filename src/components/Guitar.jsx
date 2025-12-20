export default function Guitar() {
  return (
    <>
      <div className="align-items-center my-4 col-md-6 col-lg-4 row">
        <div className="col-4">
          <img
            className="img-fluid"
            src="/img/guitarra_01.jpg"
            alt="imagen guitarra"
          />
        </div>
        <div className="col-8">
          <h3 className="text-black text-uppercase fs-4 fw-bold">Lukather</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae
            labore odit magnam in autem nesciunt, amet deserunt
          </p>
          <p className="text-primary fw-black fs-3">$299</p>
          <button type="button" className="w-100 btn btn-dark">
            Agregar al Carrito
          </button>
        </div>
      </div>
    </>
  );
}
