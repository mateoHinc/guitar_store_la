export default function Guitar({ guitar, addToCart }) {
  const { id, name, image, description, price } = guitar;

  return (
    <>
      <div className="align-items-center my-4 col-md-6 col-lg-4 row">
        <div className="col-4">
          <img
            className="img-fluid"
            src={`/img/${image}.jpg`}
            alt="imagen guitarra"
          />
        </div>
        <div className="col-8">
          <h3 className="text-black text-uppercase fs-4 fw-bold">{name}</h3>
          <p>{description}</p>
          <p className="text-primary fw-black fs-3">${price}</p>
          <button
            type="button"
            className="w-100 btn btn-dark"
            onClick={() => addToCart(guitar)}
          >
            Agregar al Carrito
          </button>
        </div>
      </div>
    </>
  );
}
