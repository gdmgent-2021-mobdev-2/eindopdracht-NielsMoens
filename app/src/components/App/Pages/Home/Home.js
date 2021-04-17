const Home = () => {
  return (
    <>
      <section id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2>About this page</h2>
              <p className="lead">
                This is a great place to talk about your webpage. This template
                is purposefully unstyled so you can use it as a boilerplate or
                starting point for you own landing page designs! This template
                features:
              </p>
              <ul>
                <li>Clickable nav links that smooth scroll to page sections</li>
                <li>
                  Responsive behavior when clicking nav links perfect for a one
                  page website
                </li>
                <li>
                  Bootstrap's scrollspy feature which highlights which section
                  of the page you're on in the navbar
                </li>
                <li>
                  Minimal custom CSS so you are free to explore your own unique
                  design options
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 className="display-4"> Our services </h1>
      </div>

      <div className="card-group text-center">
        <div className="col-sm-4 mb-4">
          <div className="card m-4">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Free</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                $0 <small className="text-muted">/ mo</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>10 users included</li>
                <li>2 GB of storage</li>
                <li>Email support</li>
                <li>Help center access</li>
              </ul>
              <button
                type="button"
                className="btn btn-lg btn-block btn-outline-primary"
              >
                Sign up for free
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-4 mb-4">
          <div className="card m-4">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Free</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                $0 <small className="text-muted">/ mo</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>10 users included</li>
                <li>2 GB of storage</li>
                <li>Email support</li>
                <li>Help center access</li>
              </ul>
              <button
                type="button"
                className="btn btn-lg btn-block btn-outline-primary"
              >
                Sign up for free
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-4 mb-4">
          <div className="card m-4">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Free</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                $0 <small className="text-muted">/ mo</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>10 users included</li>
                <li>2 GB of storage</li>
                <li>Email support</li>
                <li>Help center access</li>
              </ul>
              <button
                type="button"
                className="btn btn-lg btn-block btn-outline-primary"
              >
                Sign up for free
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
